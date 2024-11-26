"use client";

import { motion } from "framer-motion";
import { Brain, Cloud, Code, Database, LineChart, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function ServicesSection() {
  const { language } = useLanguage();

  const services = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: language === "es" ? "IA Personalizada" : "Custom AI",
      description: language === "es"
        ? "Soluciones de IA adaptadas a tus necesidades específicas"
        : "AI solutions tailored to your specific needs"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: language === "es" ? "Gestión de Datos" : "Data Management",
      description: language === "es"
        ? "Organización y análisis inteligente de información"
        : "Intelligent organization and analysis of information"
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: language === "es" ? "Cloud Solutions" : "Cloud Solutions",
      description: language === "es"
        ? "Infraestructura escalable y segura en la nube"
        : "Scalable and secure cloud infrastructure"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: language === "es" ? "Desarrollo Custom" : "Custom Development",
      description: language === "es"
        ? "Desarrollo de software a medida para tu empresa"
        : "Custom software development for your business"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: language === "es" ? "Ciberseguridad" : "Cybersecurity",
      description: language === "es"
        ? "Protección avanzada para tus datos y sistemas"
        : "Advanced protection for your data and systems"
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: language === "es" ? "Analytics" : "Analytics",
      description: language === "es"
        ? "Análisis de datos y reportes personalizados"
        : "Data analysis and custom reporting"
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[var(--primary-blue)] to-[var(--accent-blue)] bg-clip-text text-transparent">
            {language === "es" ? "Nuestros Servicios" : "Our Services"}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {language === "es"
              ? "Ofrecemos soluciones tecnológicas integrales para impulsar tu transformación digital"
              : "We offer comprehensive technological solutions to drive your digital transformation"}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-black/40 border-white/10 hover:border-white/20 transition-colors duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[var(--primary-blue)] to-[var(--accent-blue)] p-2 flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}