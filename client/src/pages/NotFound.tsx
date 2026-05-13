/**
 * 404 Page — Obsidian Craft Design
 */
import { Link } from "wouter";
import { Home, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0D0D0F] text-white">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        <p
          className="text-[8rem] md:text-[12rem] font-black leading-none opacity-10 select-none"
          style={{ fontFamily: "var(--font-display)", background: "linear-gradient(135deg, #4FACFE, #00F2FE)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
        >
          404
        </p>
        <h1
          className="text-3xl md:text-4xl font-bold text-white -mt-6 mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Página não encontrada
        </h1>
        <p
          className="text-white/50 mb-10 max-w-sm"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Parece que essa rota não existe. Verifique o endereço ou volte para o início.
        </p>
        <div className="flex gap-4">
          <Link href="/">
            <span className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-[#4FACFE] to-[#00F2FE] text-[#0D0D0F] hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-200"
              style={{ fontFamily: "var(--font-display)" }}>
              <Home size={16} />
              Início
            </span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white transition-all duration-200"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <ArrowLeft size={16} />
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
}
