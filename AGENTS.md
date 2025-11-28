# Agent Development Guide

This document provides guidance for AI agents and developers working on the Hurmuzi SNES emulator project.

## Project Overview

Hurmuzi is a Next.js 16 web application that embeds EmulatorJS to provide SNES emulation with advanced sound channel control. The key feature is granular control over the SNES SPC700's 8 audio channels.

## Architecture

### Tech Stack
- **Framework**: Next.js 16 (App Router)
- **React**: 19.2.0 with React Compiler enabled
- **TypeScript**: Latest (ESNext target)
- **Styling**: Tailwind CSS 4.1
- **Testing**: Bun test runner
- **Linting/Formatting**: Biome
- **Deployment**: Vercel

### Directory Structure

```
src/
├── app/                          # Next.js App Router
│   ├── components/               # React components
│   │   ├── GameEmulator.tsx     # Emulator iframe management
│   │   ├── SoundChannelMixer.tsx # Audio channel UI
│   │   └── footer.tsx           # Unified footer component
│   ├── list/                    # ROM library browser
│   │   └── page.tsx             # Browse ROMs from GitHub repos
│   ├── play/                    # Game player page
│   │   └── page.tsx             # Emulator with controls
│   ├── page.tsx                 # Home page (client component)
│   ├── layout.tsx               # Root layout with footer
│   └── globals.css              # Global styles
├── lib/                          # Business logic
│   ├── emulator/
│   │   ├── types.ts             # Shared type definitions
│   │   ├── utils.ts             # Core parsing & validation
│   │   ├── channelState.ts      # Channel state management
│   │   └── __tests__/           # Unit tests
│   └── storage/
│       ├── channelStates.ts     # localStorage operations
│       └── __tests__/           # Unit tests
└── hooks/
    └── useEmulatorSetup.ts      # Emulator initialization logic
```

## Key Concepts

### EmulatorJS Integration

The emulator runs in an isolated iframe for security and state management:

1. **Iframe Lifecycle**: The iframe is destroyed and recreated on reload to reset emulator state
2. **Window Communication**: Parent window configures `EJS_*` variables on the iframe's window object
3. **State Management**: Game state is extracted before reload and restored after

### Sound Channel Architecture

SNES has 8 audio channels (snes9x_sndchan_1 through snes9x_sndchan_8):

- **Muting**: Works immediately via `menuOptionChanged()` or `setVariable()`
- **Unmuting**: Requires full emulator reload due to EmulatorJS limitation
- **Persistence**: Channel states saved to localStorage per ROM file

### State Management Pattern

```
UI State (what user wants) → Effective State (what's actually playing)
```

- Muting: UI → Effective (immediate)
- Unmuting: UI ≠ Effective until reload (shows pending indicator)

### ROM Library Browser

The `/list` page allows users to browse ROMs from GitHub repositories:

#### GitHub API Integration

```typescript
// Fetch repository tree
const apiUrl = `https://api.github.com/repos/${owner}/${repo}/git/trees/master?recursive=1`;
const response = await fetch(apiUrl);
const data: GitHubTreeResponse = await response.json();

// Filter for compatible ROMs
const compatibleRoms = data.tree.filter(
    (item) => item.type === 'blob' && isValidRomFile(item.path)
);
```

#### Virtual Scrolling Implementation

For handling 3000+ ROMs efficiently:

```typescript
// Constants
const ITEM_HEIGHT = 60; // Fixed height per item
const VIEWPORT_BUFFER = 5; // Extra items to render

// Calculate visible range
const startIndex = Math.max(0, Math.floor(scrollTop / ITEM_HEIGHT) - VIEWPORT_BUFFER);
const endIndex = Math.min(
    totalItems - 1,
    Math.ceil((scrollTop + viewportHeight) / ITEM_HEIGHT) + VIEWPORT_BUFFER
);

// Only render visible items
const visibleRoms = allRoms.slice(startIndex, endIndex + 1);
```

#### Performance Patterns

1. **Uncontrolled Form Input**: Search uses form submission instead of `onChange` to avoid re-renders
2. **useMemo**: Memoize visible ROM calculations
3. **Fixed Heights**: All list items have identical height for predictable scrolling
4. **Transform Offset**: Use `translateY()` for smooth virtual positioning

### Footer Component

Unified footer component used across all pages:

- Located at `src/app/components/footer.tsx`
- Added to `layout.tsx` for global availability
- Displays author info, version, GitHub link, and EmulatorJS attribution
- Reads package.json for dynamic version and author info
- Styled with retro gaming aesthetic matching the app

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
- **Location**: `__tests__/` folders adjacent to source files

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

### Running Tests

```bash
# All tests
bun test

# Watch mode
bun test --watch

# Specific file
bun test src/lib/emulator/__tests__/utils.test.ts
```

### Writing Tests

Follow this pattern:

```typescript
import { describe, it, expect } from "bun:test";

describe("FunctionName", () => {
  it("should handle normal case", () => {
    expect(functionName(input)).toBe(expected);
  });

  it("should handle edge case", () => {
    expect(functionName(edgeInput)).toBe(edgeExpected);
  });

  it("should handle error case", () => {
    expect(functionName(invalidInput)).toBeNull();
  });
});
```

## Build & Deploy

### Local Development
```bash
bun dev          # Start dev server on :3000
bun run lint     # Check code quality
bun run format   # Format code
bun test         # Run tests
```

### Production Build
```bash
bun run build    # Build for production
bun start        # Start production server
```

### Vercel Deployment

The project is configured for Vercel:

1. Push to GitHub
2. Import in Vercel dashboard
3. Framework preset: Next.js
4. Auto-deploys on push

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
