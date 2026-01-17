# Anchor

A comprehensive tool for managing Ren'Py visual novel projects with an integrated desktop application, SDK, and web presence.

## Project Structure

This is a monorepo containing three main workspaces:

```
project-root/
├── apps/
│   ├── desktop/      Desktop application (Tauri + React + Vite)
│   ├── web/          Marketing and download website
│   └── docs/         Project documentation
├── packages/             
│   └── sdk/          Ren'Py integration SDK (scripts and SQL schemas)
└── .github/          Issue templates and workflows
```

### Workspaces

- **Desktop App** (`apps/desktopp`) - A Tauri-based desktop application for managing Ren'Py projects
- **Website** (`apps/web`) - Marketing site and download portal
- **SDK** (`packages/sdk`) - Collection of Ren'Py scripts and SQL schemas for integration

## Features

- Project management for Ren'Py visual novels
- Visual project organization and tracking
- SQL database integration for Ren'Py projects
- Multi-language support (i18n)
- Cross-platform desktop application (Windows, macOS, Linux)

## Tech Stack

### Desktop App
- Tauri
- React
- Vite
- TailwindCSS
- TypeScript
- TanStack Router
- i18n
- Zustand

### Website & Docs
- React
- Vite
- TailwindCSS
- TypeScript
- TanStack Router
- i18n

### SDK
- Ren'Py 8.x compatible scripts
- SQL schemas (PostgreSQL)

## Getting Started

### Prerequisites

- Node.js 20+ and pnpm 9+
- Rust 1.70+ (for Tauri development)
- Ren'Py 8.1+ (for SDK testing)

### Installation

```bash
# Clone the repository
git clone https://github.com/allneos/anchor.git
cd anchor

# Install dependencies for all workspaces
pnpm install
```

### Development

#### Desktop App

```bash
cd apps/desktop
pnpm dev
# or
pnpm tauri dev
```

#### Website

```bash
cd apps/web
pnpm dev
```

#### SDK

See `packages/sdk/README.md` for integration instructions and testing.

### Building

#### Desktop App

```bash
cd apps/desktop
pnpm tauri build
```

#### Website

```bash
cd apps/web
pnpm build
```

## Contributing

We welcome contributions! Please read our contributing guidelines below.

### Getting Started with Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/workspace-description`
3. Make your changes
4. Commit using conventional commits: `git commit -m "feat(workspace): description"`
5. Push to your fork: `git push origin feature/workspace-description`
6. Open a Pull Request

### Branch Naming Convention

Use the format: `type/workspace-short-description`

**Types:**
- `feature/` - New features
- `fix/` - Bug fixes
- `refactor/` - Code improvements
- `docs/` - Documentation changes
- `chore/` - Maintenance tasks
- `i18n/` - Translation work

**Workspaces:**
- `desktop` - Desktop application
- `web` - Website
- `sdk` - Ren'Py SDK
- `shared` - Shared code

**Examples:**
- `feature/desktop-settings-panel`
- `fix/web-mobile-navigation`
- `docs/sdk-integration-guide`
- `i18n/web-spanish`

### Commit Message Convention

Use conventional commits format: `type(workspace): description`

**Examples:**
```
feat(desktop): add project creation dialog
fix(web): correct download link for macOS
docs(sdk): update integration examples
chore(desktop): update dependencies
i18n(web): add French translations
```

### Issue Templates

We provide templates for different types of issues:
- Feature Request
- Bug Report
- Task/Chore
- SDK Issue
- Translation

Please use the appropriate template when creating issues.

## Project Roadmap

View our public [roadmap](https://github.com/orgs/allneos/projects/2/views/7) in our GitHub Projects.

## Documentation

- Desktop App: `apps/desktop/README.md`
- Website: `apps/web/README.md`
- SDK: `packages/sdk/README.md`

## Internationalization (i18n)

We support multiple languages. To contribute translations:

1. Check existing language files in each workspace
2. Use the Translation issue template to propose new languages or corrections
3. Follow the i18n guide in `docs/i18n.md`

Supported languages:
- English (en) - Default
- Tagalog (tl)

## License

MIT

## Support

- Issues: [GitHub Issues](https://github.com/allneos/anchor/issues)

## Acknowledgments

- Built with [Tauri](https://tauri.app/)
- Designed for the [Ren'Py](https://www.renpy.org/) community

## Development Status

This project is currently in early development (pre-alpha). Expect breaking changes and incomplete features.

Current version: v0.1.0-alpha
