"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const { language } = useLanguage();

  const faqs = [
    {
      question: language === "es" 
        ? "¿Qué servicios ofrece IPINNOVATECH?"
        : "What services does IPINNOVATECH offer?",
      answer: language === "es"
        ? "IPINNOVATECH ofrece servicios de IA, desarrollo de software, automatización de procesos, y soluciones tecnológicas personalizadas para empresas."
        : "IPINNOVATECH offers AI services, software development, process automation, and customized technological solutions for businesses."
    },
    {
      question: language === "es"
        ? "¿Cómo puedo empezar a trabajar con IPINNOVATECH?"
        : "How can I start working with IPINNOVATECH?",
      answer: language === "es"
        ? "Puedes contactarnos a través de nuestro formulario de contacto o llamarnos directamente. Programaremos una consulta inicial para discutir tus necesidades."
        : "You can contact us through our contact form or call us directly. We'll schedule an initial consultation to discuss your needs."
    },
    {
      question: language === "es"
        ? "¿Qué tecnologías utilizan?"
        : "What technologies do you use?",
      answer: language === "es"
        ? "Utilizamos las últimas tecnologías en IA, cloud computing, y desarrollo de software, adaptándonos a las necesidades específicas de cada proyecto."
        : "We use the latest technologies in AI, cloud computing, and software development, adapting to the specific needs of each project."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[var(--primary-blue)] to-[var(--accent-blue)] bg-clip-text text-transparent">
            {language === "es" ? "Preguntas Frecuentes" : "FAQ"}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === "es"
              ? "Encuentra respuestas a las preguntas más comunes"
              : "Find answers to common questions"}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}