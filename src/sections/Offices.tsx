"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { MapPin, Phone, ExternalLink, Building, Landmark } from "lucide-react";
import { motion } from "framer-motion";

export const Offices: React.FC = () => {
  const { t, language } = useLanguage();

  // Create Google Maps Search URLs for each office to make the Map button interactive out-of-the-box
  const headOfficeMapUrl = "https://www.google.com/maps/search/?api=1&query=Gazir+Khamar+Bazar+Krishi+Bank+Sherpur";
  const dhakaOfficeMapUrl = "https://www.google.com/maps/search/?api=1&query=National+Standard+School+And+College+Banasree+Rampura+Dhaka";

  return (
    <section id="offices" className="py-24 bg-navy relative overflow-hidden border-t border-gold-premium/10">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-[350px] h-[350px] bg-gold/5 blur-[110px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-0 w-[350px] h-[350px] bg-royal/5 blur-[110px] rounded-full pointer-events-none -z-10" />

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
            {t.offices.title}
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight"
          >
            {t.offices.subtitle}
          </motion.h2>
          
          <div className="w-12 h-1 bg-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* Offices Cards Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Head Office Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-b from-navy-light/40 to-navy-dark/95 border border-gold-premium/15 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden group flex flex-col justify-between hover:border-gold/30 transition-all duration-300"
          >
            <div>
              {/* Card Header Label */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-12 bg-gold/10 border border-gold/30 rounded-xl flex items-center justify-center text-gold">
                  <Landmark className="w-6 h-6" />
                </div>
                <span className="text-gold-premium text-[11px] sm:text-xs font-semibold uppercase tracking-wider bg-gold/5 border border-gold-premium/15 px-3.5 py-1.5 rounded-full">
                  Corporate HQ
                </span>
              </div>

              {/* Office Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 group-hover:text-gold transition-colors duration-300">
                {t.offices.headOffice.title}
              </h3>

              {/* Address Section */}
              <div className="space-y-4 border-t border-gold-premium/10 pt-6 mb-8">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-gray-400 text-xs uppercase tracking-wider font-bold">
                      {t.offices.headOffice.addressLabel}
                    </h4>
                    <p className="text-gray-200 text-sm sm:text-base leading-relaxed font-light mt-1">
                      {t.offices.headOffice.address}
                    </p>
                  </div>
                </div>

                {/* Phones Section */}
                <div className="flex items-start gap-4 pt-2">
                  <Phone className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-gray-400 text-xs uppercase tracking-wider font-bold">
                      {t.offices.headOffice.phoneLabel}
                    </h4>
                    <div className="flex flex-col gap-2 mt-2">
                      {t.offices.headOffice.phones.map((phone) => (
                        <a
                          key={phone}
                          href={`tel:${phone}`}
                          className="text-white hover:text-gold text-sm sm:text-base font-semibold transition-colors flex items-center gap-1.5 w-max"
                        >
                          <span>{phone}</span>
                          <span className="text-[10px] text-gray-500 font-normal">(Call HQ)</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Action Button */}
            <div className="pt-4">
              <a
                href={headOfficeMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-navy border border-gold-premium/20 hover:border-gold hover:bg-gold/10 text-white font-semibold py-3.5 rounded-xl text-sm transition-all duration-300"
              >
                <span>{t.offices.mapButton}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Dhaka Office Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-gradient-to-b from-navy-light/40 to-navy-dark/95 border border-gold-premium/15 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden group flex flex-col justify-between hover:border-gold/30 transition-all duration-300"
          >
            <div>
              {/* Card Header Label */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-12 bg-royal/10 border border-royal/30 rounded-xl flex items-center justify-center text-royal-light">
                  <Building className="w-6 h-6" />
                </div>
                <span className="text-gold-premium text-[11px] sm:text-xs font-semibold uppercase tracking-wider bg-gold/5 border border-gold-premium/15 px-3.5 py-1.5 rounded-full">
                  Liaison Office
                </span>
              </div>

              {/* Office Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 group-hover:text-gold transition-colors duration-300">
                {t.offices.dhakaOffice.title}
              </h3>

              {/* Address Section */}
              <div className="space-y-4 border-t border-gold-premium/10 pt-6 mb-8">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-gray-400 text-xs uppercase tracking-wider font-bold">
                      {t.offices.dhakaOffice.addressLabel}
                    </h4>
                    <p className="text-gray-200 text-sm sm:text-base leading-relaxed font-light mt-1">
                      {t.offices.dhakaOffice.address}
                    </p>
                  </div>
                </div>

                {/* Phones Section */}
                <div className="flex items-start gap-4 pt-2">
                  <Phone className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-gray-400 text-xs uppercase tracking-wider font-bold">
                      {t.offices.dhakaOffice.phoneLabel}
                    </h4>
                    <div className="flex flex-col gap-2 mt-2">
                      {t.offices.dhakaOffice.phones.map((phone) => (
                        <a
                          key={phone}
                          href={`tel:${phone}`}
                          className="text-white hover:text-gold text-sm sm:text-base font-semibold transition-colors flex items-center gap-1.5 w-max"
                        >
                          <span>{phone}</span>
                          <span className="text-[10px] text-gray-500 font-normal">(Call Dhaka)</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Action Button */}
            <div className="pt-4">
              <a
                href={dhakaOfficeMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-navy border border-gold-premium/20 hover:border-gold hover:bg-gold/10 text-white font-semibold py-3.5 rounded-xl text-sm transition-all duration-300"
              >
                <span>{t.offices.mapButton}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
