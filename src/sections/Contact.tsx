"use client";

import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Phone, Mail, Facebook, Send, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate luxury API call with zero backend
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      
      // Auto close success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const facebookUrl = "https://www.facebook.com/profile.php?id=61560946221447"; // Use official search query or fallback official url pattern
  const emailAddress = "info.jai.bd@gmail.com";

  return (
    <section id="contact" className="py-24 bg-navy-dark relative overflow-hidden border-t border-gold-premium/10">
      {/* Visual background decorations */}
      <div className="absolute top-1/3 left-0 w-[450px] h-[450px] bg-royal/5 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 right-0 w-[450px] h-[450px] bg-gold/5 blur-[130px] rounded-full pointer-events-none -z-10" />

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
            {t.contact.title}
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight"
          >
            {t.contact.subtitle}
          </motion.h2>
          
          <div className="w-12 h-1 bg-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* Contact Split Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6"
          >
            <h3 className="text-white text-xl font-bold tracking-wide mb-6">
              {t.contact.infoTitle}
            </h3>

            {/* Direct Phone Call Card */}
            <div className="bg-gradient-to-br from-navy-light/40 to-navy-dark/95 border border-gold-premium/15 rounded-2xl p-6 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold">
                  <Phone className="w-5 h-5" />
                </div>
                <h4 className="text-white font-bold text-base">Direct Hotlines</h4>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                <a
                  href="tel:01971941428"
                  className="bg-navy-dark/60 hover:bg-gold/10 border border-gold-premium/10 hover:border-gold p-3 rounded-xl flex items-center justify-between group transition-all"
                >
                  <div className="text-left">
                    <p className="text-[10px] text-gray-400 uppercase font-bold leading-none">Head Office</p>
                    <p className="text-white text-sm font-semibold mt-1">01971941428</p>
                  </div>
                  <span className="text-gold text-xs font-bold uppercase group-hover:translate-x-1 transition-transform">→</span>
                </a>

                <a
                  href="tel:01711941428"
                  className="bg-navy-dark/60 hover:bg-gold/10 border border-gold-premium/10 hover:border-gold p-3 rounded-xl flex items-center justify-between group transition-all"
                >
                  <div className="text-left">
                    <p className="text-[10px] text-gray-400 uppercase font-bold leading-none">Head Office</p>
                    <p className="text-white text-sm font-semibold mt-1">01711941428</p>
                  </div>
                  <span className="text-gold text-xs font-bold uppercase group-hover:translate-x-1 transition-transform">→</span>
                </a>

                <a
                  href="tel:01835922789"
                  className="bg-navy-dark/60 hover:bg-gold/10 border border-gold-premium/10 hover:border-gold p-3 rounded-xl flex items-center justify-between group transition-all sm:col-span-2"
                >
                  <div className="text-left">
                    <p className="text-[10px] text-gray-400 uppercase font-bold leading-none">Dhaka Office</p>
                    <p className="text-white text-sm font-semibold mt-1">01835922789</p>
                  </div>
                  <span className="text-gold text-xs font-bold uppercase group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>

            {/* Email Contact Card */}
            <a
              href={`mailto:${emailAddress}`}
              className="bg-gradient-to-br from-navy-light/40 to-navy-dark/95 border border-gold-premium/15 hover:border-gold-premium/40 rounded-2xl p-6 shadow-xl flex items-center gap-5 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-gold/10 border border-gold-premium/20 rounded-xl flex items-center justify-center text-gold group-hover:bg-gold/25 transition-colors flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase font-bold tracking-wider leading-none">
                  {t.contact.emailLabel}
                </p>
                <p className="text-white text-base font-bold mt-1.5 group-hover:text-gold transition-colors">
                  {emailAddress}
                </p>
              </div>
            </a>

            {/* Facebook Page Contact Card */}
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-navy-light/40 to-navy-dark/95 border border-gold-premium/15 hover:border-gold-premium/40 rounded-2xl p-6 shadow-xl flex items-center gap-5 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-blue-600/10 border border-blue-500/20 rounded-xl flex items-center justify-center text-blue-500 group-hover:bg-blue-600/25 transition-colors flex-shrink-0">
                <Facebook className="w-6 h-6" />
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase font-bold tracking-wider leading-none">
                  {t.contact.fbLabel}
                </p>
                <p className="text-white text-base font-bold mt-1.5 group-hover:text-blue-400 transition-colors">
                  Jahangirnagar Air International
                </p>
              </div>
            </a>
          </motion.div>

          {/* Right Column: Premium Contact Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="bg-gradient-to-b from-navy-light/50 to-navy-dark/90 border border-gold-premium/15 p-8 sm:p-10 rounded-3xl shadow-2xl relative">
              <h3 className="text-white text-xl font-bold tracking-wide mb-6">
                {t.contact.formTitle}
              </h3>

              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-gold/10 border border-gold/40 p-6 rounded-2xl flex flex-col items-center text-center space-y-4 my-8"
                  >
                    <CheckCircle className="w-12 h-12 text-gold animate-bounce" />
                    <p className="text-white font-semibold text-base">
                      {t.contact.successMsg}
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      {/* Name input */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-gray-300 text-xs font-semibold uppercase tracking-wider">
                          {t.contact.name}
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder={t.contact.name}
                          className="bg-navy-dark/80 border border-gold-premium/15 focus:border-gold focus:ring-1 focus:ring-gold text-white text-sm px-4 py-3 rounded-xl outline-none transition-all placeholder:text-gray-500"
                        />
                      </div>

                      {/* Email input */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-gray-300 text-xs font-semibold uppercase tracking-wider">
                          {t.contact.email}
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder={t.contact.email}
                          className="bg-navy-dark/80 border border-gold-premium/15 focus:border-gold focus:ring-1 focus:ring-gold text-white text-sm px-4 py-3 rounded-xl outline-none transition-all placeholder:text-gray-500"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      {/* Phone input */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-gray-300 text-xs font-semibold uppercase tracking-wider">
                          {t.contact.phone}
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder={t.contact.phone}
                          className="bg-navy-dark/80 border border-gold-premium/15 focus:border-gold focus:ring-1 focus:ring-gold text-white text-sm px-4 py-3 rounded-xl outline-none transition-all placeholder:text-gray-500"
                        />
                      </div>

                      {/* Subject input */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-gray-300 text-xs font-semibold uppercase tracking-wider">
                          {t.contact.subject}
                        </label>
                        <input
                          type="text"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder={t.contact.subject}
                          className="bg-navy-dark/80 border border-gold-premium/15 focus:border-gold focus:ring-1 focus:ring-gold text-white text-sm px-4 py-3 rounded-xl outline-none transition-all placeholder:text-gray-500"
                        />
                      </div>
                    </div>

                    {/* Message input */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-gray-300 text-xs font-semibold uppercase tracking-wider">
                        {t.contact.message}
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={t.contact.message}
                        className="bg-navy-dark/80 border border-gold-premium/15 focus:border-gold focus:ring-1 focus:ring-gold text-white text-sm px-4 py-3 rounded-xl outline-none resize-none transition-all placeholder:text-gray-500"
                      />
                    </div>

                    {/* Submit button */}
                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-gold-dark via-gold to-gold-light text-navy-dark font-bold py-4 rounded-xl text-sm transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <span>{t.contact.sending}</span>
                        ) : (
                          <>
                            <span>{t.contact.send}</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
