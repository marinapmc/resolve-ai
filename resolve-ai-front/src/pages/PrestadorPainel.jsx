import { useState } from "react";
import { Link } from "react-router-dom";

export default function PrestadorPainel() {
  const [available, setAvailable] = useState(true);
  
  return (
    <main id="main">
      <div className="container pt-8 pb-16">
        <div className="flex flex-col items-start md:flex-row md:items-center justify-between gap-5 mb-6 flex-wrap">
          <div className="flex items-center gap-4">
            <div className="inline-flex items-center justify-center rounded-full font-heading font-semibold text-white shrink-0 size-24 text-[1.8rem] avatar-c3">
              JP
            </div>
            <div>
              <h1 className="text-[1.6rem]">
                Olá, João!
              </h1>
              <p className="text-ink-muted">
                João Pereira · Encanador ·{" "}
                <span className="inline-flex items-center gap-1.5 font-semibold text-[0.9rem]">
                  <svg className="inline-block shrink-0 fill-current align-middle size-4 text-warning" aria-hidden="true">
                    <use href="#icon-star" />
                  </svg>
                  {" "}4.7 (98)
                </span>
              </p>
            </div>
          </div>
          <label className="group flex items-center gap-3 font-semibold text-[0.92rem] cursor-pointer bg-surface border border-line px-[18px] py-2.5 rounded-full">
            <input type="checkbox" className="absolute opacity-0 w-0 h-0" checked={available} onChange={(e) => setAvailable(e.target.checked)} />
            <span className="relative w-[42px] h-6 rounded-full bg-line-strong transition-colors duration-200 shrink-0 group-has-[:checked]:bg-success">
              <span className="absolute top-[3px] left-[3px] size-[18px] rounded-full bg-white transition-transform duration-200 group-has-[:checked]:translate-x-[18px]" />
            </span>
            <span>{available ? "Disponível para novos chamados" : "Indisponível no momento"}</span>
          </label>
        </div>
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-7">
          <div className="flex items-center gap-3.5 bg-surface border border-line rounded-md shadow-sm p-[18px]">
            <span className="size-[46px] rounded-full flex items-center justify-center shrink-0 bg-success-light text-success">
              <svg className="inline-block shrink-0 fill-current size-5 align-middle" aria-hidden="true">
                <use href="#icon-cash-multiple" />
              </svg>
            </span>
            <div>
              <strong className="block font-heading text-[1.35rem]">
                R$ 2.340
              </strong>
              <p className="text-ink-muted text-[0.85rem]">
                Rendimento este mês
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3.5 bg-surface border border-line rounded-md shadow-sm p-[18px]">
            <span className="size-[46px] rounded-full flex items-center justify-center shrink-0 bg-info-light text-primary">
              <svg className="inline-block shrink-0 fill-current size-5 align-middle" aria-hidden="true">
                <use href="#icon-checkbox-marked-circle-outline" />
              </svg>
            </span>
            <div>
              <strong className="block font-heading text-[1.35rem]">
                18
              </strong>
              <p className="text-ink-muted text-[0.85rem]">
                Chamados concluídos
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3.5 bg-surface border border-line rounded-md shadow-sm p-[18px]">
            <span className="size-[46px] rounded-full flex items-center justify-center shrink-0 bg-warning-light text-warning-dark">
              <svg className="inline-block shrink-0 fill-current size-5 align-middle" aria-hidden="true">
                <use href="#icon-clipboard-clock-outline" />
              </svg>
            </span>
            <div>
              <strong className="block font-heading text-[1.35rem]">
                3
              </strong>
              <p className="text-ink-muted text-[0.85rem]">
                Chamados pendentes
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3.5 bg-surface border border-line rounded-md shadow-sm p-[18px]">
            <span className="size-[46px] rounded-full flex items-center justify-center shrink-0 bg-accent-light text-accent-dark">
              <svg className="inline-block shrink-0 fill-current size-5 align-middle" aria-hidden="true">
                <use href="#icon-star" />
              </svg>
            </span>
            <div>
              <strong className="block font-heading text-[1.35rem]">
                4.7
              </strong>
              <p className="text-ink-muted text-[0.85rem]">
                Avaliação média
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_340px] gap-6 items-start">
          <section className="bg-surface border border-line rounded-md shadow-sm px-7 py-6">
            <div className="flex items-baseline justify-between gap-4 flex-wrap mb-4">
              <div>
                <h2>
                  Chamados pendentes
                </h2>
                <p className="mt-1.5">
                  Aceite ou recuse dentro do prazo para manter sua nota de resposta
                </p>
              </div>
            </div>
            <article className="flex flex-wrap md:flex-nowrap items-center gap-4 pt-1 pb-[18px] border-b border-line">
              <div className="inline-flex items-center justify-center rounded-full font-heading font-semibold text-white shrink-0 size-14 text-[1.1rem] avatar-c4">
                FT
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[1rem] mb-0.5">
                  Vazamento na pia da cozinha
                </h3>
                <p className="text-ink-muted text-[0.85rem]">
                  Fernanda Torres · 1,4 km · Jardim Paulistano
                </p>
                <p className="text-ink-muted text-[0.85rem]">
                  <svg className="inline-block shrink-0 fill-current size-[15px] align-text-bottom" aria-hidden="true">
                    <use href="#icon-calendar" />
                  </svg>
                  {" "}Hoje, 16:00
                </p>
              </div>
              <div className="flex flex-row items-stretch justify-between gap-2 shrink-0 w-full pt-3 mt-1 border-t border-line md:flex-col md:items-end md:w-auto md:pt-0 md:mt-0 md:border-t-0">
                <strong>
                  R$ 120,00
                </strong>
                <div className="flex gap-2 flex-1 flex-wrap md:flex-initial md:flex-nowrap">
                  <Link to="/prestador/chamado" className="inline-flex items-center justify-center gap-2 font-heading font-semibold rounded-full whitespace-nowrap transition active:scale-[0.98] px-4 py-2 text-[0.85rem] bg-transparent text-primary border-[1.5px] border-primary hover:bg-primary-light max-md:flex-[1_1_100%] max-md:min-w-0">
                    Ver detalhes
                  </Link>
                  <button className="inline-flex items-center justify-center gap-2 font-heading font-semibold rounded-full whitespace-nowrap transition active:scale-[0.98] px-4 py-2 text-[0.85rem] bg-primary text-white shadow-sm hover:bg-primary-dark hover:shadow-md max-md:flex-[1_1_100%] max-md:min-w-0">
                    <svg className="inline-block shrink-0 fill-current align-middle size-4" aria-hidden="true">
                      <use href="#icon-check" />
                    </svg>
                    {" "}Aceitar
                  </button>
                </div>
              </div>
            </article>
            <article className="flex flex-wrap md:flex-nowrap items-center gap-4 pt-[18px] pb-[18px] border-b border-line">
              <div className="inline-flex items-center justify-center rounded-full font-heading font-semibold text-white shrink-0 size-14 text-[1.1rem] avatar-c5">
                RS
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[1rem] mb-0.5">
                  Instalação de torneira
                </h3>
                <p className="text-ink-muted text-[0.85rem]">
                  Roberto Silva · 2,9 km · Vila Nery
                </p>
                <p className="text-ink-muted text-[0.85rem]">
                  <svg className="inline-block shrink-0 fill-current size-[15px] align-text-bottom" aria-hidden="true">
                    <use href="#icon-calendar" />
                  </svg>
                  {" "}Amanhã, 09:00
                </p>
              </div>
              <div className="flex flex-row items-stretch justify-between gap-2 shrink-0 w-full pt-3 mt-1 border-t border-line md:flex-col md:items-end md:w-auto md:pt-0 md:mt-0 md:border-t-0">
                <strong>
                  R$ 85,00
                </strong>
                <div className="flex gap-2 flex-1 flex-wrap md:flex-initial md:flex-nowrap">
                  <Link to="/prestador/chamado" className="inline-flex items-center justify-center gap-2 font-heading font-semibold rounded-full whitespace-nowrap transition active:scale-[0.98] px-4 py-2 text-[0.85rem] bg-transparent text-primary border-[1.5px] border-primary hover:bg-primary-light max-md:flex-[1_1_100%] max-md:min-w-0">
                    Ver detalhes
                  </Link>
                  <button className="inline-flex items-center justify-center gap-2 font-heading font-semibold rounded-full whitespace-nowrap transition active:scale-[0.98] px-4 py-2 text-[0.85rem] bg-primary text-white shadow-sm hover:bg-primary-dark hover:shadow-md max-md:flex-[1_1_100%] max-md:min-w-0">
                    <svg className="inline-block shrink-0 fill-current align-middle size-4" aria-hidden="true">
                      <use href="#icon-check" />
                    </svg>
                    {" "}Aceitar
                  </button>
                </div>
              </div>
            </article>
            <article className="flex flex-wrap md:flex-nowrap items-center gap-4 pt-[18px] pb-0">
              <div className="inline-flex items-center justify-center rounded-full font-heading font-semibold text-white shrink-0 size-14 text-[1.1rem] avatar-c2">
                AC
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[1rem] mb-0.5">
                  Desentupimento de ralo
                </h3>
                <p className="text-ink-muted text-[0.85rem]">
                  Ana Clara · 4,1 km · Centro
                </p>
                <p className="text-ink-muted text-[0.85rem]">
                  <svg className="inline-block shrink-0 fill-current size-[15px] align-text-bottom" aria-hidden="true">
                    <use href="#icon-calendar" />
                  </svg>
                  {" "}Amanhã, 14:30
                </p>
              </div>
              <div className="flex flex-row items-stretch justify-between gap-2 shrink-0 w-full pt-3 mt-1 border-t border-line md:flex-col md:items-end md:w-auto md:pt-0 md:mt-0 md:border-t-0">
                <strong>
                  R$ 100,00
                </strong>
                <div className="flex gap-2 flex-1 flex-wrap md:flex-initial md:flex-nowrap">
                  <Link to="/prestador/chamado" className="inline-flex items-center justify-center gap-2 font-heading font-semibold rounded-full whitespace-nowrap transition active:scale-[0.98] px-4 py-2 text-[0.85rem] bg-transparent text-primary border-[1.5px] border-primary hover:bg-primary-light max-md:flex-[1_1_100%] max-md:min-w-0">
                    Ver detalhes
                  </Link>
                  <button className="inline-flex items-center justify-center gap-2 font-heading font-semibold rounded-full whitespace-nowrap transition active:scale-[0.98] px-4 py-2 text-[0.85rem] bg-primary text-white shadow-sm hover:bg-primary-dark hover:shadow-md max-md:flex-[1_1_100%] max-md:min-w-0">
                    <svg className="inline-block shrink-0 fill-current align-middle size-4" aria-hidden="true">
                      <use href="#icon-check" />
                    </svg>
                    {" "}Aceitar
                  </button>
                </div>
              </div>
            </article>
          </section>
          <aside className="bg-surface border border-line rounded-md shadow-sm px-7 py-6">
            <h2 className="mb-0.5">
              Sua semana
            </h2>
            <p className="text-ink-muted text-[0.85rem]">
              Chamados já confirmados
            </p>
            <ul className="my-[18px] flex flex-col gap-1">
              <li className="flex gap-3.5 py-3 border-b border-line">
                <span className="text-center text-[0.75rem] text-ink-muted leading-[1.3] min-w-[34px]">
                  Ter
                  <br />
                  <strong className="text-[1.05rem] text-ink font-heading">
                    22
                  </strong>
                </span>
                <div>
                  <strong className="block text-[0.9rem] mb-0.5">
                    10:30 — Troca de sifão
                  </strong>
                  <p className="text-ink-muted text-[0.85rem]">
                    Cliente: Paula Ribeiro
                  </p>
                </div>
              </li>
              <li className="flex gap-3.5 py-3 border-b border-line">
                <span className="text-center text-[0.75rem] text-ink-muted leading-[1.3] min-w-[34px]">
                  Qui
                  <br />
                  <strong className="text-[1.05rem] text-ink font-heading">
                    24
                  </strong>
                </span>
                <div>
                  <strong className="block text-[0.9rem] mb-0.5">
                    15:00 — Reparo hidráulico
                  </strong>
                  <p className="text-ink-muted text-[0.85rem]">
                    Cliente: Marcos Paiva
                  </p>
                </div>
              </li>
              <li className="flex gap-3.5 py-3">
                <span className="text-center text-[0.75rem] text-ink-muted leading-[1.3] min-w-[34px]">
                  Sex
                  <br />
                  <strong className="text-[1.05rem] text-ink font-heading">
                    25
                  </strong>
                </span>
                <div>
                  <strong className="block text-[0.9rem] mb-0.5">
                    09:00 — Revisão de encanamento
                  </strong>
                  <p className="text-ink-muted text-[0.85rem]">
                    Cliente: Beatriz Souza
                  </p>
                </div>
              </li>
            </ul>
            <a href="#" className="inline-flex items-center justify-center gap-2 font-heading font-semibold rounded-full whitespace-nowrap transition active:scale-[0.98] px-[22px] py-3 text-[0.95rem] bg-transparent text-primary border-[1.5px] border-primary hover:bg-primary-light w-full">
              Ver agenda completa
            </a>
          </aside>
        </div>
      </div>
    </main>
  );
}
