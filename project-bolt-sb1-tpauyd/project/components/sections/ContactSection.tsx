"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export function ContactSection() {
  const { language } = useLanguage();

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-white" />,
      title: language === "es" ? "Email" : "Email",
      info: "contact@ipinnovatech.com"
    },
    {
      icon: <Phone className="h-6 w-6 text-white" />,
      title: language === "es" ? "Teléfono" : "Phone",
      info: "+1 (555) 123-4567"
    },
    {
      icon: <MapPin className="h-6 w-6 text-white" />,
      title: language === "es" ? "Ubicación" : "Location",
      info: language === "es" ? "Silicon Valley, CA" : "Silicon Valley, CA"
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[var(--primary-blue)] to-[var(--accent-blue)] bg-clip-text text-transparent">
            {language === "es" ? "Contacto" : "Contact"}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === "es"
              ? "¿Tienes alguna pregunta? Estamos aquí para ayudarte"
              : "Have any questions? We're here to help"}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="bg-white/80 border-gray-200">
              <CardHeader>
                <CardTitle>
                  {language === "es" ? "Envíanos un mensaje" : "Send us a message"}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {language === "es"
                    ? "Completa el formulario y te responderemos pronto"
                    : "Fill out the form and we'll get back to you soon"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {contactInfo.map((item, index) => (
              <Card
                key={index}
                className="bg-white/80 border-gray-200 hover:border-[var(--primary-blue)] transition-colors duration-300"
              >
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[var(--primary-blue)] to-[var(--accent-blue)] p-2 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-gray-600">{item.info}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}