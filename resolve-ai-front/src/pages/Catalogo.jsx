import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import Icon from "../components/Icon.jsx";

import { ATENDIMENTOS, CATEGORIAS, PLURAL_CATEGORIA, PROFISSIONAIS } from "../data/profissionais.js";

import {
  FILTROS_INICIAIS,
  ORDENACOES,
  contarFiltros,
  filtrarProfissionais,
  sugerirCategorias,
} from "../lib/filtrarProfissionais.js";
import { brl, km } from "../lib/formatar.js";

// ---- classes reutilizadas (mesmas da versão estática) ----
const inputCls =
  "w-full px-3.5 py-3 border-[1.5px] rounded-sm text-[0.95rem] transition focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_var(--color-primary-light)] border-line bg-surface";
const inputIconCls = inputCls.replace("px-3.5", "pl-11 pr-3.5");
const btn =
  "inline-flex items-center justify-center gap-2 font-heading font-semibold rounded-full whitespace-nowrap transition active:scale-[0.98] px-[22px] py-3 text-[0.95rem]";
const optionCls = "flex items-center gap-2.5 mb-2.5 last:mb-0 text-[0.9rem] text-ink-secondary cursor-pointer";
const groupCls = "pb-[18px] mb-[18px] border-b border-line";

// Liga/desliga um item de uma lista sem alterar a original: ["a"] + "b" -> ["a", "b"]
const alternar = (lista, item) =>
  lista.includes(item) ? lista.filter((i) => i !== item) : [...lista, item];

