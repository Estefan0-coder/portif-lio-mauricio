/**
 * Projetos Page — Obsidian Craft Design
 * Grid de projetos com filtros por tecnologia, cards com hover elevation
 */
import { useState } from "react";
import { Github, ExternalLink, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PROJECTS_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663658076219/BscqWvxGePSn9JiyPM5yx7/projects-bg-YsywfKRf6cejp89ST54Ci2.webp";

const projects = [
  {
    id: 1,
    title: "Calculadora Web",
    description: "Calculadora responsiva desenvolvida com HTML, CSS e JavaScript puro. Suporta operações básicas e avançadas com interface intuitiva e tema moderno.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Estefan0-coder/Calculadora.git",
    demo: "https://estefan0-coder.github.io/Calculadora/",
    featured: true,
    status: "Concluído",
  },
  {
    id: 2,
    title: "Quiz para Programadores",
    description: "Aplicação interativa de quiz desenvolvida com HTML, CSS e JavaScript. Testa conhecimentos de programação com perguntas dinâmicas carregadas de JSON.",
    tags: ["HTML", "CSS", "JavaScript", "JSON"],
    github: "https://github.com/Estefan0-coder/Quizparaprogramador.git",
    demo: "https://estefan0-coder.github.io/Quizparaprogramador/",
    featured: true,
    status: "Concluído",
  },
  {
    id: 3,
    title: "Rifa App",
    description: "Aplicação web para gerenciamento de rifas desenvolvida com HTML, CSS e JavaScript. Interface responsiva com funcionalidades completas para controle de participantes.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Estefan0-coder/Rifa-App.git",
    demo: "https://estefan0-coder.github.io/Rifa-App/",
    featured: true,
    status: "Concluído",
  },
];

const allTags = ["Todos", ...Array.from(new Set(projects.flatMap((p) => p.tags)))];

const statusColors: Record<string, string> = {
  "Concluído": "#4FACFE",
  "Em desenvolvimento": "#F7971E",
};

export default function Projetos() {
  const [activeTag, setActiveTag] = useState("Todos");
  const [search, setSearch] = useState("");

  const filtered = projects.filter((p) => {
    const matchTag = activeTag === "Todos" || p.tags.includes(activeTag);
    const matchSearch =
      search === "" ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());
    return matchTag && matchSearch;
  });

  return (
    <div className="min-h-screen bg-[#0D0D0F] text-white">
      <Navbar />

      {/* ─── PAGE HEADER ─── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${PROJECTS_BG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0F]/60 via-[#0D0D0F]/80 to-[#0D0D0F]" />

        <div className="container relative z-10">
          <div className="max-w-2xl">
            <p className="text-[#4FACFE] text-sm font-medium mb-3 tracking-widest uppercase animate-fade-in"
              style={{ fontFamily: "var(--font-mono)" }}>
              Portfólio
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up delay-100"
              style={{ fontFamily: "var(--font-display)" }}>
              Meus{" "}
              <span className="text-gradient-cyan">Projetos</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed animate-fade-in-up delay-200"
              style={{ fontFamily: "var(--font-body)" }}>
              Uma coleção dos projetos que desenvolvi durante meu aprendizado.
              Cada um representa um desafio superado e uma habilidade adquirida.
            </p>
          </div>
        </div>
      </section>

      {/* ─── FILTERS ─── */}
      <section className="py-8 bg-[#0D0D0F] border-b border-white/5 sticky top-16 z-40 backdrop-blur-md bg-[#0D0D0F]/90">
        <div className="container">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            {/* Tag filters */}
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                    activeTag === tag
                      ? "bg-gradient-to-r from-[#4FACFE] to-[#00F2FE] text-[#0D0D0F]"
                      : "bg-white/5 border border-white/8 text-white/50 hover:text-white hover:bg-white/10"
                  }`}
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
              <input
                type="text"
                placeholder="Buscar projeto..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 pr-4 py-1.5 rounded-lg bg-white/5 border border-white/8 text-white/70 text-sm placeholder-white/25 focus:outline-none focus:border-[#4FACFE]/40 focus:bg-white/8 transition-all w-48"
                style={{ fontFamily: "var(--font-body)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROJECTS GRID ─── */}
      <section className="py-16 bg-[#0D0D0F]">
        <div className="container">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-white/30 text-lg" style={{ fontFamily: "var(--font-display)" }}>
                Nenhum projeto encontrado.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project, i) => (
                <div
                  key={project.id}
                  className={`animate-fade-in-up delay-${Math.min((i + 1) * 100, 600)} group relative flex flex-col p-6 rounded-2xl bg-[#141418] border border-white/5 card-hover border-glow-cyan overflow-hidden`}
                >
                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-[#4FACFE]/10 text-[#4FACFE] border border-[#4FACFE]/20"
                        style={{ fontFamily: "var(--font-mono)" }}>
                        Destaque
                      </span>
                    </div>
                  )}

                  {/* Top gradient line */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl bg-gradient-to-r from-transparent via-[#4FACFE]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Status */}
                  <div className="flex items-center gap-1.5 mb-4">
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: statusColors[project.status] }}
                    />
                    <span
                      className="text-xs"
                      style={{
                        color: statusColors[project.status],
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 pr-16"
                    style={{ fontFamily: "var(--font-display)" }}>
                    {project.title}
                  </h3>

                  <p className="text-white/50 text-sm leading-relaxed mb-5 flex-1"
                    style={{ fontFamily: "var(--font-body)" }}>
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="skill-badge">{tag}</span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                    <a
                      href={project.github}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-white/40 hover:text-white transition-colors"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      <Github size={13} />
                      Código
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-white/40 hover:text-[#4FACFE] transition-colors"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        <ExternalLink size={13} />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
