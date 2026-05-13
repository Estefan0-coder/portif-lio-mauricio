/**
 * Home Page — Obsidian Craft Design
 * Hero assimétrico, seção de habilidades, projetos em destaque, CTA de estágio
 * Fontes: Space Grotesk (display), DM Sans (body), Fira Code (mono)
 * Cores: fundo #0D0D0F, acento ciano-azul, âmbar para destaques
 */
import { Link } from "wouter";
import { ArrowRight, Download, Github, Linkedin, ChevronDown, Sparkles, GraduationCap, Briefcase } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663658076219/BscqWvxGePSn9JiyPM5yx7/hero-bg-97XMPCLNDE8QhwZGDPFW4C.webp";

const skills = [
  { name: "HTML", level: 75, color: "#4FACFE" },
  { name: "CSS", level: 70, color: "#00F2FE" },
  { name: "JavaScript", level: 65, color: "#F7971E" },
  { name: "Python", level: 60, color: "#FFD200" },
  { name: "Git", level: 70, color: "#4FACFE" },
  { name: "Responsive Design", level: 75, color: "#00F2FE" },
];

const featuredProjects = [
  {
    title: "Calculadora Web",
    description: "Calculadora responsiva desenvolvida com HTML, CSS e JavaScript puro. Suporta operações básicas e avançadas com interface intuitiva.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Estefan0-coder/Calculadora.git",
    color: "#4FACFE",
  },
  {
    title: "Quiz para Programadores",
    description: "Aplicação interativa de quiz com perguntas dinâmicas carregadas de JSON. Testa conhecimentos de programação.",
    tags: ["HTML", "CSS", "JavaScript", "JSON"],
    github: "https://github.com/Estefan0-coder/Quizparaprogramador.git",
    color: "#F7971E",
  },
  {
    title: "Rifa App",
    description: "Aplicação web para gerenciamento de rifas com interface responsiva e funcionalidades completas para controle de participantes.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Estefan0-coder/Rifa-App.git",
    color: "#00F2FE",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0D0D0F] text-white">
      <Navbar />

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0F] via-[#0D0D0F]/85 to-[#0D0D0F]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0F] via-transparent to-transparent" />

        <div className="container relative z-10 pt-24 pb-16">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="animate-fade-in flex items-center gap-2 mb-6">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#4FACFE]/10 border border-[#4FACFE]/20 text-[#4FACFE] text-xs font-medium"
                style={{ fontFamily: "var(--font-mono)" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#4FACFE] animate-pulse" />
                Disponível para estágio
              </span>
            </div>

            {/* Heading */}
            <h1
              className="animate-fade-in-up delay-100 text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Olá, eu sou um{" "}
              <span className="text-gradient-cyan">desenvolvedor</span>
              <br />
              em formação
              <span className="text-[#4FACFE] animate-blink">_</span>
            </h1>

            {/* Subtitle */}
            <p
              className="animate-fade-in-up delay-200 text-lg md:text-xl text-white/60 leading-relaxed mb-8 max-w-xl"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Estudante de <strong className="text-white/80">Análise e Desenvolvimento de Sistemas</strong>,
              apaixonado por Python e desenvolvimento web. Construindo soluções,
              um commit de cada vez.
            </p>

            {/* Info chips */}
            <div className="animate-fade-in-up delay-300 flex flex-wrap gap-3 mb-10">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/8 text-white/60 text-sm"
                style={{ fontFamily: "var(--font-body)" }}>
                <GraduationCap size={14} className="text-[#4FACFE]" />
                Conclusão: 1º sem. 2028
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/8 text-white/60 text-sm"
                style={{ fontFamily: "var(--font-body)" }}>
                <Briefcase size={14} className="text-[#F7971E]" />
                Em busca de estágio
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/8 text-white/60 text-sm"
                style={{ fontFamily: "var(--font-mono)" }}>
                <Sparkles size={14} className="text-[#FFD200]" />
                HTML · CSS · JS · Python
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="animate-fade-in-up delay-400 flex flex-wrap gap-4">
              <Link href="/projetos">
                <span className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-[#4FACFE] to-[#00F2FE] text-[#0D0D0F] hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-200"
                  style={{ fontFamily: "var(--font-display)" }}>
                  Ver Projetos
                  <ArrowRight size={16} />
                </span>
              </Link>
              <a
                href="/Mauricio_Estefano.pdf"
                download="Mauricio Estefano.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-200"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <Download size={16} />
                Currículo
              </a>
            </div>

            {/* Social links */}
            <div className="animate-fade-in-up delay-500 flex items-center gap-4 mt-8">
              <a href="https://github.com/Estefan0-coder" target="_blank" rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/5 border border-white/8 text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/mauricio-estefano-253048391" target="_blank" rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/5 border border-white/8 text-white/50 hover:text-[#4FACFE] hover:bg-[#4FACFE]/10 hover:border-[#4FACFE]/30 transition-all duration-200">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30 animate-bounce">
          <span className="text-xs" style={{ fontFamily: "var(--font-mono)" }}>scroll</span>
          <ChevronDown size={16} />
        </div>
      </section>

      {/* ─── SKILLS ─── */}
      <section className="py-24 bg-[#0D0D0F]">
        <div className="container">
          <div className="flex items-start gap-6 mb-16">
            <span className="section-number hidden lg:block select-none">01</span>
            <div>
              <p className="text-[#4FACFE] text-sm font-medium mb-2 tracking-widest uppercase"
                style={{ fontFamily: "var(--font-mono)" }}>
                Habilidades
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white"
                style={{ fontFamily: "var(--font-display)" }}>
                Tecnologias que{" "}
                <span className="text-gradient-cyan">domino</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            {skills.map((skill, i) => (
              <div
                key={skill.name}
                className={`animate-fade-in-up delay-${(i + 1) * 100}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white/80 font-medium text-sm"
                    style={{ fontFamily: "var(--font-mono)" }}>
                    {skill.name}
                  </span>
                  <span className="text-white/40 text-xs"
                    style={{ fontFamily: "var(--font-mono)" }}>
                    {skill.level}%
                  </span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{
                      width: `${skill.level}%`,
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}99)`,
                      boxShadow: `0 0 8px ${skill.color}60`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED PROJECTS ─── */}
      <section className="py-24 bg-[#0A0A0C]">
        <div className="container">
          <div className="flex items-start gap-6 mb-16">
            <span className="section-number hidden lg:block select-none">02</span>
            <div className="flex-1">
              <p className="text-[#4FACFE] text-sm font-medium mb-2 tracking-widest uppercase"
                style={{ fontFamily: "var(--font-mono)" }}>
                Projetos
              </p>
              <div className="flex items-end justify-between flex-wrap gap-4">
                <h2 className="text-3xl md:text-4xl font-bold text-white"
                  style={{ fontFamily: "var(--font-display)" }}>
                  Trabalhos em{" "}
                  <span className="text-gradient-cyan">destaque</span>
                </h2>
                <Link href="/projetos">
                  <span className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-[#4FACFE] transition-colors"
                    style={{ fontFamily: "var(--font-display)" }}>
                    Ver todos
                    <ArrowRight size={14} />
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project, i) => (
              <div
                key={project.title}
                className={`animate-fade-in-up delay-${(i + 1) * 150} group relative p-6 rounded-2xl bg-[#141418] border border-white/5 card-hover border-glow-cyan overflow-hidden`}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl opacity-60 group-hover:opacity-100 transition-opacity"
                  style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }}
                />

                {/* Number */}
                <span
                  className="absolute top-4 right-5 text-5xl font-black opacity-5 select-none"
                  style={{ fontFamily: "var(--font-display)", color: project.color }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h3 className="text-lg font-bold text-white mb-3 pr-10"
                  style={{ fontFamily: "var(--font-display)" }}>
                  {project.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-5"
                  style={{ fontFamily: "var(--font-body)" }}>
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="skill-badge">{tag}</span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-white/40 hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  <Github size={13} />
                  Ver código
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INTERNSHIP CTA ─── */}
      <section className="py-24 bg-[#0D0D0F]">
        <div className="container">
          <div className="relative rounded-3xl overflow-hidden border border-white/5 bg-[#141418] p-8 md:p-14">
            {/* Background glow */}
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#4FACFE]/5 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[#F7971E]/5 blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="max-w-xl">
                <div className="flex items-center gap-2 mb-4">
                  <Briefcase size={16} className="text-[#F7971E]" />
                  <span className="text-[#F7971E] text-sm font-medium tracking-widest uppercase"
                    style={{ fontFamily: "var(--font-mono)" }}>
                    Oportunidade
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"
                  style={{ fontFamily: "var(--font-display)" }}>
                  Estou em busca de um{" "}
                  <span className="text-gradient-amber">estágio</span>
                </h2>
                <p className="text-white/55 leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}>
                  Sou estudante dedicado, aprendo rápido e estou pronto para contribuir com sua equipe.
                  Se você tem uma vaga de estágio em desenvolvimento, adoraria conversar!
                </p>
              </div>
              <div className="flex flex-col gap-3 shrink-0">
                <Link href="/contato">
                  <span className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-[#F7971E] to-[#FFD200] text-[#0D0D0F] hover:shadow-xl hover:shadow-amber-500/30 transition-all duration-200 w-full"
                    style={{ fontFamily: "var(--font-display)" }}>
                    Entrar em contato
                    <ArrowRight size={16} />
                  </span>
                </Link>
                <a
                  href="/Mauricio_Estefano.pdf"
                  download="Mauricio Estefano.pdf"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white transition-all duration-200"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <Download size={16} />
                  Baixar currículo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
