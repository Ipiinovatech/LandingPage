"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

export function BlogSection() {
  const { language } = useLanguage();

  const posts = [
    {
      title: language === "es" 
        ? "El Futuro del Second Brain Digital"
        : "The Future of Digital Second Brain",
      description: language === "es"
        ? "Explorando las últimas innovaciones en gestión del conocimiento digital"
        : "Exploring the latest innovations in digital knowledge management",
      date: "2024-03-15",
      category: language === "es" ? "Innovación" : "Innovation",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
    },
    {
      title: language === "es"
        ? "IA en la Gestión de Datos"
        : "AI in Data Management",
      description: language === "es"
        ? "Cómo la IA está revolucionando la forma en que organizamos la información"
        : "How AI is revolutionizing the way we organize information",
      date: "2024-03-10",
      category: language === "es" ? "Tecnología" : "Technology",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80"
    },
    {
      title: language === "es"
        ? "Seguridad en la Era Digital"
        : "Security in the Digital Age",
      description: language === "es"
        ? "Mejores prácticas para proteger tu información digital"
        : "Best practices for protecting your digital information",
      date: "2024-03-05",
      category: language === "es" ? "Seguridad" : "Security",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section id="blog" className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[var(--primary-blue)] to-[var(--accent-blue)] bg-clip-text text-transparent">
            {language === "es" ? "Blog" : "Blog"}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {language === "es"
              ? "Últimas noticias y artículos sobre tecnología e innovación"
              : "Latest news and articles about technology and innovation"}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
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
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center text-sm text-gray-400">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="text-gray-400 line-clamp-2">
                    {post.description}
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