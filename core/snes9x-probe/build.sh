#!/usr/bin/env bash
# Builds the headless Snes9x voice probe (public/snes9x-probe/snes9x-probe.{mjs,wasm}).
# Requires Emscripten (emcc/emmake on PATH) and git.
set -euo pipefail

HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT="$(cd "$HERE/../.." && pwd)"
VENDOR="$HERE/vendor/snes9x"
OUT="$ROOT/public/snes9x-probe"

# Same Snes9x revision the EmulatorJS 4.2.3 core is built from, so the probe hears what the player hears.
SNES9X_REPO="https://github.com/EmulatorJS/snes9x.git"
SNES9X_COMMIT="6ca2343e5f3b0acbea49ca958251e3a0af58a81d"

if [ ! -d "$VENDOR/.git" ]; then
    git clone --quiet "$SNES9X_REPO" "$VENDOR"
fi
git -C "$VENDOR" fetch --quiet origin "$SNES9X_COMMIT" 2>/dev/null || true
git -C "$VENDOR" checkout --quiet "$SNES9X_COMMIT"

emmake make -C "$VENDOR/libretro" platform=emscripten -j"$(getconf _NPROCESSORS_ONLN)"

# The libretro Makefile names its static archive *.bc; em++ only treats *.a as an archive.
cp "$VENDOR/libretro/snes9x_libretro_emscripten.bc" "$HERE/vendor/libsnes9x.a"

mkdir -p "$OUT"
em++ -O3 -std=c++11 -fno-exceptions -fno-rtti \
    -DRIGHTSHIFT_IS_SAR -D__LIBRETRO__ -DHAVE_STDINT_H \
    -I"$VENDOR" -I"$VENDOR/libretro" -I"$VENDOR/libretro/libretro-common/include" \
    -I"$VENDOR/apu" -I"$VENDOR/apu/bapu" \
    "$HERE/probe.cpp" "$HERE/vendor/libsnes9x.a" \
    -o "$OUT/snes9x-probe.mjs" \
    -sMODULARIZE=1 -sEXPORT_ES6=1 -sENVIRONMENT=web,worker,node \
    -sALLOW_MEMORY_GROWTH=1 -sINITIAL_MEMORY=67108864 \
    -sEXPORTED_FUNCTIONS=_probe_frame_bytes,_probe_load,_probe_run,_probe_save,_probe_restore,_probe_mute,_probe_audio_energy,_probe_video,_probe_screen,_probe_screen_width,_probe_screen_height,_malloc,_free \
    -sEXPORTED_RUNTIME_METHODS=HEAPU8,HEAPU16

cp "$VENDOR/LICENSE" "$OUT/SNES9X-LICENSE.txt"
ls -l "$OUT"
