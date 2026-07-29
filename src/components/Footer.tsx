"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { Mail, Phone, MapPin, Facebook, Compass } from "lucide-react";

export const Footer: React.FC = () => {
  const { t, language } = useLanguage();

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.whyUs, href: "#why-choose-us" },
    { label: t.nav.umrah, href: "#umrah" },
    { label: t.nav.offices, href: "#offices" },
    { label: t.nav.contact, href: "#contact" },
  ];

  const services = [
    t.services.items.umrah.title,
    t.services.items.studentVisa.title,
    t.services.items.workPermit.title,
    t.services.items.immigration.title,
    t.services.items.ticketing.title,
    t.services.items.otherVisa.title,
  ];

  return (
    <footer className="bg-navy-dark border-t border-gold-premium/15 text-gray-400 text-sm">
      
      {/* Top Footer Widgets */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand/About Widget */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#home" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 bg-navy-light/60 rounded-xl p-1 border border-gold-premium/30 flex items-center justify-center">
                <img
                  src="/images/logo.png"
                  alt="JAI Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-base tracking-wide leading-none group-hover:text-gold transition-colors">
                  Jahangirnagar Air
                </span>
                <span className="text-gold-premium font-medium text-[10px] tracking-widest leading-none mt-1">
                  INTERNATIONAL (JAI)
                </span>
              </div>
            </a>
            
            <p className="text-gray-300 font-light text-xs sm:text-sm leading-relaxed max-w-sm">
              {t.about.intro.slice(0, 150)}...
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.facebook.com/profile.php?id=61560946221447"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-navy/60 border border-gold-premium/15 flex items-center justify-center text-gray-300 hover:text-blue-500 hover:border-blue-500/50 transition-colors"
                aria-label="Facebook Link"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <div className="w-9 h-9 rounded-lg bg-navy/60 border border-gold-premium/15 flex items-center justify-center text-gold border-gold-premium/35">
                <Compass className="w-4 h-4 animate-spin-slow" />
              </div>
            </div>
          </div>

          {/* Quick Links Widget */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider border-l-2 border-gold pl-2.5">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-gold text-xs sm:text-sm font-light transition-colors duration-250 flex items-center gap-1.5"
                  >
                    <span>•</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Widget */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider border-l-2 border-gold pl-2.5">
              {t.footer.services}
            </h4>
            <ul className="space-y-3">
              {services.map((svc, sIdx) => (
                <li key={sIdx} className="text-xs sm:text-sm font-light flex items-start gap-1.5">
                  <span className="text-gold">•</span>
                  <span>{svc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Widget */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider border-l-2 border-gold pl-2.5">
              {t.footer.contact}
            </h4>
            <ul className="space-y-4">
              
              {/* Head Office Address */}
              <li className="flex gap-3 text-xs sm:text-sm font-light leading-relaxed">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white text-[10px] sm:text-xs uppercase tracking-wider">Head Office</p>
                  <p className="mt-1">{t.offices.headOffice.address}</p>
                </div>
              </li>

              {/* Emails */}
              <li className="flex gap-3 text-xs sm:text-sm font-light">
                <Mail className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white text-[10px] sm:text-xs uppercase tracking-wider">Email Us</p>
                  <a href="mailto:info.jai.bd@gmail.com" className="hover:text-gold transition-colors mt-1 block font-medium">
                    info.jai.bd@gmail.com
                  </a>
                </div>
              </li>

              {/* Primary Phone */}
              <li className="flex gap-3 text-xs sm:text-sm font-light">
                <Phone className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white text-[10px] sm:text-xs uppercase tracking-wider">Call Hotline</p>
                  <a href="tel:01971941428" className="hover:text-gold transition-colors mt-1 block font-medium">
                    01971941428
                  </a>
                </div>
              </li>

            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-gold-premium/10 py-6 bg-navy-dark/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-gray-500">
          <p className="font-light">
            © {currentYear} {t.footer.rights}
          </p>
          <p className="font-light">
            Designed & Engineered with Excellence
          </p>
        </div>
      </div>

    </footer>
  );
};
