import { Link, useNavigate } from "react-router-dom";

export default function PrestadorChamado() {
  const navigate = useNavigate();
  
  return (
    <main id="main">
      <div className="container pt-8 pb-16">
        <nav className="flex items-center gap-1.5 text-[0.88rem] text-ink-muted mb-5 flex-wrap" aria-label="breadcrumb">
          <Link to="/prestador" className="hover:text-primary">
            Painel do prestador
          </Link>
          <svg className="inline-block shrink-0 fill-current align-middle size-4" aria-hidden="true">
            <use href="#icon-chevron-right" />
          </svg>
          <span>
            Detalhe do chamado
          </span>
        </nav>
        <h1>
          Vazamento na pia da cozinha
        </h1>
        <p className="text-ink-muted mb-6">
          Chamado recebido hoje às 13:42 · expira em 12 minutos
        </p>
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_340px] gap-6 items-start">
          <div>
            <section className="bg-surface border border-line rounded-md shadow-sm px-7 py-6 mb-5">
              <h2 className="mb-3.5">
                Cliente
              </h2>
              <div className="flex items-center gap-3.5">
                <div className="inline-flex items-center justify-center rounded-full font-heading font-semibold text-white shrink-0 size-14 text-[1.1rem] avatar-c4">
                  FT
                </div>
                <div className="flex-1">
                  <strong>
                    Fernanda Torres
                  </strong>
                  <p className="text-ink-muted text-[0.85rem]">
                    Cliente ResolveAí desde 2025 ·{" "}
                    <span className="inline-flex items-center gap-1.5 font-semibold text-[0.9rem]">
                      <svg className="inline-block shrink-0 fill-current align-middle size-[15px] text-warning" aria-hidden="true">
                        <use href="#icon-star" />
                      </svg>
                      {" "}4.9 como cliente
                    </span>
                  </p>
                </div>
              </div>
            </section>
            <section className="bg-surface border border-line rounded-md shadow-sm px-7 py-6 mb-5">
              <h2 className="mb-3.5">
                Descrição do problema
              </h2>
              <p>
                "A pia da cozinha está vazando por baixo, embaixo do armário. Já desliguei o registro de água, mas preciso que alguém venha ver o mais rápido possível, pois está acumulando água no chão."
              </p>
            </section>
            <section className="bg-surface border border-line rounded-md shadow-sm px-7 py-6 mb-5">
              <h2 className="mb-3.5">
                Local do atendimento
              </h2>
              <p className="text-ink-muted mb-3.5">
                <svg className="inline-block shrink-0 fill-current size-4 align-text-bottom" aria-hidden="true">
                  <use href="#icon-map-marker" />
                </svg>
                {" "}Rua Sete de Setembro, 512 — Jardim Paulistano, São Carlos/SP · 1,4 km de você
              </p>
              <div className="aspect-[16/7] rounded-md bg-page bg-map-stripes border border-dashed border-line-strong flex items-center justify-center gap-2 text-ink-muted font-semibold text-[0.9rem]">
                <svg className="inline-block shrink-0 fill-current size-5 align-middle" aria-hidden="true">
                  <use href="#icon-map-outline" />
                </svg>
                {" "}Mapa ilustrativo (mock-up)
              </div>
            </section>
          </div>
          <aside className="bg-surface border border-line rounded-md shadow-sm p-6 xl:sticky xl:top-below-header">
            <h2 className="mb-1">
              Aceitar chamado?
            </h2>
            <p className="text-ink-muted text-[0.85rem]">
              Hoje, 16:00 — Encanador
            </p>
            <strong className="font-heading text-[1.8rem]">
              R$ 120,00
            </strong>
            <ul>
              <li>
                <svg className="inline-block shrink-0 fill-current size-5 align-middle" aria-hidden="true">
                  <use href="#icon-calendar" />
                </svg>
                {" "}Hoje, às 16:00
              </li>
              <li>
                <svg className="inline-block shrink-0 fill-current size-5 align-middle" aria-hidden="true">
                  <use href="#icon-map-marker" />
                </svg>
                {" "}1,4 km de distância
              </li>
              <li>
                <svg className="inline-block shrink-0 fill-current size-5 align-middle" aria-hidden="true">
                  <use href="#icon-cash-multiple" />
                </svg>
                {" "}Pagamento garantido pela plataforma
              </li>
            </ul>
            <div className="flex flex-col gap-2.5 mt-[18px]">
              <button className="inline-flex items-center justify-center gap-2 font-heading font-semibold rounded-full whitespace-nowrap transition active:scale-[0.98] px-[22px] py-3 text-[0.95rem] bg-primary text-white shadow-sm hover:bg-primary-dark hover:shadow-md w-full" type="button" onClick={() => navigate("/prestador")}>
                <svg className="inline-block shrink-0 fill-current size-5 align-middle" aria-hidden="true">
                  <use href="#icon-check" />
                </svg>
                {" "}Aceitar chamado
              </button>
              <button className="inline-flex items-center justify-center gap-2 font-heading font-semibold rounded-full whitespace-nowrap transition active:scale-[0.98] px-[22px] py-3 text-[0.95rem] bg-transparent text-danger border-[1.5px] border-danger hover:bg-danger-light w-full" type="button" onClick={() => navigate("/prestador")}>
                <svg className="inline-block shrink-0 fill-current size-5 align-middle" aria-hidden="true">
                  <use href="#icon-close" />
                </svg>
                {" "}Recusar
              </button>
            </div>
            <div className="flex items-center gap-2 bg-warning-light text-warning-dark px-3.5 py-2.5 rounded-sm text-[0.85rem] font-semibold mt-4">
              <svg className="inline-block shrink-0 fill-current size-5 align-middle" aria-hidden="true">
                <use href="#icon-clock-outline" />
              </svg>
              {" "}Responda em até 12 minutos
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
