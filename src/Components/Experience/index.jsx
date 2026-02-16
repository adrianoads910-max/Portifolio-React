import React from 'react';

export const Experience = () => {
  const experiences = [
    {
      company: "Apollo Solutions Dev",
      role: "Estagiário Desenvolvedor FullStack",
      period: "Jan 2026 - Presente",
      description: "Atuação no ciclo completo de desenvolvimento. Criação de interfaces dinâmicas com React e APIs robustas, garantindo integração eficiente entre frontend e backend.",
      techs: ["React", "Python", "SQL"]
    },
    {
      company: "CYRRUS",
      role: "Estagiário Desenvolvedor Front-End",
      period: "Ago 2025 - Presente",
      description: "Desenvolvimento de funcionalidades visuais e manutenção de sistemas legados. Foco na experiência do usuário e responsividade utilizando Angular e frameworks modernos.",
      techs: ["Angular", "TypeScript", "Frontend"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-100 dark:bg-slate-800/50 transition-colors">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-slate-900 dark:text-white">Jornada Profissional</h2>
        <div className="relative border-l-2 border-indigo-200 dark:border-slate-700 ml-4 md:ml-0 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-0">
              <div className="absolute -left-[9px] top-0 w-5 h-5 bg-indigo-600 rounded-full border-4 border-white dark:border-slate-900 shadow-sm"></div>
              <div className={`md:flex items-start justify-between group ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full">
                   <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-md transition border border-slate-200 dark:border-slate-700">
                      <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2">
                         <h3 className="text-xl font-bold text-slate-800 dark:text-white">{exp.role}</h3>
                         <span className="text-sm font-mono text-indigo-600 bg-indigo-50 dark:text-indigo-300 dark:bg-indigo-900/30 px-2 py-1 rounded inline-block w-fit mt-1 sm:mt-0">{exp.period}</span>
                      </div>
                      <h4 className="text-md font-semibold text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-2">
                          {exp.company}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.techs.map(tech => (
                          <span key={tech} className="text-xs font-medium px-2 py-1 rounded border border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-700/50">
                            {tech}
                          </span>
                        ))}
                      </div>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Experience;