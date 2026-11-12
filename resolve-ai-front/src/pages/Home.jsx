import { useRef } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const carouselRef = useRef(null);
  const scrollCarousel = (left) => carouselRef.current?.scrollBy({ left, behavior: "smooth" });

  return (
    <main id="main">
      <section className="bg-hero pt-14 pb-10">
        <div className="container grid grid-cols-1 xl:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 bg-surface border border-line px-3.5 py-1.5 rounded-full text-[0.82rem] font-semibold text-primary-dark mb-[18px]">
              <svg className="inline-block shrink-0 fill-current align-middle size-4 text-success" aria-hidden="true">
                <use href="#icon-check-decagram" />
              </svg>
              {" "}Mais de 3.400 profissionais avaliados
            </span>
            <h1 className="mb-4">
              Precisa resolver algo em casa? A gente te conecta com quem sabe fazer.
            </h1>
            <p className="text-[1.05rem] mb-7 max-w-[46ch]">
              Encanadores, eletricistas, diaristas e muito mais — perto de você, com avaliações reais e pagamento seguro pelo app.
            </p>
            <form className="bg-surface border border-line rounded-lg shadow-md p-3.5 grid grid-cols-1 md:grid-cols-[1.2fr_1fr_auto] gap-2.5" action="catalogo.html" method="get">
              <div className="relative">
                <svg className="inline-block shrink-0 fill-current size-5 align-middle absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-muted" aria-hidden="true">
                  <use href="#icon-magnify" />
                </svg>
                <input className="w-full pl-11 pr-3.5 py-3 border-[1.5px] rounded-sm text-[0.95rem] transition focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_var(--color-primary-light)] border-transparent bg-page focus:bg-surface" type="text" name="q" placeholder="O que você precisa? Ex: eletricista, faxina..." />
              </div>
              <div className="relative">
                <svg className="inline-block shrink-0 fill-current size-5 align-middle absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-muted" aria-hidden="true">
                  <use href="#icon-map-marker" />
                </svg>
                <input className="w-full pl-11 pr-3.5 py-3 border-[1.5px] rounded-sm text-[0.95rem] transition focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_var(--color-primary-light)] border-transparent bg-page focus:bg-surface" type="text" name="local" placeholder="Seu bairro ou cidade" />
              </div>
              <button type="submit" className="inline-flex items-center justify-center gap-2 font-heading font-semibold rounded-full whitespace-nowrap transition active:scale-[0.98] px-[22px] py-3 text-[0.95rem] bg-accent text-white shadow-sm hover:bg-accent-dark hover:shadow-md">
                Buscar profissionais
              </button>
            </form>
            <div className="flex flex-wrap gap-5 md:flex-nowrap md:gap-8 mt-8">
              <div className="flex flex-col">
                <strong className="font-heading text-[1.4rem] text-ink">
                  4.8
                </strong>
                <span className="text-[0.82rem] text-ink-muted">
                  avaliação média
                </span>
              </div>
              <div className="flex flex-col">
                <strong className="font-heading text-[1.4rem] text-ink">
                  12 mil+
                </strong>
                <span className="text-[0.82rem] text-ink-muted">
                  chamados concluídos
                </span>
              </div>
              <div className="flex flex-col">
                <strong className="font-heading text-[1.4rem] text-ink">
                  48
                </strong>
                <span className="text-[0.82rem] text-ink-muted">
                  cidades atendidas
                </span>
              </div>
            </div>
          </div>
          <div className="relative hidden xl:flex justify-center" aria-hidden="true">
            <div className="bg-surface border border-line rounded-md shadow-sm absolute top-[6%] -left-[6%] flex items-center gap-3 px-4 py-3.5 max-w-[240px]">
              <svg className="inline-block shrink-0 fill-current align-middle box-content size-[18px] p-[9px] rounded-full bg-success-light text-success" aria-hidden="true">
                <use href="#icon-check-circle" />
              </svg>
              <div>
                <strong className="block text-[0.85rem]">
                  Serviço concluído
                </strong>
                <p className="text-[0.85rem]">
                  Instalação elétrica — hoje às 14h
                </p>
              </div>
            </div>
            <div className="w-full aspect-[4/5] max-w-[380px] rounded-lg bg-hero-photo shadow-lg" />
            <div className="bg-surface border border-line rounded-md shadow-sm absolute bottom-[8%] -right-[8%] flex flex-col items-start gap-1.5 px-4 py-3.5 max-w-[240px]">
              <span className="inline-flex items-center gap-[3px] text-warning">
                <svg className="inline-block shrink-0 fill-current align-middle size-[18px]" aria-hidden="true">
                  <use href="#icon-star" />
                </svg>
                <svg className="inline-block shrink-0 fill-current align-middle size-[18px]" aria-hidden="true">
                  <use href="#icon-star" />
                </svg>
                <svg className="inline-block shrink-0 fill-current align-middle size-[18px]" aria-hidden="true">
                  <use href="#icon-star" />
                </svg>
                <svg className="inline-block shrink-0 fill-current align-middle size-[18px]" aria-hidden="true">
                  <use href="#icon-star" />
                </svg>
                <svg className="inline-block shrink-0 fill-current align-middle size-[18px]" aria-hidden="true">
                  <use href="#icon-star" />
                </svg>
              </span>
              <p className="text-[0.85rem]">
                "Rápido, educado e resolveu na hora."
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-14">
        <div className="container">
          <div className="flex items-baseline justify-between gap-4 flex-wrap mb-7">
            <div>
              <h2>
                O que você precisa resolver hoje?
              </h2>
              <p className="mt-1.5">
                Categorias mais buscadas na sua região
              </p>
            </div>
            <Link to="/catalogo" className="inline-flex items-center justify-center gap-2 font-heading font-semibold rounded-full whitespace-nowrap transition active:scale-[0.98] px-4 py-2 text-[0.85rem] bg-transparent text-primary border-[1.5px] border-primary hover:bg-primary-light">
              Ver todas{" "}
              <svg className="inline-block shrink-0 fill-current size-5 align-middle" aria-hidden="true">
                <use href="#icon-arrow-right" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
            <a className="flex flex-col items-center gap-2.5 px-3 py-6 bg-surface border border-line rounded-md text-center font-semibold text-[0.9rem] transition hover:-translate-y-1 hover:shadow-md hover:border-primary" href="catalogo.html?categoria=eletricista">
              <svg className="inline-block shrink-0 fill-current align-middle box-content size-[26px] p-[15px] text-primary bg-primary-light rounded-full" aria-hidden="true">
                <use href="#icon-lightning-bolt" />
              </svg>
              <span>
                Eletricista
              </span>
            </a>
            <a className="flex flex-col items-center gap-2.5 px-3 py-6 bg-surface border border-line rounded-md text-center font-semibold text-[0.9rem] transition hover:-translate-y-1 hover:shadow-md hover:border-primary" href="catalogo.html?categoria=encanador">
              <svg className="inline-block shrink-0 fill-current align-middle box-content size-[26px] p-[15px] text-primary bg-primary-light rounded-full" aria-hidden="true">
                <use href="#icon-pipe-wrench" />
              </svg>
              <span>
                Encanador
              </span>
            </a>
            <a className="flex flex-col items-center gap-2.5 px-3 py-6 bg-surface border border-line rounded-md text-center font-semibold text-[0.9rem] transition hover:-translate-y-1 hover:shadow-md hover:border-primary" href="catalogo.html?categoria=diarista">
              <svg className="inline-block shrink-0 fill-current align-middle box-content size-[26px] p-[15px] text-primary bg-primary-light rounded-full" aria-hidden="true">
                <use href="#icon-broom" />
              </svg>
              <span>
                Diarista
              </span>
            </a>
            <a className="flex flex-col items-center gap-2.5 px-3 py-6 bg-surface border border-line rounded-md text-center font-semibold text-[0.9rem] transition hover:-translate-y-1 hover:shadow-md hover:border-primary" href="catalogo.html?categoria=pintor">
              <svg className="inline-block shrink-0 fill-current align-middle box-content size-[26px] p-[15px] text-primary bg-primary-light rounded-full" aria-hidden="true">
                <use href="#icon-format-paint" />
              </svg>
              <span>
                Pintor
              </span>
            </a>
            <a className="flex flex-col items-center gap-2.5 px-3 py-6 bg-surface border border-line rounded-md text-center font-semibold text-[0.9rem] transition hover:-translate-y-1 hover:shadow-md hover:border-primary" href="catalogo.html?categoria=jardinagem">
              <svg className="inline-block shrink-0 fill-current align-middle box-content size-[26px] p-[15px] text-primary bg-primary-light rounded-full" aria-hidden="true">
                <use href="#icon-flower" />
              </svg>
              <span>
                Jardinagem
              </span>
            </a>
            <a className="flex flex-col items-center gap-2.5 px-3 py-6 bg-surface border border-line rounded-md text-center font-semibold text-[0.9rem] transition hover:-translate-y-1 hover:shadow-md hover:border-primary" href="catalogo.html?categoria=montador">
              <svg className="inline-block shrink-0 fill-current align-middle box-content size-[26px] p-[15px] text-primary bg-primary-light rounded-full" aria-hidden="true">
                <use href="#icon-table-chair" />
              </svg>
              <span>
                Montador de móveis
              </span>
            </a>
          </div>
        </div>
      </section>
      <section className="py-14 bg-surface border-y border-line">
        <div className="container">
          <div className="flex items-baseline justify-between gap-4 flex-wrap mb-7">
            <div>
              <h2>
                Como funciona
              </h2>
              <p className="mt-1.5">
                Do problema à solução em três passos
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 xl:grid-cols-3 xl:gap-6">
            <div className="px-1 py-2">
              <span className="inline-flex items-center justify-center size-10 rounded-full bg-accent-light text-accent-dark font-heading font-bold mb-3.5">
                1
              </span>
              <h3 className="mb-2">
                Busque e compare
              </h3>
              <p>
                Filtre por preço, distância e avaliação para achar o profissional ideal.
              </p>
            </div>
            <div className="px-1 py-2">
              <span className="inline-flex items-center justify-center size-10 rounded-full bg-accent-light text-accent-dark font-heading font-bold mb-3.5">
                2
              </span>
              <h3 className="mb-2">
                Agende e pague com segurança
              </h3>
              <p>
                Escolha o horário, descreva o problema e pague pelo app, sem surpresas.
              </p>
            </div>
            <div className="px-1 py-2">
              <span className="inline-flex items-center justify-center size-10 rounded-full bg-accent-light text-accent-dark font-heading font-bold mb-3.5">
                3
              </span>
              <h3 className="mb-2">
                Acompanhe e avalie
              </h3>
              <p>
                Veja o status do chamado em tempo real e avalie o serviço ao final.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-14">
        <div className="container">
          <div className="flex items-baseline justify-between gap-4 flex-wrap mb-7">
            <div>
              <h2>
                Profissionais bem avaliados perto de você
              </h2>
              <p className="mt-1.5">
                Selecionados pela nota da comunidade
              </p>
            </div>
            <div className="flex gap-2" aria-hidden="true">
              <button className="inline-block size-11 rounded-full bg-surface border border-line text-ink-secondary hover:bg-line" aria-label="Anterior" onClick={() => scrollCarousel(-240)}>
                <svg className="inline-block shrink-0 fill-current size-5 align-middle" aria-hidden="true">
                  <use href="#icon-chevron-left" />
                </svg>
              </button>
              <button className="inline-block size-11 rounded-full bg-surface border border-line text-ink-secondary hover:bg-line" aria-label="Próximo" onClick={() => scrollCarousel(240)}>
                <svg className="inline-block shrink-0 fill-current size-5 align-middle" aria-hidden="true">
                  <use href="#icon-chevron-right" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-2" ref={carouselRef}>
            <article className="flex-[0_0_220px] snap-start bg-surface border border-line rounded-md shadow-sm px-[18px] py-6 flex flex-col items-center text-center gap-1.5">
              <div className="inline-flex items-center justify-center rounded-full font-heading font-semibold text-white shrink-0 size-24 text-[1.8rem] avatar-c1">
                RM
              </div>
              <h3 className="mt-1.5 text-[1rem]">
                Rafael Mendes
              </h3>
              <p className="text-ink-muted">
                Eletricista
              </p>
              <div className="inline-flex items-center gap-1.5 font-semibold text-[0.9rem]">
                <svg className="inline-block shrink-0 fill-current size-5 align-middle text-warning" aria-hidden="true">
                  <use href="#icon-star" />
                </svg>
                {" "}4.9{" "}
                <span className="text-ink-muted">
                  (212)
                </span>
              </div>
              <Link to="/perfil" className="inline-flex items-center justify-center gap-2 font-heading font-semibold rounded-full whitespace-nowrap transition active:scale-[0.98] px-4 py-2 text-[0.85rem] bg-transparent text-primary border-[1.5px] border-primary hover:bg-primary-light w-full mt-3">
                Ver perfil
              </Link>
            </article>
            <article className="flex-[0_0_220px] snap-start bg-surface border border-line rounded-md shadow-sm px-[18px] py-6 flex flex-col items-center text-center gap-1.5">
              <div className="inline-flex items-center justify-center rounded-full font-heading font-semibold text-white shrink-0 size-24 text-[1.8rem] avatar-c2">
                CS
              </div>
              <h3 className="mt-1.5 text-[1rem]">
                Camila Santos
              </h3>
              <p className="text-ink-muted">
                Diarista
              </p>
              <div className="inline-flex items-center gap-1.5 font-semibold text-[0.9rem]">
                <svg className="inline-block shrink-0 fill-current size-5 align-middle text-warning" aria-hidden="true">
                  <use href="#icon-star" />
                </svg>
                {" "}5.0{" "}
                <span className="text-ink-muted">
                  (340)
                </span>
              </div>
              <Link to="/perfil" className="inline-flex items-center justify-center gap-2 font-heading font-semibold rounded-full whitespace-nowrap transition active:scale-[0.98] px-4 py-2 text-[0.85rem] bg-transparent text-primary border-[1.5px] border-primary hover:bg-primary-light w-full mt-3">
                Ver perfil
              </Link>
            </article>
            <article className="flex-[0_0_220px] snap-start bg-surface border border-line rounded-md shadow-sm px-[18px] py-6 flex flex-col items-center text-center gap-1.5">
              <div className="inline-flex items-center justify-center rounded-full font-heading font-semibold text-white shrink-0 size-24 text-[1.8rem] avatar-c3">
                JP
              </div>
              <h3 className="mt-1.5 text-[1rem]">
                João Pereira
              </h3>
              <p className="text-ink-muted">
                Encanador
              </p>
              <div className="inline-flex items-center gap-1.5 font-semibold text-[0.9rem]">
                <svg className="inline-block shrink-0 fill-current size-5 align-middle text-warning" aria-hidden="true">
                  <use href="#icon-star" />
                </svg>
                {" "}4.7{" "}
                <span className="text-ink-muted">
                  (98)
                </span>
              </div>
              <Link to="/perfil" className="inline-flex items-center justify-center gap-2 font-heading font-semibold rounded-full whitespace-nowrap transition active:scale-[0.98] px-4 py-2 text-[0.85rem] bg-transparent text-primary border-[1.5px] border-primary hover:bg-primary-light w-full mt-3">
                Ver perfil
              </Link>
            </article>
            <article className="flex-[0_0_220px] snap-start bg-surface border border-line rounded-md shadow-sm px-[18px] py-6 flex flex-col items-center text-center gap-1.5">
              <div className="inline-flex items-center justify-center rounded-full font-heading font-semibold text-white shrink-0 size-24 text-[1.8rem] avatar-c4">
                LA
              </div>
              <h3 className="mt-1.5 text-[1rem]">
                Luiza Almeida
              </h3>
              <p className="text-ink-muted">
                Pintora
              </p>
              <div className="inline-flex items-center gap-1.5 font-semibold text-[0.9rem]">
                <svg className="inline-block shrink-0 fill-current size-5 align-middle text-warning" aria-hidden="true">
                  <use href="#icon-star" />
                </svg>
                {" "}4.8{" "}
                <span className="text-ink-muted">
                  (76)
                </span>
              </div>
              <Link to="/perfil" className="inline-flex items-center justify-center gap-2 font-heading font-semibold rounded-full whitespace-nowrap transition active:scale-[0.98] px-4 py-2 text-[0.85rem] bg-transparent text-primary border-[1.5px] border-primary hover:bg-primary-light w-full mt-3">
                Ver perfil
              </Link>
            </article>
            <article className="flex-[0_0_220px] snap-start bg-surface border border-line rounded-md shadow-sm px-[18px] py-6 flex flex-col items-center text-center gap-1.5">
              <div className="inline-flex items-center justify-center rounded-full font-heading font-semibold text-white shrink-0 size-24 text-[1.8rem] avatar-c5">
                MT
              </div>
              <h3 className="mt-1.5 text-[1rem]">
                Marcos Teixeira
              </h3>
              <p className="text-ink-muted">
                Montador de móveis
              </p>
              <div className="inline-flex items-center gap-1.5 font-semibold text-[0.9rem]">
                <svg className="inline-block shrink-0 fill-current size-5 align-middle text-warning" aria-hidden="true">
                  <use href="#icon-star" />
                </svg>
                {" "}4.6{" "}
                <span className="text-ink-muted">
                  (54)
                </span>
              </div>
              <Link to="/perfil" className="inline-flex items-center justify-center gap-2 font-heading font-semibold rounded-full whitespace-nowrap transition active:scale-[0.98] px-4 py-2 text-[0.85rem] bg-transparent text-primary border-[1.5px] border-primary hover:bg-primary-light w-full mt-3">
                Ver perfil
              </Link>
            </article>
          </div>
        </div>
      </section>
      <section className="py-14">
        <div className="container">
          <div className="bg-brand-deep text-white rounded-lg flex flex-col items-center text-center px-6 py-8 md:flex-row md:text-left md:p-10 justify-between gap-6 flex-wrap">
            <div>
              <h2 className="text-white mb-2">
                É prestador de serviços?
              </h2>
              <p className="text-white/85 max-w-[42ch]">
                Cadastre-se gratuitamente, monte sua agenda e comece a receber chamados perto de você.
              </p>
            </div>
            <Link to="/prestador" className="inline-flex items-center justify-center gap-2 font-heading font-semibold rounded-full whitespace-nowrap transition active:scale-[0.98] px-[22px] py-3 text-[0.95rem] bg-white text-primary-dark shadow-sm hover:bg-primary-soft hover:shadow-md shrink-0">
              Quero atender pelo ResolveAí{" "}
              <svg className="inline-block shrink-0 fill-current size-5 align-middle" aria-hidden="true">
                <use href="#icon-arrow-right" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
