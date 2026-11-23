# Snes9x voice probe

A headless build of Snes9x used by the music-channel scan. It runs a ROM with no picture and no audio
output and reports, once per emulated frame, what each of the eight S-DSP voices is doing. A two-minute
stretch of a game takes about two seconds.

The app loads the prebuilt module from `public/snes9x-probe/` in a Web Worker
(`src/lib/emulator/musicScanWorker.ts`); `scripts/scan-rom.ts` loads the same files under Bun.

## What is in here

- `probe.cpp` — a small libretro frontend. It links the **unmodified** Snes9x libretro core and reads
  the voices through accessors Snes9x already has (`SPC_DSP::envx_value`, `SPC_DSP::reg_value`). No
  Snes9x source file is patched.
- `build.sh` — fetches the pinned Snes9x revision into `vendor/` (git-ignored) and builds
  `public/snes9x-probe/snes9x-probe.{mjs,wasm}`.

The pinned revision is the one the EmulatorJS 4.2.3 Snes9x core is built from, so the probe hears the
same thing the player does.

## Building

Requires Emscripten (`brew install emscripten`) and git.

```bash
bun run probe:build
```

The build output is checked in, so this is only needed after changing `probe.cpp` or the pinned revision.

## Exported functions

| Function | Purpose |
| --- | --- |
| `probe_load(rom, size)` | Loads a ROM image (copier headers are fine). |
| `probe_run(frames, joypad, out)` | Runs frames with a joypad bitmask held and writes one 72-byte record per frame. |
| `probe_save()` / `probe_restore()` | Snapshot and rewind, to replay a moment with different input. |
| `probe_mute(voices)` / `probe_audio_energy()` | Harness only: gate voices out of the mix and measure the output. |
| `probe_video(on)` / `probe_screen*()` | Debugging only: render a frame and read it back. |

Each frame record is eight 8-byte voice records (envelope 0–2047 as two bytes, current output, sample
number, pitch as two bytes, left and right volume) followed by eight global DSP registers (KON, KOFF,
FLG, ENDX, MVOLL, MVOLR, NON, EON).

## Licence

Snes9x is **not** MIT-licensed. It may be used, copied, modified and distributed in source and binary
form for **non-commercial purposes only**, and its licence and copyright notice must accompany every
copy and derived work. `public/snes9x-probe/snes9x-probe.wasm` is such a derived work, which is why
`public/snes9x-probe/SNES9X-LICENSE.txt` ships next to it. Hurmuzi's MIT licence covers Hurmuzi's own
code (including `probe.cpp`), not the Snes9x code compiled into the probe.
