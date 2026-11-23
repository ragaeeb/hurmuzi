// Headless Snes9x frontend that records the S-DSP voice state once per emulated frame.
//
// It links the unmodified Snes9x libretro core and reads the voices through accessors Snes9x
// already exposes (SPC_DSP::envx_value / reg_value). Video is skipped and audio is discarded, so a
// ROM can be scanned many times faster than real time.

#include <cstdint>
#include <cstdlib>
#include <cstring>

#include "libretro.h"

#include "snes9x.h"
#include "apu/apu.h"
#include "apu/bapu/snes/snes.hpp"

#ifdef __EMSCRIPTEN__
#include <emscripten.h>
#define PROBE_EXPORT extern "C" EMSCRIPTEN_KEEPALIVE
#else
#define PROBE_EXPORT extern "C"
#endif

namespace {

enum { VOICES = 8, VOICE_BYTES = 8, GLOBAL_BYTES = 8, FRAME_BYTES = VOICES * VOICE_BYTES + GLOBAL_BYTES };

uint16_t joypad_mask = 0;
bool initialised = false;
bool loaded = false;
uint8_t *saved_state = NULL;
size_t saved_size = 0;

int muted_voices = 0;

// Sum of squared output samples since the last probe_audio_energy() call.
double audio_energy = 0;

// Debug screenshot: only filled while probe_video(1) is in effect.
bool video_enabled = false;
uint16_t screen[512 * 478];
unsigned screen_width = 0;
unsigned screen_height = 0;

bool environment(unsigned cmd, void *data)
{
    switch (cmd)
    {
        case RETRO_ENVIRONMENT_GET_AUDIO_VIDEO_ENABLE:
            // bit 0 = video, bit 1 = audio. The DSP must run; the picture is never needed.
            *(int *) data = video_enabled ? 3 : 2;
            return true;
        case RETRO_ENVIRONMENT_GET_INPUT_BITMASKS:
        case RETRO_ENVIRONMENT_SET_PIXEL_FORMAT:
            return true;
        case RETRO_ENVIRONMENT_GET_VARIABLE_UPDATE:
            *(bool *) data = false;
            return true;
        default:
            // No core options, directories or logging: Snes9x falls back to its defaults.
            return false;
    }
}

void video_refresh(const void *data, unsigned width, unsigned height, size_t pitch)
{
    if (!video_enabled || !data || width > 512 || height > 478)
        return;
    for (unsigned y = 0; y < height; y++)
        memcpy(screen + y * width, (const uint8_t *) data + y * pitch, width * sizeof(uint16_t));
    screen_width = width;
    screen_height = height;
}
void audio_sample(int16_t left, int16_t right)
{
    audio_energy += (double) left * left + (double) right * right;
}

size_t audio_sample_batch(const int16_t *data, size_t frames)
{
    for (size_t i = 0; i < frames * 2; i++)
        audio_energy += (double) data[i] * data[i];
    return frames;
}
void input_poll() {}

int16_t input_state(unsigned port, unsigned device, unsigned, unsigned id)
{
    if (port != 0 || device != RETRO_DEVICE_JOYPAD)
        return 0;
    if (id == RETRO_DEVICE_ID_JOYPAD_MASK)
        return (int16_t) joypad_mask;
    return (joypad_mask >> id) & 1;
}

void write_frame(uint8_t *out)
{
    using SNES::SPC_DSP;
    SPC_DSP &dsp = SNES::dsp.spc_dsp;
    for (int voice = 0; voice < VOICES; voice++, out += VOICE_BYTES)
    {
        const int envelope = dsp.envx_value(voice); // 0..2047
        out[0] = envelope & 0xff;
        out[1] = (envelope >> 8) & 0xff;
        out[2] = dsp.reg_value(voice, SPC_DSP::v_outx);
        out[3] = dsp.reg_value(voice, SPC_DSP::v_srcn);
        out[4] = dsp.reg_value(voice, SPC_DSP::v_pitchl);
        out[5] = dsp.reg_value(voice, SPC_DSP::v_pitchh);
        out[6] = dsp.reg_value(voice, SPC_DSP::v_voll);
        out[7] = dsp.reg_value(voice, SPC_DSP::v_volr);
    }
    out[0] = dsp.read(SPC_DSP::r_kon);
    out[1] = dsp.read(SPC_DSP::r_koff);
    out[2] = dsp.read(SPC_DSP::r_flg);
    out[3] = dsp.read(SPC_DSP::r_endx);
    out[4] = dsp.read(SPC_DSP::r_mvoll);
    out[5] = dsp.read(SPC_DSP::r_mvolr);
    out[6] = dsp.read(SPC_DSP::r_non);
    out[7] = dsp.read(SPC_DSP::r_eon);
}

} // namespace

