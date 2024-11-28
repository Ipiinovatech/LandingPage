"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { language } = useLanguage();

  const socialLinks = [
    {
      icon: <Facebook className="h-5 w-5" />,
      href: "#",
      label: "Facebook"
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      href: "#",
      label: "Instagram"
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      href: "#",
      label: "X (Twitter)"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "#",
      label: "LinkedIn"
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      href: "#",
      label: "WhatsApp"
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="section-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">IPINNOVATECH</h3>
            <p className="text-gray-400">
              {language === "es"
                ? "Transformando el futuro con tecnología inteligente"
                : "Transforming the future with intelligent technology"}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">
              {language === "es" ? "Contacto" : "Contact"}
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>info@ipinnovatech.co</li>
              <li>57 (2) 375 8188</li>
              <li>Calle 15a # 103 - 20,<br />Ciudad Jardín, Cali – Colombia</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="text-xl font-bold mb-4">
              {language === "es" ? "Síguenos" : "Follow Us"}
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-800 hover:bg-[var(--primary-blue)] transition-colors duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400"
        >
          <p>
            © {new Date().getFullYear()} IPINNOVATECH. 
            {language === "es"
              ? " Todos los derechos reservados."
              : " All rights reserved."}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}