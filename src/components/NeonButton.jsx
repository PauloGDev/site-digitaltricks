import React from "react";
import { motion } from "framer-motion";

const NeonButton = ({
  text = "Clique Aqui",
  href = "#",
  color = "#1E9CA5",
  textColor = "#FFFFFF",
  icon: Icon,
  target = "_blank",
}) => {
  return (
    <motion.a
      href={href}
      target={target}
      rel="noopener noreferrer"
      whileHover={{
        scale: 1.08,
        boxShadow: [
          `0 0 10px ${color}`,
          `0 0 20px ${color}`,
          `0 0 30px ${color}`,
          `0 0 20px ${color}`,
          `0 0 10px ${color}`,
        ],
        background: `linear-gradient(90deg, ${color}, ${color}B0, ${color})`,
      }}
      whileTap={{ scale: 0.95 }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
      }}
      className={`group relative inline-flex items-center gap-2 font-semibold rounded-full text-sm px-8 py-3 shadow-[0_0_10px_rgba(0,0,0,0.3)] transition-all duration-500 overflow-hidden`}
      style={{
        backgroundColor: color,
        color: textColor,
        border: `2px solid ${color}`,
      }}
    >
      {/* Efeito de brilho suave passando */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 blur-xl animate-shine" />

      <span>{text}</span>

      {/* Ícone opcional animado */}
      {Icon && (
        <motion.span
          animate={{ x: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <Icon className="w-4 h-4" />
        </motion.span>
      )}
    </motion.a>
  );
};

export default NeonButton;
