import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Contato = () => {
  const [result, setResult] = useState("");
  const [isSending, setIsSending] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);
    setResult("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "SUA_KEY");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Mensagem enviada com sucesso.");
        form.reset();
      } else {
        setResult("Erro ao enviar mensagem.");
      }
    } catch {
      setResult("Erro ao enviar mensagem.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contato"
      className="relative py-28 md:py-36 border-t border-white/10 bg-black text-white"
    >
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_bottom_left,rgba(123,97,255,0.10),transparent_28%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-12 gap-12 xl:gap-16 items-start">
          {/* Coluna esquerda */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-white/45">
              <span className="w-8 h-px bg-[#7B61FF]" />
              Contato
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[0.95]">
              Vamos construir
              <br />
              algo com
              <span className="text-[#7B61FF]"> presença real</span>
            </h2>

            <p className="mt-6 max-w-xl text-white/60 text-base md:text-lg leading-relaxed">
              Se você busca um site, sistema ou experiência digital com mais
              clareza, valor percebido e sofisticação, este é o ponto de
              partida.
            </p>

            <div className="mt-10 space-y-6">
              <div className="border-t border-white/10 pt-5">
                <span className="text-[11px] uppercase tracking-[0.22em] text-white/35">
                  Resposta
                </span>
                <p className="mt-2 text-white/75">
                  Resposta rápida, processo direto e alinhamento estratégico
                  desde o início.
                </p>
              </div>

              <div className="border-t border-white/10 pt-5">
                <span className="text-[11px] uppercase tracking-[0.22em] text-white/35">
                  Escopo
                </span>
                <p className="mt-2 text-white/75">
                  Websites institucionais, landing pages, e-commerce, UX/UI e
                  estruturas digitais sob medida.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Coluna direita */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="border border-white/10 bg-[#0A0A0A] p-6 md:p-8 lg:p-10">
              <div className="mb-8">
                <span className="text-[11px] uppercase tracking-[0.22em] text-white/35">
                  Iniciar projeto
                </span>
                <h3 className="mt-3 text-2xl md:text-3xl font-medium tracking-tight text-white">
                  Envie sua mensagem
                </h3>
                <p className="mt-3 max-w-lg text-white/60 leading-relaxed">
                  Preencha os campos abaixo e descreva brevemente sua demanda.
                  Entraremos em contato com uma resposta objetiva.
                </p>
              </div>

              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block mb-2 text-sm text-white/65">
                      Nome
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Seu nome"
                      required
                      className="w-full bg-black border border-white/10 px-4 py-3 text-white placeholder:text-white/25 outline-none transition-colors focus:border-[#7B61FF]"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm text-white/65">
                      E-mail
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="seuemail@exemplo.com"
                      required
                      className="w-full bg-black border border-white/10 px-4 py-3 text-white placeholder:text-white/25 outline-none transition-colors focus:border-[#7B61FF]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-sm text-white/65">
                    Mensagem
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    placeholder="Conte um pouco sobre seu projeto, objetivo ou necessidade."
                    required
                    className="w-full bg-black border border-white/10 px-4 py-3 text-white placeholder:text-white/25 outline-none transition-colors resize-none focus:border-[#7B61FF]"
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={isSending}
                    className="inline-flex items-center justify-center gap-2 bg-[#7B61FF] text-white px-6 py-3 text-sm font-medium hover:bg-[#6A50F5] transition-colors disabled:opacity-60"
                  >
                    {isSending ? "Enviando..." : "Enviar mensagem"}
                    {!isSending && <ArrowRight className="w-4 h-4" />}
                  </button>

                  <p className="text-sm text-white/35">
                    Atendimento objetivo e personalizado.
                  </p>
                </div>
              </form>

              {result && (
                <p className="mt-6 text-sm text-white/65 border-t border-white/10 pt-5">
                  {result}
                </p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contato;