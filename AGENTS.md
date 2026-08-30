# Agent Development Guide

This document provides guidance for AI agents and developers working on the Hurmuzi SNES emulator project.

## Project Overview

Hurmuzi is a Next.js 16 web application that embeds EmulatorJS to provide SNES emulation with advanced sound channel control and intelligent music channel detection. The key feature is granular control over the SNES SPC700's 8 audio channels.

## Architecture

### Tech Stack
- **Framework**: Next.js 16 (App Router)
- **React**: 19.2.0 with React Compiler enabled
- **TypeScript**: Latest (ESNext target)
- **Styling**: Tailwind CSS 4
- **Fonts**: Geist Sans & Geist Mono
- **Testing**: Bun test runner
- **Linting/Formatting**: Biome
- **Deployment**: Vercel

### Directory Structure

```
src/
├── app/                          # Next.js App Router
│   ├── components/               # React components
│   │   ├── ChannelButton.tsx     # Channel toggle button with tactile & LED effects
│   │   ├── GameEmulator.tsx     # Emulator iframe management
│   │   ├── SoundChannelMixer.tsx # 8-channel audio mixer & music detection UI
│   │   └── footer.tsx           # Full-width footer component
│   ├── list/                    # ROM library browser
│   │   └── page.tsx             # Virtualized GitHub repository browser
│   ├── play/                    # Game player page
│   │   └── page.tsx             # Full-width emulator workspace & controls
│   ├── page.tsx                 # Segmented compact ROM loader
│   ├── layout.tsx               # Root layout with Geist typography
│   └── globals.css              # Global styles & button/equalizer animations
├── lib/                          # Business logic
│   ├── emulator/
│   │   ├── types.ts             # Shared type definitions
│   │   ├── utils.ts             # Core parsing & ROM format validation
│   │   ├── channelState.ts      # Channel muting & solo state management
│   │   ├── musicDetection.ts    # SPC700 voice envelope & activity analysis
│   │   └── __tests__/           # Unit tests
│   └── storage/
│       ├── channelStates.ts     # localStorage operations for audio preferences
│       ├── roms.ts              # OPFS & cached ROM management
│       └── __tests__/           # Unit tests
└── hooks/
    ├── useChannelMixer.ts       # Audio channel state management hook
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

Hurmuzi includes zero-reload music vs SFX voice classification:

1. **Sampling**: Periodically reads Snes9x DSP memory registers to inspect envelope heights and voice activity over 2–10 seconds.
2. **Analysis**: Sustained high-activity voices are tagged as likely music channels, while bursty or inactive voices are categorized as SFX.
3. **UI Integration**: Highlights likely music channels with badges and animated equalizers.

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

1. Create component in `src/app/components/`
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

- Clear `.next` directory: `rm -rf .next`
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
- localStorage only for channel preferences

## Contributing

1. Fork repository
2. Create feature branch
3. Write tests for new logic
4. Update types if needed
5. Run linter and tests
6. Submit PR with clear description

## Additional Resources

- [Next.js App Router Docs](https://nextjs.org/docs/app)
- [EmulatorJS Documentation](https://emulatorjs.org)
- [Bun Test Runner](https://bun.sh/docs/cli/test)
- [Tailwind CSS v4](https://tailwindcss.com/docs)

---

For questions or issues, open a GitHub issue at https://github.com/ragaeeb/hurmuzi
