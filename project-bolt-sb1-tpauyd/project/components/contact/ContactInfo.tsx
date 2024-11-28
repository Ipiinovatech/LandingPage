"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";

export function ContactInfo() {
  const { language } = useLanguage();

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-white" />,
      title: language === "es" ? "Correo" : "Email",
      info: "info@ipinnovatech.co"
    },
    {
      icon: <Phone className="h-6 w-6 text-white" />,
      title: language === "es" ? "Teléfono" : "Phone",
      info: "57 (2) 375 8188"
    },
    {
      icon: <MapPin className="h-6 w-6 text-white" />,
      title: language === "es" ? "Ubicación" : "Location",
      info: "Calle 15a # 103 - 20, Ciudad Jardín, Cali – Colombia"
    }
  ];

  return (
    <div className="space-y-4">
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
    </div>
  );
}