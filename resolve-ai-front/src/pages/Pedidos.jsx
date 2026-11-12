import { useState } from "react";
import { Link } from "react-router-dom";

export default function Pedidos() {
  const [tab, setTab] = useState("todos");
  
  return (
    <main id="main">
      <div className="container pt-8 pb-16">
        <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
          <div>
            <h1>
              Meus pedidos
            </h1>
            <p className="mt-1">
              Acompanhe o status dos seus chamados e avalie os serviços concluídos
            </p>
          </div>
          <Link to="/catalogo" className="inline-flex items-center justify-center gap-2 font-heading font-semibold rounded-full whitespace-nowrap transition active:scale-[0.98] px-[22px] py-3 text-[0.95rem] bg-primary text-white shadow-sm hover:bg-primary-dark hover:shadow-md">
            <svg className="inline-block shrink-0 fill-current size-5 align-middle" aria-hidden="true">
              <use href="#icon-plus" />
            </svg>
            {" "}Novo chamado
          </Link>
        </div>
        <div>
          <div className="flex gap-1 min-[481px]:gap-2 border-b border-line mb-6 overflow-x-auto">
            <button className={`tab-btn px-3 py-2.5 text-[0.85rem] min-[481px]:px-[18px] min-[481px]:py-3 min-[481px]:text-[1rem] font-semibold text-ink-secondary border-b-2 border-transparent whitespace-nowrap [&.active]:text-primary [&.active]:border-primary ${tab === "todos" ? "active" : ""}`} onClick={() => setTab("todos")}>
              Todos (4)
            </button>
            <button className={`tab-btn px-3 py-2.5 text-[0.85rem] min-[481px]:px-[18px] min-[481px]:py-3 min-[481px]:text-[1rem] font-semibold text-ink-secondary border-b-2 border-transparent whitespace-nowrap [&.active]:text-primary [&.active]:border-primary ${tab === "aguardando" ? "active" : ""}`} onClick={() => setTab("aguardando")}>
              Aguardando (1)
            </button>
            <button className={`tab-btn px-3 py-2.5 text-[0.85rem] min-[481px]:px-[18px] min-[481px]:py-3 min-[481px]:text-[1rem] font-semibold text-ink-secondary border-b-2 border-transparent whitespace-nowrap [&.active]:text-primary [&.active]:border-primary ${tab === "confirmado" ? "active" : ""}`} onClick={() => setTab("confirmado")}>
              Confirmado (1)
            </button>
            <button className={`tab-btn px-3 py-2.5 text-[0.85rem] min-[481px]:px-[18px] min-[481px]:py-3 min-[481px]:text-[1rem] font-semibold text-ink-secondary border-b-2 border-transparent whitespace-nowrap [&.active]:text-primary [&.active]:border-primary ${tab === "concluido" ? "active" : ""}`} onClick={() => setTab("concluido")}>
              Concluído (2)
            </button>
          </div>
          <div className={`flex flex-col gap-3.5 ${tab === "todos" ? "" : "hidden"}`}>
            <article className="flex flex-wrap min-[701px]:flex-nowrap items-center gap-4 bg-surface border border-line rounded-md shadow-sm px-5 py-[18px]">
              <div className="inline-flex items-center justify-center rounded-full font-heading font-semibold text-white shrink-0 size-14 text-[1.1rem] avatar-c1">
                RM
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h3 className="text-[1.02rem]">
                    Instalação elétrica
                  </h3>
                  <span className="inline-flex items-center gap-1.5 text-[0.78rem] font-semibold px-3 py-[5px] rounded-full before:content-[''] before:size-[7px] before:rounded-full before:bg-current bg-warning-light text-warning-dark">
                    Aguardando
                  </span>
                </div>
                <p className="text-ink-muted text-[0.85rem]">
                  Rafael Mendes · Eletricista
                </p>
                <p className="text-ink-muted text-[0.85rem]">
                  <svg className="inline-block shrink-0 fill-current size-[15px] align-text-bottom" aria-hidden="true">
                    <use href="#icon-calendar" />
                  </svg>
                  {" "}22 de setembro, 10:30
                </p>
              </div>
              <div className="flex items-center gap-2.5 shrink-0 flex-wrap w-full justify-between pt-3 mt-1 border-t border-line min-[701px]:w-auto min-[701px]:justify-end min-[701px]:pt-0 min-[701px]:mt-0 min-[701px]:border-t-0">
                <strong className="font-heading text-[1.05rem] min-w-[92px] text-right">
                  R$ 98,00
                </strong>
                <button className="inline-flex items-center justify-center gap-2 font-heading font-semibold rounded-full whitespace-nowrap transition active:scale-[0.98] px-4 py-2 text-[0.85rem] bg-transparent text-danger border-[1.5px] border-danger hover:bg-danger-light">
                  Cancelar
                </button>
              </div>
            </article>
            <article className="flex flex-wrap min-[701px]:flex-nowrap items-center gap-4 bg-surface border border-line rounded-md shadow-sm px-5 py-[18px]">
              <div className="inline-flex items-center justify-center rounded-full font-heading font-semibold text-white shrink-0 size-14 text-[1.1rem] avatar-c3">
                JP
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h3 className="text-[1.02rem]">
                    Reparo de vazamento
                  </h3>
                  <span className="inline-flex items-center gap-1.5 text-[0.78rem] font-semibold px-3 py-[5px] rounded-full before:content-[''] before:size-[7px] before:rounded-full before:bg-current bg-info-light text-primary-dark">
                    Confirmado
                  </span>
                </div>
                <p className="text-ink-muted text-[0.85rem]">
                  João Pereira · Encanador
                </p>
                <p className="text-ink-muted text-[0.85rem]">
                  <svg className="inline-block shrink-0 fill-current size-[15px] align-text-bottom" aria-hidden="true">
                    <use href="#icon-calendar" />
                  </svg>
                  {" "}19 de setembro, 15:00
                </p>
              </div>
              <div className="flex items-center gap-2.5 shrink-0 flex-wrap w-full justify-between pt-3 mt-1 border-t border-line min-[701px]:w-auto min-[701px]:justify-end min-[701px]:pt-0 min-[701px]:mt-0 min-[701px]:border-t-0">
                <strong className="font-heading text-[1.05rem] min-w-[92px] text-right">
                  R$ 130,00
                </strong>
                <button className="inline-flex items-center justify-center gap-2 font-heading font-semibold rounded-full whitespace-nowrap transition active:scale-[0.98] px-4 py-2 text-[0.85rem] bg-transparent text-primary border-[1.5px] border-primary hover:bg-primary-light">
                  <svg className="inline-block shrink-0 fill-current align-middle size-4" aria-hidden="true">
                    <use href="#icon-chat-outline" />
                  </svg>
                  {" "}Chat
                </button>
                <button className="inline-flex items-center justify-center gap-2 font-heading font-semibold rounded-full whitespace-nowrap transition active:scale-[0.98] px-4 py-2 text-[0.85rem] bg-transparent text-danger border-[1.5px] border-danger hover:bg-danger-light">
                  Cancelar
                </button>
              </div>
            </article>
            <article className="flex flex-wrap min-[701px]:flex-nowrap items-center gap-4 bg-surface border border-line rounded-md shadow-sm px-5 py-[18px]">
              <div className="inline-flex items-center justify-center rounded-full font-heading font-semibold text-white shrink-0 size-14 text-[1.1rem] avatar-c2">
                CS
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h3 className="text-[1.02rem]">
                    Faxina completa
                  </h3>
                  <span className="inline-flex items-center gap-1.5 text-[0.78rem] font-semibold px-3 py-[5px] rounded-full before:content-[''] before:size-[7px] before:rounded-full before:bg-current bg-success-light text-success-dark">
                    Concluído
                  </span>
                </div>
                <p className="text-ink-muted text-[0.85rem]">
                  Camila Santos · Diarista
                </p>
                <p className="text-ink-muted text-[0.85rem]">
                  <svg className="inline-block shrink-0 fill-current size-[15px] align-text-bottom" aria-hidden="true">
                    <use href="#icon-calendar" />
                  </svg>
                  {" "}10 de setembro, 09:00
                </p>
              </div>
              <div className="flex items-center gap-2.5 shrink-0 flex-wrap w-full justify-between pt-3 mt-1 border-t border-line min-[701px]:w-auto min-[701px]:justify-end min-[701px]:pt-0 min-[701px]:mt-0 min-[701px]:border-t-0">
                <strong className="font-heading text-[1.05rem] min-w-[92px] text-right">
                  R$ 180,00
                </strong>
                <div className="group inline-flex gap-0.5 text-line-strong cursor-pointer" aria-label="Avaliar serviço">
                  <svg className="inline-block shrink-0 fill-current size-5 align-middle transition-colors duration-100 group-hover:text-warning" aria-hidden="true">
                    <use href="#icon-star" />
                  </svg>
                  <svg className="inline-block shrink-0 fill-current size-5 align-middle transition-colors duration-100 group-hover:text-warning" aria-hidden="true">
                    <use href="#icon-star" />
                  </svg>
                  <svg className="inline-block shrink-0 fill-current size-5 align-middle transition-colors duration-100 group-hover:text-warning" aria-hidden="true">
                    <use href="#icon-star" />
                  </svg>
                  <svg className="inline-block shrink-0 fill-current size-5 align-middle transition-colors duration-100 group-hover:text-warning" aria-hidden="true">
                    <use href="#icon-star" />
                  </svg>
                  <svg className="inline-block shrink-0 fill-current size-5 align-middle transition-colors duration-100 group-hover:text-warning" aria-hidden="true">
                    <use href="#icon-star" />
                  </svg>
                </div>
              </div>
            </article>
            <article className="flex flex-wrap min-[701px]:flex-nowrap items-center gap-4 bg-surface border border-line rounded-md shadow-sm px-5 py-[18px]">
              <div className="inline-flex items-center justify-center rounded-full font-heading font-semibold text-white shrink-0 size-14 text-[1.1rem] avatar-c5">
                MT
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h3 className="text-[1.02rem]">
                    Montagem de guarda-roupa
                  </h3>
                  <span className="inline-flex items-center gap-1.5 text-[0.78rem] font-semibold px-3 py-[5px] rounded-full before:content-[''] before:size-[7px] before:rounded-full before:bg-current bg-success-light text-success-dark">
                    Concluído
                  </span>
                </div>
                <p className="text-ink-muted text-[0.85rem]">
                  Marcos Teixeira · Montador de móveis
                </p>
                <p className="text-ink-muted text-[0.85rem]">
                  <svg className="inline-block shrink-0 fill-current size-[15px] align-text-bottom" aria-hidden="true">
                    <use href="#icon-calendar" />
                  </svg>
                  {" "}2 de setembro, 14:00
                </p>
              </div>
              <div className="flex items-center gap-2.5 shrink-0 flex-wrap w-full justify-between pt-3 mt-1 border-t border-line min-[701px]:w-auto min-[701px]:justify-end min-[701px]:pt-0 min-[701px]:mt-0 min-[701px]:border-t-0">
                <strong className="font-heading text-[1.05rem] min-w-[92px] text-right">
                  R$ 150,00
                </strong>
                <span className="inline-flex items-center gap-1 text-[0.85rem] text-ink-muted font-semibold">
                  <svg className="inline-block shrink-0 fill-current align-middle size-4 text-warning" aria-hidden="true">
                    <use href="#icon-star" />
                  </svg>
                  {" "}Você avaliou: 5.0
                </span>
              </div>
            </article>
          </div>
          <div className={`flex flex-col gap-3.5 ${tab === "aguardando" ? "" : "hidden"}`}>
            <article className="flex flex-wrap min-[701px]:flex-nowrap items-center gap-4 bg-surface border border-line rounded-md shadow-sm px-5 py-[18px]">
              <div className="inline-flex items-center justify-center rounded-full font-heading font-semibold text-white shrink-0 size-14 text-[1.1rem] avatar-c1">
                RM
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h3 className="text-[1.02rem]">
                    Instalação elétrica
                  </h3>
                  <span className="inline-flex items-center gap-1.5 text-[0.78rem] font-semibold px-3 py-[5px] rounded-full before:content-[''] before:size-[7px] before:rounded-full before:bg-current bg-warning-light text-warning-dark">
                    Aguardando
                  </span>
                </div>
                <p className="text-ink-muted text-[0.85rem]">
                  Rafael Mendes · Eletricista
                </p>
                <p className="text-ink-muted text-[0.85rem]">
                  <svg className="inline-block shrink-0 fill-current size-[15px] align-text-bottom" aria-hidden="true">
                    <use href="#icon-calendar" />
                  </svg>
                  {" "}22 de setembro, 10:30
                </p>
              </div>
              <div className="flex items-center gap-2.5 shrink-0 flex-wrap w-full justify-between pt-3 mt-1 border-t border-line min-[701px]:w-auto min-[701px]:justify-end min-[701px]:pt-0 min-[701px]:mt-0 min-[701px]:border-t-0">
                <strong className="font-heading text-[1.05rem] min-w-[92px] text-right">
                  R$ 98,00
                </strong>
                <button className="inline-flex items-center justify-center gap-2 font-heading font-semibold rounded-full whitespace-nowrap transition active:scale-[0.98] px-4 py-2 text-[0.85rem] bg-transparent text-danger border-[1.5px] border-danger hover:bg-danger-light">
                  Cancelar
                </button>
              </div>
            </article>
          </div>
          <div className={`flex flex-col gap-3.5 ${tab === "confirmado" ? "" : "hidden"}`}>
            <article className="flex flex-wrap min-[701px]:flex-nowrap items-center gap-4 bg-surface border border-line rounded-md shadow-sm px-5 py-[18px]">
              <div className="inline-flex items-center justify-center rounded-full font-heading font-semibold text-white shrink-0 size-14 text-[1.1rem] avatar-c3">
                JP
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h3 className="text-[1.02rem]">
                    Reparo de vazamento
                  </h3>
                  <span className="inline-flex items-center gap-1.5 text-[0.78rem] font-semibold px-3 py-[5px] rounded-full before:content-[''] before:size-[7px] before:rounded-full before:bg-current bg-info-light text-primary-dark">
                    Confirmado
                  </span>
                </div>
                <p className="text-ink-muted text-[0.85rem]">
                  João Pereira · Encanador
                </p>
                <p className="text-ink-muted text-[0.85rem]">
                  <svg className="inline-block shrink-0 fill-current size-[15px] align-text-bottom" aria-hidden="true">
                    <use href="#icon-calendar" />
                  </svg>
                  {" "}19 de setembro, 15:00
                </p>
              </div>
              <div className="flex items-center gap-2.5 shrink-0 flex-wrap w-full justify-between pt-3 mt-1 border-t border-line min-[701px]:w-auto min-[701px]:justify-end min-[701px]:pt-0 min-[701px]:mt-0 min-[701px]:border-t-0">
                <strong className="font-heading text-[1.05rem] min-w-[92px] text-right">
                  R$ 130,00
                </strong>
                <button className="inline-flex items-center justify-center gap-2 font-heading font-semibold rounded-full whitespace-nowrap transition active:scale-[0.98] px-4 py-2 text-[0.85rem] bg-transparent text-primary border-[1.5px] border-primary hover:bg-primary-light">
                  <svg className="inline-block shrink-0 fill-current align-middle size-4" aria-hidden="true">
                    <use href="#icon-chat-outline" />
                  </svg>
                  {" "}Chat
                </button>
                <button className="inline-flex items-center justify-center gap-2 font-heading font-semibold rounded-full whitespace-nowrap transition active:scale-[0.98] px-4 py-2 text-[0.85rem] bg-transparent text-danger border-[1.5px] border-danger hover:bg-danger-light">
                  Cancelar
                </button>
              </div>
            </article>
          </div>
          <div className={`flex flex-col gap-3.5 ${tab === "concluido" ? "" : "hidden"}`}>
            <article className="flex flex-wrap min-[701px]:flex-nowrap items-center gap-4 bg-surface border border-line rounded-md shadow-sm px-5 py-[18px]">
              <div className="inline-flex items-center justify-center rounded-full font-heading font-semibold text-white shrink-0 size-14 text-[1.1rem] avatar-c2">
                CS
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h3 className="text-[1.02rem]">
                    Faxina completa
                  </h3>
                  <span className="inline-flex items-center gap-1.5 text-[0.78rem] font-semibold px-3 py-[5px] rounded-full before:content-[''] before:size-[7px] before:rounded-full before:bg-current bg-success-light text-success-dark">
                    Concluído
                  </span>
                </div>
                <p className="text-ink-muted text-[0.85rem]">
                  Camila Santos · Diarista
                </p>
                <p className="text-ink-muted text-[0.85rem]">
                  <svg className="inline-block shrink-0 fill-current size-[15px] align-text-bottom" aria-hidden="true">
                    <use href="#icon-calendar" />
                  </svg>
                  {" "}10 de setembro, 09:00
                </p>
              </div>
              <div className="flex items-center gap-2.5 shrink-0 flex-wrap w-full justify-between pt-3 mt-1 border-t border-line min-[701px]:w-auto min-[701px]:justify-end min-[701px]:pt-0 min-[701px]:mt-0 min-[701px]:border-t-0">
                <strong className="font-heading text-[1.05rem] min-w-[92px] text-right">
                  R$ 180,00
                </strong>
                <div className="group inline-flex gap-0.5 text-line-strong cursor-pointer" aria-label="Avaliar serviço">
                  <svg className="inline-block shrink-0 fill-current size-5 align-middle transition-colors duration-100 group-hover:text-warning" aria-hidden="true">
                    <use href="#icon-star" />
                  </svg>
                  <svg className="inline-block shrink-0 fill-current size-5 align-middle transition-colors duration-100 group-hover:text-warning" aria-hidden="true">
                    <use href="#icon-star" />
                  </svg>
                  <svg className="inline-block shrink-0 fill-current size-5 align-middle transition-colors duration-100 group-hover:text-warning" aria-hidden="true">
                    <use href="#icon-star" />
                  </svg>
                  <svg className="inline-block shrink-0 fill-current size-5 align-middle transition-colors duration-100 group-hover:text-warning" aria-hidden="true">
                    <use href="#icon-star" />
                  </svg>
                  <svg className="inline-block shrink-0 fill-current size-5 align-middle transition-colors duration-100 group-hover:text-warning" aria-hidden="true">
                    <use href="#icon-star" />
                  </svg>
                </div>
              </div>
            </article>
            <article className="flex flex-wrap min-[701px]:flex-nowrap items-center gap-4 bg-surface border border-line rounded-md shadow-sm px-5 py-[18px]">
              <div className="inline-flex items-center justify-center rounded-full font-heading font-semibold text-white shrink-0 size-14 text-[1.1rem] avatar-c5">
                MT
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h3 className="text-[1.02rem]">
                    Montagem de guarda-roupa
                  </h3>
                  <span className="inline-flex items-center gap-1.5 text-[0.78rem] font-semibold px-3 py-[5px] rounded-full before:content-[''] before:size-[7px] before:rounded-full before:bg-current bg-success-light text-success-dark">
                    Concluído
                  </span>
                </div>
                <p className="text-ink-muted text-[0.85rem]">
                  Marcos Teixeira · Montador de móveis
                </p>
                <p className="text-ink-muted text-[0.85rem]">
                  <svg className="inline-block shrink-0 fill-current size-[15px] align-text-bottom" aria-hidden="true">
                    <use href="#icon-calendar" />
                  </svg>
                  {" "}2 de setembro, 14:00
                </p>
              </div>
              <div className="flex items-center gap-2.5 shrink-0 flex-wrap w-full justify-between pt-3 mt-1 border-t border-line min-[701px]:w-auto min-[701px]:justify-end min-[701px]:pt-0 min-[701px]:mt-0 min-[701px]:border-t-0">
                <strong className="font-heading text-[1.05rem] min-w-[92px] text-right">
                  R$ 150,00
                </strong>
                <span className="inline-flex items-center gap-1 text-[0.85rem] text-ink-muted font-semibold">
                  <svg className="inline-block shrink-0 fill-current align-middle size-4 text-warning" aria-hidden="true">
                    <use href="#icon-star" />
                  </svg>
                  {" "}Você avaliou: 5.0
                </span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}
