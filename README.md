# ResolveAí — Entrega AA1

Projeto da disciplina **Desenvolvimento de Software para Web 2** (DC — UFSCar, 02/2026).

**Equipe:** Marina Pena · Vinícius Cotrim

## Sobre

ResolveAí é um marketplace de serviços sob demanda que conecta clientes a profissionais autônomos (encanadores, eletricistas, diaristas, etc). Esta entrega corresponde à **AA1**: layout e telas em HTML + CSS, responsivos, sem lógica de aplicação (requisitos R1, R2 e R3).

## Como visualizar

Basta abrir `index.html` em qualquer navegador — não há dependência de servidor, build ou instalação. Os ícones estão embutidos como SVG em cada página. As dependências externas são o **Tailwind CSS** (carregado via Play CDN, `cdn.tailwindcss.com`) e as fontes do Google Fonts — por isso é preciso estar conectado à internet para ver o layout completo.

## Telas

| Arquivo | Tela |
|---|---|
| `index.html` | Home / Landing page |
| `catalogo.html` | Catálogo de serviços e busca (com filtros) |
| `perfil.html` | Perfil do profissional e agendamento |
| `checkout.html` | Checkout e pagamento (Pix / Cartão) |
| `pedidos.html` | Dashboard do cliente (Meus Pedidos) |
| `prestador-painel.html` | Painel do prestador (chamados, agenda, rendimentos) |
| `prestador-chamado.html` | Detalhe de um chamado (aceitar/recusar) |

## Estrutura de arquivos

```
resolveai/
├── index.html
├── catalogo.html
├── perfil.html
├── checkout.html
├── pedidos.html
├── prestador-painel.html
├── prestador-chamado.html
├── css/
│   └── base.css        (reset, paleta de cores, fontes e tipografia base)
└── js/
    ├── tailwind.config.js (tema do Tailwind: cores/fontes ligadas às variáveis
    │                      do base.css, breakpoints, raios, sombras e gradientes)
    └── main.js          (apenas interações de interface: menu mobile, tabs,
                           filtro em drawer, seleção de pagamento — sem lógica
                           de negócio, dados ou rede)
```

O layout e os componentes são feitos com classes utilitárias do Tailwind direto no HTML. Para mudar uma cor, edite a variável em `css/base.css` — o Tailwind já usa o novo valor (ex.: `bg-primary`, `text-ink-muted`, `border-line`).

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

## Próxima fase (AA2)

Nesta fase as telas são estáticas (mock-up de dados). Na AA2 será implementada a lógica em React, com acesso à rede (R5) e uso de uma API adicional — geolocalização, por exemplo, faz sentido dado o conceito de busca por profissionais próximos (R6).
