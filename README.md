Projeto da disciplina **Desenvolvimento de Software para Web 2** (DC — UFSCar, 02/2026).

**Equipe:** Marina Pena (RA 829844) e Vinícius Cotrim (RA 828637).

## Sobre

ResolveAí é um marketplace de serviços sob demanda que conecta clientes a profissionais autônomos (encanadores, eletricistas, diaristas, etc). Esta entrega corresponde à **AA1**: layout e telas em HTML + CSS, responsivos, sem lógica de aplicação.

## Como visualizar

Basta abrir `index.html` em qualquer navegador — não há dependência de servidor, build ou instalação. Todas as páginas funcionam offline (os ícones estão embutidos como SVG em cada página; a única dependência externa são as fontes do Google Fonts para a tipografia, que degradam graciosamente para fontes do sistema caso não haja internet).

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
│   ├── base.css        (reset, tokens de design, tipografia, componentes reutilizáveis)
│   ├── home.css
│   ├── catalogo.css
│   ├── perfil.css
│   ├── checkout.css
│   ├── pedidos.css
│   └── prestador.css
└── js/
    └── main.js          (apenas interações de interface: menu mobile, tabs,
                           filtro em drawer, seleção de pagamento — sem lógica
                           de negócio, dados ou rede)
```

## Identidade visual (R1)

- **Paleta:** azul principal (#2F6FED, confiança/tecnologia) + laranja de destaque (#FF7A30, para CTAs), com cores semânticas para status (sucesso, alerta, erro), inspirada nos princípios do Material Design.
- **Tipografia:** Poppins (títulos) + Roboto (texto), via Google Fonts.
- **Ícones:** conjunto consistente de ícones outline (Material Design Icons), embutidos como sprite SVG local — sem dependência de fontes de ícone externas.
- Componentes reutilizáveis (botões, cards, badges de status, avatares, formulários) compartilhados entre todas as telas via `css/base.css`.

## Responsividade (R3)

Todas as telas foram testadas em três larguras (375px, 768px, 1440px) sem overflow horizontal:
- Menu de navegação vira hambúrguer no mobile.
- Sidebar de filtros do catálogo vira um painel deslizante (drawer) no mobile.
- Grids de categorias, resultados e estatísticas se reorganizam por breakpoint.
