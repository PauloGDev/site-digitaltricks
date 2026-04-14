import React from "react";
import { motion } from "framer-motion";
import { Globe, ShoppingBag, Palette, Search, CheckCircle, ArrowRight } from "lucide-react";
import CountUp from "react-countup";
import NeonButton from "../NeonButton";

const ServicosBeneficios = () => {
  const servicos = [
    {
      nome: "Criação de Sites",
      desc: "Transformamos sua ideia em um site moderno, responsivo e de alta performance, pronto para gerar resultados reais.",
      icon: <Globe className="w-10 h-10 text-white" />,
    },
    {
      nome: "E-commerce",
      desc: "Desenvolvemos lojas online completas, integradas a sistemas de pagamento, com design otimizado para conversão e fidelização.",
      icon: <ShoppingBag className="w-10 h-10 text-white" />,
    },
    {
      nome: "Design UX/UI",
      desc: "Criamos interfaces intuitivas e elegantes, garantindo que seus usuários tenham a melhor experiência possível.",
      icon: <Palette className="w-10 h-10 text-white" />,
    },
    {
      nome: "Otimização SEO",
      desc: "Potencialize sua presença digital com estratégias avançadas de SEO e apareça no topo do Google.",
      icon: <Search className="w-10 h-10 text-white" />,
    },
  ];

  const beneficios = [
    {
      icon: <CheckCircle className="w-10 h-10 text-white" />,
      numero: 250,
      titulo: "Aumento de Vendas",
      desc: "Clientes que investem em um site profissional veem aumento médio de 250% nas vendas em 6 meses.",
      gradient: "from-[#7B6EF6] to-[#5146D9]",
      suffix: "%",
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-white" />,
      numero: 85,
      titulo: "Mais Leads Qualificados",
      desc: "Sites otimizados geram até 85% mais leads qualificados, acelerando o crescimento do seu negócio.",
      gradient: "from-[#A5461E] to-[#CA46E5]",
      suffix: "%",
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-white" />,
      numero: 98,
      titulo: "Satisfação do Cliente",
      desc: "Clientes relatam até 98% de satisfação com a experiência digital e facilidade de navegação.",
      gradient: "from-[#1E9CA5] to-[#2F28AC]",
      suffix: "%",
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-white" />,
      numero: 27,
      titulo: "Presença Nacional",
      desc: "Nossos sites permitem atuação em todos os estados do Brasil, alcançando novos públicos.",
      gradient: "from-[#FF7E5F] to-[#FD3A69]",
      suffix: "",
    },
  ];

  return (
    <section className="relative py-24 px-6 sm:px-12 overflow-hidden">
      {/* Fundo suave */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#1A1635] via-[#100E24] to-[#0B0918] opacity-95" />
      <div className="absolute inset-0 -z-10 blur-3xl bg-gradient-to-tr from-[#7B6EF6]/15 via-[#2F28AC]/10 to-transparent" />

      {/* Título */}
      <motion.h2
        className="text-center text-4xl sm:text-5xl font-extrabold mb-14 text-gray-200"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="text-white">Nossos Serviços</span>
      </motion.h2>

      {/* Cards principais */}
      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-8 mb-20">
        {[
          {
            title: "Desenvolvimento de Websites",
            desc: "Descubra como um site profissional pode transformar a presença digital da sua marca.",
            href: "/websites",
            gradient: "from-[#6C63FF] to-[#5146D9]",
          },
          {
            title: "Design UX/UI",
            desc: "Interfaces modernas e experiências envolventes que encantam e convertem.",
            href: "/design",
            gradient: "from-[#FD3A69] to-[#FF7E5F]",
          },
        ].map((item, i) => (
          <motion.a
            key={i}
            href={item.href}
            className={`group relative overflow-hidden rounded-2xl bg-gradient-to-r ${item.gradient} p-10 text-white shadow-lg transition-transform duration-500 hover:scale-[1.02]`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_center,white,transparent)]" />
            <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
            <p className="text-white/90 mb-5">{item.desc}</p>
            <div className="flex items-center gap-2 text-white/90 font-semibold">
              Saiba mais <ArrowRight className="w-5 h-5" />
            </div>
          </motion.a>
        ))}
      </div>

      {/* Serviços */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {servicos.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-[#16161C] rounded-2xl p-8 text-white shadow-lg hover:shadow-xl transition-all duration-400 text-center"
          >
            <div className="flex justify-center mb-4 p-4 rounded-full bg-white/10">{s.icon}</div>
            <h3 className="text-xl font-bold mb-2">{s.nome}</h3>
            <p className="text-white/80 text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Benefícios */}
      <div className="text-center max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {beneficios.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className={`rounded-2xl p-8 text-white shadow-lg transition-transform duration-500 bg-gradient-to-r ${b.gradient} hover:scale-[1.03]`}
          >
            <div className="flex justify-center mb-4 p-4 rounded-full bg-white/15">{b.icon}</div>
            <div className="text-3xl font-bold mb-2">
              <CountUp end={b.numero} duration={2} suffix={b.suffix} enableScrollSpy scrollSpyOnce />
            </div>
            <h3 className="text-xl font-bold mb-2">{b.titulo}</h3>
            <p className="text-white/90 text-sm leading-relaxed">{b.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA final */}
      <motion.div
        className="text-center mt-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <NeonButton
          text="Transforme sua ideia em resultados"
          href="https://wa.me/5585921743200?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais!"
          color="#5146D9"
          icon={ArrowRight}
        />
        <p className="text-gray-400 mt-4 max-w-md mx-auto">
          Descubra como nossos serviços podem aumentar vendas, gerar leads e fortalecer sua presença digital.
        </p>
      </motion.div>
    </section>
  );
};

export default ServicosBeneficios;
