/**
 * Contato Page — Obsidian Craft Design
 * Formulário de contato, links sociais
 */
import { useState } from "react";
import { Mail, Github, Linkedin, Send, MapPin, Clock, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const contactInfo = [
  {
    icon: <Mail size={18} />,
    label: "E-mail",
    value: "mauricio.estefano.franca.santos@gmail.com",
    href: "mailto:mauricio.estefano.franca.santos@gmail.com",
    color: "#4FACFE",
  },
  {
    icon: <Github size={18} />,
    label: "GitHub",
    value: "github.com/Estefan0-coder",
    href: "https://github.com/Estefan0-coder",
    color: "#F0F0F5",
  },
  {
    icon: <Linkedin size={18} />,
    label: "LinkedIn",
    value: "linkedin.com/in/mauricio-estefano",
    href: "https://www.linkedin.com/in/mauricio-estefano-253048391",
    color: "#4FACFE",
  },
  {
    icon: <MapPin size={18} />,
    label: "Localização",
    value: "Curitiba, PR",
    href: null,
    color: "#F7971E",
  },
];

export default function Contato() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simula envio
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0D0D0F] text-white">
      <Navbar />

      {/* ─── PAGE HEADER ─── */}
      <section className="pt-32 pb-16 bg-[#0D0D0F]">
        <div className="container">
          <div className="max-w-2xl">
            <p className="text-[#4FACFE] text-sm font-medium mb-3 tracking-widest uppercase animate-fade-in"
              style={{ fontFamily: "var(--font-mono)" }}>
              Contato
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up delay-100"
              style={{ fontFamily: "var(--font-display)" }}>
              Vamos{" "}
              <span className="text-gradient-cyan">conversar?</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed animate-fade-in-up delay-200"
              style={{ fontFamily: "var(--font-body)" }}>
              Estou aberto a colaborações, parcerias e conversas sobre tecnologia.
              Não hesite em entrar em contato!
            </p>
          </div>
        </div>
      </section>

      {/* ─── CONTENT ─── */}
      <section className="py-10 pb-24 bg-[#0D0D0F]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* ─── LEFT: Info ─── */}
            <div className="lg:col-span-2 space-y-6 animate-slide-in-left">
              {/* Availability card */}
              <div className="p-6 rounded-2xl bg-[#141418] border border-[#4FACFE]/15 relative overflow-hidden">
                <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-[#4FACFE]/5 blur-2xl pointer-events-none" />
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-sm font-medium"
                    style={{ fontFamily: "var(--font-mono)" }}>
                    Disponível
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2"
                  style={{ fontFamily: "var(--font-display)" }}>
                  Aberto a Oportunidades
                </h3>
                <p className="text-white/50 text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}>
                  Pronto para novos desafios e projetos interessantes. Vamos criar algo incrível juntos!
                </p>
                <div className="flex items-center gap-1.5 mt-4 text-white/40 text-xs"
                  style={{ fontFamily: "var(--font-mono)" }}>
                  <Clock size={12} />
                  Respondo em até 24 horas
                </div>
              </div>

              {/* Contact links */}
              <div className="space-y-3">
                {contactInfo.map((item) => (
                  <div key={item.label}>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-xl bg-[#141418] border border-white/5 hover:border-white/10 hover:bg-[#1C1C22] transition-all duration-200 group"
                      >
                        <div
                          className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                          style={{ background: `${item.color}15`, color: item.color }}
                        >
                          {item.icon}
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs text-white/40 mb-0.5"
                            style={{ fontFamily: "var(--font-mono)" }}>
                            {item.label}
                          </p>
                          <p className="text-sm text-white/70 group-hover:text-white transition-colors truncate"
                            style={{ fontFamily: "var(--font-body)" }}>
                            {item.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-4 rounded-xl bg-[#141418] border border-white/5">
                        <div
                          className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                          style={{ background: `${item.color}15`, color: item.color }}
                        >
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-xs text-white/40 mb-0.5"
                            style={{ fontFamily: "var(--font-mono)" }}>
                            {item.label}
                          </p>
                          <p className="text-sm text-white/70"
                            style={{ fontFamily: "var(--font-body)" }}>
                            {item.value}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* ─── RIGHT: Form ─── */}
            <div className="lg:col-span-3 animate-fade-in-up delay-200">
              <div className="p-8 rounded-2xl bg-[#141418] border border-white/5">
                {sent ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-[#4FACFE]/10 flex items-center justify-center mb-4">
                      <CheckCircle2 size={32} className="text-[#4FACFE]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2"
                      style={{ fontFamily: "var(--font-display)" }}>
                      Mensagem enviada!
                    </h3>
                    <p className="text-white/50 mb-6"
                      style={{ fontFamily: "var(--font-body)" }}>
                      Obrigado pelo contato. Responderei em breve!
                    </p>
                    <button
                      onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                      className="px-5 py-2.5 rounded-lg text-sm font-medium bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white transition-all"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      Enviar outra mensagem
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h2 className="text-xl font-bold text-white mb-6"
                      style={{ fontFamily: "var(--font-display)" }}>
                      Envie uma mensagem
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div>
                        <label className="block text-xs text-white/50 mb-1.5 font-medium"
                          style={{ fontFamily: "var(--font-mono)" }}>
                          Nome *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Seu nome"
                          className="w-full px-4 py-2.5 rounded-xl bg-[#0D0D0F] border border-white/8 text-white/80 text-sm placeholder-white/20 focus:outline-none focus:border-[#4FACFE]/40 focus:ring-1 focus:ring-[#4FACFE]/20 transition-all"
                          style={{ fontFamily: "var(--font-body)" }}
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs text-white/50 mb-1.5 font-medium"
                          style={{ fontFamily: "var(--font-mono)" }}>
                          E-mail *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="seu@email.com"
                          className="w-full px-4 py-2.5 rounded-xl bg-[#0D0D0F] border border-white/8 text-white/80 text-sm placeholder-white/20 focus:outline-none focus:border-[#4FACFE]/40 focus:ring-1 focus:ring-[#4FACFE]/20 transition-all"
                          style={{ fontFamily: "var(--font-body)" }}
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-xs text-white/50 mb-1.5 font-medium"
                        style={{ fontFamily: "var(--font-mono)" }}>
                        Assunto *
                      </label>
                      <select
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 rounded-xl bg-[#0D0D0F] border border-white/8 text-white/80 text-sm focus:outline-none focus:border-[#4FACFE]/40 focus:ring-1 focus:ring-[#4FACFE]/20 transition-all appearance-none"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        <option value="" disabled>Selecione um assunto</option>
                        <option value="projeto">Proposta de projeto</option>
                        <option value="colaboracao">Colaboração</option>
                        <option value="outro">Outro</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs text-white/50 mb-1.5 font-medium"
                        style={{ fontFamily: "var(--font-mono)" }}>
                        Mensagem *
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Descreva sua mensagem aqui..."
                        className="w-full px-4 py-2.5 rounded-xl bg-[#0D0D0F] border border-white/8 text-white/80 text-sm placeholder-white/20 focus:outline-none focus:border-[#4FACFE]/40 focus:ring-1 focus:ring-[#4FACFE]/20 transition-all resize-none"
                        style={{ fontFamily: "var(--font-body)" }}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-[#4FACFE] to-[#00F2FE] text-[#0D0D0F] hover:shadow-xl hover:shadow-cyan-500/30 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {loading ? (
                        <>
                          <span className="w-4 h-4 border-2 border-[#0D0D0F]/30 border-t-[#0D0D0F] rounded-full animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Enviar mensagem
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
