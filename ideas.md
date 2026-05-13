# Brainstorm de Design — Portfólio Dev Dark

## Contexto
Portfólio para estudante de Análise e Desenvolvimento de Sistemas em busca de estágio.
Habilidades: Python, HTML, JS, CSS. Conclusão do curso: 1º semestre de 2028.

---

<response>
<probability>0.07</probability>
<text>

## Ideia 1 — "Terminal Noir"

**Design Movement:** Cyberpunk minimalista / Hacker aesthetic

**Core Principles:**
- Interface que imita um terminal de linha de comando, mas com elegância
- Contraste extremo: fundo quase preto com texto verde-neon e branco
- Tipografia monospace como elemento principal de identidade
- Ruído e grain como textura de fundo para profundidade

**Color Philosophy:**
- Fundo: #0A0A0A (quase preto absoluto)
- Primário: #00FF88 (verde terminal neon)
- Secundário: #1A1A2E (azul-escuro profundo)
- Texto: #E0E0E0 (cinza claro)
- Acento: #FF6B35 (laranja para CTAs)
- Emoção: Competência técnica, precisão, hacking culture

**Layout Paradigm:**
- Assimétrico com sidebar fixa à esquerda (navegação vertical)
- Conteúdo principal com padding generoso à direita
- Linhas de "código" decorativas no fundo (pseudo-terminal)
- Cursor piscante em títulos

**Signature Elements:**
- Prompt de terminal antes de títulos: `> nome_da_seção`
- Bordas com efeito de "scanline" sutil
- Animação de "digitação" (typewriter) em textos chave

**Interaction Philosophy:**
- Hover em links simula comando de terminal
- Transições rápidas e precisas, sem floreios
- Feedback visual imediato em todos os cliques

**Animation:**
- Typewriter effect no título principal (150ms por caractere)
- Fade-in com translate-Y nos cards de projeto (stagger 60ms)
- Cursor piscante em elementos de destaque

**Typography System:**
- Display: JetBrains Mono Bold (títulos)
- Body: JetBrains Mono Regular (texto)
- Hierarquia: 48px / 24px / 16px / 14px

</text>
</response>

<response>
<probability>0.08</probability>
<text>

## Ideia 2 — "Obsidian Craft" ✅ ESCOLHIDA

**Design Movement:** Brutalismo refinado / Material Dark Premium

**Core Principles:**
- Superfícies em camadas com profundidade real (não planas)
- Tipografia expressiva com contraste de peso extremo
- Espaço negativo como elemento de luxo
- Detalhes em ciano/azul elétrico como assinatura visual

**Color Philosophy:**
- Fundo base: #0D0D0F (quase preto com leve tom azulado)
- Superfície: #141418 (cards e seções)
- Elevado: #1C1C22 (hover states, tooltips)
- Primário: #4FACFE → #00F2FE (gradiente ciano-azul elétrico)
- Acento quente: #F7971E → #FFD200 (gradiente âmbar para destaques)
- Texto primário: #F0F0F5
- Texto secundário: #8888A0
- Emoção: Profissionalismo moderno, ambição, precisão técnica

**Layout Paradigm:**
- Hero assimétrico com texto à esquerda e visual abstrato à direita
- Navegação horizontal topo com linha de acento animada
- Cards de projeto em grid irregular (destaque para o primeiro)
- Seções com divisores diagonais sutis

**Signature Elements:**
- Gradiente ciano-azul em textos de destaque e bordas de cards ativos
- Números grandes e translúcidos como decoração de fundo nas seções
- Linha horizontal fina em ciano como separador de seções

**Interaction Philosophy:**
- Cards elevam-se com sombra colorida no hover
- Botões com efeito de "glow" sutil em ciano no hover
- Navegação com indicador de seção ativa animado

**Animation:**
- Entrance: fade + translateY(20px) → translateY(0) em 400ms ease-out
- Cards: scale(1) → scale(1.02) + box-shadow colorida em 200ms
- Botões: glow pulse em 300ms ease-out
- Stagger de 80ms entre itens de lista

**Typography System:**
- Display: Space Grotesk Bold/ExtraBold (títulos impactantes)
- Body: DM Sans Regular/Medium (leitura confortável)
- Mono: Fira Code (snippets de código e badges de tecnologia)
- Hierarquia: 64px / 40px / 28px / 18px / 14px

</text>
</response>

<response>
<probability>0.06</probability>
<text>

## Ideia 3 — "Void Geometric"

**Design Movement:** Construtivismo digital / Swiss International Style dark

**Core Principles:**
- Geometria como linguagem visual primária
- Grid rigoroso com quebras intencionais
- Paleta ultra-restrita: preto, branco, um único acento
- Tipografia como elemento gráfico principal

**Color Philosophy:**
- Fundo: #080808
- Texto: #F5F5F5
- Acento único: #7C3AED (violeta profundo)
- Superfície: #111111
- Emoção: Ordem, clareza, sofisticação intelectual

**Layout Paradigm:**
- Grid de 12 colunas com elementos que quebram o grid intencionalmente
- Números de seção grandes e rotacionados como decoração
- Linha vertical de acento à esquerda como guia visual

**Signature Elements:**
- Formas geométricas (círculos, triângulos) em violeta como decoração
- Tipografia rotacionada 90° em elementos decorativos
- Bordas de 1px em violeta em elementos selecionados

**Interaction Philosophy:**
- Transições de página com wipe horizontal
- Hover revela informação adicional com clip-path animation

**Animation:**
- Clip-path reveal em seções (300ms ease-in-out)
- Rotação de elementos decorativos no scroll
- Fade simples em conteúdo de texto

**Typography System:**
- Display: Bebas Neue (títulos grandes e impactantes)
- Body: IBM Plex Sans (corpo técnico e limpo)
- Mono: IBM Plex Mono (código)

</text>
</response>

---

## Decisão Final: **Ideia 2 — "Obsidian Craft"**

Design escolhido por equilibrar modernidade, profissionalismo e impacto visual.
Gradiente ciano-azul como assinatura, tipografia expressiva com Space Grotesk,
layout assimétrico com profundidade real nas superfícies.
