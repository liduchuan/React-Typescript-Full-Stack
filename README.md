# React TypeScript Full Stack

A modern full-stack monorepo featuring both web and desktop applications built with React, TypeScript, and cutting-edge tools.

## 🚀 Features

- **Monorepo Architecture**: Turborepo-powered workspace with shared packages
- **Multi-Platform Support**: Both web (Next.js) and desktop (Electron) applications
- **Modern Tech Stack**: React 19, TypeScript 5, Tailwind CSS 4
- **Shared Components**: Reusable UI components with Storybook
- **Cross-Platform Desktop**: Electron app with native platform features
- **Fast Development**: Turbopack for lightning-fast builds and HMR
- **Code Quality**: ESLint, Prettier, and TypeScript for consistent code
- **Package Management**: PNPM with workspace support for efficient dependency management

## 📁 Project Structure

```
├── app/
│   ├── web/           # Next.js web application
│   └── client/        # Electron desktop application
├── shared/
│   ├── ui/            # Shared UI components with Storybook
│   ├── tool/          # Shared utilities and tools
│   └── types/         # Shared TypeScript types
├── assets/            # Global assets
└── scripts/           # Build and utility scripts
```

## 🛠 Tech Stack

### Core Technologies

- **React 19** - Latest React with concurrent features
- **TypeScript 5** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework
- **Turborepo** - High-performance build system

### Web Application (Next.js)

- **Next.js 15** - Full-stack React framework with Turbopack
- **Server Components** - React Server Components support
- **API Routes** - Built-in API endpoints

### Desktop Application (Electron)

- **Electron 37** - Cross-platform desktop apps
- **Electron Vite** - Fast Vite-powered Electron development
- **Electron Builder** - Package and distribute desktop apps

### Development Tools

- **Storybook** - Component development and documentation
- **ESLint** - Code linting and quality
- **Prettier** - Code formatting
- **PNPM** - Fast, disk space efficient package manager

## 🚦 Getting Started

### Prerequisites

- Node.js 18+
- PNPM 8+

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd react-typescript-full-stack
```

2. Install dependencies:

```bash
pnpm install
```

3. Start development servers:

```bash
pnpm dev
```

This will start all applications in development mode with hot reload.

## 📜 Available Scripts

### Global Scripts

- `pnpm dev` - Start all applications in development mode
- `pnpm build` - Build all applications for production
- `pnpm ui` - Start Storybook component library

### Web Application

- `pnpm --filter web dev` - Start Next.js development server
- `pnpm --filter web build` - Build web application
- `pnpm --filter web start` - Start production web server

### Desktop Application

- `pnpm --filter client dev` - Start Electron in development mode
- `pnpm --filter client build` - Build Electron app for current platform
- `pnpm --filter client build:mac` - Build for macOS
- `pnpm --filter client build:win` - Build for Windows
- `pnpm --filter client build:linux` - Build for Linux

### UI Components

- `pnpm --filter ui storybook` - Start Storybook development server
- `pnpm --filter ui build-storybook` - Build Storybook for production

## 🏗 Development

### Adding New Components

1. Create components in `shared/ui/lib/`
2. Export them from `shared/ui/index.ts`
3. Add Storybook stories for documentation
4. Use components in both web and desktop apps

### Shared Packages

- **UI**: Reusable React components with Tailwind CSS
- **Types**: Shared TypeScript type definitions
- **Tool**: Utility functions and helpers

### Code Quality

The project enforces code quality through:

- TypeScript strict mode
- ESLint with React and TypeScript rules
- Prettier for consistent formatting
- Pre-commit hooks (if configured)

## 📦 Building for Production

### Web Application

```bash
pnpm --filter web build
```

### Desktop Application

```bash
# Build for current platform
pnpm --filter client build

# Build for specific platforms
pnpm --filter client build:mac
pnpm --filter client build:win
pnpm --filter client build:linux
```

## 🎨 UI Development

The project includes a comprehensive UI component library built with:

- **Tailwind CSS 4** - Latest version with enhanced features
- **Tailwind Variants** - Component variants and styling
- **Storybook** - Component development and testing

Access Storybook at `http://localhost:6006` when running `pnpm ui`.

## 🔧 Configuration

### Turbo Configuration

Build pipeline and caching configured in `turbo.json`.

### TypeScript Configuration

- `tsconfig.json` - Root TypeScript configuration
- Package-specific configs for web, client, and shared packages

### Tailwind Configuration

- Global styles in `shared/ui/global.css`
- Component-specific styles with Tailwind variants

## 📱 Desktop App Features

The Electron application includes:

- Native menu integration
- File system access
- Cross-platform compatibility
- Auto-updater support (configurable)
- Icon generation for all platforms

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🔗 Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Electron Documentation](https://www.electronjs.org/docs)
- [Turborepo Documentation](https://turbo.build/repo/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Storybook Documentation](https://storybook.js.org/docs)
