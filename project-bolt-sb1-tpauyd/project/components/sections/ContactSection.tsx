"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";
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
              {language === "es" ? "Ubicación" : "Location"}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="overflow-hidden shadow-lg group">
              <div className="relative h-[400px] w-full">
                <img
                  src="https://images.unsplash.com/photo-1577086664693-894d8405334a?auto=format&fit=crop&q=80"
                  alt="IPINNOVATECH Location"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:bg-black/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-lg max-w-md mx-4 transform transition-transform duration-300 group-hover:scale-105">
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-r from-[var(--primary-blue)] to-[var(--accent-blue)] p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">IPINNOVATECH</h3>
                        <p className="text-gray-600">
                          Calle 15a # 103 - 20<br />
                          Ciudad Jardín<br />
                          Cali, Colombia
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
}