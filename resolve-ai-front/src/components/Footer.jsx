import { Link } from "react-router-dom";
import Icon from "./Icon.jsx";

const linkCls = "text-footer-text hover:text-white";

function Col({ title, children }) {
  return (
    <div>
      <h4 className="text-white mb-3.5 text-[0.95rem]">{title}</h4>
      <ul>{children}</ul>
    </div>
  );
}

const Item = ({ to, children }) => (
  <li className="mb-2.5">
    {to ? <Link to={to} className={linkCls}>{children}</Link> : <a href="#" className={linkCls}>{children}</a>}
  </li>
);

export default function Footer() {
  return (
    <footer className="bg-footer text-footer-text pt-12 pb-6 mt-16">
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-8">
        <div>
          <Link to="/" className="flex items-center gap-2.5 font-heading font-bold text-[1.25rem] text-white mb-3">
            <Icon
              name="hammer-wrench"
              className="box-content inline-flex items-center justify-center size-5 p-[9px] rounded-md bg-brand text-white"
            />
            <span>Resolve<span className="text-accent">Aí</span></span>
          </Link>
          <p className="text-footer-muted">
            Conectando clientes a profissionais autônomos de confiança, perto de você.
          </p>
        </div>
        <Col title="Para clientes">
          <Item to="/catalogo">Buscar profissionais</Item>
          <Item to="/pedidos">Meus pedidos</Item>
          <Item>Como funciona</Item>
        </Col>
        <Col title="Para prestadores">
          <Item to="/prestador">Painel do prestador</Item>
          <Item>Cadastrar serviços</Item>
          <Item>Central de ajuda</Item>
        </Col>
        <Col title="ResolveAí">
          <Item>Sobre nós</Item>
          <Item>Termos de uso</Item>
          <Item>Privacidade</Item>
        </Col>
      </div>
      <div className="max-w-[1180px] mx-auto mt-8 px-5 pt-5 border-t border-footer-line text-footer-faint text-[0.85rem] flex justify-between flex-wrap gap-2">
        <span>© 2026 ResolveAí — projeto acadêmico (Desenvolvimento de Software para Web 2, UFSCar)</span>
        <span>Marina Pena · Vinícius Cotrim</span>
      </div>
    </footer>
  );
}