export default function Catalogo() {
  const [params] = useSearchParams();

  // texto digitado (rascunho) x termo efetivamente buscado (muda só ao enviar o formulário).
  const [rascunho, setRascunho] = useState(params.get("q") ?? "");
  const [termo, setTermo] = useState(params.get("q") ?? "");
  const [local, setLocal] = useState("São Carlos, SP");
  const [localBuscado, setLocalBuscado] = useState("São Carlos, SP");
  const [filtros, setFiltros] = useState(() => {
    const cat = params.get("categoria");
    return cat && CATEGORIAS.includes(cat) ? { ...FILTROS_INICIAIS, categorias: [cat] } : FILTROS_INICIAIS;
  });
  const [ordenacao, setOrdenacao] = useState("nota");
  const [drawerAberto, setDrawerAberto] = useState(false);
  // Lista de sugestões de profissão (abaixo do campo de busca)
  const [campoFocado, setCampoFocado] = useState(false);
  const [indiceAtivo, setIndiceAtivo] = useState(-1); // item destacado pelo teclado

  // não guardamos a lista filtrada em estado: ela é calculada a partir do estado acima.
  // useMemo só evita recalcular quando nada relevante mudou.
  const resultados = useMemo(
    () => filtrarProfissionais(PROFISSIONAIS, termo, filtros, ordenacao),
    [termo, filtros, ordenacao],
  );
  const qtdFiltros = contarFiltros(filtros);
  const sugestoes = useMemo(() => sugerirCategorias(rascunho), [rascunho]);
  const listaAberta = campoFocado && sugestoes.length > 0;

  const titulo =
    filtros.categorias.length === 1
      ? `${PLURAL_CATEGORIA[filtros.categorias[0]]} em ${localBuscado}`
      : `Profissionais em ${localBuscado}`;

      
  const set = (campo, valor) => setFiltros((f) => ({ ...f, [campo]: valor }));
  const buscar = (e) => {
    e.preventDefault();
    setTermo(rascunho);
    setLocalBuscado(local.trim() || "São Carlos, SP");
  };
  // Escolher uma sugestão aplica o filtro daquela profissão e limpa o texto.
  const escolherSugestao = (categoria) => {
    setFiltros((f) => ({ ...f, categorias: [categoria] }));
    setRascunho("");
    setTermo("");
    setIndiceAtivo(-1);
  };
  const aoTeclar = (e) => {
    if (!listaAberta) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setIndiceAtivo((i) => (i + 1) % sugestoes.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setIndiceAtivo((i) => (i <= 0 ? sugestoes.length - 1 : i - 1));
    } else if (e.key === "Enter" && indiceAtivo >= 0) {
      e.preventDefault(); // não envia o formulário: usa a sugestão destacada
      escolherSugestao(sugestoes[indiceAtivo]);
    } else if (e.key === "Escape") {
      setCampoFocado(false);
    }
  };

  const limpar = () => {
    setFiltros(FILTROS_INICIAIS);
    setRascunho("");
    setTermo("");
  };

  // Esc fecha o painel de filtros (mobile).
  useEffect(() => {
    if (!drawerAberto) return;
    const onKey = (e) => e.key === "Escape" && setDrawerAberto(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [drawerAberto]);

  return (
    <main id="main">
      <div className="container pt-8 pb-16">
        <nav className="flex items-center gap-1.5 text-[0.88rem] text-ink-muted mb-5 flex-wrap" aria-label="breadcrumb">
          <Link to="/" className="hover:text-primary">Início</Link>
          <Icon name="chevron-right" className="size-4" />
          <span>Resultados da busca</span>
        </nav>

        {/* BARRA DE BUSCA */}
        <form
          onSubmit={buscar}
          role="search"
          className="grid grid-cols-1 md:grid-cols-2 min-[861px]:grid-cols-[1.4fr_1fr_auto_auto] gap-2.5 bg-surface border border-line rounded-md shadow-sm p-3.5 mb-7"
        >
          <div className="relative">
            <Icon name="magnify" className="size-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-muted" />
            <input
              className={inputIconCls}
              type="search"
              role="combobox"
              aria-label="Buscar profissão ou serviço"
              aria-expanded={listaAberta}
              aria-controls="sugestoes-profissao"
              aria-autocomplete="list"
              aria-activedescendant={indiceAtivo >= 0 ? `sugestao-${indiceAtivo}` : undefined}
              autoComplete="off"
              placeholder="Ex.: eletricista, pintura, vazamento"
              value={rascunho}
              onChange={(e) => {
                setRascunho(e.target.value);
                setIndiceAtivo(-1);
                setCampoFocado(true);
              }}
              onFocus={() => setCampoFocado(true)}
              onBlur={() => setCampoFocado(false)}
              onKeyDown={aoTeclar}
            />
            {listaAberta && (
              <ul
                id="sugestoes-profissao"
                role="listbox"
                aria-label="Profissões sugeridas"
                className="absolute left-0 right-0 top-full mt-1.5 z-20 bg-surface border border-line rounded-md shadow-lg py-1.5 overflow-hidden"
              >
                {sugestoes.map((categoria, i) => (
                  <li
                    key={categoria}
                    id={`sugestao-${i}`}
                    role="option"
                    aria-selected={i === indiceAtivo}
                    // onMouseDown (e não onClick): roda antes do onBlur do input, que fecharia a lista.
                    onMouseDown={(e) => {
                      e.preventDefault();
                      escolherSugestao(categoria);
                    }}
                    onMouseEnter={() => setIndiceAtivo(i)}
                    className={`px-4 py-2.5 cursor-pointer text-[0.95rem] font-semibold ${
                      i === indiceAtivo ? "bg-primary-light text-primary" : "text-ink"
                    }`}
                  >
                    {categoria}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="relative">
            <Icon name="map-marker" className="size-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-muted" />
            <input
              className={inputIconCls}
              type="text"
              aria-label="Localização"
              value={local}
              onChange={(e) => setLocal(e.target.value)}
            />
          </div>
          <button type="submit" className={`${btn} bg-accent text-white shadow-sm hover:bg-accent-dark hover:shadow-md`}>
            Buscar
          </button>
          <button
            type="button"
            className={`${btn} xl:hidden bg-transparent text-primary border-[1.5px] border-primary hover:bg-primary-light`}
            onClick={() => setDrawerAberto(true)}
          >
            <Icon name="tune" className="size-5" />
            Filtros{qtdFiltros > 0 && ` (${qtdFiltros})`}
          </button>
        </form>

        {/* TÍTULO + ORDENAÇÃO */}
        <div className="flex flex-col items-start md:flex-row md:items-center justify-between flex-wrap gap-3 mb-5">
          <div>
            <h1>{titulo}</h1>
            <p className="mt-1 text-[0.9rem]" aria-live="polite">
              {resultados.length === 1
                ? "1 profissional encontrado"
                : `${resultados.length} profissionais encontrados`}
              {termo && <> para “{termo}”</>}
            </p>
          </div>
          <label className="flex items-center gap-2.5 text-[0.9rem] font-semibold text-ink-secondary">
            Ordenar por
            <select
              className={`${inputCls} !w-auto !px-3 !py-2`}
              value={ordenacao}
              onChange={(e) => setOrdenacao(e.target.value)}
            >
              {Object.entries(ORDENACOES).map(([valor, rotulo]) => (
                <option key={valor} value={valor}>{rotulo}</option>
              ))}
            </select>
          </label>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[280px_1fr] gap-7 items-start">
          {/* FILTROS (no mobile vira um painel deslizante) */}
          <aside
            aria-label="Filtros"
            className={`bg-surface border border-line rounded-md p-5 sticky top-below-header max-xl:fixed max-xl:inset-y-0 max-xl:left-0 max-xl:w-[min(320px,88vw)] max-xl:rounded-none max-xl:z-[200] max-xl:overflow-y-auto max-xl:transition-transform max-xl:duration-[250ms] ${
              drawerAberto ? "max-xl:translate-x-0 max-xl:shadow-lg" : "max-xl:-translate-x-[105%]"
            }`}
          >
            <div className="hidden max-xl:flex items-center justify-between mb-3">
              <h3>Filtros</h3>
              <button
                type="button"
                className="inline-block size-11 rounded-full bg-surface border border-line text-ink-secondary hover:bg-line"
                aria-label="Fechar filtros"
                onClick={() => setDrawerAberto(false)}
              >
                <Icon name="close" className="size-5" />
              </button>
            </div>

            <div className={groupCls}>
              <h4 className="mb-3">Categoria</h4>
              {CATEGORIAS.map((c) => (
                <label key={c} className={optionCls}>
                  <input
                    type="checkbox"
                    className="size-[18px] accent-primary"
                    checked={filtros.categorias.includes(c)}
                    onChange={() => set("categorias", alternar(filtros.categorias, c))}
                  />
                  {c}
                </label>
              ))}
            </div>

            <div className={groupCls}>
              <h4 className="mb-3">Preço base</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="preco-min" className="block font-semibold text-[0.9rem] mb-2.5 text-ink-secondary">Mínimo</label>
                  <input
                    id="preco-min"
                    className={inputCls}
                    type="number"
                    min="0"
                    inputMode="numeric"
                    placeholder="R$ 0"
                    value={filtros.precoMin}
                    onChange={(e) => set("precoMin", e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="preco-max" className="block font-semibold text-[0.9rem] mb-2.5 text-ink-secondary">Máximo</label>
                  <input
                    id="preco-max"
                    className={inputCls}
                    type="number"
                    min="0"
                    inputMode="numeric"
                    placeholder="R$ 500"
                    value={filtros.precoMax}
                    onChange={(e) => set("precoMax", e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className={groupCls}>
              <h4 className="mb-3">Avaliação mínima</h4>
              {[[4.5, "4.5 ou mais"], [4, "4.0 ou mais"], [3, "3.0 ou mais"], [null, "Qualquer avaliação"]].map(([v, rotulo]) => (
                <label key={rotulo} className={optionCls}>
                  <input
                    type="radio"
                    name="rating"
                    className="size-[18px] accent-primary"
                    checked={filtros.notaMin === v}
                    onChange={() => set("notaMin", v)}
                  />
                  {v !== null && (
                    <span className="inline-flex items-center gap-[3px] text-warning">
                      <Icon name="star" className="size-[18px]" />
                    </span>
                  )}
                  {rotulo}
                </label>
              ))}
            </div>

            <div className={groupCls}>
              <h4 className="mb-3">Distância</h4>
              {[[2, "Até 2 km"], [5, "Até 5 km"], [15, "Até 15 km"], [null, "Qualquer distância"]].map(([v, rotulo]) => (
                <label key={rotulo} className={optionCls}>
                  <input
                    type="radio"
                    name="distancia"
                    className="size-[18px] accent-primary"
                    checked={filtros.distanciaMax === v}
                    onChange={() => set("distanciaMax", v)}
                  />
                  {rotulo}
                </label>
              ))}
            </div>

            <div className="pb-[18px] mb-[18px]">
              <h4 className="mb-3">Tipo de atendimento</h4>
              {Object.entries(ATENDIMENTOS).map(([valor, rotulo]) => (
                <label key={valor} className={optionCls}>
                  <input
                    type="checkbox"
                    className="size-[18px] accent-primary"
                    checked={filtros.atendimento.includes(valor)}
                    onChange={() => set("atendimento", alternar(filtros.atendimento, valor))}
                  />
                  {rotulo}
                </label>
              ))}
            </div>

            <button
              type="button"
              className={`${btn} bg-primary text-white shadow-sm hover:bg-primary-dark hover:shadow-md w-full`}
              onClick={() => setDrawerAberto(false)}
            >
              Ver {resultados.length} {resultados.length === 1 ? "resultado" : "resultados"}
            </button>
            <button
              type="button"
              className={`${btn} bg-transparent text-ink-secondary hover:bg-line hover:text-ink w-full`}
              onClick={limpar}
            >
              Limpar filtros
            </button>
          </aside>

          {drawerAberto && (
            <div className="xl:hidden fixed inset-0 bg-overlay z-[190]" onClick={() => setDrawerAberto(false)} />
          )}

          {/* RESULTADOS */}
          {resultados.length > 0 ? (
            <section className="grid grid-cols-1 md:grid-cols-2 gap-5" aria-label="Lista de profissionais">
              {resultados.map((p) => (
                <article
                  key={p.id}
                  className="bg-surface border border-line rounded-md shadow-sm overflow-hidden flex flex-col transition hover:shadow-md hover:-translate-y-0.5"
                >
                  <div className="h-[120px] bg-brand relative after:content-[''] after:absolute after:inset-0 after:bg-shine" />
                  <div className="px-[18px] pt-4 pb-[18px] flex flex-col gap-1.5 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-[1.05rem]">{p.nome}</h3>
                      <span className="inline-flex items-center gap-1.5 font-semibold text-[0.9rem]">
                        <Icon name="star" className="size-[18px] text-warning" /> {p.nota.toFixed(1)}{" "}
                        <span className="text-ink-muted">({p.avaliacoes})</span>
                      </span>
                    </div>
                    <p className="text-ink-muted flex items-center gap-1 text-[0.85rem]">
                      <Icon name="map-marker" className="size-4" /> {km(p.distanciaKm)} · {p.bairro}
                    </p>
                    <span className="self-start rounded-full bg-primary-light text-primary text-[0.75rem] font-semibold px-2.5 py-0.5">
                      {p.categoria}
                    </span>
                    <p className="text-[0.88rem] mt-0.5 flex-1">{p.descricao}</p>
                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-line">
                      <div>
                        <span className="text-ink-muted text-[0.85rem]">a partir de</span>
                        <strong className="block font-heading text-[1.15rem] text-ink">{brl(p.precoBase)}</strong>
                      </div>
                      <Link
                        to={`/perfil?pro=${p.id}`}
                        className="inline-flex items-center justify-center gap-2 font-heading font-semibold rounded-full whitespace-nowrap transition active:scale-[0.98] px-4 py-2 text-[0.85rem] bg-primary text-white shadow-sm hover:bg-primary-dark hover:shadow-md"
                      >
                        Ver detalhes
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </section>
          ) : (
            <section
              className="bg-surface border border-line rounded-md shadow-sm p-10 text-center"
              aria-label="Nenhum resultado"
            >
              <Icon name="magnify" className="size-12 text-ink-muted mx-auto mb-3" />
              <h3 className="mb-1.5">Nenhum profissional encontrado</h3>
              <p className="mb-5">Tente buscar por outro termo ou remover alguns filtros.</p>
              <button
                type="button"
                className={`${btn} bg-primary text-white shadow-sm hover:bg-primary-dark hover:shadow-md`}
                onClick={limpar}
              >
                Limpar busca e filtros
              </button>
            </section>
          )}
        </div>
      </div>
    </main>
  );
}
