export const money = value => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(value);
export const services = [
  { slug: 'landing-pages-sites', name: 'Sites e landing pages', description: 'Páginas para transmitir confiança, apresentar sua empresa e gerar contatos.', title: 'Seu site precisa trabalhar pela sua empresa.' },
  { slug: 'social-media', name: 'Social media', description: 'Planejamento, conteúdo e consistência para sua marca ser lembrada.', title: 'Sua marca precisa ser lembrada antes de ser escolhida.' },
  { slug: 'trafego-pago', name: 'Tráfego pago', description: 'Google e Meta Ads conectados aos objetivos comerciais do negócio.', title: 'Visibilidade é importante. Oportunidades são o objetivo.' },
  { slug: 'ecommerce', name: 'E-commerce', description: 'Catálogo, pagamentos e pedidos em uma experiência de compra integrada.', title: 'Transforme seu catálogo em uma operação de vendas.' },
  { slug: 'sistemas-personalizados', name: 'Sistemas personalizados', description: 'Portais, dashboards, integrações e automações para os seus processos.', title: 'Uma solução construída para o jeito que sua empresa opera.' },
  { slug: 'criativos', name: 'Criativos e identidade visual', description: 'Peças, vídeos e direção visual que conectam marca e comunicação.', title: 'Uma comunicação com a identidade do seu negócio.' },
  { slug: 'posicionamento', name: 'Posicionamento', description: 'Oferta, público e diferenciais organizados antes de começar a comunicar.', title: 'Clareza sobre o que torna sua empresa uma escolha.' },
];
export const diagnosisServices = [...services, { slug: 'sistema-gestao', name: 'Sistema de gestão', description: 'Conhecer o produto que conecta WhatsApp, estoque, clientes, vendas e equipe.' }];
const baseWeb = ['Design personalizado e responsivo', 'Integração com WhatsApp', 'SEO básico', 'Otimização de velocidade'];
export const webOffers = [
  { id: 'landing-page', service: 'landing-pages-sites', name: 'Landing page', price: 990, starting: true, audience: 'Para campanhas, lançamentos e geração de leads.', items: [...baseWeb, 'Formulário de contato', 'Estrutura orientada à conversão'], deadline: '5 a 10 dias úteis' },
  { id: 'site-institucional', service: 'landing-pages-sites', name: 'Site institucional', price: 1790, starting: true, audience: 'Para apresentar sua empresa e fortalecer sua autoridade.', items: [...baseWeb, 'Até 4 páginas', 'Estrutura institucional completa'], deadline: '7 a 15 dias úteis' },
  { id: 'ecommerce', service: 'ecommerce', name: 'E-commerce', price: 3990, starting: true, audience: 'Para empresas que desejam vender online.', items: ['Catálogo de produtos', 'Carrinho e checkout', 'Integração com pagamentos', 'Gestão de pedidos', 'Painel administrativo', 'SEO básico', 'Layout responsivo'], deadline: 'Cronograma definido na proposta' },
];
const tiers = ['Essencial', 'Profissional', 'Premium'];
const prices = [990, 1650, 2750];
export const trafficOffers = tiers.map((name, i) => ({ id: `trafego-${i+1}`, service: 'trafego-pago', name, price: prices[i], monthly: true,
  audience: ['Para iniciar a aquisição por anúncios.', 'Para ampliar canais e oportunidades.', 'Para operações com campanhas e públicos mais complexos.'][i],
  items: [
    ['Meta Ads: Facebook e Instagram', 'Até 2 campanhas ativas', 'Segmentação estratégica e criação de públicos', 'Otimização', 'Relatório mensal', 'Suporte estratégico'],
    ['Meta Ads + Google Ads', 'Até 5 campanhas simultâneas', 'Remarketing e públicos avançados', 'Estratégias de conversão', 'Otimização contínua', 'Relatório detalhado', 'Reunião estratégica mensal'],
    ['Meta Ads + Google Ads', 'Estratégias personalizadas e funil de aquisição', 'Remarketing avançado', 'Testes estratégicos', 'Relatórios completos', 'Reuniões estratégicas', 'Monitoramento contínuo'],
  ][i] }));
