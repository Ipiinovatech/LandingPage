"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Bot, 
  Brain, 
  Camera, 
  FileVideo, 
  Shield, 
  UserCircle, 
  Settings, 
  Sparkles,
  GraduationCap,
  ChevronDown
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function ProductsSection() {
  const { language } = useLanguage();

  const products = [
    {
      icon: <Settings className="h-8 w-8 text-white" />,
      title: language === "es" ? "Optimización y Automatización de Procesos" : "Process Optimization and Automation",
      description: language === "es"
        ? "IPINNOVATECH permite a las empresas mejorar la eficiencia de procesos operativos, automatizando tareas y reduciendo costos."
        : "IPINNOVATECH enables companies to improve operational process efficiency, automating tasks and reducing costs.",
    },
    {
      icon: <Brain className="h-8 w-8 text-white" />,
      title: language === "es" ? "Creación de Productos y Servicios con IA" : "AI Product and Service Creation",
      description: language === "es"
        ? "Utilizamos IA para el desarrollo de productos y servicios innovadores que responden a las necesidades cambiantes del mercado."
        : "We use AI to develop innovative products and services that respond to changing market needs.",
    },
    {
      icon: <Bot className="h-8 w-8 text-white" />,
      title: language === "es" ? "Agentes Inteligentes Multicanal" : "Multichannel Intelligent Agents",
      description: language === "es"
        ? "Nuestros asistentes de IA pueden comunicarse a través de múltiples canales como voz, chat, y redes sociales."
        : "Our AI assistants can communicate through multiple channels such as voice, chat, and social media.",
    },
    {
      icon: <Camera className="h-8 w-8 text-white" />,
      title: language === "es" ? "Servicios de Visión Artificial" : "Artificial Vision Services",
      description: language === "es"
        ? "Implementación de soluciones de visión para detección y reconocimiento de objetos, personas, y patrones."
        : "Implementation of vision solutions for object, person, and pattern detection and recognition.",
    },
    {
      icon: <FileVideo className="h-8 w-8 text-white" />,
      title: language === "es" ? "Generación Multimedia con IA" : "AI Multimedia Generation",
      description: language === "es"
        ? "Generación de contenido personalizado de voz, imágenes, música y video."
        : "Generation of personalized voice, image, music, and video content.",
    },
    {
      icon: <UserCircle className="h-8 w-8 text-white" />,
      title: language === "es" ? "Avatares de IA" : "AI Avatars",
      description: language === "es"
        ? "Avatares interactivos y realistas que pueden asistir en soporte, ventas y capacitaciones virtuales."
        : "Interactive and realistic avatars that can assist in support, sales, and virtual training.",
    },
    {
      icon: <Shield className="h-8 w-8 text-white" />,
      title: language === "es" ? "Ciberseguridad Potenciada con IA" : "AI-Enhanced Cybersecurity",
      description: language === "es"
        ? "Detección automatizada de amenazas y verificación mediante firma digital."
        : "Automated threat detection and verification through digital signatures.",
    },
    {
      icon: <Sparkles className="h-8 w-8 text-white" />,
      title: language === "es" ? "Influencers de IA" : "AI Influencers",
      description: language === "es"
        ? "Creación de personajes de IA que influyen en redes sociales."
        : "Creation of AI characters that influence social media.",
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-white" />,
      title: language === "es" ? "Capacitación en IA" : "AI Training",
      description: language === "es"
        ? "Capacitaciones especializadas para maximizar el uso de IA en procesos críticos."
        : "Specialized training to maximize the use of AI in critical processes.",
    },
  ];

  return (
    <section id="products" className="section-padding bg-gradient-to-b from-white to-[var(--bg-gradient-end)]">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[var(--primary-blue)] to-[var(--accent-blue)] bg-clip-text text-transparent">
            {language === "es" ? "Nuestros Productos" : "Our Products"}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === "es"
              ? "Soluciones innovadoras impulsadas por IA para transformar su negocio"
              : "Innovative AI-driven solutions to transform your business"}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-lg overflow-hidden bg-white/80 backdrop-blur-sm hover:border-[var(--primary-blue)] transition-all duration-300"
                >
                  <AccordionTrigger className="px-6 py-4 flex items-center gap-4 hover:no-underline [&[data-state=open]>div]:bg-[var(--primary-blue)] [&[data-state=open]>div]:text-white">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[var(--primary-blue)] to-[var(--accent-blue)] p-2 flex items-center justify-center transition-colors duration-300">
                      {product.icon}
                    </div>
                    <span className="flex-1 text-left text-lg font-semibold">
                      {product.title}
                    </span>
                    <ChevronDown className="h-5 w-5 shrink-0 text-gray-500 transition-transform duration-200" />
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-gray-600">
                    {product.description}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}