# Agent Development Guide

This document provides guidance for AI agents and developers working on the Hurmuzi SNES emulator project.

## Project Overview

Hurmuzi is a client-side React single-page app (Vite) that embeds EmulatorJS to provide SNES emulation with advanced sound channel control and intelligent music channel detection. The key feature is granular control over the SNES SPC700's 8 audio channels.

## Architecture

### Tech Stack
- **Build**: Vite 8, React Router (client-side routes `/`, `/list`, `/play`)
- **React**: 19.2.0 with React Compiler enabled
- **TypeScript**: Latest (ESNext target)
- **Styling**: Tailwind CSS 4
- **Fonts**: Geist Sans & Geist Mono (`@fontsource-variable`)
- **Testing**: Bun test runner
- **Linting/Formatting**: Biome
- **Deployment**: Cloudflare Workers static assets at snes.al-iyaal.club (`cloudflare.config.ts`, `bun run deploy`)

### Directory Structure

```
src/
├── main.tsx                      # Entry: router, routes & footer
├── index.css                     # Global styles & button/equalizer animations
├── components/                   # React components
│   ├── ChannelButton.tsx         # Channel toggle button with tactile & LED effects
│   ├── GameEmulator.tsx          # Emulator iframe management
│   ├── MusicScanPanel.tsx        # Music scan progress, verdicts & "Mute music channels"
│   ├── SoundChannelMixer.tsx     # 8-channel audio mixer
│   └── footer.tsx                # Full-width footer component
├── pages/
│   ├── HomePage.tsx              # Segmented compact ROM loader
│   ├── ListPage.tsx              # Virtualized GitHub repository browser
│   └── PlayPage.tsx              # Full-width emulator workspace & controls
├── lib/                          # Business logic
│   ├── emulator/
│   │   ├── types.ts             # Shared type definitions
│   │   ├── utils.ts             # Core parsing & ROM format validation
│   │   ├── channelState.ts      # Channel muting & solo state management
│   │   ├── musicScan.ts         # Deterministic music/effects channel scan
│   │   ├── musicScanWorker.ts   # Web Worker entry point for the scan
│   │   ├── voiceProbe.ts        # Wrapper around the headless Snes9x voice probe
│   │   └── __tests__/           # Unit tests
│   └── storage/
│       ├── channelStates.ts     # localStorage operations for audio preferences
│       ├── musicScans.ts        # localStorage music scan results (per ROM)
│       ├── roms.ts              # OPFS & cached ROM management
│       └── __tests__/           # Unit tests
└── hooks/
    ├── useChannelMixer.ts       # Audio channel state management hook
    ├── useMusicScan.ts          # Runs or recalls the music scan for a ROM
    └── useEmulatorSetup.ts      # Emulator initialization & iframe lifecycle
```

## Key Concepts

### EmulatorJS Integration

The emulator runs in an isolated iframe for security and state management:

1. **Iframe Lifecycle**: The iframe is destroyed and recreated on reload to reset emulator state
2. **Window Communication**: Parent window configures `EJS_*` variables on the iframe's window object
3. **State Management**: Game state is extracted before reload and restored after

### Sound Channel Architecture

SNES has 8 audio channels (`snes9x_sndchan_1` through `snes9x_sndchan_8`):

- **Muting**: Works immediately via `menuOptionChanged()` or `setVariable()`
- **Unmuting**: Requires full emulator reload due to EmulatorJS core limitation
- **Persistence**: Channel states saved to localStorage per ROM file

### Music Detection System

Which channels carry music is worked out by a deterministic scan, not by listening to the game the user is playing:

1. **Probe**: `core/snes9x-probe/` is a headless build of the unmodified Snes9x core (prebuilt in `public/snes9x-probe/`). It runs a ROM with no picture or audio output, about 60x faster than real time, and reports the state of the eight DSP voices every frame.
2. **Script**: `lib/emulator/musicScan.ts` runs the ROM from power-on with a fixed input script: wait for the first sound, tap Start to get past the title and menus, then keep going with an occasional Start tap. The same ROM always gives the same result.
3. **Evidence**: every two seconds the scan replays one second of the game several times, each with a different button held, and compares that with the same second left alone. A voice that sounds the same either way is music; a voice that changes when a button is pressed is playing sound effects.
4. **Verdict**: each channel is `music`, `effects`, `shared` (music that effects cut in on) or `unused`. The mixer offers to mute the `music` channels; `shared` ones are left on so effects are not lost.
5. **Where it runs**: in a Web Worker (`useMusicScan`), started when a ROM loads. Results are cached per ROM in localStorage and invalidated by bumping `MUSIC_SCAN_VERSION`.

It is a best-effort guess: the script only reaches the first minutes of a game, and games that share every channel between music and effects have nothing safe to mute.

`bun run scan <rom>` runs the same scan from the command line, prints the evidence per channel, and measures on the real audio output how much unprompted sound the suggested mute removes and how much button-press sound it keeps (`--timeline`, `--screens=<dir>` and `--mute=1,2` help when a verdict looks wrong). Snes9x is licensed for non-commercial use only; see `core/snes9x-probe/README.md`.

### State Management Pattern

```
UI State (what user wants) → Effective State (what's actually playing)
```

- Muting: UI → Effective (immediate)
- Unmuting: UI ≠ Effective until reload (shows pending indicator)

