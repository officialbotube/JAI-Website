"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Menu, X, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar: React.FC = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.whyUs, href: "#why-choose-us" },
    { label: t.nav.umrah, href: "#umrah" },
    { label: t.nav.offices, href: "#offices" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy-dark/85 backdrop-blur-xl border-b border-gold-premium/15 py-3 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Company Name */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 bg-navy-light/60 rounded-xl p-1 border border-gold-premium/30 group-hover:border-gold transition-all duration-500 flex items-center justify-center overflow-hidden">
              <img
                src="/images/logo.png"
                alt="JAI Logo"
                className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-semibold text-base md:text-lg tracking-wide leading-none group-hover:text-gold transition-colors">
                Jahangirnagar Air
              </span>
              <span className="text-gold-premium font-medium text-xs tracking-widest leading-none mt-1">
                INTERNATIONAL (JAI)
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 rounded-md group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Action Area (Language Switcher & Contact Button) */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher />
            <a
              href="#contact"
              className="relative inline-flex items-center gap-2 bg-gradient-to-r from-gold-dark via-gold to-gold-light text-navy-dark font-semibold px-4 py-2 rounded-full text-sm hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 hover:scale-[1.03]"
            >
              <PhoneCall className="w-4 h-4" />
              <span>{t.nav.contact}</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-3 lg:hidden">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-navy-light/50 text-gray-300 hover:text-white border border-gold-premium/20 hover:border-gold-premium/50 transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-navy/95 border-b border-gold-premium/15 backdrop-blur-2xl overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-navy-light/40 rounded-xl transition-all border-l-2 border-transparent hover:border-gold"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-gold-premium/10 flex flex-col gap-3">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center flex items-center justify-center gap-2 bg-gradient-to-r from-gold-dark via-gold to-gold-light text-navy-dark font-semibold px-5 py-3 rounded-xl text-base shadow-lg transition-all"
                >
                  <PhoneCall className="w-5 h-5" />
                  <span>{t.nav.contact}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
