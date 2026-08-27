import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Seo from "../components/Seo";

const legalContent = {
  privacidade: {
    title: "Política de Privacidade",
    description: "Como a Digital Tricks coleta, utiliza e protege informações enviadas por visitantes e clientes.",
    sections: [
      ["Informações coletadas", "Podemos coletar dados informados voluntariamente em formulários, como nome, e-mail, telefone, empresa, segmento e detalhes sobre a necessidade apresentada. Também podem ser coletadas informações técnicas essenciais para segurança e funcionamento do site."],
      ["Finalidades", "Utilizamos as informações para responder solicitações, preparar atendimentos, elaborar propostas, melhorar nossos serviços, proteger o site e cumprir obrigações legais ou contratuais."],
      ["Compartilhamento", "Não vendemos dados pessoais. Informações podem ser tratadas por fornecedores necessários à operação do site, formulário, hospedagem, análise e comunicação, dentro das finalidades descritas."],
      ["Armazenamento e segurança", "Adotamos medidas razoáveis para reduzir acessos indevidos, perdas e alterações. Nenhum ambiente digital, porém, pode ser considerado completamente livre de riscos."],
      ["Direitos do titular", "Você pode solicitar confirmação, acesso, correção, exclusão ou informações sobre o tratamento de seus dados por meio do e-mail contato@digitaltricks.com.br."],
      ["Atualizações", "Esta política pode ser atualizada para refletir mudanças operacionais ou legais. A versão publicada nesta página será considerada vigente."],
    ],
  },
  cookies: {
    title: "Política de Cookies",
    description: "Informações sobre tecnologias utilizadas para funcionamento, segurança e análise da experiência.",
    sections: [
      ["O que são cookies", "Cookies são pequenos registros armazenados pelo navegador para lembrar preferências, manter recursos funcionando e ajudar a compreender como um site é utilizado."],
      ["Cookies essenciais", "Podem ser utilizados para segurança, funcionamento de formulários, preferências e recursos necessários à navegação. Esses cookies não devem ser desativados quando forem indispensáveis ao serviço solicitado."],
      ["Medição e publicidade", "Ferramentas de análise ou publicidade somente devem ser ativadas conforme a configuração do site e as escolhas de consentimento aplicáveis."],
      ["Controle pelo navegador", "Você pode remover ou bloquear cookies pelas configurações do navegador. Isso pode afetar determinados recursos e preferências."],
      ["Atualizações", "Esta política poderá ser revisada quando novas ferramentas ou finalidades forem incorporadas ao site."],
    ],
  },
  termos: {
    title: "Termos de Uso",
    description: "Condições gerais para navegação e utilização do site da Digital Tricks.",
    sections: [
      ["Finalidade do site", "Este site apresenta a Digital Tricks, seus serviços, projetos e canais de contato. O conteúdo possui caráter informativo e não substitui uma proposta comercial específica."],
      ["Propostas e contratações", "Escopo, prazos, responsabilidades, investimentos e condições de cada serviço serão definidos em proposta e instrumento contratual próprios."],
      ["Propriedade intelectual", "Textos, identidade, elementos visuais, projetos e demais conteúdos são protegidos por direitos aplicáveis. O uso ou reprodução depende de autorização, salvo permissões legais."],
      ["Links e serviços externos", "O site pode direcionar para plataformas de terceiros, como WhatsApp e redes sociais. Cada serviço possui suas próprias regras e políticas."],
      ["Disponibilidade", "Buscamos manter o site acessível e atualizado, mas não garantimos operação ininterrupta ou ausência total de erros."],
      ["Contato", "Dúvidas sobre estes termos podem ser encaminhadas para contato@digitaltricks.com.br."],
    ],
  },
};

const LegalPage = ({ type }) => {
  const content = legalContent[type];

  return (
    <>
      <Seo
        title={content.title}
        description={content.description}
        path={`/${type}`}
      />
      <PageHero
        eyebrow="Informações legais"
        title={content.title}
        description={content.description}
        aside="Última atualização: agosto de 2026."
      />
      <section className="section-space bg-white text-[#17151d]">
        <div className="page-shell max-w-5xl">
          <div className="space-y-12">
            {content.sections.map(([title, text], index) => (
              <Reveal key={title} delay={index * 0.035}>
                <section className="grid gap-4 border-t border-black/10 pt-7 sm:grid-cols-[3rem_1fr]">
                  <span className="text-xs font-semibold tracking-[0.18em] text-violet-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="text-xl font-semibold sm:text-2xl">{title}</h2>
                    <p className="mt-4 text-base leading-8 text-[#68626e]">{text}</p>
                  </div>
                </section>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LegalPage;
