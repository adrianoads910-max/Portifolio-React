import React from 'react';
import Icons from '../Icons/Index';

export const Navbar = ({ darkMode, toggleTheme }) => {
  return (
    <nav className="fixed w-full z-50 backdrop-blur-md bg-white/70 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
        <div className="font-bold text-xl tracking-tight text-indigo-600 dark:text-indigo-400">
          Adriano<span className="text-slate-600 dark:text-slate-400">.dev</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#projects" className="hidden md:block hover:text-indigo-500 transition text-sm font-medium">Projetos</a>
          <a href="#experience" className="hidden md:block hover:text-indigo-500 transition text-sm font-medium">Experiência</a>
          <a href="#stacks" className="hidden md:block hover:text-indigo-500 transition text-sm font-medium">Skills</a>
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition text-slate-600 dark:text-slate-400"
            aria-label="Alternar Tema"
          >
            {darkMode ? <Icons.Sun /> : <Icons.Moon />}
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;