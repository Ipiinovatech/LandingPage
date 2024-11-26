"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function ProductsSection() {
  const { language } = useLanguage();

  const products = [
    {
      title: "EI Basic",
      price: language === "es" ? "Gratis" : "Free",
      features: language === "es" 
        ? ["Organización básica", "1GB almacenamiento", "Soporte comunitario"]
        : ["Basic organization", "1GB storage", "Community support"],
      highlighted: false
    },
    {
      title: "EI Pro",
      price: "$49/mes",
      features: language === "es"
        ? ["IA avanzada", "50GB almacenamiento", "Soporte prioritario", "Análisis personalizado"]
        : ["Advanced AI", "50GB storage", "Priority support", "Custom analysis"],
      highlighted: true
    },
    {
      title: "EI Enterprise",
      price: language === "es" ? "Personalizado" : "Custom",
      features: language === "es"
        ? ["Solución a medida", "Almacenamiento ilimitado", "Soporte 24/7", "API dedicada"]
        : ["Custom solution", "Unlimited storage", "24/7 support", "Dedicated API"],
      highlighted: false
    }
  ];

  return (
    <section id="products" className="section-padding">
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
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {language === "es"
              ? "Elige el plan que mejor se adapte a tus necesidades"
              : "Choose the plan that best fits your needs"}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`relative overflow-hidden ${
                product.highlighted 
                  ? "border-[var(--primary-blue)]" 
                  : "bg-black/40 border-white/10 hover:border-white/20"
              } transition-colors duration-300`}>
                {product.highlighted && (
                  <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2">
                    <Badge className="bg-[var(--primary-blue)]">
                      {language === "es" ? "Popular" : "Popular"}
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{product.title}</CardTitle>
                  <CardDescription className="text-3xl font-bold text-white">
                    {product.price}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mb-6">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-[var(--primary-blue)]" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-[var(--primary-blue)] to-[var(--accent-blue)] hover:opacity-90">
                    {language === "es" ? "Comenzar" : "Get Started"}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}