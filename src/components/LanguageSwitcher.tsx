"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative inline-flex bg-navy-light/40 backdrop-blur-md p-1 rounded-full border border-gold-premium/20">
      <div className="relative flex items-center gap-1">
        <button
          onClick={() => setLanguage("bn")}
          className={`relative z-10 px-3 py-1 text-xs md:text-sm font-medium rounded-full transition-colors duration-300 ${
            language === "bn" ? "text-navy-dark font-semibold" : "text-gray-300 hover:text-white"
          }`}
        >
          {language === "bn" && (
            <motion.span
              layoutId="activeLang"
              className="absolute inset-0 bg-gold rounded-full -z-10"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
          বাংলা
        </button>
        <button
          onClick={() => setLanguage("en")}
          className={`relative z-10 px-3 py-1 text-xs md:text-sm font-medium rounded-full transition-colors duration-300 ${
            language === "en" ? "text-navy-dark font-semibold" : "text-gray-300 hover:text-white"
          }`}
        >
          {language === "en" && (
            <motion.span
              layoutId="activeLang"
              className="absolute inset-0 bg-gold rounded-full -z-10"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
          English
        </button>
      </div>
    </div>
  );
};
