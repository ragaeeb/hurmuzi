# Hurmuzi 🎮

A web-based SNES emulator with advanced sound channel mixing capabilities. Play SNES games directly in your browser with granular control over each of the 8 audio channels.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ragaeeb/hurmuzi)

## Features

- **🎵 Advanced Audio Control**: Independently mute/unmute each of the 8 SNES SPC700 sound channels
- **💾 State Persistence**: Channel settings automatically saved per ROM
- **🎮 Full SNES Support**: Play any SNES ROM file (.smc, .sfc, .fig, .swc, .bs, .st)
- **🔄 Save States**: Built-in save/load state functionality
- **⚡ Fast Forward**: Speed up gameplay with fast-forward mode
- **📱 Responsive Design**: Works on desktop and mobile browsers
- **🔒 Privacy First**: All ROM processing happens locally in your browser

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
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

1. **Load a ROM**: Drag and drop a SNES ROM file onto the page, or click to browse
2. **Play**: Click play button in the emulator to start the game
3. **Mix Audio**: Use the Sound Channel Mixer to control individual audio channels
4. **Save Progress**: Use F2 to save state, F4 to load state

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
│   │   │   ├── GameEmulator.tsx    # Main emulator component
│   │   │   └── SoundChannelMixer.tsx # Audio mixing UI
│   │   ├── page.tsx                 # Home page
│   │   └── layout.tsx               # Root layout
│   ├── lib/
│   │   ├── emulator/
│   │   │   ├── types.ts             # Type definitions
│   │   │   ├── utils.ts             # Emulator utilities
│   │   │   ├── channelState.ts      # Channel state logic
│   │   │   └── __tests__/           # Unit tests
│   │   └── storage/
│   │       ├── channelStates.ts     # localStorage utilities
│   │       └── __tests__/           # Unit tests
│   └── hooks/
│       └── useEmulatorSetup.ts      # Emulator setup hook
├── public/                          # Static assets
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

---

Made with ❤️ for retro gaming enthusiasts
