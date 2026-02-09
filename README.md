# RUST HORIZONS

> A post-apocalyptic 2D MMORPG transformation of the Kaetram game engine

**Rust Horizons: The Tale of the Spark Seeker** - Journey through a rust-choked world to find "The Spark" and activate Project: Genesis before The Overmind destroys all remaining hope for humanity.

[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
[![Node.js Version](https://img.shields.io/badge/node-%5E18.14.1%20%7C%7C%20%5E20.0.0-brightgreen)](https://nodejs.org/)

## 📖 Table of Contents

- [About the Project](#about-the-project)
- [Repository Structure](#repository-structure)
- [Quick Start](#quick-start)
- [Development](#development)
- [Game Features](#game-features)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [License](#license)

## 🎮 About the Project

Rust Horizons is a complete thematic transformation of the [Kaetram](https://github.com/Kaetram/Kaetram-Open) open-source game engine, converting it from a fantasy MMORPG into a post-apocalyptic wasteland adventure. Built on modern web technologies, this project demonstrates how a flexible game engine can be adapted to tell entirely different stories while maintaining its core mechanics.

### Key Features

- **🌍 Post-Apocalyptic World**: Six unique regions from Ashfall Wastes to The Citadel
- **⚔️ Wasteland Combat**: Fight robots, mutants, and cyber creatures across 14 levels
- **🔧 Salvage & Craft**: Scavenge materials and craft wasteland weapons and armor
- **📖 Story-Driven**: 10-act narrative following the Spark Seekers
- **👥 Multiplayer**: Real-time multiplayer gameplay powered by WebSockets
- **🎨 Custom Content**: New NPCs, enemies, items, and quests themed for the wasteland

### Technology Stack

- **Frontend**: TypeScript, HTML5 Canvas, Astro
- **Backend**: Node.js, WebSocket (Socket.IO)
- **Build System**: Yarn 4 Workspaces, TypeScript Compiler
- **Testing**: Cypress E2E Testing
- **Styling**: SCSS with PostCSS

## 📁 Repository Structure

```
rusthorizons/
├── packages/
│   ├── client/         # Frontend game client
│   ├── server/         # Game server and logic
│   │   └── data/       # Game data (NPCs, mobs, items, quests)
│   ├── common/         # Shared code between client and server
│   ├── admin/          # Admin panel
│   ├── hub/            # Server hub for multiplayer coordination
│   ├── e2e/            # End-to-end tests
│   └── tools/          # Development tools (map editor, etc.)
├── .github/            # GitHub workflows and templates
├── .vscode/            # VS Code settings
├── RUST_HORIZONS_CONFIG.md        # Game design document
├── RUST_HORIZONS_PROGRESS.md      # Development progress
├── RUST_HORIZONS_VISUAL_GUIDE.md  # Visual design guide
└── package.json        # Root package configuration
```

## 🚀 Quick Start

### Prerequisites

- **Node.js**: Version 18.14.1 or 20.0.0+ ([Download](https://nodejs.org/))
- **Yarn**: Version 4.0.0+ (installed automatically via Corepack)
- **Git**: For cloning the repository

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/4tunexx/rusthorizons.git
   cd rusthorizons
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Configure environment** (optional)
   ```bash
   cp .env.defaults .env
   # Edit .env with your preferred settings
   ```

4. **Start development server**
   ```bash
   yarn dev
   ```

5. **Open your browser**
   - Game Client: http://localhost:9000
   - Admin Panel: http://localhost:9001
   - Server: Running on port 9001 (configurable in .env)

### Using GitHub Codespaces

This repository is ready to use with GitHub Codespaces:

1. Click the "Code" button on GitHub
2. Select "Create codespace on main"
3. Wait for the environment to build
4. Run `yarn install` followed by `yarn dev`
5. Access forwarded ports to view the game

## 💻 Development

### Available Scripts

| Command | Description |
|---------|-------------|
| `yarn dev` | Start all packages in development mode |
| `yarn build` | Build all packages for production |
| `yarn start` | Start all packages in production mode |
| `yarn lint` | Run ESLint and Stylelint |
| `yarn lint:fix` | Auto-fix linting issues |
| `yarn test:run` | Run E2E tests headlessly |
| `yarn test:open` | Open Cypress test runner |
| `yarn map` | Open map editor tool |

### Development Workflow

1. **Make changes** to the relevant package (client, server, common)
2. **Run linters** with `yarn lint:fix` to maintain code quality
3. **Test your changes** using `yarn dev` and manual testing
4. **Run E2E tests** with `yarn test:run` before committing
5. **Commit** using conventional commit messages (enforced by husky)

### Code Style

- **TypeScript** is used throughout the project
- **ESLint** enforces code quality rules
- **Stylelint** maintains SCSS consistency
- **Prettier** handles code formatting
- **Husky** runs pre-commit hooks for linting

## 🎯 Game Features

### Story & Lore

Rust Horizons follows the **Spark Seekers**, survivors in a post-apocalyptic world controlled by The Overmind, an AI that has enslaved humanity. Players must:

1. Find "The Spark" - a legendary source of power
2. Activate Project: Genesis to restore hope
3. Battle through mutants, robots, and cyber creatures
4. Uncover the truth about The Overmind

### Current Content

**NPCs (4 total):**
- The Archivist - Primary quest giver
- Fixer Finch - Scrap mechanic and upgrade vendor
- Vesper - Combat trainer and bounty giver
- Kael - Tech-Shaman and lore keeper

**Enemies (8 types):**
- Scavenger Bot, Iron Hound, Rad-Ghoul
- Mutant-Brute, Scrap-Drone, Rust Serpent
- Drone Swarm Alpha (Boss)

**Items & Crafting:**
- Wasteland weapons (pipes, rifles, plasma cutters)
- Salvaged armor (scrap vests, hazmat suits)
- Crafting materials (scrap metal, tech components, rad-shards)
- Quest items (Data-Pad, Comm-Relay Key, Genesis Keycard)

### Progression System

- **Levels 1-14** with wasteland-themed content
- **Skills**: Combat stats (crush, slash, stab, archery, energy)
- **Quests**: 10-act story progression
- **Crafting**: Salvaging and engineering-focused
- **Regions**: Six unique areas to explore

## 📚 Documentation

Detailed documentation is available in the following files:

- **[RUST_HORIZONS_CONFIG.md](./RUST_HORIZONS_CONFIG.md)** - Complete game design document
  - Story overview and lore
  - Character profiles
  - World regions and enemies
  - Items and crafting system
  - Quest progression

- **[RUST_HORIZONS_PROGRESS.md](./RUST_HORIZONS_PROGRESS.md)** - Development progress report
  - Completed transformations
  - Current playable state
  - Remaining work and priorities
  - Development metrics

- **[RUST_HORIZONS_VISUAL_GUIDE.md](./RUST_HORIZONS_VISUAL_GUIDE.md)** - Visual design guide
  - Color palette specifications
  - Enemy and NPC design principles
  - Environment design
  - Sprite asset requirements

## 🤝 Contributing

Contributions are welcome! This project is in active development.

### Areas Looking for Help

- **Pixel Art**: Wasteland sprites for enemies, NPCs, and items
- **UI/UX Design**: Rust-themed interface elements
- **Quest Design**: Additional story content and side quests
- **Testing**: Bug reports and gameplay feedback
- **Documentation**: Improving guides and tutorials

### Development Status

```
Foundation:     ✅ Complete (NPCs, Mobs, Items)
Story:          🟡 In Progress (Config done, quests next)
Visuals:        ❌ Not Started (Assets needed)
Polish:         ❌ Not Started
Testing:        🟡 Partial (Build verified)

Overall Completion: 20-25%
```

## 📄 License

This project is licensed under the **Mozilla Public License 2.0** (MPL-2.0).

- **Source Code**: MPL-2.0 License ([LICENSE](./LICENSE))
- **Original Assets**: See [Kaetram Open](https://github.com/Kaetram/Kaetram-Open) for attribution

### Original Project

Rust Horizons is built upon [Kaetram](https://github.com/Kaetram/Kaetram-Open), an open-source game engine originally inspired by Little Workshop's BrowserQuest. While the assets and engine architecture remain influenced by Kaetram, all game content (story, NPCs, enemies, items) has been reimagined for the Rust Horizons universe.

## 🔗 Links

- **Original Engine**: [Kaetram Open](https://github.com/Kaetram/Kaetram-Open)
- **Engine Website**: [kaetram.com](https://kaetram.com/)
- **Issue Tracker**: [GitHub Issues](https://github.com/4tunexx/rusthorizons/issues)

---

**Created by**: 4tunexx  
**Based on**: Kaetram Open by OmniaDev  
**Last Updated**: February 2026  
**Status**: Active Development 🚧
