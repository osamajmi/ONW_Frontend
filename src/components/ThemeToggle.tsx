"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    if (stored) {
      setDark(stored === "dark");
    } else {
      setDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.classList.toggle("light", !dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark, mounted]);

  if (!mounted) {
    return <div className="w-10 h-10 rounded-full border border-border" />;
  }

  return (
    <motion.button
      onClick={() => setDark(!dark)}
      className="relative w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary transition-colors duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: dark ? 0 : 180, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {dark ? <Moon size={16} className="text-foreground" /> : <Sun size={16} className="text-foreground" />}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;

