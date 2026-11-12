// Lógica pura (sem React) da busca no catálogo: recebe a lista, os filtros
// e a ordenação, e devolve uma NOVA lista. Por ser uma função pura,
// é fácil de testar e de reaproveitar quando os dados vierem de uma API.

import { CATEGORIAS } from "../data/profissionais.js";

// Remove acentos e põe em minúsculas, para "eletrica" achar "Elétrica".
export const normalizar = (texto) =>
  texto.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().trim();

// Quebra um texto em palavras normalizadas: "Jardim Paulistano" -> ["jardim", "paulistano"]
const palavras = (texto) => normalizar(texto).split(/[^a-z0-9]+/).filter(Boolean);

// Sugestões de profissão para o que o usuário está digitando: as profissões
// cujo nome CONTÉM as letras digitadas ("ist" -> Eletricista, Diarista).
// Sem sinônimos nem contextos relacionados: só o nome da profissão.
export function sugerirCategorias(texto) {
  const t = normalizar(texto);
  if (!t) return [];
  return CATEGORIAS.filter((categoria) => normalizar(categoria).includes(t));
}

export const FILTROS_INICIAIS = {
  categorias: [],       // [] = todas
  precoMin: "",         // string, porque vem de <input type="number">
  precoMax: "",
  notaMin: null,        // null = qualquer
  distanciaMax: null,   // null = qualquer
  atendimento: [],      // [] = qualquer
};

export const ORDENACOES = {
  nota: "Mais bem avaliados",
  preco: "Menor preço",
  distancia: "Mais próximos",
};

const comparadores = {
  nota: (a, b) => b.nota - a.nota || b.avaliacoes - a.avaliacoes,
  preco: (a, b) => a.precoBase - b.precoBase,
  distancia: (a, b) => a.distanciaKm - b.distanciaKm,
};

export function filtrarProfissionais(lista, termo, filtros, ordenacao) {
  const tokens = palavras(termo);
  const min = filtros.precoMin === "" ? null : Number(filtros.precoMin);
  const max = filtros.precoMax === "" ? null : Number(filtros.precoMax);

  return lista
    .filter((p) => {
      if (tokens.length) {
        // Cada palavra digitada precisa COMEÇAR alguma palavra do nome, bairro ou profissão.
        const alvo = [...palavras(`${p.nome} ${p.bairro}`), ...palavras(p.categoria)];
        if (!tokens.every((tk) => alvo.some((w) => w.startsWith(tk)))) return false;
      }
      if (filtros.categorias.length && !filtros.categorias.includes(p.categoria)) return false;
      if (min !== null && p.precoBase < min) return false;
      if (max !== null && p.precoBase > max) return false;
      if (filtros.notaMin !== null && p.nota < filtros.notaMin) return false;
      if (filtros.distanciaMax !== null && p.distanciaKm > filtros.distanciaMax) return false;
      if (filtros.atendimento.length && !p.atendimento.some((a) => filtros.atendimento.includes(a))) return false;
      return true;
    })
    .sort(comparadores[ordenacao]);
}

// Quantos filtros estão ativos (para mostrar o contador no botão "Filtros").
export function contarFiltros(f) {
  return (
    (f.categorias.length ? 1 : 0) +
    (f.precoMin !== "" || f.precoMax !== "" ? 1 : 0) +
    (f.notaMin !== null ? 1 : 0) +
    (f.distanciaMax !== null ? 1 : 0) +
    (f.atendimento.length ? 1 : 0)
  );
}
