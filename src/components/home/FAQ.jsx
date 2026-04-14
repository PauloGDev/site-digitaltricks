import React from "react";

const FAQ = () => {
  const perguntas = [
    {
      q: "Quanto tempo leva para desenvolver um site?",
      a: "Entre 7 e 21 dias úteis, dependendo da complexidade.",
    },
    {
      q: "Vocês oferecem manutenção?",
      a: "Sim. Temos planos contínuos de suporte e evolução.",
    },
    {
      q: "Posso solicitar alterações?",
      a: "Sim. O processo é colaborativo e iterativo.",
    },
    {
      q: "O site é responsivo?",
      a: "Totalmente. Funciona em qualquer dispositivo.",
    },
  ];

  return (
    <section className="py-32 border-t border-white/10 bg-black text-white">

      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-5xl mb-16">
          Perguntas
          <br />
          <span className="text-[#7B61FF]">frequentes</span>
        </h2>

        <div className="divide-y divide-white/10">
          {perguntas.map((item, i) => (
            <details key={i} className="py-6 group">

              <summary className="flex justify-between items-center cursor-pointer text-lg">
                {item.q}
                <span className="text-white/40 group-open:rotate-180 transition">
                  +
                </span>
              </summary>

              <p className="mt-4 text-white/60 max-w-xl">
                {item.a}
              </p>

            </details>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;