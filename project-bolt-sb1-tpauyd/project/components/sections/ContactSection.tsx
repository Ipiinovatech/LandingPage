"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { GoogleMap } from "@/components/contact/GoogleMap";
import { FAQ } from "@/components/contact/FAQ";
import { Footer } from "@/components/contact/Footer";

export function ContactSection() {
  const { language } = useLanguage();

  return (
    <>
      <section id="contact" className="section-padding bg-gradient-to-b from-white to-[var(--bg-gradient-end)]">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[var(--primary-blue)] to-[var(--accent-blue)] bg-clip-text text-transparent">
              {language === "es" ? "Contacto" : "Contact"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === "es"
                ? "¿Tienes alguna pregunta? Estamos aquí para ayudarte"
                : "Have any questions? We're here to help"}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <ContactForm />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ContactInfo />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <GoogleMap />
          </motion.div>
        </div>
      </section>

      <FAQ />
      <Footer />
    </>
  );
}