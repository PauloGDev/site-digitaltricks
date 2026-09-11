import { solutionPillars } from './siteData.js';

export const siteUrl = 'https://digitaltricks.com.br';
export const siteName = 'Digital Tricks';
export const siteImage = `${siteUrl}/favicon.png`;
export const seoPages = {
  '/': { title: 'Sites, criativos e tráfego pago para empresas', description: 'Posicionamento, sites, landing pages, criativos e tráfego pago para empresas. Conheça a Digital Tricks e solicite um diagnóstico do seu negócio.' },
  '/solucoes': { title: 'Soluções digitais para empresas', description: 'Conheça nossas soluções de posicionamento, landing pages, sites, criativos e tráfego pago, conectadas aos objetivos da sua empresa.' },
  '/para-seu-negocio': { title: 'Soluções para seu tipo de negócio', description: 'Estrutura digital para empresas de serviços, operações com estoque, lojas e marcas. Encontre as frentes adequadas ao seu negócio.' },
  '/para-seu-negocio/servicos': { title: 'Marketing digital para empresas de serviços', description: 'Apresente seus serviços com clareza e confiança. Conecte posicionamento, páginas e campanhas à rotina de atendimento da sua empresa.' },
  '/para-seu-negocio/com-estoque': { title: 'Estrutura digital para empresas com estoque', description: 'Conecte divulgação, estoque, leads e atendimento. Conheça soluções digitais e de gestão para acompanhar oportunidades até a venda.' },
  '/para-seu-negocio/lojas-e-marcas': { title: 'Marketing digital para lojas e marcas', description: 'Transforme catálogo em comunicação de marca. Posicionamento, páginas, criativos e campanhas para apresentar seus produtos com clareza.' },
  '/sistema-gestao': { title: 'Sistema de gestão conectado para empresas', description: 'Conheça o sistema de gestão que conecta WhatsApp, estoque, clientes, vendas, equipe e indicadores. Solicite uma demonstração para sua operação.' },
  '/metodo': { title: 'Nosso método: estratégia e produção digital', description: 'Entenda o processo da Digital Tricks: diagnóstico, estratégia e aprovação antes do ciclo de 15 dias de produção dos serviços digitais.' },
  '/sobre': { title: 'Sobre a Digital Tricks', description: 'Conheça a Digital Tricks e nossa abordagem para conectar posicionamento, aquisição de clientes e operação digital de empresas.' },
  '/diagnostico': { title: 'Solicite um diagnóstico digital', description: 'Conte sobre sua empresa e escolha as frentes de interesse. Continue pelo WhatsApp para solicitar um diagnóstico da sua estrutura digital.' },
  '/privacidade': { title: 'Política de Privacidade', description: 'Saiba como a Digital Tricks utiliza as informações fornecidas por visitantes e clientes e conheça nosso canal de contato sobre dados pessoais.' },
  '/cookies': { title: 'Política de Cookies', description: 'Informações sobre cookies, preferências e tecnologias utilizadas no site da Digital Tricks.' },
  '/termos': { title: 'Termos de Uso', description: 'Conheça as condições de uso do site da Digital Tricks, informações sobre propostas, conteúdo e canais externos.' },
  ...Object.fromEntries(solutionPillars.map(item => [`/solucoes/${item.slug}`, { title: item.eyebrow, description: item.shortDescription }])),
  '/badapple': { title: 'Experiência ASCII', description: 'Experiência visual da Digital Tricks.', noindex: true },
  '/s': { title: 'Experiência visual', description: 'Experiência visual da Digital Tricks.', noindex: true },
  '/404': { title: 'Página não encontrada', description: 'O endereço acessado não foi encontrado. Volte ao início da Digital Tricks.', noindex: true },
};

export function getSeo(path = '/', fallback = {}) {
  const normalizedPath = path.replace(/\/+$/, '') || '/';
  const page = seoPages[normalizedPath] || fallback;
  return {
    title: `${page.title || seoPages['/'].title} | ${siteName}`,
    description: page.description || seoPages['/'].description,
    canonical: `${siteUrl}${normalizedPath === '/' ? '/' : normalizedPath}`,
    robots: page.noindex ? 'noindex, follow' : 'index, follow',
  };
}
