# EVite Template

A modern Electron + Vite + React template for building cross-platform desktop applications. Built with performance and developer experience in mind.

![EVite Template](https://via.placeholder.com/800x400?text=EVite+Template)

## 🚀 Features

- ⚡️ **Blazing Fast HMR** - Powered by [Vite](https://vitejs.dev/)
- 🔋 **Ready to Code** - TypeScript, ESLint, and modern config out of the box
- ⚛️ **React 18** - Latest React features with TypeScript support
- 💅 **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- 🛠️ **Electron** - Build cross-platform desktop applications
- 📦 **Production Ready** - Optimized build setup for your desktop apps

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) (v8 or higher)

## 🛠️ Getting Started

1. **Clone and Install**

```bash
# Clone the template
git clone [your-repo-url]

# Navigate to project directory
cd your-project-name

# Install dependencies
npm install
```

2. **Development**

```bash
# Start the development server
npm run dev
```

This will:

- Start the Vite dev server for the renderer process
- Watch for changes in the main process
- Launch Electron with hot reload

3. **Production Build**

```bash
# Create a production build
npm run build
```

This command:

- Builds the main process (`/app`)
- Builds the renderer process (Vite)
- Packages the app for distribution

## 📁 Project Structure

```
your-project/
├── app/                   # Electron main process
├── main/                  # Renderer process (Vite + React)
│   ├── src/              # Source files
│   ├── public/           # Static assets
│   └── dist/             # Built files
├── dist/                 # Production build
└── package.json          # Project configuration
```

## 🔧 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run typecheck` - Run TypeScript type checking
- `npm run dev:renderer` - Start Vite dev server only
- `npm run dev:electron` - Start Electron with dev configuration
- `npm run build:main` - Build main process only
- `npm run build:renderer` - Build renderer process only

## 🎨 Customization

### Electron Configuration

Main process configuration can be modified in `app/main.ts`.

### Vite Configuration

Renderer process and build configuration can be modified in `main/vite.config.ts`.

### TypeScript Configuration

- Main process: `app/tsconfig.json`
- Renderer process: `main/tsconfig.json`
- Shared config: `tsconfig.json`

## 📝 Notes

- The development server runs on `http://localhost:5173` by default
- Hot Module Replacement (HMR) is enabled for both main and renderer processes
- ESLint is configured for modern JavaScript/TypeScript development
- Tailwind CSS is pre-configured with a modern design system

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Electron](https://www.electronjs.org/)
- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
