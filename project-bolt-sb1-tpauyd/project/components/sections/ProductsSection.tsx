"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Bot, 
  Brain, 
  Camera, 
  FileVideo, 
  Shield, 
  UserCircle, 
  Settings, 
  Sparkles,
  GraduationCap 
} from "lucide-react";

export function ProductsSection() {
  const { language } = useLanguage();

  const products = [
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Optimización y Automatización de Procesos",
      description: language === "es"
        ? "IPINNOVATECH permite a las empresas mejorar la eficiencia de procesos operativos, automatizando tareas y reduciendo costos."
        : "IPINNOVATECH enables companies to improve operational process efficiency, automating tasks and reducing costs.",
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: language === "es" ? "Creación de Productos y Servicios con IA" : "AI Product and Service Creation",
      description: language === "es"
        ? "Utilizamos IA para el desarrollo de productos y servicios innovadores que responden a las necesidades cambiantes del mercado, ofreciendo una ventaja competitiva."
        : "We use AI to develop innovative products and services that respond to changing market needs, offering a competitive advantage.",
    },
    {
      icon: <Bot className="h-6 w-6" />,
      title: language === "es" ? "Agentes Inteligentes Multicanal (Asistente Gaby)" : "Multichannel Intelligent Agents (Gaby Assistant)",
      description: language === "es"
        ? "Nuestros asistentes de IA pueden comunicarse a través de múltiples canales como voz, chat, y redes sociales, ofreciendo soporte en múltiples idiomas."
        : "Our AI assistants can communicate through multiple channels such as voice, chat, and social media, offering support in multiple languages.",
    },
    {
      icon: <Camera className="h-6 w-6" />,
      title: language === "es" ? "Servicios de Visión Artificial" : "Artificial Vision Services",
      description: language === "es"
        ? "Implementación de soluciones de visión para detección y reconocimiento de objetos, personas, y patrones, incluyendo reconocimiento facial con liveness para seguridad avanzada."
        : "Implementation of vision solutions for object, person, and pattern detection and recognition, including facial recognition with liveness for advanced security.",
    },
    {
      icon: <FileVideo className="h-6 w-6" />,
      title: language === "es" ? "Generación Multimedia con IA" : "AI Multimedia Generation",
      description: language === "es"
        ? "Generación de contenido personalizado de voz, imágenes, música y video, adaptado a las necesidades del cliente."
        : "Generation of personalized voice, image, music, and video content, adapted to client needs.",
    },
    {
      icon: <UserCircle className="h-6 w-6" />,
      title: language === "es" ? "Avatares de IA" : "AI Avatars",
      description: language === "es"
        ? "Avatares interactivos y realistas que pueden asistir en soporte, ventas y capacitaciones virtuales, conectarse a los sistemas de información de su empresa."
        : "Interactive and realistic avatars that can assist in support, sales, and virtual training, connecting to your company's information systems.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: language === "es" ? "Ciberseguridad Potenciada con IA" : "AI-Enhanced Cybersecurity",
      description: language === "es"
        ? "Detección automatizada de amenazas y verificación mediante firma digital, asegurando la integridad de datos y transacciones en la empresa."
        : "Automated threat detection and verification through digital signatures, ensuring data and transaction integrity in the company.",
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: language === "es" ? "Influencers de IA para Redes Sociales" : "AI Social Media Influencers",
      description: language === "es"
        ? "Creación de personajes de IA que influyen en redes sociales, promoviendo marcas y productos de manera estratégica y alcanzando grandes audiencias."
        : "Creation of AI characters that influence social media, promoting brands and products strategically and reaching large audiences.",
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: language === "es" ? "Capacitación en Inteligencia Artificial" : "Artificial Intelligence Training",
      description: language === "es"
        ? "Capacitaciones especializadas y básicas para maximizar el uso de IA en procesos críticos de negocio y preparar al personal para su uso efectivo."
        : "Specialized and basic training to maximize the use of AI in critical business processes and prepare staff for its effective use.",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white/80 backdrop-blur-sm border-gray-200 hover:border-[var(--primary-blue)] transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[var(--primary-blue)] to-[var(--accent-blue)] p-2 flex items-center justify-center mb-4">
                    {product.icon}
                  </div>
                  <CardTitle className="text-xl mb-4 text-gray-800">{product.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{product.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}