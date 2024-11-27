"use client";

import { motion } from "framer-motion";
import { Award, Target, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  const { language } = useLanguage();

  const values = [
    {
      icon: <Target className="h-6 w-6 text-white" />,
      title: language === "es" ? "Misión" : "Mission",
      description: language === "es"
        ? "Transformar la gestión del conocimiento digital mediante soluciones innovadoras y accesibles."
        : "Transform digital knowledge management through innovative and accessible solutions."
    },
    {
      icon: <Users className="h-6 w-6 text-white" />,
      title: language === "es" ? "Equipo" : "Team",
      description: language === "es"
        ? "Expertos apasionados por la tecnología y la innovación, comprometidos con tu éxito."
        : "Experts passionate about technology and innovation, committed to your success."
    },
    {
      icon: <Award className="h-6 w-6 text-white" />,
      title: language === "es" ? "Valores" : "Values",
      description: language === "es"
        ? "Excelencia, innovación y compromiso con nuestros clientes."
        : "Excellence, innovation, and commitment to our clients."
    }
  ];

  return (
    <section id="about" className="relative min-h-screen">
      {/* Full-screen background image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-white/60 z-10" />
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80"
          alt="Technology Background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="relative z-20 section-padding">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              {language === "es" ? "Sobre Nosotros" : "About Us"}
            </h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 shadow-lg">
              {language === "es"
                ? "IPINNOVATECH es una compañía de tecnología TI en el área de servicios ITO y BPO con más de 13 años en mercado, con presencia en Colombia, Perú y Ecuador y próximamente en otros países de Sur América y Estados Unidos."
                : "IPINNOVATECH is an IT technology company in the ITO and BPO services area with more than 13 years in the market, with presence in Colombia, Peru and Ecuador and soon in other countries in South America and the United States."}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/80 backdrop-blur-sm border-gray-200 hover:border-[var(--primary-blue)] transition-all duration-300 group shadow-lg">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[var(--primary-blue)] to-[var(--accent-blue)] p-2 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{value.title}</h3>
                    <p className="text-gray-700">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}