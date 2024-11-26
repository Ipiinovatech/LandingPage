"use client";

import { motion } from "framer-motion";
import { ArrowRight, Brain, Cpu, Database, Lock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HeroSection() {
  const { language } = useLanguage();

  const features = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: language === "es" ? "IA Avanzada" : "Advanced AI",
      description: language === "es" 
        ? "Tecnología de punta para potenciar tu negocio"
        : "Cutting-edge technology to power your business"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: language === "es" ? "Gestión de Datos" : "Data Management",
      description: language === "es"
        ? "Organización inteligente de información"
        : "Intelligent information organization"
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: language === "es" ? "Seguridad Total" : "Total Security",
      description: language === "es"
        ? "Protección avanzada de datos"
        : "Advanced data protection"
    },
    {
      icon: <Cpu className="h-6 w-6" />,
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
                {language === "es" ? "Innovación Digital" : "Digital Innovation"}
              </span>
              <br />
              {language === "es" ? "para el Futuro" : "for the Future"}
            </h1>
            
            <p className="text-xl text-gray-300">
              {language === "es" 
                ? "Transformamos tu experiencia digital con tecnología de vanguardia. Organiza, analiza y potencia tu conocimiento como nunca antes."
                : "Transform your digital experience with cutting-edge technology. Organize, analyze, and enhance your knowledge like never before."}
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-[var(--primary-blue)] to-[var(--accent-blue)] rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-shadow duration-300">
                {language === "es" ? "Comenzar Ahora" : "Get Started"}
              </button>
              <button className="px-8 py-3 border border-white/10 rounded-full font-semibold hover:bg-white/5 transition-colors duration-300 flex items-center gap-2">
                {language === "es" ? "Saber Más" : "Learn More"}
                <ArrowRight className="h-4 w-4" />
              </button>
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
              className="p-6 rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm hover:border-white/20 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[var(--primary-blue)] to-[var(--accent-blue)] p-2 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}