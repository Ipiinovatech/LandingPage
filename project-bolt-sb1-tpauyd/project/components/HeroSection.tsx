"use client";

import { motion } from "framer-motion";
import { ArrowRight, Brain, Cpu, Database, Lock } from "lucide-react";
import { Link } from "react-scroll";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HeroSection() {
  const { language } = useLanguage();

  const features = [
    {
      icon: <Brain className="h-6 w-6 text-white" />,
      title: language === "es" ? "IA Avanzada" : "Advanced AI",
      description: language === "es" 
        ? "Tecnología de punta para potenciar tu negocio"
        : "Cutting-edge technology to power your business"
    },
    {
      icon: <Database className="h-6 w-6 text-white" />,
      title: language === "es" ? "Gestión de Datos" : "Data Management",
      description: language === "es"
        ? "Organización inteligente de información"
        : "Intelligent information organization"
    },
    {
      icon: <Lock className="h-6 w-6 text-white" />,
      title: language === "es" ? "Seguridad Total" : "Total Security",
      description: language === "es"
        ? "Protección avanzada de datos"
        : "Advanced data protection"
    },
    {
      icon: <Cpu className="h-6 w-6 text-white" />,
      title: language === "es" ? "Automatización" : "Automation",
      description: language === "es"
        ? "Procesos optimizados e inteligentes"
        : "Optimized and intelligent processes"
    }
  ];

  return (
    <section id="home" className="relative min-h-screen pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,102,255,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(0,209,255,0.1),transparent_50%)]" />
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)] py-12">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-[var(--primary-blue)] to-[var(--accent-blue)] bg-clip-text text-transparent">
                {language === "es" ? "IPINNOVATECH" : "IPINNOVATECH"}
              </span>
              <br />
              <span className="text-gray-700">
                {language === "es" ? "Con su Red Multiservicios de IA" : "With its AI Multiservice Network"}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl font-medium leading-relaxed text-gray-700 bg-white/50 p-6 rounded-lg shadow-sm border border-gray-100">
              {language === "es" 
                ? "Se dedica a la transformación y optimización de procesos mediante soluciones de IA avanzadas. Nuestra plataforma multiservicios permite a las empresas mejorar su eficiencia, crear nuevos productos y servicios, y optimizar sus operaciones."
                : "Dedicated to process transformation and optimization through advanced AI solutions. Our multiservice platform enables companies to improve efficiency, create new products and services, and optimize their operations."}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="products"
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                className="cursor-pointer px-8 py-3 bg-gradient-to-r from-[var(--primary-blue)] to-[var(--accent-blue)] rounded-full font-semibold text-white hover:shadow-lg hover:shadow-blue-500/30 transition-shadow duration-300 flex items-center gap-2"
              >
                {language === "es" ? "Saber Más" : "Learn More"}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-square rounded-full bg-gradient-to-r from-[var(--primary-blue)] to-[var(--accent-blue)] opacity-20 blur-3xl absolute -z-10" />
            <img
              src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80"
              alt="AI Technology"
              className="rounded-2xl shadow-2xl shadow-blue-500/20 w-full object-cover aspect-square"
            />
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 mb-24"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm hover:border-[var(--primary-blue)] transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[var(--primary-blue)] to-[var(--accent-blue)] p-2 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}