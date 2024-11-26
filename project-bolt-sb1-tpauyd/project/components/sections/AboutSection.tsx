"use client";

import { motion } from "framer-motion";
import { Award, Target, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  const { language } = useLanguage();

  const values = [
    {
      icon: <Target className="h-6 w-6" />,
      title: language === "es" ? "Misión" : "Mission",
      description: language === "es"
        ? "Transformar la gestión del conocimiento digital mediante soluciones innovadoras y accesibles."
        : "Transform digital knowledge management through innovative and accessible solutions."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: language === "es" ? "Equipo" : "Team",
      description: language === "es"
        ? "Expertos apasionados por la tecnología y la innovación, comprometidos con tu éxito."
        : "Experts passionate about technology and innovation, committed to your success."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: language === "es" ? "Valores" : "Values",
      description: language === "es"
        ? "Excelencia, innovación y compromiso con nuestros clientes."
        : "Excellence, innovation, and commitment to our clients."
    }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[var(--primary-blue)] to-[var(--accent-blue)] bg-clip-text text-transparent">
            {language === "es" ? "Sobre Nosotros" : "About Us"}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {language === "es"
              ? "Somos pioneros en la evolución del Second Brain digital, combinando IA avanzada con gestión inteligente del conocimiento."
              : "We are pioneers in the evolution of the digital Second Brain, combining advanced AI with intelligent knowledge management."}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-black/40 border-white/10 hover:border-white/20 transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[var(--primary-blue)] to-[var(--accent-blue)] p-2 flex items-center justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}