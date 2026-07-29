"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, TranslationSchema, translations } from "../utilities/translations";

interface LanguageContextType {
  language: Language;
  t: TranslationSchema;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("bn"); // Default to primary language: Bangla

  useEffect(() => {
    const savedLang = localStorage.getItem("jai-language") as Language;
    if (savedLang === "bn" || savedLang === "en") {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("jai-language", lang);
  };

  const toggleLanguage = () => {
    const nextLang = language === "bn" ? "en" : "bn";
    setLanguage(nextLang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, t, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
