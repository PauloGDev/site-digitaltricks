// ToggleDarkMode.jsx
import React, { useEffect, useState } from "react";

const ToggleDarkMode = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed bottom-6 right-6 bg-primary text-white p-3 rounded-full shadow-lg hover:scale-105 transition"
      aria-label="Alternar modo escuro"
    >
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
};

export default ToggleDarkMode;
