// Formata número como moeda brasileira: 98 -> "R$ 98,00"
export const brl = (valor) =>
  valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

// Formata km com vírgula: 1.8 -> "1,8 km"
export const km = (valor) => `${valor.toFixed(1).replace(".", ",")} km`;

// Iniciais para o avatar: "Rafael Mendes" -> "RM"
export const iniciais = (nome) =>
  nome.split(" ").filter(Boolean).slice(0, 2).map((p) => p[0]).join("").toUpperCase();
