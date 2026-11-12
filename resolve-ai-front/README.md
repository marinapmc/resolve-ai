# ResolveAí — Entrega AA1

Projeto da disciplina **Desenvolvimento de Software para Web 2** (DC — UFSCar, 02/2026).

**Equipe:** Marina Pena 829844 · Vinícius Cotrim 828637

## Sobre

ResolveAí é um marketplace de serviços sob demanda que conecta clientes a profissionais autônomos (encanadores, eletricistas, diaristas, etc). A AA1 (layout e telas responsivas — R1, R2 e R3) está concluída. Na AA2 o projeto foi migrado para React e já tem duas telas funcionais (**Catálogo** e **Checkout** — R4), com dados simulados. Ainda faltam o acesso à rede (R5) e o uso de uma API adicional (R6).

## Como visualizar

O projeto agora é uma aplicação **React** (Vite + React Router). Com o Node.js instalado:

```bash
npm install
npm run dev      # abre em http://localhost:5173
npm run build    # gera a versão de produção em dist/
```

As dependências externas em tempo de execução são o **Tailwind CSS** (Play CDN, `cdn.tailwindcss.com`) e as fontes do Google Fonts — por isso é preciso estar conectado à internet para ver o layout completo.

## Telas

| Rota | Componente | Tela |
|---|---|---|
| `/` | `src/pages/Home.jsx` | Home / Landing page |
| `/catalogo` | `src/pages/Catalogo.jsx` | Catálogo e busca — **funcional** (busca, filtros, ordenação) |
| `/perfil` | `src/pages/Perfil.jsx` | Perfil do profissional e agendamento |
| `/checkout` | `src/pages/Checkout.jsx` | Checkout e pagamento — **funcional** (Pix / Cartão com validação) |
| `/pedidos` | `src/pages/Pedidos.jsx` | Dashboard do cliente (Meus Pedidos) |
| `/prestador` | `src/pages/PrestadorPainel.jsx` | Painel do prestador (chamados, agenda, rendimentos) |
| `/prestador/chamado` | `src/pages/PrestadorChamado.jsx` | Detalhe de um chamado (aceitar/recusar) |

## Estrutura de arquivos

```
resolveai/
├── index.html              (entrada do Vite: fontes, Tailwind CDN e sprite de ícones)
├── vite.config.js
├── public/
│   ├── css/base.css        (reset, paleta de cores, fontes e tipografia base)
│   └── js/tailwind.config.js (tema do Tailwind: cores/fontes ligadas às variáveis
│                              do base.css, breakpoints, raios, sombras e gradientes)
└── src/
    ├── main.jsx, App.jsx   (inicialização e rotas)
    ├── components/         (Layout, Header, Footer, Icon)
    ├── pages/              (uma tela por arquivo)
    ├── data/profissionais.js (base de dados simulada)
    └── lib/                (lógica pura: filtros do catálogo, pagamento, formatação)
```

O layout e os componentes são feitos com classes utilitárias do Tailwind. Para mudar uma cor, edite a variável em `public/css/base.css` — o Tailwind já usa o novo valor (ex.: `bg-primary`, `text-ink-muted`, `border-line`).

## Identidade visual (R1)

- **Paleta:** azul principal (#2F6FED, confiança/tecnologia) + laranja de destaque (#FF7A30, para CTAs), com cores semânticas para status (sucesso, alerta, erro), inspirada nos princípios do Material Design.
- **Tipografia:** Poppins (títulos) + Roboto (texto), via Google Fonts.
- **Ícones:** conjunto consistente de ícones outline (Material Design Icons), embutidos como sprite SVG local — sem dependência de fontes de ícone externas.
- Componentes (botões, cards, badges de status, avatares, formulários) montados com classes do Tailwind, usando os tokens de cor definidos em `css/base.css`.

## Responsividade (R3)

Todas as telas foram testadas em três larguras (375px, 768px, 1440px) sem overflow horizontal:
- Menu de navegação vira hambúrguer no mobile.
- Sidebar de filtros do catálogo vira um painel deslizante (drawer) no mobile.
- Grids de categorias, resultados e estatísticas se reorganizam por breakpoint.

