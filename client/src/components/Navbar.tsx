/**
 * Navbar — Obsidian Craft Design
 * Top navigation with animated underline indicator, mobile hamburger menu
 * Colors: dark bg, cyan-blue accent, Space Grotesk font
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Code2 } from "lucide-react";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/projetos", label: "Projetos" },
  { href: "/contato", label: "Contato" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0D0D0F]/90 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/">
          <span className="flex items-center gap-2 group">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4FACFE] to-[#00F2FE] flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300">
              <Code2 size={16} className="text-[#0D0D0F]" strokeWidth={2.5} />
            </span>
            <span
              className="font-display font-bold text-lg text-white/90 tracking-tight group-hover:text-white transition-colors"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Mauricio <span className="text-gradient-cyan">Estefano</span>
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location === link.href;
            return (
              <li key={link.href}>
                <Link href={link.href}>
                  <span
                    className={`nav-link text-sm font-medium transition-colors pb-1 ${
                      isActive
                        ? "text-white active"
                        : "text-white/60 hover:text-white"
                    }`}
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {link.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3">
            <a
              href="mailto:mauricio.estefano.franca.santos@gmail.com"
              className="px-4 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-[#4FACFE] to-[#00F2FE] text-[#0D0D0F] hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-200"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Enviar E-mail
            </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#0D0D0F]/95 backdrop-blur-md border-b border-white/5 px-4 pb-4">
          <ul className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => {
              const isActive = location === link.href;
              return (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span
                      className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? "text-white bg-white/5"
                          : "text-white/60 hover:text-white hover:bg-white/5"
                      }`}
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              );
            })}
            <li className="pt-2">
              <a
                href="mailto:mauricio.estefano.franca.santos@gmail.com"
                className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-center bg-gradient-to-r from-[#4FACFE] to-[#00F2FE] text-[#0D0D0F]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Enviar E-mail
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
