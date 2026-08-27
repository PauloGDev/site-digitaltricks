import alucarCampaign from "../assets/client-work/alucar-campaign.webp";
import alucarFlag from "../assets/client-work/alucar-flag.webp";
import alucarTags from "../assets/client-work/alucar-tags.webp";
import cosmooCampaign from "../assets/client-work/cosmoo-campaign.webp";
import cosmooLogo from "../assets/client-work/cosmoo-logo.webp";
import cosmooPackaging from "../assets/client-work/cosmoo-packaging.webp";
import dapCap from "../assets/client-work/dap-cap.webp";
import phantomCampaign from "../assets/client-work/phantom-campaign.webp";
import phantomLogo from "../assets/client-work/phantom-logo.webp";
import anaAracapeFortaleza from "../assets/client-work/ana-aracape-fortaleza.png";
import fortalezaEletroSocial from "../assets/client-work/fortaleza-eletro-social.png";
import monteAghaSocial from "../assets/client-work/monte-agha-social.png";
import monveraProduct from "../assets/client-work/monvera-product.png";
import site4 from "../assets/site4.png";
import site5 from "../assets/site5.png";
import site6 from "../assets/site6.png";

export const visualAssets = {
  alucarCampaign,
  alucarFlag,
  alucarTags,
  cosmooCampaign,
  cosmooLogo,
  cosmooPackaging,
  dapCap,
  phantomCampaign,
  phantomLogo,
  anaAracapeFortaleza,
  fortalezaEletroSocial,
  monteAghaSocial,
  monveraProduct,
  site4,
  site5,
  site6,
};

export const servicePreviewImages = {
  sites: site6,
  criativos: phantomCampaign,
  marketing: alucarCampaign,
  "trafego-pago": dapCap,
};

export const serviceVisuals = {
  sites: [
    { image: site6, brand: "CRXW", label: "Site com direção visual", alt: "Mockup do site CRXW", fit: "contain" },
    { image: site4, brand: "Ana Rita Luna", label: "Site institucional", alt: "Mockup de site institucional para profissional de interiores", fit: "contain" },
    { image: site5, brand: "OZD Studio", label: "Portfólio profissional", alt: "Mockup do portfólio OZD Studio", fit: "contain" },
  ],
  criativos: [
    { image: anaAracapeFortaleza, brand: "Ana Aracape", label: "Campanha institucional", alt: "Criativo de aniversário de Fortaleza para Ana Aracape", tall: true },
    { image: fortalezaEletroSocial, brand: "Fortaleza Eletro", label: "Social media", alt: "Aplicações de social media da Fortaleza Eletro" },
    { image: monteAghaSocial, brand: "Monte Aghá", label: "Identidade e conteúdo", alt: "Aplicações de identidade e conteúdo da Assistência Monte Aghá" },
    { image: monveraProduct, brand: "Monvera", label: "Visual de produto", alt: "Apresentação visual de produtos Monvera" },
    { image: cosmooCampaign, brand: "COS MOO", label: "Campanha criativa", alt: "Campanha COS MOO com escultura clássica e identidade roxa", portrait: true, backgroundClass: "bg-[#2a0d4f]" },
    { image: dapCap, brand: "DAP", label: "Aplicação em produto", alt: "Boné preto com identidade DAP" },
  ],
  marketing: [
    { image: alucarCampaign, brand: "ALUCAR", label: "Conceito de campanha", alt: "Campanha ALUCAR com chave e automóvel" },
    { image: cosmooCampaign, brand: "COS MOO", label: "Mensagem e posicionamento", alt: "Campanha COS MOO com escultura clássica" },
  ],
  "trafego-pago": [
    { image: alucarCampaign, brand: "ALUCAR", label: "Criativo para aquisição", alt: "Criativo ALUCAR em azul para mídia digital" },
    { image: phantomCampaign, brand: "PHANTOM BOX", label: "Variação para testes", alt: "Criativo Phantom Box para campanha digital" },
  ],
};

export const homeVisuals = [
  { image: cosmooCampaign, brand: "COS MOO", label: "Social media", alt: "Criativo COS MOO" },
  { image: alucarCampaign, brand: "ALUCAR", label: "Campanha", alt: "Criativo ALUCAR" },
  { image: cosmooPackaging, brand: "COS MOO", label: "Identidade", alt: "Embalagem COS MOO" },
  { image: dapCap, brand: "DAP", label: "Aplicação", alt: "Boné com identidade DAP" },
];