export const socialOffers = tiers.map((name, i) => ({ id: `social-${i+1}`, service: 'social-media', name, price: prices[i], monthly: true,
  audience: ['Para construir uma presença consistente.', 'Para integrar captação, formatos e planejamento.', 'Para ampliar a produção e o acompanhamento.'][i],
  items: [
    ['12 artes para feed/mês', '4 Reels estratégicos/mês', 'Planejamento mensal', 'Padronização visual', 'Publicação no Instagram e Facebook', 'Suporte via WhatsApp'],
    ['12 artes para feed/mês', '1 captação mensal', '4 Reels editados/mês', '8 Stories estratégicos/mês', 'Planejamento estratégico e calendário editorial', 'Relatório mensal', 'Publicação dos conteúdos'],
    ['16 artes para feed/mês', '2 captações mensais', '8 Reels editados/mês', '12 Stories estratégicos/mês', 'Planejamento avançado e calendário editorial completo', 'Relatório detalhado e reunião mensal', 'Publicação dos conteúdos', 'Suporte prioritário'],
  ][i] }));
export const comboOffers = tiers.map((name, i) => ({ id: `combo-${i+1}`, service: 'combo', name: `Combo ${name}`, price: [1760,2970,4950][i], monthly: true, savings: prices[i]*2-[1760,2970,4950][i],
  audience: ['Para iniciar uma estrutura integrada de marketing.', 'Para ampliar presença, leads e oportunidades comerciais.', 'Para uma operação contínua de conteúdo e aquisição.'][i],
  items: [`Social Media ${name}`, `Tráfego Pago ${name}`, 'Entregas dos dois planos correspondentes'],
}));
export const allOffers = [...webOffers, ...socialOffers, ...trafficOffers, ...comboOffers];
export const offerLabel = offer => `${offer.service === 'combo' ? '' : diagnosisServices.find(s => s.slug === offer.service)?.name + ' — '}${offer.name}`;
export const diagnosisLink = (service, plan) => `/diagnostico?${new URLSearchParams({ ...(service ? { servico: service } : {}), ...(plan ? { plano: plan } : {}) })}`;
export function getSelection(search) {
  const params = new URLSearchParams(search);
  const offer = allOffers.find(item => item.id === params.get('plano'));
  const service = offer?.service || params.get('servico');
  const selected = service === 'combo' ? ['social-media', 'trafego-pago'] : diagnosisServices.some(item => item.slug === service) ? [service] : [];
  return { services: selected, plan: offer?.id || '' };
}
export const productionNote = 'Estimativas contadas após aprovação do escopo, recebimento dos materiais e liberação dos acessos. O cronograma final é confirmado na proposta.';
export const mediaNote = 'A verba dos anúncios é paga diretamente às plataformas e não está incluída no valor da gestão ou dos combos.';
export const socialNote = 'No Essencial, a origem das gravações para os Reels é alinhada na proposta; captação presencial não está listada nesse plano. Nos demais planos, as captações dependem de disponibilidade, localização e condições de contratação.';
export const commercialFaqs = [
  ['Posso contratar apenas um serviço?', 'Sim. Você pode começar por uma entrega ou por um plano mensal. Os combos reúnem social media e tráfego pago do mesmo nível.'],
  ['A verba dos anúncios está incluída?', mediaNote],
  ['Quando começa o prazo de um site?', productionNote + ' Landing pages: 5 a 10 dias úteis. Sites institucionais: 7 a 15 dias úteis. E-commerce e sistemas têm cronograma próprio.'],
  ['Quem fornece as gravações dos Reels?', socialNote],
  ['Quantas revisões estão incluídas?', 'A quantidade de rodadas, os prazos de aprovação e o tratamento de alterações fora do escopo são definidos na proposta antes do início do trabalho.'],
  ['Existe prazo mínimo nos planos mensais?', 'Duração, pagamento, início da operação e condições de encerramento são alinhados na proposta.'],
  ['O sistema de gestão é o mesmo que um sistema sob medida?', 'Não. O sistema de gestão é o produto apresentado para conectar atendimento, estoque e vendas. Sistemas personalizados são projetos desenvolvidos conforme processos e integrações específicos.'],
];
