"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { ArrowRight, Plane, ShieldCheck, Award } from "lucide-react";
import { motion } from "framer-motion";

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-dark pt-24 pb-16 lg:pt-32"
    >
      {/* Background Subtle Gradients & Animated Glows */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-royal/10 blur-[120px] mix-blend-screen animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] md:w-[450px] md:h-[450px] rounded-full bg-gold/5 blur-[100px] mix-blend-screen" />
        {/* Abstract Grid background */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:30px_30px]" />
      </div>

      {/* Floating Decorative Elements */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-[15%] z-10 hidden lg:block"
      >
        <div className="bg-navy-light/40 backdrop-blur-md p-3 rounded-2xl border border-gold-premium/20 flex items-center gap-3 shadow-2xl">
          <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <p className="text-white text-xs font-semibold">{t.hero.successBadge}</p>
            <p className="text-gray-400 text-[10px]">{t.hero.badge}</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-24 left-[10%] z-10 hidden lg:block"
      >
        <div className="bg-navy-light/40 backdrop-blur-md p-3 rounded-2xl border border-royal-light/20 flex items-center gap-3 shadow-2xl">
          <div className="w-10 h-10 rounded-xl bg-royal/10 flex items-center justify-center text-royal-light">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <p className="text-white text-xs font-semibold">100% Transparent</p>
            <p className="text-gray-400 text-[10px]">No Hidden Fees</p>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-navy-light/60 backdrop-blur-md border border-gold-premium/30 px-4 py-1.5 rounded-full mb-6 shadow-lg"
            >
              <Plane className="w-3.5 h-3.5 text-gold animate-bounce" />
              <span className="text-gold-premium text-xs md:text-sm font-semibold uppercase tracking-wider">
                {t.hero.badge}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6"
            >
              {t.hero.titleFirst}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-gold-dark font-black">
                {t.hero.titleHighlight}
              </span>{" "}
              {t.hero.titleLast}
            </motion.h1>

            {/* Subtitle Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gold-premium font-medium text-lg md:text-xl lg:text-2xl mb-4 tracking-wide"
            >
              {t.hero.tagline}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-300 text-sm md:text-base lg:text-lg max-w-2xl mb-8 font-light leading-relaxed"
            >
              {t.hero.desc}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-dark via-gold to-gold-light text-navy-dark font-bold px-8 py-4 rounded-xl text-base shadow-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]"
              >
                <span>{t.hero.ctaPrimary}</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-xl text-base border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <span>{t.hero.ctaSecondary}</span>
              </a>
            </motion.div>
          </div>

          {/* Hero Right Visuals - High-End Floating Graphic and Logo */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:w-[400px]"
            >
              {/* Outer glowing rings */}
              <div className="absolute inset-0 rounded-full border border-gold-premium/10 animate-[spin_10s_linear_infinite]" />
              <div className="absolute -inset-4 rounded-full border border-royal/10 animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute -inset-8 rounded-full border border-gold-premium/5 animate-[spin_20s_linear_infinite]" />

              {/* Glassmorphic Central Globe/Logo Container */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-navy-light/60 to-navy-dark/90 backdrop-blur-xl border border-gold-premium/20 flex flex-col items-center justify-center shadow-3xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-royal/10 via-transparent to-gold/10 opacity-50" />
                
                {/* Official Logo Display */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-32 h-32 md:w-40 md:h-40 bg-navy/40 p-3 rounded-3xl border border-gold-premium/15 flex items-center justify-center shadow-2xl relative z-10"
                >
                  <img
                    src="/images/logo.png"
                    alt="JAI Corporate Logo"
                    className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                  />
                </motion.div>
                
                <p className="text-white font-bold text-center mt-4 tracking-wider uppercase text-xs md:text-sm relative z-10">
                  Jahangirnagar Air
                </p>
                <p className="text-gold font-semibold text-center text-[10px] tracking-widest uppercase relative z-10">
                  International
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
