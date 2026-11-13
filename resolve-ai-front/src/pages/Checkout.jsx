import { useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import Icon from "../components/Icon.jsx";

import { getProfissional } from "../data/profissionais.js";
import { brl, iniciais } from "../lib/formatar.js";
import {
  TAXA_PLATAFORMA,
  calcularParcelas,
  mascararCartao,
  mascararCvv,
  mascararValidade,
  validarCartao,
} from "../lib/pagamento.js";

// TODO: vêm da tela anterior e por enquanto são fixos
const AGENDAMENTO = {
  data: "Terça-feira, 22 de setembro de 2026 · 10:30",
  endereco: "Rua das Palmeiras, 245 — Jardim Paulistano, São Carlos/SP",
  descricao: "Disjuntor desarmando sozinho, preciso trocar 2 tomadas da cozinha",
};

const inputCls =
  "w-full px-3.5 py-3 border-[1.5px] rounded-sm text-[0.95rem] transition focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_var(--color-primary-light)] bg-surface";
const btn =
  "inline-flex items-center justify-center gap-2 font-heading font-semibold rounded-full whitespace-nowrap transition active:scale-[0.98] px-[22px] py-3 text-[0.95rem]";
const card = "bg-surface border border-line rounded-md shadow-sm";

const CARTAO_VAZIO = { numero: "", nome: "", validade: "", cvv: "", parcelas: "1" };

// Campo de formulário com rótulo, borda vermelha e mensagem de erro acessível.
function Campo({ id, label, erro, icone, children }) {
  return (
    <div className="mb-5">
      <label htmlFor={id} className="block font-semibold text-[0.9rem] mb-2 text-ink">{label}</label>
      <div className="relative">
        {icone && <Icon name={icone} className="size-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-muted" />}
        {children}
      </div>
      {erro && (
        <p id={`${id}-erro`} role="alert" className="mt-1.5 text-[0.82rem] text-danger-dark">
          {erro}
        </p>
      )}
    </div>
  );
}

export default function Checkout() {
  const [params] = useSearchParams();
  const profissional = getProfissional(params.get("pro")) ?? getProfissional(1);

  // ---------- ESTADO ----------
  const [metodo, setMetodo] = useState("pix");            // "pix" | "cartao"
  const [cartao, setCartao] = useState(CARTAO_VAZIO);
  const [tocados, setTocados] = useState({});             // campos que o usuário já "visitou"
  const [processando, setProcessando] = useState(false);
  const [pedido, setPedido] = useState(null);             // null = ainda não confirmado
  const timer = useRef(null);

  // ---------- VALORES DERIVADOS ----------
  const servico = profissional.precoBase;
  const total = servico + TAXA_PLATAFORMA;
  const parcelas = calcularParcelas(total);

  // Erros calculados a cada render a partir do que está digitado.
  const errosCartao = metodo === "cartao" ? validarCartao(cartao) : {};
  // Só mostramos o erro de um campo depois que ele foi tocado (ou no envio).
  const erro = (campo) => (tocados[campo] ? errosCartao[campo] : "");

  useEffect(() => () => clearTimeout(timer.current), []);

  // ---------- AÇÕES ----------
  const mudar = (campo, mascara) => (e) =>
    setCartao((c) => ({ ...c, [campo]: mascara ? mascara(e.target.value) : e.target.value }));
  const tocar = (campo) => () => setTocados((t) => ({ ...t, [campo]: true }));

  const confirmar = () => {
    if (processando) return;

    if (metodo === "cartao") {
      const erros = validarCartao(cartao);
      const campos = Object.keys(erros);
      if (campos.length) {
        // Marca tudo como tocado para exibir os erros e leva o foco ao primeiro inválido.
        setTocados({ numero: true, nome: true, validade: true, cvv: true });
        document.getElementById(`cartao-${campos[0]}`)?.focus();
        return;
      }
    }

    // TODO: conectar com o backend
    setProcessando(true);
    timer.current = setTimeout(() => {
      setPedido({
        numero: `RA-${Math.floor(100000 + Math.random() * 900000)}`,
        metodo,
        final: cartao.numero.replace(/\D/g, "").slice(-4),
        parcelas: Number(cartao.parcelas),
        total,
      });
      setProcessando(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 900);
  };

  const confirmado = pedido !== null;

  // Props comuns dos inputs do cartão.
  const propsCampo = (campo, mascara, extra = "") => ({
    id: `cartao-${campo}`,
    value: cartao[campo],
    onChange: mudar(campo, mascara),
    onBlur: tocar(campo),
    "aria-invalid": Boolean(erro(campo)),
    "aria-describedby": erro(campo) ? `cartao-${campo}-erro` : undefined,
    className: `${inputCls} ${extra} ${erro(campo) ? "border-danger" : "border-line"}`,
  });

  return (
    <main id="main">
      <div className="container pt-8 pb-16">
        <nav className="flex items-center gap-1.5 text-[0.88rem] text-ink-muted mb-5 flex-wrap" aria-label="breadcrumb">
          <Link to={`/perfil?pro=${profissional.id}`} className="hover:text-primary">{profissional.nome}</Link>
          <Icon name="chevron-right" className="size-4" />
          <span>Checkout</span>
        </nav>

        {/* INDICADOR DE ETAPAS */}
        <ol className="flex items-center gap-2.5 mb-5 flex-wrap" aria-label="Etapas do pedido">
          <Etapa estado="feito">Agendamento</Etapa>
          <Linha />
          <Etapa estado={confirmado ? "feito" : "atual"} numero={2}>Pagamento</Etapa>
          <Linha />
          <Etapa estado={confirmado ? "feito" : "futuro"} numero={3}>Confirmação</Etapa>
        </ol>

        {confirmado ? (
          <Confirmacao pedido={pedido} profissional={profissional} />
        ) : (
          <>
            <h1 className="mb-6">Finalizar solicitação</h1>

            <div className="grid grid-cols-1 xl:grid-cols-[1fr_340px] gap-6 items-start">
              <div>
                {/* RESUMO DO SERVIÇO */}
                <section className={`${card} px-7 py-6 mb-5`}>
                  <h2 className="mb-4">Resumo do serviço</h2>
                  <div className="flex items-center gap-3.5 pb-[18px] mb-[18px] border-b border-line">
                    <div className="inline-flex items-center justify-center rounded-full font-heading font-semibold text-white shrink-0 size-14 text-[1.1rem] avatar-c1">
                      {iniciais(profissional.nome)}
                    </div>
                    <div className="flex-1">
                      <strong>{profissional.nome}</strong>
                      <p className="text-ink-muted text-[0.85rem]">
                        {profissional.categoria} ·{" "}
                        <span className="inline-flex items-center gap-1.5 font-semibold text-[0.9rem]">
                          <Icon name="star" className="size-[15px] text-warning" /> {profissional.nota.toFixed(1)}
                        </span>
                      </p>
                    </div>
                    <Link
                      to="/catalogo"
                      className="inline-flex items-center justify-center gap-2 font-heading font-semibold rounded-full whitespace-nowrap transition active:scale-[0.98] px-4 py-2 text-[0.85rem] bg-transparent text-ink-secondary hover:bg-line hover:text-ink"
                    >
                      Alterar
                    </Link>
                  </div>
                  <ul>
                    <ItemResumo icone="calendar">{AGENDAMENTO.data}</ItemResumo>
                    <ItemResumo icone="map-marker">{AGENDAMENTO.endereco}</ItemResumo>
                    <ItemResumo icone="file-document-outline">{AGENDAMENTO.descricao}</ItemResumo>
                  </ul>
                </section>

                {/* FORMA DE PAGAMENTO */}
                <section className={`${card} px-7 py-6 mb-5`}>
                  <h2 className="mb-4">Forma de pagamento</h2>

                  <div role="radiogroup" aria-label="Forma de pagamento" className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-5">
                    <OpcaoPagamento
                      valor="pix"
                      atual={metodo}
                      onChange={setMetodo}
                      icone="qrcode"
                      titulo="Pix"
                      detalhe="Aprovação imediata"
                    />
                    <OpcaoPagamento
                      valor="cartao"
                      atual={metodo}
                      onChange={setMetodo}
                      icone="credit-card-outline"
                      titulo="Cartão de crédito"
                      detalhe="Em até 3x sem juros"
                    />
                  </div>

                  {metodo === "pix" ? (
                    <div className="flex flex-col text-center sm:flex-row sm:text-left items-center gap-[18px] bg-page rounded-md p-[18px]">
                      <div className="size-[84px] shrink-0 bg-surface border border-line rounded-sm flex items-center justify-center" aria-hidden="true">
                        <Icon name="qrcode" className="size-12 text-ink" />
                      </div>
                      <div>
                        <p><strong>Escaneie o QR Code</strong> com o app do seu banco para pagar {brl(total)}.</p>
                        <p className="text-ink-muted text-[0.85rem]">
                          O código expira em 15 minutos. O agendamento é confirmado automaticamente após o pagamento.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <Campo id="cartao-numero" label="Número do cartão" erro={erro("numero")} icone="credit-card-outline">
                        <input
                          {...propsCampo("numero", mascararCartao, "pl-11")}
                          type="text"
                          inputMode="numeric"
                          autoComplete="cc-number"
                          placeholder="0000 0000 0000 0000"
                        />
                      </Campo>
                      <Campo id="cartao-nome" label="Nome impresso no cartão" erro={erro("nome")}>
                        <input
                          {...propsCampo("nome")}
                          type="text"
                          autoComplete="cc-name"
                          placeholder="Como está no cartão"
                        />
                      </Campo>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Campo id="cartao-validade" label="Validade" erro={erro("validade")}>
                          <input
                            {...propsCampo("validade", mascararValidade)}
                            type="text"
                            inputMode="numeric"
                            autoComplete="cc-exp"
                            placeholder="MM/AA"
                          />
                        </Campo>
                        <Campo id="cartao-cvv" label="CVV" erro={erro("cvv")}>
                          <input
                            {...propsCampo("cvv", mascararCvv)}
                            type="text"
                            inputMode="numeric"
                            autoComplete="cc-csc"
                            placeholder="123"
                          />
                        </Campo>
                      </div>
                      <Campo id="cartao-parcelas" label="Parcelas">
                        <select
                          id="cartao-parcelas"
                          className={`${inputCls} border-line`}
                          value={cartao.parcelas}
                          onChange={mudar("parcelas")}
                        >
                          {parcelas.map((p) => (
                            <option key={p.n} value={p.n}>
                              {p.n}x de {brl(p.valor)} sem juros
                            </option>
                          ))}
                        </select>
                      </Campo>
                    </div>
                  )}
                </section>
              </div>

              {/* RESUMO DE CUSTOS */}
              <aside className={`${card} p-6 xl:sticky xl:top-below-header`}>
                <h2 className="mb-4">Resumo do pedido</h2>
                <Linha2 rotulo="Valor do serviço" valor={brl(servico)} />
                <Linha2 rotulo="Taxa da plataforma" valor={brl(TAXA_PLATAFORMA)} />
                <div className="flex justify-between border-t border-line mt-1.5 pt-3.5 pb-2 font-bold text-[1.15rem] text-ink">
                  <span>Total</span>
                  <span aria-live="polite">{brl(total)}</span>
                </div>

                <button
                  type="button"
                  disabled={processando}
                  onClick={confirmar}
                  className={`${btn} bg-accent text-white shadow-sm hover:bg-accent-dark hover:shadow-md w-full mt-4 disabled:opacity-70 disabled:cursor-wait`}
                >
                  {processando ? "Processando pagamento…" : "Confirmar solicitação"}
                </button>
                <p className="text-ink-muted text-[0.85rem] text-center mt-3">
                  Ao confirmar, você concorda com os <a href="#" className="text-primary underline">Termos de Uso</a> do ResolveAí.
                </p>

                <div className="flex items-center justify-center gap-1.5 mt-[18px] pt-4 border-t border-line text-[0.82rem] text-ink-muted">
                  <Icon name="lock-outline" className="size-4" />
                  Pagamento processado com segurança
                </div>
              </aside>
            </div>
          </>
        )}
      </div>
    </main>
  );
}

/* ---------- Componentes pequenos, usados só nesta tela ---------- */

function Etapa({ estado, numero, children }) {
  const cores = { feito: "text-success", atual: "text-primary", futuro: "text-ink-muted" };
  return (
    <li
      className={`inline-flex items-center gap-1.5 text-[0.85rem] font-semibold ${cores[estado]}`}
      aria-current={estado === "atual" ? "step" : undefined}
    >
      {estado === "feito" ? (
        <Icon name="check" className="size-4 box-content p-[3px] rounded-full bg-success-light" />
      ) : (
        `${numero}.`
      )}{" "}
      {children}
    </li>
  );
}

const Linha = () => <span className="w-8 h-0.5 bg-line" aria-hidden="true" />;

function ItemResumo({ icone, children }) {
  return (
    <li className="flex items-start gap-2.5 py-2 text-ink-secondary text-[0.92rem]">
      <Icon name={icone} className="size-5 text-primary mt-px" /> {children}
    </li>
  );
}

function Linha2({ rotulo, valor }) {
  return (
    <div className="flex justify-between py-2 text-ink-secondary text-[0.92rem]">
      <span>{rotulo}</span>
      <span>{valor}</span>
    </div>
  );
}

function OpcaoPagamento({ valor, atual, onChange, icone, titulo, detalhe }) {
  const selecionado = atual === valor;
  return (
    <label
      className={`group flex items-center gap-3 p-4 border-[1.5px] rounded-md transition cursor-pointer ${
        selecionado ? "border-primary bg-primary-light" : "border-line"
      }`}
    >
      <input
        type="radio"
        name="pagamento"
        className="sr-only"
        checked={selecionado}
        onChange={() => onChange(valor)}
      />
      <Icon name={icone} className={`size-[26px] ${selecionado ? "text-primary" : "text-ink-muted"}`} />
      <div>
        <strong className="block text-[0.95rem]">{titulo}</strong>
        <p className="text-ink-muted text-[0.85rem]">{detalhe}</p>
      </div>
    </label>
  );
}

function Confirmacao({ pedido, profissional }) {
  const formaTexto =
    pedido.metodo === "pix"
      ? "Pix"
      : `Cartão final ${pedido.final} · ${pedido.parcelas}x de ${brl(pedido.total / pedido.parcelas)}`;

  return (
    <section className={`${card} px-7 py-10 text-center max-w-[640px] mx-auto`} aria-live="polite">
      <div className="size-16 rounded-full bg-success-light text-success flex items-center justify-center mx-auto mb-4">
        <Icon name="check" className="size-9" />
      </div>
      <h1 className="mb-2">Solicitação enviada!</h1>
      <p className="mb-6">
        {profissional.nome} recebeu o seu chamado e vai confirmar o horário em breve.
      </p>

      <dl className="text-left bg-page rounded-md p-5 mb-6 text-[0.92rem] grid grid-cols-[auto_1fr] gap-x-5 gap-y-2">
        <dt className="text-ink-muted">Pedido</dt>
        <dd className="font-semibold text-ink">{pedido.numero}</dd>
        <dt className="text-ink-muted">Profissional</dt>
        <dd className="text-ink">{profissional.nome} · {profissional.categoria}</dd>
        <dt className="text-ink-muted">Data</dt>
        <dd className="text-ink">{AGENDAMENTO.data}</dd>
        <dt className="text-ink-muted">Pagamento</dt>
        <dd className="text-ink">{formaTexto}</dd>
        <dt className="text-ink-muted">Total</dt>
        <dd className="font-bold text-ink">{brl(pedido.total)}</dd>
      </dl>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link to="/pedidos" className={`${btn} bg-primary text-white shadow-sm hover:bg-primary-dark hover:shadow-md`}>
          Ver meus pedidos
        </Link>
        <Link to="/catalogo" className={`${btn} bg-transparent text-primary border-[1.5px] border-primary hover:bg-primary-light`}>
          Buscar outro profissional
        </Link>
      </div>
    </section>
  );
}
