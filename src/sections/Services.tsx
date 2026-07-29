"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";
import {
  GraduationCap,
  Briefcase,
  Globe,
  Ticket,
  Map,
  Compass,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

export const Services: React.FC = () => {
  const { t } = useLanguage();

  const serviceIcons = {
    umrah: <Compass className="w-8 h-8 text-gold" />,
    studentVisa: <GraduationCap className="w-8 h-8 text-gold" />,
    workPermit: <Briefcase className="w-8 h-8 text-gold" />,
    immigration: <Globe className="w-8 h-8 text-gold" />,
    ticketing: <Ticket className="w-8 h-8 text-gold" />,
    otherVisa: <Map className="w-8 h-8 text-gold" />,
  };

  const serviceKeys = [
    "umrah",
    "studentVisa",
    "workPermit",
    "immigration",
    "ticketing",
    "otherVisa",
  ] as const;

  return (
    <section id="services" className="py-24 bg-navy-dark relative overflow-hidden border-t border-gold-premium/10">
      {/* Visual background glows */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-gold/5 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-royal/5 blur-[130px] rounded-full pointer-events-none" />

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
            {t.services.title}
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight"
          >
            {t.services.subtitle}
          </motion.h2>
          
          <div className="w-12 h-1 bg-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceKeys.map((key, idx) => {
            const service = t.services.items[key];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-gradient-to-b from-navy-light/40 to-navy-dark/95 border border-gold-premium/15 rounded-3xl p-8 shadow-2xl relative overflow-hidden group flex flex-col justify-between hover:border-gold/40 transition-all duration-300"
              >
                {/* Highlight Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div>
                  {/* Service Icon */}
                  <div className="w-16 h-14 bg-navy-dark border border-gold-premium/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold/10 group-hover:border-gold transition-all duration-300 shadow-lg">
                    {serviceIcons[key]}
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl font-bold text-white mb-4 tracking-wide group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-gray-300 text-sm font-light leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  {/* Service Features/Bullet Points */}
                  <ul className="space-y-3 mb-8">
                    {service.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5 text-xs text-gray-400 font-light">
                        <CheckCircle2 className="w-4 h-4 text-gold/80 flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer CTA Link */}
                <div className="pt-4 border-t border-gold-premium/10 flex items-center justify-between mt-auto">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-gold-premium text-xs md:text-sm font-medium hover:text-gold transition-colors group/link"
                  >
                    <span>{t.services.cta}</span>
                    <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
