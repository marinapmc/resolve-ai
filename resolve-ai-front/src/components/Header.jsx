import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Icon from "./Icon.jsx";

const LINKS = [
  { to: "/", label: "Início", end: true },
  { to: "/catalogo", label: "Explorar serviços" },
  { to: "/pedidos", label: "Meus pedidos" },
  { to: "/prestador", label: "Sou prestador" },
];

const linkBase = "font-medium px-1 py-3 border-b lg:px-0.5 lg:py-2 lg:border-b-2";
const linkActive = "text-primary border-primary";
const linkIdle =
  "text-ink-secondary border-line hover:text-primary hover:border-primary lg:border-transparent";

const btnBase =
  "inline-flex items-center justify-center gap-2 font-heading font-semibold rounded-full whitespace-nowrap transition active:scale-[0.98] px-4 py-2 text-[0.85rem]";
const btnGhost = "bg-transparent text-ink-secondary hover:bg-line hover:text-ink";
const btnPrimary = "bg-primary text-white shadow-sm hover:bg-primary-dark hover:shadow-md";

// Telas "públicas" mostram Entrar/Cadastrar-se; as demais mostram o avatar do usuário.
const PUBLIC = ["/", "/catalogo", "/perfil"];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Fecha o menu mobile quando a rota muda.
  useEffect(() => setOpen(false), [pathname]);

  const isPublic = PUBLIC.includes(pathname);
  const isProvider = pathname.startsWith("/prestador");

  return (
    <header className="sticky top-0 z-[100] bg-surface border-b border-line">
      <div className="container flex items-center justify-between h-header gap-5">
        <Link to="/" className="flex items-center gap-2.5 font-heading font-bold text-[1.25rem] text-ink">
          <Icon
            name="hammer-wrench"
            className="box-content inline-flex items-center justify-center size-5 p-[9px] rounded-md bg-brand text-white"
          />
          <span>Resolve<span className="text-accent">Aí</span></span>
        </Link>

        <nav
          id="navLinks"
          className={`fixed top-header inset-x-0 flex flex-col items-stretch gap-0 bg-surface px-5 pt-2 pb-4 border-b border-line transition-[transform,opacity] duration-200 lg:static lg:flex-row lg:items-center lg:gap-7 lg:bg-transparent lg:p-0 lg:border-0 lg:translate-y-0 lg:opacity-100 lg:pointer-events-auto lg:transition-none ${
            open ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-2 opacity-0 pointer-events-none"
          }`}
        >
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkIdle}`}
            >
              {l.label}
            </NavLink>
          ))}
          {isPublic && (
            <div className="flex sm:hidden gap-2.5 pt-3 mt-2 border-t border-line">
              <Link to="/pedidos" className={`${btnBase} ${btnGhost} flex-1`}>Entrar</Link>
              <Link to="/catalogo" className={`${btnBase} ${btnPrimary} flex-1`}>Cadastrar-se</Link>
            </div>
          )}
        </nav>

        <div className="flex items-center gap-3">
          {isPublic ? (
            <>
              <Link to="/pedidos" className={`hidden sm:inline-flex ${btnBase} ${btnGhost}`}>Entrar</Link>
              <Link to="/catalogo" className={`hidden sm:inline-flex ${btnBase} ${btnPrimary}`}>Cadastrar-se</Link>
            </>
          ) : (
            <div
              className={`inline-flex items-center justify-center rounded-full font-heading font-semibold text-white shrink-0 size-9 text-[0.8rem] ${
                isProvider ? "avatar-c3" : "avatar-c2"
              }`}
            >
              {isProvider ? "JP" : "MP"}
            </div>
          )}
          <button
            className="inline-flex lg:hidden size-11 items-center justify-center rounded-sm hover:bg-page"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="navLinks"
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? "close" : "menu"} className="size-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
