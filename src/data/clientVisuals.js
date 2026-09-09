import cosmooCampaign from "../assets/Posts Social media/Cosmoo-Post Social Media.webp";
import cosmooLogo from "../assets/Logos/Logo Cosmoo.png";
import cosmooPackaging from "../assets/Posts Social media/Cosmoo-produto com identidade visual.webp";
import phantomLogo from "../assets/Logos/Logo Phantom Bo.png";
import dapCap from "../assets/Posts Social media/vendas.jpg";
import flagImg from "../assets/Posts Social media/lava jato D&A.jpg";
import marketingDigital from "../assets/Posts Social media/marketing digital.jpg";
import fortalezaExecutivo from "../assets/Posts Social media/fortal executivo.png";
import site1 from "../assets/Sites e Landing page/Ana rita Luna - Arquiteta.png";
import site2 from "../assets/Sites e Landing page/CRXW - Studio 3D.png";
import site3 from "../assets/Sites e Landing page/Centro pedagogico nova geracao - CPNG.png";

export const visualAssets = {
  cosmooCampaign,
  cosmooLogo,
  cosmooPackaging,
  dapCap,
  phantomLogo,
  flagImg,
  marketingDigital,
  fortalezaExecutivo,
  site1,
  site2,
  site3,
};

export const servicePreviewImages = {
  sites: site3,
  criativos: marketingDigital,
  marketing: cosmooCampaign,
  "trafego-pago": dapCap,
};

export const serviceVisuals = {
  sites: [
    { image: site2, brand: "CRXW", label: "Site com direção visual", alt: "Mockup do site CRXW", fit: "contain" },
    { image: site1, brand: "Ana Rita Luna", label: "Site institucional", alt: "Mockup de site institucional para profissional de interiores", fit: "contain" },
    { image: site3, brand: "Centro Pedagógico", label: "Página institucional", alt: "Mockup de landing page institucional", fit: "contain" },
  ],
  criativos: [
    { image: cosmooCampaign, brand: "Cosmoo", label: "Conceito de campanha", alt: "Post social media Cosmoo" },
    { image: marketingDigital, brand: "Marketing Digital", label: "Visual de campanha", alt: "Visual de produto e campanha" },
    { image: fortalezaExecutivo, brand: "Fortal Executivo", label: "Aplicação visual", alt: "Aplicação visual em produto" },
  ],
  marketing: [
    { image: cosmooCampaign, brand: "Cosmoo", label: "Conceito de campanha", alt: "Campanha Cosmoo" },
    { image: cosmooPackaging, brand: "Cosmoo", label: "Produto com identidade", alt: "Campanha Cosmoo com produto" },
  ],
  "trafego-pago": [
    { image: dapCap, brand: "DAP", label: "Aplicação em produto", alt: "Aplicação visual em produto" },
    { image: marketingDigital, brand: "Marketing Digital", label: "Criativo para aquisição", alt: "Criativo para campanha digital" },
  ],
};

export const homeVisuals = [
  { image: cosmooCampaign, brand: "Cosmoo", label: "Social media", alt: "Criativo Cosmoo" },
  { image: cosmooPackaging, brand: "Cosmoo", label: "Produto", alt: "Produto Cosmoo" },
  { image: cosmooLogo, brand: "Cosmoo", label: "Identidade", alt: "Logo Cosmoo" },
  { image: dapCap, brand: "DAP", label: "Aplicação", alt: "Aplicação visual em produto" },
];

export const solutionImages = {
  posicionamento: [
    { image: cosmooCampaign, brand: "Cosmoo", label: "Conceito de campanha", alt: "Post social media Cosmoo" },
    { image: cosmooPackaging, brand: "Cosmoo", label: "Produto com identidade", alt: "Produto com identidade visual aplicada" },
    { image: cosmooLogo, brand: "Cosmoo", label: "Identidade visual", alt: "Logo Cosmoo" },
  ],
  "landing-pages-sites": [
    { image: site2, brand: "CRXW", label: "Site com direção visual", alt: "Mockup do site CRXW" },
    { image: site1, brand: "Ana Rita Luna", label: "Site institucional", alt: "Mockup de site institucional para profissional de interiores" },
    { image: site3, brand: "Centro Pedagógico", label: "Landing page", alt: "Mockup de landing page institucional" },
  ],
  criativos: [
    { image: cosmooCampaign, brand: "Cosmoo", label: "Conceito de campanha", alt: "Post social media Cosmoo" },
    { image: cosmooPackaging, brand: "Cosmoo", label: "Produto com identidade", alt: "Produto com identidade visual aplicada" },
    { image: marketingDigital, brand: "Marketing Digital", label: "Visual de campanha", alt: "Visual de produto e campanha" },
    { image: fortalezaExecutivo, brand: "Fortal Executivo", label: "Aplicação visual", alt: "Aplicação visual em produto" },
  ],
  "trafego-pago": [],
};
