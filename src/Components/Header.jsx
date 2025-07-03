import React from "react";
import { Code2, Sparkles } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full sticky top-0 z-50 overflow-hidden bg-gradient-to-b from-gray-800 to-gray-700 text-white border-b border-zinc-600 shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 text-sky-400 font-semibold text-xl tracking-wide">
          <Code2 className="w-6 h-6 text-sky-500" />
          <span className="drop-shadow-sm">AI Code Reviewer</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6 text-lg font-medium text-zinc-300">
          <a className="hover:text-white transition">Editor</a>
          <a className="hover:text-white transition">Review</a>
          <a href="https://dharamraj-portfolio.vercel.app/" target="_blank" className="hover:text-white transition">About</a>
        </nav>

        {/* CTA Button */}
        <button className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold px-4 py-2 rounded-full transition-all shadow-md">
          <Sparkles className="w-4 h-4" />
          Run Review
        </button>
      </div>
    </header>
  );
};

export default Header;
