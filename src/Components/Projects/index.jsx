import React from 'react';
import Icons from '../Icons/Index';

export const Projects = () => {
  const projects = [
    {
      title: "SmartMart Solutions",
      desc: "Dashboard completo para visualização de vendas, gestão de catálogo (CRUD) e controle de transações. Focado em métricas comerciais.",
      tags: ["React", "Python", "Tailwind", "Data Viz"],
      repo: "https://github.com/adrianoads910-max/SmartMart-Solutions",
      demo: "https://smartmart-demo-mock.web.app/"
    },
    {
      title: "Kanban List - Ionic",
      desc: "Gerenciador de tarefas mobile-first com Ionic 7, Angular 17 e persistência de dados em tempo real via Firebase Firestore.",
      tags: ["Ionic", "Angular", "Firebase", "Mobile"],
      repo: "https://github.com/adrianoads910-max/Kanban-List-Ionic-Angular",
      demo: "https://kanban-board-74f5a.web.app/"
    },
    {
      title: "Restaurant Analytics API",
      desc: "API REST e Dashboard para análise de performance de restaurantes. Foco em backend, tratamento de dados e arquitetura escalável.",
      tags: ["Python", "SQLite", "API REST", "Backend"],
      repo: "https://github.com/adrianoads910-max/Restaurant-Analytics-API",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 max-w-6xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div>
          <h2 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">Projetos em Destaque</h2>
          <p className="text-slate-500 dark:text-slate-400">Seleção estratégica focada em soluções comerciais e complexas.</p>
        </div>
        <a href="https://github.com/adrianoads910-max?tab=repositories" target="_blank" rel="noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline mt-4 md:mt-0 flex items-center gap-1 font-medium">
          Ver todos no GitHub <Icons.External />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
            <div className="h-48 bg-slate-100 dark:bg-slate-700/50 relative overflow-hidden flex items-center justify-center group-hover:bg-indigo-50 dark:group-hover:bg-slate-700 transition">
                <div className="text-slate-300 dark:text-slate-600 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-transform duration-500 transform group-hover:scale-110">
                    <Icons.Code />
                </div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">{project.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-grow leading-relaxed">
                {project.desc}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 text-xs font-semibold rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-4 mt-auto border-t border-slate-100 dark:border-slate-700 pt-4">
                <a href={project.repo} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                  <Icons.GitHub /> Código
                </a>
                {project.demo !== "#" && (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                    <Icons.External /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
 export default Projects;