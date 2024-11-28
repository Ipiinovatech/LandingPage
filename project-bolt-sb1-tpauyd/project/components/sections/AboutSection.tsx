"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export function AboutSection() {
  const { language } = useLanguage();

  return (
    <section id="about" className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="section-padding">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">
              {language === "es" ? "Sobre Nosotros" : "About Us"}
            </h2>

            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="prose prose-lg max-w-none p-8"
              >
                <p className="text-xl leading-relaxed text-gray-800 mb-8">
                  {language === "es"
                    ? "IPINNOVATECH es una compañía de tecnología TI en el área de servicios ITO y BPO con más de 13 años en mercado, con presencia en Colombia, Perú y Ecuador y próximamente en otros países de Sur América y Estados Unidos."
                    : "IPINNOVATECH is an IT technology company in the ITO and BPO services area with more than 13 years in the market, with presence in Colombia, Peru and Ecuador and soon in other countries in South America and the United States."}
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {language === "es" ? "Nuestra Misión" : "Our Mission"}
                    </h3>
                    <div className="h-1 w-20 bg-gradient-to-r from-[var(--primary-blue)] to-[var(--accent-blue)]"></div>
                    <p className="text-gray-700">
                      {language === "es"
                        ? "Transformar la gestión del conocimiento digital mediante soluciones innovadoras y accesibles, impulsando el éxito de nuestros clientes a través de la tecnología."
                        : "Transform digital knowledge management through innovative and accessible solutions, driving our clients' success through technology."}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {language === "es" ? "Nuestra Visión" : "Our Vision"}
                    </h3>
                    <div className="h-1 w-20 bg-gradient-to-r from-[var(--primary-blue)] to-[var(--accent-blue)]"></div>
                    <p className="text-gray-700">
                      {language === "es"
                        ? "Ser líderes globales en soluciones tecnológicas innovadoras, estableciendo nuevos estándares en la transformación digital y creando un impacto positivo en la sociedad."
                        : "To be global leaders in innovative technological solutions, setting new standards in digital transformation and creating a positive impact on society."}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {language === "es" ? "Nuestro Compromiso" : "Our Commitment"}
                    </h3>
                    <div className="h-1 w-20 bg-gradient-to-r from-[var(--primary-blue)] to-[var(--accent-blue)]"></div>
                    <p className="text-gray-700">
                      {language === "es"
                        ? "Nos dedicamos a proporcionar soluciones tecnológicas de vanguardia que impulsan la innovación y el crecimiento sostenible de nuestros clientes."
                        : "We are dedicated to providing cutting-edge technological solutions that drive innovation and sustainable growth for our clients."}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}