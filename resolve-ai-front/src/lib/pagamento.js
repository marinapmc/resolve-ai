// Regras do pagamento (sem React): máscaras, validações e cálculo de parcelas.

export const TAXA_PLATAFORMA = 8; // R$, valor fixo por pedido
export const MAX_PARCELAS = 3;    // "em até 3x sem juros"

const soDigitos = (v) => v.replace(/\D/g, "");

// ---------- MÁSCARAS (transformam o que o usuário digita) ----------
// "42424242" -> "4242 4242"
export const mascararCartao = (v) =>
  soDigitos(v).slice(0, 16).replace(/(\d{4})(?=\d)/g, "$1 ");

// "1228" -> "12/28"
export const mascararValidade = (v) => {
  const d = soDigitos(v).slice(0, 4);
  return d.length > 2 ? `${d.slice(0, 2)}/${d.slice(2)}` : d;
};

export const mascararCvv = (v) => soDigitos(v).slice(0, 4);

// ---------- VALIDAÇÕES (devolvem a mensagem de erro, ou "" se válido) ----------

// Algoritmo de Luhn: detecta números de cartão digitados errado.
// Dobra um dígito sim, um não, da direita para a esquerda, e confere se a soma é múltipla de 10.
export function luhnValido(numero) {
  let soma = 0;
  let dobrar = false;
  for (let i = numero.length - 1; i >= 0; i--) {
    let d = Number(numero[i]);
    if (dobrar) {
      d *= 2;
      if (d > 9) d -= 9;
    }
    soma += d;
    dobrar = !dobrar;
  }
  return soma % 10 === 0;
}

export function validarNumero(v) {
  const d = soDigitos(v);
  if (!d) return "Informe o número do cartão.";
  if (d.length < 13) return "O número do cartão está incompleto.";
  if (!luhnValido(d)) return "Número de cartão inválido.";
  return "";
}

export function validarNome(v) {
  const partes = v.trim().split(/\s+/).filter(Boolean);
  if (!partes.length) return "Informe o nome impresso no cartão.";
  if (partes.length < 2) return "Digite o nome completo, como está no cartão.";
  return "";
}

export function validarValidade(v, hoje = new Date()) {
  const m = v.match(/^(\d{2})\/(\d{2})$/);
  if (!m) return "Use o formato MM/AA.";
  const mes = Number(m[1]);
  const ano = 2000 + Number(m[2]);
  if (mes < 1 || mes > 12) return "Mês inválido.";
  // O cartão vale até o ÚLTIMO dia do mês de validade.
  const fimDoMes = new Date(ano, mes, 0, 23, 59, 59);
  if (fimDoMes < hoje) return "Cartão vencido.";
  return "";
}

export function validarCvv(v) {
  if (!v) return "Informe o CVV.";
  if (v.length < 3) return "O CVV tem 3 ou 4 dígitos.";
  return "";
}

// Valida todos os campos do cartão e devolve { campo: mensagem } só com os que têm erro.
export function validarCartao(c) {
  const erros = {
    numero: validarNumero(c.numero),
    nome: validarNome(c.nome),
    validade: validarValidade(c.validade),
    cvv: validarCvv(c.cvv),
  };
  return Object.fromEntries(Object.entries(erros).filter(([, msg]) => msg));
}

// Parcelas sem juros: [{ n: 1, valor: 98 }, { n: 2, valor: 49 }, ...]
export const calcularParcelas = (total) =>
  Array.from({ length: MAX_PARCELAS }, (_, i) => ({ n: i + 1, valor: total / (i + 1) }));
