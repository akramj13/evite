import reactLogo from "../assets/react.svg";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          {/* Logo with animation */}
          <div className="flex justify-center mb-8">
            <img
              src={reactLogo}
              alt="React logo"
              className="w-24 h-24 animate-spin-slow drop-shadow-2xl"
            />
          </div>

          {/* Main heading */}
          <h1 className="text-6xl font-bold text-white mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              EVite
            </span>
          </h1>

          <p className="text-xl text-slate-300 mb-2 font-medium">
            Limitless Labs
          </p>

          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            A blazingly fast Electron + Vite + React starter template. Built
            with modern tools and best practices for creating desktop
            applications.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl cursor-pointer">
              Get Started
            </button>
            <button className="border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 cursor-pointer">
              View on GitHub
            </button>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Lightning Fast
            </h3>
            <p className="text-slate-400">
              Powered by Vite's instant HMR and optimized build process for
              rapid development.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50">
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Modern Stack
            </h3>
            <p className="text-slate-400">
              Built with React 18, TypeScript, and Tailwind CSS for a modern
              development experience.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Ready to Ship
            </h3>
            <p className="text-slate-400">
              Pre-configured with ESLint, TypeScript, and build optimization for
              production apps.
            </p>
          </div>
        </div>

        {/* Getting Started Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-white mb-8">
            Get started in seconds
          </h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto border border-slate-700/50">
            <div className="text-left">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-slate-400 text-sm ml-2">Terminal</span>
              </div>
              <code className="text-green-400 font-mono text-sm">
                <div className="mb-2">npm create evite@latest my-app</div>
                <div className="mb-2">cd my-app</div>
                <div>npm run dev</div>
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