PROBE_EXPORT int probe_frame_bytes() { return FRAME_BYTES; }

// Loads a ROM image (copier headers are stripped by Snes9x). Returns 1 on success.
PROBE_EXPORT int probe_load(const uint8_t *rom, uint32_t size)
{
    if (!initialised)
    {
        retro_set_environment(environment);
        retro_set_video_refresh(video_refresh);
        retro_set_audio_sample(audio_sample);
        retro_set_audio_sample_batch(audio_sample_batch);
        retro_set_input_poll(input_poll);
        retro_set_input_state(input_state);
        retro_init();
        initialised = true;
    }
    if (loaded)
    {
        retro_unload_game();
        loaded = false;
    }

    retro_game_info info;
    memset(&info, 0, sizeof(info));
    info.path = "game.sfc";
    info.data = rom;
    info.size = size;
    loaded = retro_load_game(&info);
    joypad_mask = 0;
    muted_voices = 0;
    audio_energy = 0;
    return loaded ? 1 : 0;
}

// Runs `frames` frames holding `joypad` (libretro RETRO_DEVICE_ID_JOYPAD_* bitmask) on port 1 and
// writes one FRAME_BYTES record per frame to `out`. Returns the number of frames written.
PROBE_EXPORT int probe_run(int frames, int joypad, uint8_t *out)
{
    if (!loaded)
        return 0;
    joypad_mask = (uint16_t) joypad;
    for (int frame = 0; frame < frames; frame++, out += FRAME_BYTES)
    {
        retro_run();
        write_frame(out);
    }
    return frames;
}

// Snapshots the whole machine so a moment can be replayed with different input. Returns 1 on success.
PROBE_EXPORT int probe_save()
{
    if (!loaded)
        return 0;
    const size_t size = retro_serialize_size();
    if (size != saved_size)
    {
        free(saved_state);
        saved_state = (uint8_t *) malloc(size);
        saved_size = saved_state ? size : 0;
    }
    return saved_state && retro_serialize(saved_state, saved_size) ? 1 : 0;
}

// Rewinds to the last probe_save(). Returns 1 on success.
PROBE_EXPORT int probe_restore()
{
    if (!loaded || !saved_state)
        return 0;
    if (!retro_unserialize(saved_state, saved_size))
        return 0;
    S9xSetSoundControl(muted_voices ^ 0xff);
    return 1;
}

// Harness only: gates voices out of the mix exactly like the snes9x_sndchan_N core options
// (bit N set = voice N+1 muted). Emulation and the recorded voice state are unaffected.
PROBE_EXPORT void probe_mute(int voices)
{
    muted_voices = voices & 0xff;
    S9xSetSoundControl(muted_voices ^ 0xff);
}

// Harness only: energy of the audio output since the previous call.
PROBE_EXPORT double probe_audio_energy()
{
    const double energy = audio_energy;
    audio_energy = 0;
    return energy;
}

// Debug only: render frames (slow) so the last one can be read back as RGB565.
PROBE_EXPORT void probe_video(int enable) { video_enabled = enable != 0; }
PROBE_EXPORT const uint16_t *probe_screen() { return screen; }
PROBE_EXPORT int probe_screen_width() { return (int) screen_width; }
PROBE_EXPORT int probe_screen_height() { return (int) screen_height; }
