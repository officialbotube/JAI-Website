"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { Sparkles, Shield, Compass, Target, Star, Eye } from "lucide-react";
import { motion } from "framer-motion";

export const About: React.FC = () => {
  const { t } = useLanguage();

  const valueIcons = {
    integrity: <Shield className="w-6 h-6 text-gold" />,
    excellence: <Star className="w-6 h-6 text-gold" />,
    transparency: <Compass className="w-6 h-6 text-gold" />,
    commitment: <Sparkles className="w-6 h-6 text-gold" />,
  };

  const valuesKeys = ["integrity", "excellence", "transparency", "commitment"] as const;

  return (
    <section id="about" className="py-24 bg-navy relative overflow-hidden border-t border-gold-premium/10">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-royal/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gold/5 blur-[100px] rounded-full -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-gold uppercase tracking-widest text-xs md:text-sm font-bold bg-gold/10 px-4 py-1.5 rounded-full border border-gold-premium/20 inline-block mb-4"
          >
            {t.about.title}
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight"
          >
            {t.about.subtitle}
          </motion.h2>
          
          <div className="w-12 h-1 bg-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* Corporate Introduction */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 bg-navy-light/40 backdrop-blur-xl p-8 rounded-3xl border border-gold-premium/15 shadow-2xl relative"
          >
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-gold rounded-tl-lg" />
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-gold rounded-br-lg" />
            
            <p className="text-gray-200 text-base md:text-lg leading-relaxed font-light first-letter:text-4xl first-letter:font-bold first-letter:text-gold first-letter:mr-3 first-letter:float-left">
              {t.about.intro}
            </p>
          </motion.div>

          {/* Logo Brand Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex justify-center lg:justify-end"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-royal to-gold opacity-10 blur-xl group-hover:opacity-20 transition-opacity duration-500 rounded-3xl" />
              <div className="relative bg-navy-light/60 p-6 md:p-10 rounded-3xl border border-gold-premium/20 flex flex-col items-center shadow-3xl max-w-sm">
                <img
                  src="/images/logo.png"
                  alt="JAI Logo Emblem"
                  className="w-24 h-24 object-contain filter drop-shadow-[0_0_10px_rgba(212,175,55,0.15)] mb-6"
                />
                <h3 className="text-white text-lg font-bold text-center tracking-wide leading-tight">
                  Jahangirnagar Air International
                </h3>
                <p className="text-gold-premium text-xs font-semibold uppercase tracking-wider text-center mt-2">
                  {t.hero.badge}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-br from-navy-light/40 to-navy-dark/60 backdrop-blur-xl p-8 sm:p-10 rounded-3xl border border-gold-premium/15 shadow-2xl relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-2xl rounded-full transform translate-x-10 -translate-y-10 group-hover:bg-gold/10 transition-colors" />
            <div className="w-14 h-14 bg-gold/10 border border-gold/30 rounded-2xl flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition-transform">
              <Target className="w-7 h-7" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 tracking-wide group-hover:text-gold transition-colors">
              {t.about.missionTitle}
            </h3>
            <p className="text-gray-300 font-light leading-relaxed text-sm sm:text-base">
              {t.about.missionDesc}
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-gradient-to-br from-navy-light/40 to-navy-dark/60 backdrop-blur-xl p-8 sm:p-10 rounded-3xl border border-royal-light/10 shadow-2xl relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-royal/5 blur-2xl rounded-full transform translate-x-10 -translate-y-10 group-hover:bg-royal/10 transition-colors" />
            <div className="w-14 h-14 bg-royal/10 border border-royal/30 rounded-2xl flex items-center justify-center text-royal-light mb-6 group-hover:scale-110 transition-transform">
              <Eye className="w-7 h-7" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 tracking-wide group-hover:text-royal-light transition-colors">
              {t.about.visionTitle}
            </h3>
            <p className="text-gray-300 font-light leading-relaxed text-sm sm:text-base">
              {t.about.visionDesc}
            </p>
          </motion.div>

        </div>

        {/* Core Values Section */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
              {t.about.valuesTitle}
            </h3>
            <div className="w-8 h-0.5 bg-gold mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valuesKeys.map((key, idx) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-navy-light/30 backdrop-blur-md p-6 rounded-2xl border border-gold-premium/10 hover:border-gold-premium/40 hover:bg-navy-light/50 transition-all duration-300 shadow-xl group"
              >
                <div className="w-12 h-12 bg-navy/60 border border-gold-premium/20 rounded-xl flex items-center justify-center mb-5 group-hover:bg-gold/10 group-hover:border-gold transition-colors">
                  {valueIcons[key]}
                </div>
                <h4 className="text-white font-bold text-base mb-2 group-hover:text-gold transition-colors">
                  {t.about.values[key].title}
                </h4>
                <p className="text-gray-400 font-light text-xs sm:text-sm leading-relaxed">
                  {t.about.values[key].desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
