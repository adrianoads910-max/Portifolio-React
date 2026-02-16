import React from 'react';
import Icons from '../Icons/Index';
export const About = () => {
  return (
    <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
      <div className="flex-1 space-y-6">
        <div className="inline-block px-3 py-1 text-xs font-bold tracking-wider text-indigo-600 uppercase bg-indigo-100 rounded-full dark:bg-indigo-900/30 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
          Full Stack Developer
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-slate-900 dark:text-white">
          Unindo precisão <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">científica</span> com código moderno.
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
          Experiência prática na criação de componentes reutilizáveis e integração de
sistemas. Transformo requisitos complexos em aplicações web robustas usando 
          <strong> React, Python e Angular</strong>.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <a 
            href="/curriculo.pdf" 
            download="Currículo-Adriano-Fonseca.pdf" // Nome que aparecerá para quem baixar
            className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 flex items-center gap-2"
          >
            <Icons.Download /> Baixar Currículo
          </a>
          <a href="mailto:adrianoads910@gmail.com" className="px-6 py-3 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition flex items-center gap-2 font-medium text-slate-700 dark:text-slate-200">
            <Icons.Mail /> Contato
          </a>
          <a href="https://github.com/adrianoads910-max" target="_blank" rel="noreferrer" className="px-6 py-3 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition flex items-center gap-2 font-medium text-slate-700 dark:text-slate-200">
            <Icons.GitHub /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/adriano-souza-fonseca-868976300" target="_blank" rel="noreferrer" className="px-6 py-3 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition flex items-center gap-2 font-medium text-slate-700 dark:text-slate-200">
            <Icons.LinkedIn /> LinkedIn
          </a>
        </div>
      </div>
      
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
        <img 
          src="/profile.jpeg" 
          alt="Adriano Fonseca" 
          className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-white dark:border-slate-800 shadow-2xl"
          onError={(e) => {e.target.src = 'https://ui-avatars.com/api/?name=Adriano+Fonseca&background=4f46e5&color=fff&size=256'}}
        />
      </div>
    </section>
  );
}
export default About;