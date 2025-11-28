# Hurmuzi 🎮

A web-based SNES emulator with advanced sound channel mixing capabilities. Play SNES games directly in your browser with granular control over each of the 8 audio channels.

[![wakatime](https://wakatime.com/badge/user/a0b906ce-b8e7-4463-8bce-383238df6d4b/project/3bf575f0-9916-409b-8189-e01c57c9aac0.svg)](https://wakatime.com/badge/user/a0b906ce-b8e7-4463-8bce-383238df6d4b/project/3bf575f0-9916-409b-8189-e01c57c9aac0)
[![codecov](https://codecov.io/gh/ragaeeb/hurmuzi/graph/badge.svg?token=VQ1PMX2XAH)](https://codecov.io/gh/ragaeeb/hurmuzi)
[![Vercel Deploy](https://deploy-badge.vercel.app/vercel/hurmuzi)](https://hurmuzi.vercel.app)
[![typescript](https://badgen.net/badge/icon/typescript?icon=typescript&label&color=blue)](https://www.typescriptlang.org)
[![Node.js CI](https://github.com/ragaeeb/hurmuzi/actions/workflows/build.yml/badge.svg)](https://github.com/ragaeeb/hurmuzi/actions/workflows/build.yml)
![Bun](https://img.shields.io/badge/Bun-%23000000.svg?style=for-the-badge&logo=bun&logoColor=white)
![GitHub License](https://img.shields.io/github/license/ragaeeb/hurmuzi)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- **🎵 Advanced Audio Control**: Independently mute/unmute each of the 8 SNES SPC700 sound channels
- **💾 State Persistence**: Channel settings automatically saved per ROM
- **📚 ROM Library Browser**: Browse and search ROMs directly from GitHub repositories
- **🎮 Full SNES Support**: Play any SNES ROM file (.smc, .sfc, .fig, .swc, .bs, .st)
- **🔄 Save States**: Built-in save/load state functionality
- **⚡ Fast Forward**: Speed up gameplay with fast-forward mode
- **📱 Responsive Design**: Works on desktop and mobile browsers
- **🚀 Virtual Scrolling**: Handle 3000+ ROMs with smooth performance
- **🔒 Privacy First**: All ROM processing happens locally in your browser

## Getting Started

### Prerequisites

- Node.js 24+ or Bun v1.3.3+
- Modern web browser with iframe support

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

You have three ways to load ROMs:

#### 1. Drag & Drop
Drag and drop a SNES ROM file onto the home page

#### 2. Direct URL
Paste a direct ROM URL (GitHub raw URL or direct download link)

#### 3. Browse GitHub Repository (NEW! 🎉)
1. Paste a GitHub repository URL (e.g., `https://github.com/user/roms`)
2. Browse through all compatible ROMs
3. Search/filter ROMs by name
4. Click to play instantly

The ROM browser features:
- **Virtual scrolling** for handling 3000+ ROMs efficiently
- **Smart search** with form submission (no re-renders on each keystroke)
- **Automatic filtering** for compatible ROM formats
- **File size display** for each ROM

### Playing Games

1. **Play**: Click play button in the emulator to start the game
2. **Mix Audio**: Use the Sound Channel Mixer to control individual audio channels
3. **Save Progress**: Use F2 to save state, F4 to load state

### Keyboard Controls

#### Game Controls
- **Arrow Keys**: D-Pad
- **S**: A button
- **A**: B button
- **W**: X button
- **Q**: Y button
- **Z**: L button
- **X**: R button
- **Enter**: Start
- **Shift**: Select

#### Emulator Controls
- **Space**: Fast Forward
- **F2**: Save State
- **F4**: Load State
- **F11**: Fullscreen

## Sound Channel Mixer

The SNES has 8 audio channels via the SPC700 sound chip:

- **Channels 1-4**: Typically melody and music
- **Channels 5-8**: Often drums and sound effects

### Features
- **Independent Muting**: Toggle any channel on/off
- **Solo Mode**: Listen to a single channel in isolation
- **Visual Feedback**: LED indicators show active channels
- **Auto-Save**: Settings automatically saved per ROM

### Important Note
Unmuting channels requires a full emulator reload (your progress is preserved via save states).

## Project Structure

```
hurmuzi/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── GameEmulator.tsx      # Main emulator component
│   │   │   ├── SoundChannelMixer.tsx # Audio mixing UI
│   │   │   └── footer.tsx            # Unified footer component
│   │   ├── list/
│   │   │   └── page.tsx              # ROM library browser (NEW!)
│   │   ├── play/
│   │   │   └── page.tsx              # Game player page
│   │   ├── page.tsx                  # Home page
│   │   └── layout.tsx                # Root layout with footer
│   ├── lib/
│   │   ├── emulator/
│   │   │   ├── types.ts              # Type definitions
│   │   │   ├── utils.ts              # Emulator utilities
│   │   │   ├── channelState.ts       # Channel state logic
│   │   │   └── __tests__/            # Unit tests
│   │   └── storage/
│   │       ├── channelStates.ts      # localStorage utilities
│   │       └── __tests__/            # Unit tests
│   └── hooks/
│       └── useEmulatorSetup.ts       # Emulator setup hook
├── public/                           # Static assets
└── package.json
```

## Testing

```bash
# Run all tests
bun test

# Watch mode
bun test --watch
```

## Technologies

- **Next.js 16** - React framework with App Router
- **React 19** - UI library with React Compiler
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **EmulatorJS** - SNES emulation core
- **Bun** - Fast JavaScript runtime and test runner
- **GitHub API** - ROM repository browsing

## Development

### Code Quality

```bash
# Lint code
bun run lint

# Format code
bun run format
```

### Adding New Features

See [AGENTS.md](./AGENTS.md) for detailed contribution guidelines and architecture documentation.

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

Build the static site:
```bash
bun run build
```

Deploy the `.next` directory to any static hosting service.

## Browser Compatibility

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

## Legal

This project uses EmulatorJS for emulation. You must own the legal rights to any ROM files you use with this emulator.

## License

MIT License - see LICENSE file for details

## Author

**Ragaeeb Haq**
- GitHub: [@ragaeeb](https://github.com/ragaeeb)

## Acknowledgments

- [EmulatorJS](https://emulatorjs.org) - Emulation core
- SNES9x - Original SNES emulator
- Nintendo - Original SNES hardware and games
- GitHub API - ROM repository browsing

---

Made with ❤️ for retro gaming enthusiasts
