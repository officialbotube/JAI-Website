"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { Award, Compass, Heart, MapPin, Calendar, Hotel, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export const UmrahSuccess: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="umrah" className="py-24 bg-navy-dark relative overflow-hidden border-t border-gold-premium/10">
      {/* Immersive radial glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-royal/5 blur-[140px] rounded-full pointer-events-none -z-10" />

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
            {t.umrahSuccess.title}
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight"
          >
            {t.umrahSuccess.subtitle}
          </motion.h2>
          
          <div className="w-12 h-1 bg-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* Successful Umrah Content Layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Story & Highlight Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-white text-xl sm:text-2xl font-bold tracking-wide">
                {t.hero.successBadge}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
                {t.umrahSuccess.desc1}
              </p>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
                {t.umrahSuccess.desc2}
              </p>
            </div>

            {/* Success Journey Highlight Card */}
            <div className="bg-gradient-to-br from-navy-light/50 to-navy-dark/80 backdrop-blur-xl border border-gold-premium/20 p-6 sm:p-8 rounded-3xl shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 blur-xl rounded-full" />
              
              <div className="flex items-center gap-3 mb-6 border-b border-gold-premium/15 pb-4">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="text-white font-bold text-base sm:text-lg">
                  {t.umrahSuccess.highlightCard.title}
                </h4>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-navy-dark/40 p-3.5 rounded-xl border border-gold-premium/5">
                  <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                  <div>
                    <p className="text-gray-400 text-[10px] uppercase font-bold tracking-wider leading-none">Group Size</p>
                    <p className="text-white text-xs sm:text-sm font-semibold mt-1">{t.umrahSuccess.highlightCard.groupSize}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-navy-dark/40 p-3.5 rounded-xl border border-gold-premium/5">
                  <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                  <div>
                    <p className="text-gray-400 text-[10px] uppercase font-bold tracking-wider leading-none">Destination</p>
                    <p className="text-white text-xs sm:text-sm font-semibold mt-1">{t.umrahSuccess.highlightCard.destination}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-navy-dark/40 p-3.5 rounded-xl border border-gold-premium/5">
                  <Calendar className="w-4 h-4 text-gold flex-shrink-0" />
                  <div>
                    <p className="text-gray-400 text-[10px] uppercase font-bold tracking-wider leading-none">Package Tier</p>
                    <p className="text-white text-xs sm:text-sm font-semibold mt-1">{t.umrahSuccess.highlightCard.duration}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-navy-dark/40 p-3.5 rounded-xl border border-gold-premium/5">
                  <Hotel className="w-4 h-4 text-gold flex-shrink-0" />
                  <div>
                    <p className="text-gray-400 text-[10px] uppercase font-bold tracking-wider leading-none">Service Standard</p>
                    <p className="text-white text-xs sm:text-sm font-semibold mt-1">{t.umrahSuccess.highlightCard.serviceLevel}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Premium Framed Umrah Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex justify-center items-center"
          >
            <div className="relative group w-full max-w-lg">
              {/* Outer decorative borders representing luxurious premium framing */}
              <div className="absolute inset-0 border border-gold-premium/30 rounded-3xl transform translate-x-3 translate-y-3 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-500 pointer-events-none" />
              <div className="absolute inset-0 border border-royal/20 rounded-3xl transform -translate-x-3 -translate-y-3 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform duration-500 pointer-events-none" />
              
              {/* Main Photo Container */}
              <div className="relative overflow-hidden rounded-3xl border border-gold/40 shadow-3xl bg-navy-light/50">
                <img
                  src="/images/umrah.jpg"
                  alt="JAI First Successful Umrah Group"
                  className="w-full h-auto object-cover transform scale-100 group-hover:scale-[1.03] transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Overlay card inside image */}
                <div className="absolute bottom-4 left-4 right-4 bg-navy-dark/80 backdrop-blur-md border border-gold-premium/30 p-4 rounded-2xl flex items-center justify-between">
                  <div>
                    <p className="text-white font-bold text-xs sm:text-sm">{t.umrahSuccess.galleryTitle}</p>
                    <p className="text-gold text-[10px] sm:text-xs font-semibold uppercase mt-0.5">Alhamdulillah</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold border border-gold/30">
                    <Compass className="w-4 h-4 animate-spin-slow" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