### Design & Visual Polish Conventions

1. **Compact & Full-Width**: Layouts adapt to wide screens with maximum space efficiency.
2. **Typography**: Clean Geist Sans for primary UI, Geist Mono for badges and `<kbd>` shortcuts.
3. **Button Eyecandy**:
   - Animated light sheen (`animate-shimmer`)
   - Tactile press feedback (`active:scale-[0.98]`)
   - Halo LED indicators & glowing borders on hover (`shadow-[0_0_15px_rgba(...)]`)
   - Equalizer animation bars on active playing channels

### ROM Library Browser

The `/list` page allows users to browse ROMs from GitHub repositories with virtual scrolling (3000+ items at 60fps).

## Development Conventions

### Code Organization

1. **Business Logic → lib/**: Pure functions that don't depend on React or DOM
2. **React Logic → components/**: UI components and React-specific logic
3. **Reusable React Logic → hooks/**: Custom hooks
4. **Types → lib/*/types.ts**: Shared TypeScript interfaces

### Testing Strategy

- **Test**: Pure utility functions in `lib/`
- **Don't Test**: React components, DOM interactions, hooks
- **Convention**: `it('should...')` test descriptions
- **Location**: Adjacent `*.test.ts` files in `lib/`

### File Naming

- Components: PascalCase (e.g., `GameEmulator.tsx`)
- Utilities: camelCase (e.g., `channelState.ts`)
- Tests: `*.test.ts` in `__tests__/` directories
- Hooks: `use*` prefix (e.g., `useEmulatorSetup.ts`)

### Import Conventions

```typescript
// Use path aliases
import { CoreOption } from "@/lib/emulator/types";
import { parseCoreOptions } from "@/lib/emulator/utils";

// Group imports
// 1. External libraries
// 2. Internal modules (@/)
// 3. Relative imports
```

## Common Development Tasks

### Adding a New Utility Function

1. Add function to appropriate `lib/` module
2. Export from module
3. Create test file in `__tests__/`
4. Add comprehensive tests using `bun test`

Example:
```typescript
// lib/emulator/utils.ts
export function newFunction(input: string): boolean {
  // implementation
}

// lib/emulator/__tests__/utils.test.ts
import { describe, it, expect } from "bun:test";
import { newFunction } from "../utils";

describe("newFunction", () => {
  it("should return true for valid input", () => {
    expect(newFunction("valid")).toBe(true);
  });
});
```

### Adding a New Component

1. Create component in `src/components/`
2. Extract any business logic to `lib/`
3. Use existing utilities from `lib/`
4. Keep component focused on UI/interaction

### Modifying Channel Logic

Channel state logic is centralized in `lib/emulator/channelState.ts`. Common operations:

- `needsReload()`: Check if unmuting requires reload
- `createPendingSettings()`: Build settings for reload
- `updateEffectiveStateOnMute()`: Handle immediate muting

### Working with localStorage

Use functions from `lib/storage/channelStates.ts`:

```typescript
import { getSavedChannelStates, saveChannelStates } from "@/lib/storage/channelStates";

// Load
const states = getSavedChannelStates(romName);

// Save
saveChannelStates(romName, channelStates);
```

## Testing

```bash
# All tests
bun test

# Watch mode
bun test --watch

# Specific test file
bun test src/lib/emulator/channelState.test.ts
```

## Build & Quality Commands

```bash
bun dev          # Start dev server
bun run lint     # Run Biome checks
bun run format   # Format with Biome
bun test         # Run test suite
bun run build    # Production build
bun run deploy   # Build and deploy to Cloudflare
```

## Troubleshooting

### Emulator Not Loading

Check:
1. ROM file is valid SNES format (.smc, .sfc, etc.)
2. Browser console for errors
3. Iframe sandbox attributes
4. EmulatorJS CDN availability

### Channel Muting Not Working

- **Muting fails**: Check if game is started (`gameStarted` state)
- **Unmuting fails**: This requires reload - check if reload button appears
- **State not persisting**: Check localStorage and ROM name consistency

### Build Errors

- Clear build output: `rm -rf dist .cloudflare`
- Clear node_modules: `rm -rf node_modules && bun install`
- Check TypeScript errors: `bun run build`

## Performance Considerations

1. **Iframe Destruction**: Properly cleanup blob URLs when unmounting
2. **State Management**: Use refs for emulator instance access (avoid re-renders)
3. **Channel State**: Debounce localStorage writes (500ms)
4. **React Compiler**: Enabled - avoid manual memoization unless necessary

## Security

- ROMs processed locally (never uploaded)
- Iframe sandbox: `allow-scripts allow-same-origin allow-pointer-lock`
- No external data collection
- localStorage only for channel preferences and music scan results

## Contributing

1. Fork repository
2. Create feature branch
3. Write tests for new logic
4. Update types if needed
5. Run linter and tests
6. Submit PR with clear description

## Additional Resources

- [Vite Docs](https://vite.dev)
- [Cloudflare Workers static assets](https://developers.cloudflare.com/workers/static-assets/)
- [EmulatorJS Documentation](https://emulatorjs.org)
- [Bun Test Runner](https://bun.sh/docs/cli/test)
- [Tailwind CSS v4](https://tailwindcss.com/docs)

---

For questions or issues, open a GitHub issue at https://github.com/ragaeeb/hurmuzi
