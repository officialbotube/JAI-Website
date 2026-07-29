"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Navbar } from "../components/Navbar";
import { Hero } from "../sections/Hero";
import { About } from "../sections/About";
import { Services } from "../sections/Services";
import { WhyChooseUs } from "../sections/WhyChooseUs";
import { UmrahSuccess } from "../sections/UmrahSuccess";
import { Offices } from "../sections/Offices";
import { Contact } from "../sections/Contact";
import { Footer } from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";

export default function HomePage() {
  const { language } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);

  // Sync document lang attribute with active language state (essential for SEO & Bangla font rendering rules)
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  // Premium corporate entrance timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
            className="fixed inset-0 z-[9999] bg-navy-dark flex flex-col items-center justify-center"
          >
            {/* Elegant luxury loading rings */}
            <div className="relative flex flex-col items-center">
              <div className="absolute w-36 h-36 border border-gold/15 rounded-full animate-[spin_5s_linear_infinite]" />
              <div className="absolute w-40 h-40 border border-royal/10 rounded-full animate-[spin_8s_linear_infinite_reverse]" />
              
              {/* Central Logo Emblem */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: [0.8, 1.05, 1], opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative w-24 h-24 bg-navy-light p-2.5 rounded-3xl border border-gold-premium/30 flex items-center justify-center shadow-2xl"
              >
                <img
                  src="/images/logo.png"
                  alt="JAI Preloader Logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                />
              </motion.div>

              {/* Progress Text */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mt-8 text-center"
              >
                <h2 className="text-white font-bold text-base tracking-widest uppercase">
                  Jahangirnagar Air
                </h2>
                <p className="text-gold font-medium text-[10px] tracking-[0.25em] uppercase mt-1">
                  International
                </p>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative min-h-screen text-gray-100 selection:bg-gold/30 selection:text-white"
        >
          {/* Header Navigation */}
          <Navbar />

          {/* Core Corporate Sections */}
          <main>
            <Hero />
            <About />
            <Services />
            <WhyChooseUs />
            <UmrahSuccess />
            <Offices />
            <Contact />
          </main>

          {/* Footer Component */}
          <Footer />
        </motion.div>
      )}
    </>
  );
}
