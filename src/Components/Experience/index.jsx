import React from 'react';

export const Experience = () => {
  const experiences = [
    {
      company: "Apollo Solutions Dev",
      role: "Desenvolvedor FullStack",
      yearStart: "2026",
      yearEnd: "Atual",
      fullDate: "Mar 2026 - Presente",
      description: "Atuação no ciclo completo de desenvolvimento. Criação de interfaces dinâmicas com React e APIs robustas, garantindo integração eficiente entre frontend e backend.",
      techs: ["React", "Python", "SQL", "VueJs", "API"]
    },
    {
      company: "CYRRUS",
      role: "Desenvolvedor Front-End",
      yearStart: "2025",
      yearEnd: "2026",
      fullDate: "Dez 2025 - Presente",
      description: "Desenvolvimento de funcionalidades visuais e manutenção de sistemas legados. Foco na experiência do usuário e responsividade utilizando Angular e frameworks modernos.",
      techs: ["Angular", "TypeScript", "Frontend", "Firebase", "Ionic", "API"]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-slate-900 dark:text-white">Jornada Profissional</h2>
        
        <div className="relative">
          {/* LINHA VERTICAL (Régua) */}
          {/* No desktop fica posicionada após a coluna de datas (aprox 120px da esquerda) */}
          <div className="absolute left-8 md:left-32 top-2 bottom-0 w-0.5 bg-slate-300 dark:bg-slate-700"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex flex-col md:flex-row gap-8 md:gap-0">
                
                {/* COLUNA DA ESQUERDA: DATAS (Estilo da foto) */}
                <div className="md:w-32 flex md:flex-col md:items-end md:text-right md:pr-8 pl-16 md:pl-0 pt-1">
                  <span className="text-slate-400 dark:text-slate-500 font-mono text-sm font-bold block leading-tight">
                    {exp.yearStart}
                  </span>
                  <span className="text-slate-600 dark:text-slate-300 font-mono text-lg font-bold block leading-tight">
                    {exp.yearEnd}
                  </span>
                </div>

                {/* O PONTO (DOT) NA LINHA */}
                <div className="absolute left-8 md:left-32 -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-50 dark:border-slate-900 shadow-[0_0_0_2px_rgba(99,102,241,0.2)] z-10 mt-1.5"></div>

                {/* COLUNA DA DIREITA: CONTEÚDO */}
                <div className="flex-1 md:pl-12 pl-16">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                    {exp.company}
                  </h3>
                  
                  <div className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4 flex flex-wrap items-center gap-2">
                    <span className="text-indigo-600 dark:text-indigo-400">{exp.role}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-400"></span>
                    <span>{exp.fullDate}</span>
                  </div>

                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 max-w-2xl">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.techs.map(tech => (
                      <span key={tech} className="px-2.5 py-1 text-xs font-semibold rounded-md border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 bg-transparent">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;