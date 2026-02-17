import React from 'react';
import Icons from '../Icons/Index';

export const Footer = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 py-12 text-slate-400 text-center border-t border-slate-200 dark:border-slate-800 transition-colors">
      <p className="mb-4 text-lg font-semibold text-slate-700 dark:text-slate-200">Vamos construir algo juntos?</p>
      <div className="flex justify-center gap-8 mb-8">
        <a href="https://wa.me/5598988325686" target="_blank" rel="noreferrer" className="hover:text-indigo-500 transition transform hover:scale-110"><Icons.WhatsApp /></a>
         <a href="https://www.linkedin.com/in/adriano-souza-fonseca-868976300" target="_blank" rel="noreferrer" className="hover:text-indigo-500 transition transform hover:scale-110"><Icons.LinkedIn /></a>
         <a href="https://github.com/adrianoads910-max" target="_blank" rel="noreferrer" className="hover:text-indigo-500 transition transform hover:scale-110"><Icons.GitHub /></a>
         <a href="mailto:adrianoads910@gmail.com" className="hover:text-indigo-500 transition transform hover:scale-110"><Icons.Mail /></a>

      </div>
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Adriano Souza Fonseca. 
        <span className="hidden sm:inline"> • </span> 
        <br className="sm:hidden" />
        Construído com React & Tailwind CSS.
      </p>
    </footer>
  );
};
export default Footer;