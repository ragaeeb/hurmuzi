# Hurmuzi 🎮

A web-based SNES emulator with advanced sound channel mixing capabilities and intelligent music voice detection. Play SNES games directly in your browser with granular control over each of the 8 audio channels.

[![wakatime](https://wakatime.com/badge/user/a0b906ce-b8e7-4463-8bce-383238df6d4b/project/3bf575f0-9916-409b-8189-e01c57c9aac0.svg)](https://wakatime.com/badge/user/a0b906ce-b8e7-4463-8bce-383238df6d4b/project/3bf575f0-9916-409b-8189-e01c57c9aac0)
[![codecov](https://codecov.io/gh/ragaeeb/hurmuzi/graph/badge.svg?token=VQ1PMX2XAH)](https://codecov.io/gh/ragaeeb/hurmuzi)
[![Vercel Deploy](https://deploy-badge.vercel.app/vercel/hurmuzi)](https://hurmuzi.vercel.app)
[![typescript](https://badgen.net/badge/icon/typescript?icon=typescript&label&color=blue)](https://www.typescriptlang.org)
[![Node.js CI](https://github.com/ragaeeb/hurmuzi/actions/workflows/build.yml/badge.svg)](https://github.com/ragaeeb/hurmuzi/actions/workflows/build.yml)
![Bun](https://img.shields.io/badge/Bun-%23000000.svg?style=for-the-badge&logo=bun&logoColor=white)
![GitHub License](https://img.shields.io/github/license/ragaeeb/hurmuzi)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- **🎵 8-Channel Audio Mixer**: Independently mute, unmute, and solo each of the SNES SPC700 sound channels with real-time waveform equalization.
- **✨ Intelligent Music Detection**: Sample active audio voices in real-time (2s–10s) to detect and highlight likely music channels without reloading.
- **💾 State Persistence & Recent ROMs**: Audio channel states and cached ROM files automatically saved for instant quick-play access.
- **📚 GitHub ROM Library Browser**: Search, filter, and launch games directly from GitHub repositories with high-performance virtual scrolling.
- **🎮 Full SNES Format Support**: Seamless compatibility with `.smc`, `.sfc`, `.fig`, `.swc`, `.bs`, and `.st` files.
- **🔄 Save & Restore States**: Automatic game state capture during reloads and manual F2/F4 save state support.
- **⚡ Fast Forward**: Speed up gameplay on demand.
- **🖥️ Sleek Modern Full-Width UI**: Compact responsive dashboard, clean Geist typography, and micro-interactions with button glowing visual effects.
- **🔒 100% Client-Side Privacy**: All emulation and ROM processing happens locally in your browser.

## Getting Started

### Prerequisites

- Node.js 24+ or Bun v1.3.3+
- Modern web browser with iframe and WebAssembly support

### Installation

```bash
# Clone the repository
git clone https://github.com/ragaeeb/hurmuzi.git
cd hurmuzi

# Install dependencies
bun install
# or
npm install

# Start development server
bun dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
bun run build
bun start
```

## Usage

### Loading ROMs

Hurmuzi offers three streamlined ways to load games from the home page:

#### 1. Drag & Drop / Local File
Drag and drop any SNES ROM file onto the home page or click to browse. Files are stored in browser OPFS/cache for instant resume.

#### 2. Direct ROM URL
Paste a direct download link or GitHub raw URL (e.g. `https://raw.githubusercontent.com/.../game.sfc`).

#### 3. Browse GitHub ROM Repository
1. Paste a public GitHub repository link (e.g. `https://github.com/user/snes-collection`).
2. Search and filter across thousands of compatible ROMs with virtualized scrolling.
3. Click any ROM to launch immediately.

### Playing Games & Audio Mixing

1. **Launch**: Games automatically load and start in the responsive player workspace.
2. **Channel Control**: Click channel buttons (CH 1–8) to mute or solo voices.
3. **Music Channel Detection**: Click **"Detect Music Channels"** to sample the live SPC700 audio and identify music melodies vs sound effects.
4. **Applying Changes**: Immediate muting occurs live; re-enabling channels uses a one-click reload that preserves game state.

### Keyboard Controls

| Function | Default Key |
| :--- | :--- |
| **D-Pad** | `Arrow Keys` (↑, ↓, ←, →) |
| **A / B Buttons** | `S` / `A` |
| **X / Y Buttons** | `W` / `Q` |
| **L / R Shoulders** | `Z` / `X` |
| **Start / Select** | `Enter` / `Shift` |
| **Fast Forward** | `Space` |
| **Save / Load State** | `F2` / `F4` |
| **Fullscreen** | `F11` |

## Project Structure

```
hurmuzi/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── ChannelButton.tsx     # Animated tactile channel button & equalizer
│   │   │   ├── GameEmulator.tsx      # Isolated iframe emulator bridge
│   │   │   ├── SoundChannelMixer.tsx # 8-channel mixer & music detection UI
│   │   │   └── footer.tsx            # Full-width footer component
│   │   ├── list/
│   │   │   └── page.tsx              # GitHub ROM browser with virtual scrolling
│   │   ├── play/
│   │   │   └── page.tsx              # Game player dashboard & controls
│   │   ├── page.tsx                  # Segmented compact ROM loader
│   │   ├── layout.tsx                # Root layout with Geist fonts
│   │   └── globals.css               # Theme & custom button/equalizer animations
│   ├── lib/
│   │   ├── emulator/
│   │   │   ├── channelState.ts       # Muting, soloing & reload state logic
│   │   │   ├── musicDetection.ts     # SPC700 voice sampling & activity detection
│   │   │   ├── types.ts              # Emulator & channel type definitions
│   │   │   └── utils.ts              # Core parsing & ROM format validation
│   │   └── storage/
│   │       ├── channelStates.ts      # localStorage channel persistence
│   │       └── roms.ts               # OPFS & cached ROM management
│   └── hooks/
│       ├── useChannelMixer.ts        # Channel toggle & effective state hook
│       └── useEmulatorSetup.ts       # Emulator iframe lifecycle hook
├── public/                           # Static assets
└── package.json
```

## Testing & Quality

```bash
# Run unit tests
bun test

# Watch mode
bun test --watch

# Lint codebase (Biome)
bun run lint

# Format codebase (Biome)
bun run format
```

## Technologies

- **Next.js 16** - React Framework (App Router)
- **React 19** - UI with React Compiler
- **TypeScript** - Strict type safety
- **Tailwind CSS 4** - Modern utility-first styling
- **EmulatorJS (Snes9x)** - In-browser SNES emulation
- **Geist Font** - Clean modern typography
- **Bun** - Fast runtime, package manager & test runner

## License

MIT License - see [LICENSE](./LICENSE) for details.

## Author

**Ragaeeb Haq**
- GitHub: [@ragaeeb](https://github.com/ragaeeb)

