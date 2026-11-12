// Base de dados simulada (mock) de profissionais.

// atendimento: "domicilio" | "local" | "remoto"
export const CATEGORIAS = [
  "Eletricista",
  "Encanador",
  "Diarista",
  "Pintor",
  "Jardinagem",
];

// ccomo a profissão aparece no título da busca ("Pintores em São Carlos, SP").
export const PLURAL_CATEGORIA = {
  Eletricista: "Eletricistas",
  Encanador: "Encanadores",
  Diarista: "Diaristas",
  Pintor: "Pintores",
  Jardinagem: "Profissionais de jardinagem",
};

export const ATENDIMENTOS = {
  domicilio: "Atendimento a domicílio",
  local: "Retirada / local do prestador",
  remoto: "Atendimento remoto",
};

export const PROFISSIONAIS = [
  {
    id: 1,
    nome: "Rafael Mendes",
    categoria: "Eletricista",
    nota: 4.9,
    avaliacoes: 212,
    distanciaKm: 1.8,
    bairro: "Jardim Paulistano",
    precoBase: 90,
    atendimento: ["domicilio", "remoto"],
    descricao:
      "Eletricista residencial e predial. Especialista em quadros de distribuição e instalações novas.",
  },
  {
    id: 2,
    nome: "Fernanda Duarte",
    categoria: "Eletricista",
    nota: 4.8,
    avaliacoes: 150,
    distanciaKm: 2.4,
    bairro: "Vila Nery",
    precoBase: 80,
    atendimento: ["domicilio"],
    descricao:
      "Atendimento residencial rápido, orçamento sem compromisso e garantia de 90 dias no serviço.",
  },
  {
    id: 3,
    nome: "Diego Ramos",
    categoria: "Eletricista",
    nota: 4.6,
    avaliacoes: 89,
    distanciaKm: 3.1,
    bairro: "Centro",
    precoBase: 75,
    atendimento: ["domicilio", "local"],
    descricao:
      "Instalações elétricas, troca de disjuntores e manutenção preventiva. Atendimento em até 24h.",
  },
  {
    id: 4,
    nome: "Patrícia Nogueira",
    categoria: "Eletricista",
    nota: 4.9,
    avaliacoes: 301,
    distanciaKm: 4.0,
    bairro: "Cidade Aracy",
    precoBase: 110,
    atendimento: ["domicilio", "remoto"],
    descricao:
      "Mais de 10 anos de experiência. Especialista em automação residencial e iluminação.",
  },
  {
    id: 5,
    nome: "Bruno Castro",
    categoria: "Eletricista",
    nota: 4.5,
    avaliacoes: 64,
    distanciaKm: 4.7,
    bairro: "Vila Prado",
    precoBase: 85,
    atendimento: ["domicilio"],
    descricao:
      "Atendimento comercial e residencial. Disponível também aos finais de semana.",
  },
  {
    id: 6,
    nome: "Otávio Lima",
    categoria: "Eletricista",
    nota: 4.4,
    avaliacoes: 41,
    distanciaKm: 5.2,
    bairro: "Santa Felícia",
    precoBase: 70,
    atendimento: ["domicilio", "local"],
    descricao:
      "Manutenção elétrica em geral, com peças e materiais inclusos no orçamento.",
  },
  {
    id: 7,
    nome: "Marcos Vieira",
    categoria: "Encanador",
    nota: 4.8,
    avaliacoes: 176,
    distanciaKm: 1.2,
    bairro: "Centro",
    precoBase: 100,
    atendimento: ["domicilio"],
    descricao:
      "Desentupimento, reparo de vazamentos e troca de registros com garantia de serviço.",
  },
  {
    id: 8,
    nome: "Luciana Prado",
    categoria: "Encanador",
    nota: 4.7,
    avaliacoes: 98,
    distanciaKm: 2.9,
    bairro: "Jardim Bethânia",
    precoBase: 95,
    atendimento: ["domicilio", "remoto"],
    descricao:
      "Instalação de chuveiros, torneiras e caixas d'água. Orçamento por vídeo chamada.",
  },
  {
    id: 9,
    nome: "Sérgio Almeida",
    categoria: "Encanador",
    nota: 4.2,
    avaliacoes: 33,
    distanciaKm: 7.5,
    bairro: "Parque Faber",
    precoBase: 65,
    atendimento: ["domicilio"],
    descricao:
      "Reparos hidráulicos em geral, atendimento de emergência 24 horas.",
  },
  {
    id: 10,
    nome: "Aline Barbosa",
    categoria: "Diarista",
    nota: 4.9,
    avaliacoes: 254,
    distanciaKm: 2.1,
    bairro: "Vila Monteiro",
    precoBase: 120,
    atendimento: ["domicilio"],
    descricao:
      "Limpeza residencial completa, pós-obra e organização de armários e despensas.",
  },
  {
    id: 11,
    nome: "Rosana Teixeira",
    categoria: "Diarista",
    nota: 4.6,
    avaliacoes: 87,
    distanciaKm: 5.8,
    bairro: "Santa Angelina",
    precoBase: 100,
    atendimento: ["domicilio"],
    descricao: "Diária de limpeza e passadoria. Produtos de limpeza opcionais.",
  },
  {
    id: 12,
    nome: "Caio Fernandes",
    categoria: "Pintor",
    nota: 4.7,
    avaliacoes: 120,
    distanciaKm: 3.6,
    bairro: "Jardim Cruzeiro do Sul",
    precoBase: 150,
    atendimento: ["domicilio", "local"],
    descricao:
      "Pintura interna e externa, textura e grafiato. Orçamento detalhado por metro quadrado.",
  },
  {
    id: 13,
    nome: "Helena Souza",
    categoria: "Pintor",
    nota: 4.3,
    avaliacoes: 52,
    distanciaKm: 9.4,
    bairro: "Distrito Industrial",
    precoBase: 130,
    atendimento: ["domicilio"],
    descricao:
      "Pintura residencial com acabamento fino e reparo de paredes e forros.",
  },
  {
    id: 14,
    nome: "Tiago Moreira",
    categoria: "Jardinagem",
    nota: 4.8,
    avaliacoes: 143,
    distanciaKm: 1.6,
    bairro: "Jardim Lutfalla",
    precoBase: 85,
    atendimento: ["domicilio", "remoto"],
    descricao:
      "Poda, paisagismo e manutenção de jardins. Consultoria remota para plantas.",
  },
  {
    id: 15,
    nome: "Vanessa Ribeiro",
    categoria: "Jardinagem",
    nota: 4.5,
    avaliacoes: 61,
    distanciaKm: 6.3,
    bairro: "Residencial Samambaia",
    precoBase: 70,
    atendimento: ["domicilio", "local"],
    descricao:
      "Corte de grama, adubação e controle de pragas em jardins e quintais.",
  },
];

export function getProfissional(id) {
  return PROFISSIONAIS.find((p) => p.id === Number(id));
}
