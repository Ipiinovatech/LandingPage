"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

export function NewsSection() {
  const { language } = useLanguage();

  const news = [
    {
      title: language === "es" 
        ? "IPINNOVATECH Expande sus Servicios de IA"
        : "IPINNOVATECH Expands AI Services",
      description: language === "es"
        ? "Nuevas soluciones de inteligencia artificial para empresas en crecimiento"
        : "New artificial intelligence solutions for growing businesses",
      date: "2024-03-15",
      category: language === "es" ? "Innovación" : "Innovation",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80"
    },
    {
      title: language === "es"
        ? "Apertura de Nueva Sede en Bogotá"
        : "New Office Opening in Bogotá",
      description: language === "es"
        ? "Expandiendo nuestra presencia para servir mejor a nuestros clientes"
        : "Expanding our presence to better serve our clients",
      date: "2024-03-10",
      category: language === "es" ? "Expansión" : "Expansion",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80"
    },
    {
      title: language === "es"
        ? "Reconocimiento Internacional en Tecnología"
        : "International Technology Recognition",
      description: language === "es"
        ? "IPINNOVATECH recibe premio por innovación en soluciones empresariales"
        : "IPINNOVATECH receives award for innovation in business solutions",
      date: "2024-03-05",
      category: language === "es" ? "Premios" : "Awards",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section id="news" className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[var(--primary-blue)] to-[var(--accent-blue)] bg-clip-text text-transparent">
            {language === "es" ? "Noticias" : "News"}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {language === "es"
              ? "Mantente al día con las últimas novedades de IPINNOVATECH"
              : "Stay up to date with the latest news from IPINNOVATECH"}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-black/40 border-white/10 hover:border-white/20 transition-colors duration-300 overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{item.category}</Badge>
                    <div className="flex items-center text-sm text-gray-400">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(item.date).toLocaleDateString()}
                    </div>
                  </div>
                  <CardTitle className="line-clamp-2 text-white">{item.title}</CardTitle>
                  <CardDescription className="text-gray-400 line-clamp-2">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <button className="text-[var(--primary-blue)] hover:text-[var(--accent-blue)] transition-colors duration-300">
                    {language === "es" ? "Leer más →" : "Read more →"}
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}