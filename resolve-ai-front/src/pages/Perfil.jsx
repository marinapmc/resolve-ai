import { Link, useNavigate } from "react-router-dom";

export default function Perfil() {

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    // Sua lógica de envio...

    navigate('/checkout');
  }

  return (
    <main id="main">
      <div className="container pt-8 pb-16">
        {/* TODO: Implementar a lógica da pilha de rotas */}
        <nav className="flex items-center gap-1.5 text-[0.88rem] text-ink-muted mb-5 flex-wrap" aria-label="breadcrumb">
          <Link to="/" className="hover:text-primary">
            Início
          </Link>
          <svg className="inline-block shrink-0 fill-current align-middle size-4" aria-hidden="true">
            <use href="#icon-chevron-right" />
          </svg>
          <Link to="/catalogo" className="hover:text-primary">
            Eletricistas
          </Link>
          <svg className="inline-block shrink-0 fill-current align-middle size-4" aria-hidden="true">
            <use href="#icon-chevron-right" />
          </svg>
          <span>
            Rafael Mendes
          </span>
        </nav>
        <section className="bg-surface border border-line rounded-md shadow-sm overflow-hidden mb-6">
          <div className="h-[140px] bg-brand-deep" />
          <div className="flex items-end gap-5 flex-wrap px-[18px] pb-5 md:px-7 md:pb-6">
            <div className="inline-flex items-center justify-center rounded-full font-heading font-semibold text-white shrink-0 size-32 text-[2.2rem] avatar-c1 border-[5px] border-surface -mt-12 shadow-md">
              RM
            </div>
            <div className="flex-1 min-w-[220px] pt-3">
              <div className="flex items-center gap-2.5 flex-wrap">
                <h1>
                  Rafael Mendes
                </h1>
                <span className="inline-flex items-center gap-1.5 text-[0.78rem] font-semibold px-3 py-[5px] rounded-full bg-success-light text-success-dark">
                  <svg className="inline-block shrink-0 fill-current align-middle size-3.5" aria-hidden="true">
                    <use href="#icon-check-decagram" />
                  </svg>
                  {" "}Verificado
                </span>
              </div>
              <p className="text-ink-muted">
                Eletricista residencial e predial · São Carlos, SP
              </p>
              <div className="flex items-center gap-2 flex-wrap mt-2 text-[0.9rem]">
                <span className="inline-flex items-center gap-1.5 font-semibold text-[0.9rem]">
                  <svg className="inline-block shrink-0 fill-current size-5 align-middle text-warning" aria-hidden="true">
                    <use href="#icon-star" />
                  </svg>
                  {" "}4.9{" "}
                  <span className="text-ink-muted">
                    (212 avaliações)
                  </span>
                </span>
                <span className="text-ink-muted">
                  ·
                </span>
                <span className="text-ink-muted">
                  <svg className="inline-block shrink-0 fill-current size-4 align-text-bottom" aria-hidden="true">
                    <use href="#icon-briefcase-outline" />
                  </svg>
                  {" "}340 chamados concluídos
                </span>
                <span className="text-ink-muted">
                  ·
                </span>
                <span className="text-ink-muted">
                  <svg className="inline-block shrink-0 fill-current size-4 align-text-bottom" aria-hidden="true">
                    <use href="#icon-clock-outline" />
                  </svg>
                  {" "}Responde em ~15 min
                </span>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-full md:items-end md:w-auto gap-1.5 pt-3">
              <span className="text-ink-muted text-[0.85rem]">
                a partir de
              </span>
              <strong className="font-heading text-[1.6rem] self-center md:self-auto">
                R$ 90
              </strong>
              <a href="#agendamento" className="inline-flex items-center justify-center gap-2 font-heading font-semibold rounded-full whitespace-nowrap transition active:scale-[0.98] px-[22px] py-3 text-[0.95rem] bg-accent text-white shadow-sm hover:bg-accent-dark hover:shadow-md w-full mt-1">
                Agendar agora
              </a>
            </div>
          </div>
        </section>
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-6 items-start">
          <div>
            <section className="bg-surface border border-line rounded-md shadow-sm px-7 py-6 mb-5">
              <h2 className="mb-3">
                Sobre
              </h2>
              <p>
                Sou eletricista há mais de 12 anos, formado técnico em eletrotécnica, com foco em instalações residenciais e prediais. Atendo desde pequenos reparos até reformas completas de quadro de distribuição, sempre priorizando segurança e conformidade com as normas da ABNT. Trabalho com orçamento sem compromisso e nota fiscal.
              </p>
            </section>
            <section className="bg-surface border border-line rounded-md shadow-sm px-7 py-6 mb-5">
              <div className="flex items-baseline justify-between gap-4 flex-wrap mb-4">
                <h2 className="mb-3">
                  Trabalhos anteriores
                </h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <div className="aspect-[4/3] rounded-sm opacity-90 avatar-c1" />
                <div className="aspect-[4/3] rounded-sm opacity-90 avatar-c2" />
                <div className="aspect-[4/3] rounded-sm opacity-90 avatar-c3" />
                <div className="aspect-[4/3] rounded-sm opacity-90 avatar-c4" />
                <div className="aspect-[4/3] rounded-sm opacity-90 avatar-c5" />
                <div className="aspect-[4/3] rounded-sm opacity-90 avatar-c1" />
              </div>
            </section>
            <section className="bg-surface border border-line rounded-md shadow-sm px-7 py-6 mb-5">
              <div className="flex items-baseline justify-between gap-4 flex-wrap mb-4">
                <div>
                  <h2 className="mb-3">
                    Avaliações
                  </h2>
                  <p className="mt-1.5">
                    212 avaliações · nota média 4.9
                  </p>
                </div>
              </div>
              <article className="flex gap-3.5 py-[18px] border-b border-line">
                <div className="inline-flex items-center justify-center rounded-full font-heading font-semibold text-white shrink-0 size-9 text-[0.8rem] avatar-c3">
                  LT
                </div>
                <div>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <strong>
                      Larissa Tavares
                    </strong>
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
                  </div>
                  <p className="text-ink-muted text-[0.85rem] mt-1.5">
                    Serviço em 03/09/2026
                  </p>
                  <p className="mt-1.5">
                    Rápido, educado e resolveu o problema do disjuntor na hora. Recomendo!
                  </p>
                </div>
              </article>
              <article className="flex gap-3.5 py-[18px] border-b border-line">
                <div className="inline-flex items-center justify-center rounded-full font-heading font-semibold text-white shrink-0 size-9 text-[0.8rem] avatar-c4">
                  GP
                </div>
                <div>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <strong>
                      Gustavo Prado
                    </strong>
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
                  </div>
                  <p className="text-ink-muted text-[0.85rem] mt-1.5">
                    Serviço em 28/08/2026
                  </p>
                  <p className="mt-1.5">
                    Excelente atendimento, chegou no horário combinado e deixou tudo funcionando perfeitamente.
                  </p>
                </div>
              </article>
              <article className="flex gap-3.5 py-[18px]">
                <div className="inline-flex items-center justify-center rounded-full font-heading font-semibold text-white shrink-0 size-9 text-[0.8rem] avatar-c5">
                  MC
                </div>
                <div>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <strong>
                      Marina Coutinho
                    </strong>
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
                    </span>
                  </div>
                  <p className="text-ink-muted text-[0.85rem] mt-1.5">
                    Serviço em 14/08/2026
                  </p>
                  <p className="mt-1.5">
                    Bom serviço, só demorou um pouco mais do que o combinado para chegar.
                  </p>
                </div>
              </article>
              <button className="inline-flex items-center justify-center gap-2 font-heading font-semibold rounded-full whitespace-nowrap transition active:scale-[0.98] px-[22px] py-3 text-[0.95rem] bg-transparent text-primary border-[1.5px] border-primary hover:bg-primary-light w-full">
                Ver todas as avaliações
              </button>
            </section>
          </div>
          <aside className="bg-surface border border-line rounded-md shadow-sm p-6 xl:sticky xl:top-below-header" id="agendamento">
            <h2 className="mb-1">
              Agendar serviço
            </h2>
            <p className="text-ink-muted text-[0.85rem]">
              Escolha o melhor horário para você
            </p>
            <form className="mt-[18px]" onSubmit={handleSubmit} method="get">
              <div className="mb-5">
                <label htmlFor="data" className="block font-semibold text-[0.9rem] mb-2 text-ink">
                  Data
                </label>
                <input className="w-full px-3.5 py-3 border-[1.5px] rounded-sm text-[0.95rem] transition focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_var(--color-primary-light)] border-line bg-surface" type="date" id="data" name="data" />
              </div>
              <div className="mb-5">
                <label className="block font-semibold text-[0.9rem] mb-2 text-ink">
                  Horário disponível
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  <label className="block py-2.5 px-1.5 mb-2 border-[1.5px] border-line rounded-sm font-semibold text-[0.9rem] text-center text-ink transition has-[:checked]:border-primary has-[:checked]:bg-primary-light has-[:checked]:text-primary-dark">
                    <input type="radio" name="horario" className="sr-only" />
                    {" "}08:00
                  </label>
                  <label className="block py-2.5 px-1.5 mb-2 border-[1.5px] border-line rounded-sm font-semibold text-[0.9rem] text-center text-ink transition has-[:checked]:border-primary has-[:checked]:bg-primary-light has-[:checked]:text-primary-dark">
                    <input type="radio" name="horario" className="sr-only" defaultChecked />
                    {" "}10:30
                  </label>
                  <label className="block py-2.5 px-1.5 mb-2 border-[1.5px] border-line rounded-sm font-semibold text-[0.9rem] text-center text-ink transition has-[:checked]:border-primary has-[:checked]:bg-primary-light has-[:checked]:text-primary-dark">
                    <input type="radio" name="horario" className="sr-only" />
                    {" "}13:00
                  </label>
                  <label className="block py-2.5 px-1.5 mb-2 border-[1.5px] border-line rounded-sm font-semibold text-[0.9rem] text-center text-ink transition has-[:checked]:border-primary has-[:checked]:bg-primary-light has-[:checked]:text-primary-dark">
                    <input type="radio" name="horario" className="sr-only" />
                    {" "}15:30
                  </label>
                  <label className="block py-2.5 px-1.5 mb-2 border-[1.5px] border-line rounded-sm font-semibold text-[0.9rem] text-center text-ink transition has-[:checked]:border-primary has-[:checked]:bg-primary-light has-[:checked]:text-primary-dark">
                    <input type="radio" name="horario" className="sr-only" />
                    {" "}17:00
                  </label>
                  <label className="block py-2.5 px-1.5 mb-2 border-[1.5px] border-line rounded-sm font-semibold text-[0.9rem] text-center text-ink transition has-[:checked]:border-primary has-[:checked]:bg-primary-light has-[:checked]:text-primary-dark">
                    <input type="radio" name="horario" className="sr-only" />
                    {" "}18:30
                  </label>
                </div>
              </div>
              <div className="mb-5">
                <label htmlFor="endereco" className="block font-semibold text-[0.9rem] mb-2 text-ink">
                  Endereço de atendimento
                </label>
                <div className="relative">
                  <svg className="inline-block shrink-0 fill-current size-5 align-middle absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-muted" aria-hidden="true">
                    <use href="#icon-map-marker" />
                  </svg>
                  <input className="w-full pl-11 pr-3.5 py-3 border-[1.5px] rounded-sm text-[0.95rem] transition focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_var(--color-primary-light)] border-line bg-surface" type="text" id="endereco" name="endereco" placeholder="Rua, número, bairro" />
                </div>
              </div>
              <div className="mb-5">
                <label htmlFor="descricao" className="block font-semibold text-[0.9rem] mb-2 text-ink">
                  Descreva o problema
                </label>
                <textarea className="w-full px-3.5 py-3 border-[1.5px] rounded-sm text-[0.95rem] transition focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_var(--color-primary-light)] border-line bg-surface resize-y min-h-[100px]" id="descricao" name="descricao" placeholder="Ex: disjuntor desarmando sozinho, preciso trocar tomadas..." />
              </div>
              <div className="bg-page rounded-sm px-4 py-3.5 mb-[18px] text-[0.9rem]">
                <div className="flex justify-between py-1 text-ink-secondary">
                  <span>
                    Valor do serviço
                  </span>
                  <span>
                    R$ 90,00
                  </span>
                </div>
                <div className="flex justify-between py-1 text-ink-secondary">
                  <span>
                    Taxa da plataforma
                  </span>
                  <span>
                    R$ 8,00
                  </span>
                </div>
                <div className="flex justify-between border-t border-line mt-1.5 pt-2.5 pb-1 font-bold text-ink text-[1rem]">
                  <span>
                    Total estimado
                  </span>
                  <span>
                    R$ 98,00
                  </span>
                </div>
              </div>
              <button type="submit" className="inline-flex items-center justify-center gap-2 font-heading font-semibold rounded-full whitespace-nowrap transition active:scale-[0.98] px-[22px] py-3 text-[0.95rem] bg-accent text-white shadow-sm hover:bg-accent-dark hover:shadow-md w-full">
                Confirmar e ir para pagamento
              </button>
              <p className="text-ink-muted text-[0.85rem] text-center mt-3">
                <svg className="inline-block shrink-0 fill-current size-3.5 align-text-bottom" aria-hidden="true">
                  <use href="#icon-lock-outline" />
                </svg>
                {" "}Pagamento só é liberado ao prestador após a confirmação do serviço.
              </p>
            </form>
          </aside>
        </div>
      </div>
    </main>
  );
}
