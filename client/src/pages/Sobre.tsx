/**
 * Sobre Page — Obsidian Craft Design
 * Apresentação pessoal, formação, habilidades detalhadas, linha do tempo
 */
import { GraduationCap, Code2, Briefcase, BookOpen, Coffee, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663658076219/BscqWvxGePSn9JiyPM5yx7/about-visual-dij27UseZmz4u73sy7nXNF.webp";

const techStack = [
  { category: "Linguagens", items: ["Python", "HTML5", "CSS3", "JavaScript"] },
  { category: "Ferramentas", items: ["Git", "GitHub", "VS Code", "Linux"] },
  { category: "Banco de Dados", items: ["SQL", "MySQL", "SQLite"] },
  { category: "Aprendendo", items: ["React", "Node.js", "Docker", "APIs REST"] },
];

const timeline = [
  {
    year: "2026",
    title: "Início do curso de ADS",
    description: "Ingressei no curso de Análise e Desenvolvimento de Sistemas, começando minha jornada formal na área de tecnologia.",
    icon: <GraduationCap size={16} />,
    color: "#4FACFE",
  },
  {
    year: "2026",
    title: "Estudando e aprendendo",
    description: "Desde que comecei a faculdade, venho estudando Python, HTML, CSS e JavaScript, desenvolvendo projetos para consolidar o aprendizado.",
    icon: <Code2 size={16} />,
    color: "#00F2FE",
  },
  {
    year: "2026",
    title: "Primeiros projetos",
    description: "Desenvolvi meus primeiros projetos web: Calculadora, Quiz para Programadores e Rifa App, aplicando os conhecimentos adquiridos.",
    icon: <BookOpen size={16} />,
    color: "#F7971E",
  },
  {
    year: "2026",
    title: "Em busca de estágio",
    description: "Ativamente procurando uma oportunidade de estágio para aplicar meus conhecimentos e crescer profissionalmente ao lado de uma equipe experiente.",
    icon: <Briefcase size={16} />,
    color: "#FFD200",
  },
  {
    year: "2028",
    title: "Conclusão prevista",
    description: "Previsão de conclusão do curso de Análise e Desenvolvimento de Sistemas no 1º semestre de 2028.",
    icon: <GraduationCap size={16} />,
    color: "#00F2FE",
  },
];

const values = [
  {
    icon: <Code2 size={20} />,
    title: "Código limpo",
    description: "Acredito que bom código é aquele que outros conseguem ler e entender facilmente.",
    color: "#4FACFE",
  },
  {
    icon: <BookOpen size={20} />,
    title: "Aprendizado contínuo",
    description: "A tecnologia evolui rápido, e eu evoluo junto. Sempre há algo novo para aprender.",
    color: "#F7971E",
  },
  {
    icon: <Coffee size={20} />,
    title: "Dedicação",
    description: "Cada projeto recebe minha atenção total. Prefiro fazer menos coisas, mas com qualidade.",
    color: "#FFD200",
  },
];

export default function Sobre() {
  return (
    <div className="min-h-screen bg-[#0D0D0F] text-white">
      <Navbar />

      {/* ─── PAGE HEADER ─── */}
      <section className="pt-32 pb-16 bg-[#0D0D0F]">
        <div className="container">
          <div className="max-w-2xl">
            <p className="text-[#4FACFE] text-sm font-medium mb-3 tracking-widest uppercase animate-fade-in"
              style={{ fontFamily: "var(--font-mono)" }}>
              Sobre mim
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up delay-100"
              style={{ fontFamily: "var(--font-display)" }}>
              Quem sou{" "}
              <span className="text-gradient-cyan">eu?</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed animate-fade-in-up delay-200"
              style={{ fontFamily: "var(--font-body)" }}>
              Um estudante apaixonado por tecnologia, que acredita que programação é uma ferramenta
              poderosa para resolver problemas reais e criar experiências incríveis.
            </p>
          </div>
        </div>
      </section>

      {/* ─── ABOUT CONTENT ─── */}
      <section className="py-16 bg-[#0A0A0C]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="animate-slide-in-left order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[#4FACFE]/20 to-[#00F2FE]/10 blur-sm" />
                <img
                  src={ABOUT_IMG}
                  alt="Desenvolvedor trabalhando"
                  className="relative rounded-2xl w-full object-cover border border-white/5"
                  style={{ maxHeight: "460px" }}
                />
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 px-4 py-3 rounded-xl bg-[#141418] border border-white/10 shadow-xl">
                  <p className="text-xs text-white/50 mb-0.5" style={{ fontFamily: "var(--font-mono)" }}>Status</p>
                  <p className="text-sm font-semibold text-[#4FACFE]" style={{ fontFamily: "var(--font-display)" }}>
                    Disponível para estágio
                  </p>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="animate-fade-in-up delay-200 order-1 lg:order-2">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6"
                style={{ fontFamily: "var(--font-display)" }}>
                Olá! Sou o Mauricio 👋
              </h2>
              <div className="space-y-4 text-white/60 leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}>
                <p>
                  Tenho 22 anos, sou de Curitiba/PR e estou cursando <strong className="text-white/80">Análise e Desenvolvimento de Sistemas</strong>.
                  Comecei minha jornada na programação em 2026 e desde então venho estudando, criando projetos e me desafiando
                  a aprender cada vez mais. Programação não é só uma carreira para mim, é uma paixão.
                </p>
                <p>
                  Trabalho principalmente com <strong className="text-[#4FACFE]">Python</strong>, mas também tenho desenvolvido
                  projetos web com HTML, CSS e JavaScript. Gosto de criar soluções práticas que resolvem problemas reais.
                  Meus projetos no portfólio refletem isso: uma calculadora funcional, um quiz interativo e um app de rifas.
                </p>
                <p>
                  No momento, estou buscando meu primeiro <strong className="text-[#F7971E]">estágio</strong> para colocar em prática
                  tudo que aprendi e crescer ao lado de profissionais experientes. Sou dedicado, aprendo rápido e sempre busco
                  fazer as coisas com qualidade. Se você tem uma oportunidade, adoraria conversar!
                </p>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  { value: "22", label: "Anos de idade" },
                  { value: "3", label: "Projetos" },
                  { value: "2028", label: "Conclusão" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-4 rounded-xl bg-[#141418] border border-white/5">
                    <p className="text-2xl font-bold text-gradient-cyan mb-1"
                      style={{ fontFamily: "var(--font-display)" }}>
                      {stat.value}
                    </p>
                    <p className="text-xs text-white/40" style={{ fontFamily: "var(--font-body)" }}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TECH STACK ─── */}
      <section className="py-20 bg-[#0D0D0F]">
        <div className="container">
          <div className="mb-12">
            <p className="text-[#4FACFE] text-sm font-medium mb-2 tracking-widest uppercase"
              style={{ fontFamily: "var(--font-mono)" }}>
              Tecnologias
            </p>
            <h2 className="text-3xl font-bold text-white"
              style={{ fontFamily: "var(--font-display)" }}>
              Stack & Ferramentas
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((group, i) => (
              <div
                key={group.category}
                className={`animate-fade-in-up delay-${(i + 1) * 100} p-5 rounded-2xl bg-[#141418] border border-white/5`}
              >
                <h3 className="text-sm font-semibold text-white/50 mb-4 uppercase tracking-wider"
                  style={{ fontFamily: "var(--font-mono)" }}>
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="skill-badge">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section className="py-20 bg-[#0A0A0C]">
        <div className="container">
          <div className="mb-12">
            <p className="text-[#4FACFE] text-sm font-medium mb-2 tracking-widest uppercase"
              style={{ fontFamily: "var(--font-mono)" }}>
              Valores
            </p>
            <h2 className="text-3xl font-bold text-white"
              style={{ fontFamily: "var(--font-display)" }}>
              O que me guia
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <div
                key={value.title}
                className={`animate-fade-in-up delay-${(i + 1) * 150} p-6 rounded-2xl bg-[#141418] border border-white/5 card-hover`}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${value.color}15`, color: value.color }}
                >
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2"
                  style={{ fontFamily: "var(--font-display)" }}>
                  {value.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TIMELINE ─── */}
      <section className="py-20 bg-[#0D0D0F]">
        <div className="container">
          <div className="mb-12">
            <p className="text-[#4FACFE] text-sm font-medium mb-2 tracking-widest uppercase"
              style={{ fontFamily: "var(--font-mono)" }}>
              Jornada
            </p>
            <h2 className="text-3xl font-bold text-white"
              style={{ fontFamily: "var(--font-display)" }}>
              Minha trajetória
            </h2>
          </div>

          <div className="relative max-w-2xl">
            {/* Vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-[#4FACFE]/40 via-[#4FACFE]/20 to-transparent" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div
                  key={`${item.year}-${item.title}`}
                  className={`animate-fade-in-up delay-${(i + 1) * 100} relative flex gap-6 pl-14`}
                >
                  {/* Dot */}
                  <div
                    className="absolute left-0 w-10 h-10 rounded-full flex items-center justify-center border-2 bg-[#0D0D0F]"
                    style={{ borderColor: item.color, color: item.color }}
                  >
                    {item.icon}
                  </div>

                  <div className="flex-1 pb-2">
                    <div className="flex items-center gap-3 mb-1">
                      <span
                        className="text-xs font-semibold px-2 py-0.5 rounded-full"
                        style={{
                          background: `${item.color}15`,
                          color: item.color,
                          fontFamily: "var(--font-mono)",
                        }}
                      >
                        {item.year}
                      </span>
                      <h3 className="text-base font-bold text-white"
                        style={{ fontFamily: "var(--font-display)" }}>
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed"
                      style={{ fontFamily: "var(--font-body)" }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
