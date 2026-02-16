import React from 'react';
import Icons from '../Icons/Index';

export const Stacks = () => {
  const skills = [
    {
      category: "Frontend",
      icon: <Icons.Code />,
      items: ["React", "Angular", "TypeScript", "Tailwind CSS", "Ionic"]
    },
    {
      category: "Backend",
      icon: <Icons.Database />,
      items: ["Python", "Node.js", "SQL (MySQL/SQLite)", "Flask", "APIs REST"]
    },
    {
      category: "Ferramentas",
      icon: <Icons.Terminal />,
      items: ["Git & GitHub", "Figma", "Firebase", "Adobe Photoshop"]
    },
    {
      category: "Ciência & Dados",
      icon: <Icons.Chart />,
      items: ["Análise de Dados", "Lógica Matemática", "Resolução de Problemas", "Precisão Técnica"]
    }
  ];

  return (
    <section id="stacks" className="py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 md:text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Arsenal Tecnológico</h2>
          <p className="text-slate-600 dark:text-slate-400">
            Conjunto de ferramentas que utilizo para criar soluções completas, do banco de dados ao pixel na tela.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, index) => (
            <div 
              key={index} 
              className="bg-slate-50 dark:bg-slate-800/40 p-6 rounded-xl border border-slate-100 dark:border-slate-700 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-colors duration-300 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4 text-indigo-600 dark:text-indigo-400">
                {skillGroup.icon}
                <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200">
                  {skillGroup.category}
                </h3>
              </div>
              <ul className="space-y-2">
                {skillGroup.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                    <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Stacks;