/**
 * Footer — Obsidian Craft Design
 * Minimal dark footer with social links and copyright
 */
import { Github, Linkedin, Mail, Code2 } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#0A0A0C]">
      <div className="container py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-md bg-gradient-to-br from-[#4FACFE] to-[#00F2FE] flex items-center justify-center">
              <Code2 size={14} className="text-[#0D0D0F]" strokeWidth={2.5} />
            </span>
            <span
              className="font-bold text-white/80 text-sm"
              style={{ fontFamily: "var(--font-display)" }}
            >
              dev<span className="text-gradient-cyan">.</span>portfolio
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Estefan0-coder"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-white/40 hover:text-white hover:bg-white/5 transition-all duration-200"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/mauricio-estefano-253048391"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-white/40 hover:text-[#4FACFE] hover:bg-white/5 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:mauricio.estefano.franca.santos@gmail.com"
              className="p-2 rounded-lg text-white/40 hover:text-[#4FACFE] hover:bg-white/5 transition-all duration-200"
              aria-label="E-mail"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Copyright */}
          <p
            className="text-white/30 text-xs"
            style={{ fontFamily: "var(--font-body)" }}
          >
            © {year} · Feito com dedicação e muito café ☕
          </p>
        </div>
      </div>
    </footer>
  );
}
