"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { ShieldCheck, Calendar, Star, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export const WhyChooseUs: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="why-choose-us" className="py-24 bg-navy relative overflow-hidden border-t border-gold-premium/10">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-royal/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-gold uppercase tracking-widest text-xs md:text-sm font-bold bg-gold/10 px-4 py-1.5 rounded-full border border-gold-premium/20 inline-block mb-4"
          >
            {t.whyChooseUs.title}
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight"
          >
            {t.whyChooseUs.subtitle}
          </motion.h2>
          
          <div className="w-12 h-1 bg-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* Advantages & Timeline Split Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Advantages Cards */}
          <div className="space-y-8">
            {t.whyChooseUs.advantages.map((adv, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-navy-light/30 backdrop-blur-xl border border-gold-premium/15 rounded-2xl p-6 sm:p-8 hover:bg-navy-light/50 hover:border-gold-premium/40 transition-all duration-300 flex items-start gap-5 shadow-xl group"
              >
                <div className="w-12 h-12 bg-navy/60 border border-gold-premium/25 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-gold/10 group-hover:border-gold transition-colors">
                  {idx === 0 && <ShieldCheck className="w-6 h-6 text-gold" />}
                  {idx === 1 && <Star className="w-6 h-6 text-gold" />}
                  {idx === 2 && <CheckCircle className="w-6 h-6 text-gold" />}
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-gold transition-colors">
                    {adv.title}
                  </h3>
                  <p className="text-gray-300 text-sm font-light leading-relaxed">
                    {adv.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Premium Timeline */}
          <div className="relative border-l border-gold-premium/20 pl-8 ml-4 space-y-12 py-4">
            <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-gold via-royal to-transparent" />
            
            {t.whyChooseUs.timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative"
              >
                {/* Timeline Bullet Dot */}
                <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-navy-dark border-2 border-gold flex items-center justify-center shadow-lg">
                  <div className="w-2.5 h-2.5 rounded-full bg-gold animate-ping" />
                  <div className="absolute w-2 h-2 rounded-full bg-gold" />
                </div>

                {/* Content Box */}
                <div className="bg-navy-light/20 backdrop-blur-md p-6 rounded-2xl border border-gold-premium/10 shadow-lg hover:border-gold-premium/20 transition-all">
                  <span className="inline-block text-gold text-xs font-bold uppercase tracking-wider bg-gold/10 px-3 py-1 rounded-full mb-3 border border-gold-premium/20">
                    {item.year}
                  </span>
                  <h4 className="text-white font-bold text-lg mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-300 text-sm font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
