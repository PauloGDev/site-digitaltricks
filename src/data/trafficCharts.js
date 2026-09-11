export const trafficExample = {
  industry: "E-commerce de produtos premium",
  timeframe: "Campanha de 30 dias",
  objective: "Aumentar conversão de kits de lançamento",
  before: {
    spend: "R$ 12.000,00",
    leads: 342,
    conversionRate: "1,2%",
    cpl: "R$ 35,09",
  },
  after: {
    spend: "R$ 8.500,00",
    leads: 487,
    conversionRate: "4,8%",
    cpl: "R$ 17,45",
  },
  results: {
    sales: 67,
    revenue: "R$ 23.450,00",
    roas: "2,76x",
    costPerSale: "R$ 126,87",
  },
  metrics: [
    { label: "Impressões", value: "254K", change: "+32%" },
    { label: "CTR médio", value: "3,1%", change: "+1,4pp" },
    { label: "Conversão", value: "4,8%", change: "+3,6pp" },
    { label: "CPL", value: "R$ 17,45", change: "-50%" },
  ],
};

export const trafficCharts = [
  {
    type: "bar",
    title: "Desempenho antes vs depois",
    description: "Comparação de leads e taxa de conversão após a otimização das campanhas.",
    data: {
      labels: ["Antes", "Depois"],
      series: [
        { name: "Leads", values: [342, 487] },
        { name: "Taxa de Conversão (%)", values: [1.2, 4.8] },
      ],
    },
  },
  {
    type: "line",
    title: "Evolução do investimento",
    description: "Redução do custo por lead (CPL) ao longo do período otimizado.",
    data: {
      labels: ["Dia 1", "Dia 5", "Dia 10", "Dia 15", "Dia 20", "Dia 25", "Dia 30"],
      series: [{ name: "CPL (R$)", values: [35, 28, 22, 19, 17, 17, 17] }],
    },
  },
  {
    type: "pie",
    title: "Distribuição de verba",
    description: "Como o orçamento foi alocado entre canais e formatos de anúncio.",
    data: {
      labels: ["Google Ads", "Meta Ads", "YouTube", "Remarketing"],
      series: [45, 35, 12, 8],
    },
  },
];
