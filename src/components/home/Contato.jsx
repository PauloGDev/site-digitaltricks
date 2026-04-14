"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, User, MessageSquare, Send, Instagram, Phone } from "lucide-react";

const Contato = () => {
  const [result, setResult] = useState("");
  const [isSending, setIsSending] = useState(false);

 const onSubmit = async (event) => {
  event.preventDefault();
  setIsSending(true);
  setResult("");

  const form = event.currentTarget; 
  const formData = new FormData(form);
  formData.append("access_key", "f54f59e6-e1b2-43ec-b103-12ebca81ea44");

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    console.log("Resposta Web3Forms:", data);

    if (response.ok && data.success !== false) {
      setResult("✅ Mensagem enviada com sucesso!");
      form.reset();
    } else {
      setResult("❌ Erro ao enviar mensagem. Verifique os campos.");
    }
  } catch (err) {
    console.error(err);
    setResult("❌ Erro ao enviar mensagem.");
  } finally {
    setIsSending(false);
  }
};

  return (
    <section
      id="contato"
      className="relative min-h-screen flex flex-col items-center justify-center py-20 px-6 overflow-hidden"
    >
      <motion.div
        className="absolute inset-0"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="text-center mb-12 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl md:text-6xl font-extrabold text-white">
          Entre em <span className="text-[#7DF9FF]">contato</span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-lg mx-auto">
          Vamos transformar sua ideia em um projeto digital de alto impacto.
          Envie sua mensagem e comece agora.
        </p>
      </motion.div>

      <motion.form
        onSubmit={onSubmit}
        className="relative z-10 w-full max-w-xl bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-10 text-white shadow-[0_0_40px_rgba(125,249,255,0.15)] hover:shadow-[0_0_60px_rgba(125,249,255,0.25)] transition-all duration-500"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Inputs */}
        <div className="space-y-5">
          {/* Nome */}
          <div className="relative">
            <User className="absolute left-4 top-11 text-[#7DF9FF]" size={20} />
            <input
              type="text"
              name="name"
              placeholder="Seu nome"
              required
              className="w-full bg-transparent border border-white/20 rounded-full py-3 pl-12 pr-4 placeholder-gray-400 text-white focus:border-[#7DF9FF] outline-none transition"
            />
          </div>

          {/* E-mail */}
          <div className="relative">
            <Mail className="absolute left-4 top-11 text-[#7DF9FF]" size={20} />
            <input
              type="email"
              name="email"
              placeholder="Seu e-mail"
              required
              className="w-full bg-transparent border border-white/20 rounded-full py-3 pl-12 pr-4 placeholder-gray-400 text-white focus:border-[#7DF9FF] outline-none transition"
            />
          </div>

          {/* Mensagem */}
          <div className="relative">
            <MessageSquare className="absolute left-4 top-4 text-[#7DF9FF]" size={20} />
            <textarea
              name="message"
              rows={5}
              placeholder="Sua mensagem..."
              required
              className="w-full bg-transparent border border-white/20 rounded-2xl py-3 pl-12 pr-4 placeholder-gray-400 text-white focus:border-[#7DF9FF] outline-none transition resize-none"
            />
          </div>
        </div>

        {/* Botão */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px #7DF9FF" }}
          whileTap={{ scale: 0.95 }}
          disabled={isSending}
          className="mt-8 w-full bg-gradient-to-r from-[#7DF9FF] to-[#7367F0] text-[#0B0B16] py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-60"
        >
          {isSending ? "Enviando..." : (
            <>
              <Send size={18} />
              Enviar mensagem
            </>
          )}
        </motion.button>

        {/* Resultado */}
        {result && (
          <motion.p
            className="text-center text-[#7DF9FF] mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {result}
          </motion.p>
        )}
      </motion.form>

      {/* Ícones sociais */}
      <motion.div
        className="flex gap-8 mt-12 z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.a
          href="https://www.instagram.com/digitaltricks.studio/"
          target="_blank"
          whileHover={{ scale: 1.2 }}
          className="text-[#7DF9FF] hover:text-white transition-colors"
        >
          <Instagram size={30} />
        </motion.a>
        <motion.a
          href="https://api.whatsapp.com/send/?phone=5585921743200&text=Olá!%20Gostaria%20de%20saber%20mais!&type=phone_number&app_absent=0"
          whileHover={{ scale: 1.2 }}
          className="text-[#7DF9FF] hover:text-white transition-colors"
        >
          <Phone size={30} />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Contato;
