import React, { useState, useEffect, useRef, useCallback } from 'react';
import Icons from '../Icons/Index';

const IconChevronLeft = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M15 18l-6-6 6-6"/>
  </svg>
);

const IconChevronRight = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 18l6-6-6-6"/>
  </svg>
);

const AUTOPLAY_MS = 4000;
const PER_SLIDE = 3;

const projects = [
  {
    title: "SmartMart Solutions",
    desc: "Dashboard completo para visualização de vendas, gestão de catálogo (CRUD) e controle de transações. Focado em métricas comerciais.",
    tags: ["React", "Python", "Tailwind", "Data Viz"],
    repo: "https://github.com/adrianoads910-max/SmartMart-Solutions",
    demo: "https://smartmart-demo-mock.web.app/",
    image: "/smartmart.png",
  },
  {
    title: "Kanban List - Ionic",
    desc: "Gerenciador de tarefas mobile-first com Ionic 7, Angular 17 e persistência de dados em tempo real via Firebase Firestore.",
    tags: ["Ionic", "Angular", "Firebase", "Mobile"],
    repo: "https://github.com/adrianoads910-max/Kanban-List-Ionic-Angular",
    demo: "https://kanban-board-74f5a.web.app/",
    image: "/kanbanpage.png",
  },
  {
    title: "PokeApi-FullStack",
    desc: "Aplicação full-stack que consome a PokéAPI, com autenticação de usuários, sistema de favoritos e busca de Pokémons.",
    tags: ["Angular", "Tailwind CSS", "Python"],
    repo: "https://github.com/adrianoads910-max/PokeApi-FullStack",
    demo: "https://adrianoads910-max.github.io/PokeApi-FullStack/",
    image: "/pokeapi2.png",
  },
  {
    title: "LabNews",
    desc: "Projeto front-end de uma loja de produtos químicos, com layout responsivo e componentes reutilizáveis.",
    tags: ["React", "Tailwind CSS", "API"],
    repo: "https://github.com/adrianoads910-max/labnews",
    demo: "https://labnews-prod.web.app",
    image: "/labnews.png",
  },
  {
    title: "Goldfit",
    desc: "Aplicação Web/Plataforma para gerenciamento e visualização de serviços, treinos e ofertas no nicho fitness e wellness.",
    tags: ["React", "Tailwind CSS", "API"],
    repo: "https://github.com/adrianoads910-max/goldfit",
    demo: "https://adrianoads910-max.github.io/goldfit/",
    image: "/goldfit.png",
  },
  {
    title: "Restaurant Analytics API",
    desc: "API REST e Dashboard para análise de performance de restaurantes. Foco em backend, tratamento de dados e arquitetura escalável.",
    tags: ["Python", "SQLite", "API REST", "Backend"],
    repo: "https://github.com/adrianoads910-max/Restaurant-Analytics-API",
    demo: null,
    image: "/dashboard.jpeg",
  },
];

// Agrupa projetos em slides de N itens
function chunk(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) result.push(arr.slice(i, i + size));
  return result;
}

const slides = chunk(projects, PER_SLIDE);
const total = slides.length;

export const Projects = () => {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef(null);
  const progressRef = useRef(null);
  const progressStartRef = useRef(null);
  const startXRef = useRef(0);

  const goTo = useCallback((n) => {
    setCurrent(((n % total) + total) % total);
  }, []);

  const startProgress = useCallback(() => {
    cancelAnimationFrame(progressRef.current);
    progressStartRef.current = performance.now();
    const tick = (now) => {
      const elapsed = now - progressStartRef.current;
      const pct = Math.min((elapsed / AUTOPLAY_MS) * 100, 100);
      setProgress(pct);
      if (pct < 100) progressRef.current = requestAnimationFrame(tick);
    };
    progressRef.current = requestAnimationFrame(tick);
  }, []);

  const resetAutoplay = useCallback(() => {
    clearInterval(timerRef.current);
    startProgress();
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
      startProgress();
    }, AUTOPLAY_MS);
  }, [startProgress]);

  useEffect(() => {
    resetAutoplay();
    return () => {
      clearInterval(timerRef.current);
      cancelAnimationFrame(progressRef.current);
    };
  }, [resetAutoplay]);

  const handlePrev = () => { goTo(current - 1); resetAutoplay(); };
  const handleNext = () => { goTo(current + 1); resetAutoplay(); };
  const handleDot = (i) => { goTo(i); resetAutoplay(); };

  const onPointerDown = (e) => { startXRef.current = e.clientX; };
  const onPointerUp = (e) => {
    const dx = e.clientX - startXRef.current;
    if (Math.abs(dx) > 40) { dx < 0 ? handleNext() : handlePrev(); }
  };

  return (
    <section id="projects" className="py-20 max-w-6xl mx-auto px-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-10">
        <div>
          <h2 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">
            Projetos em Destaque
          </h2>
          <p className="text-slate-500 dark:text-slate-400">
            Seleção estratégica focada em soluções comerciais e complexas.
          </p>
        </div>
        <a
          href="https://github.com/adrianoads910-max?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="text-indigo-600 dark:text-indigo-400 hover:underline mt-4 md:mt-0 flex items-center gap-1 font-medium"
        >
          Ver todos no GitHub <Icons.External />
        </a>
      </div>

      {/* Track */}
      <div
        className="overflow-hidden rounded-xl"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
      >
        <div
          className="flex transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((group, gi) => (
            <div
              key={gi}
              className="min-w-full grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {group.map((project, pi) => (
                <div
                  key={pi}
                  className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
                >
                  <div className="h-44 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => { e.target.src = '/fallback-project.png'; }}
                    />
                  </div>

                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-grow leading-relaxed">
                      {project.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs font-semibold rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 mt-auto border-t border-slate-100 dark:border-slate-700 pt-4">
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
                      >
                        <Icons.GitHub /> Código
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
                        >
                          <Icons.External /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-4">
        {/* Setas */}
        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            disabled={current === 0}
            aria-label="Slide anterior"
            className="w-9 h-9 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-700 disabled:opacity-30 transition active:scale-95"
          >
            <IconChevronLeft />
          </button>
          <button
            onClick={handleNext}
            disabled={current === total - 1}
            aria-label="Próximo slide"
            className="w-9 h-9 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-700 disabled:opacity-30 transition active:scale-95"
          >
            <IconChevronRight />
          </button>
        </div>

        {/* Dots */}
        <div className="flex gap-2 items-center">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDot(i)}
              aria-label={`Ir para slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? 'w-4 h-2.5 bg-indigo-600 dark:bg-indigo-400'
                  : 'w-2.5 h-2.5 bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
              }`}
            />
          ))}
        </div>

        {/* Contador */}
        <span className="text-sm text-slate-400 dark:text-slate-500 tabular-nums">
          {current + 1} / {total}
        </span>
      </div>
    </section>
  );
};

export default Projects;