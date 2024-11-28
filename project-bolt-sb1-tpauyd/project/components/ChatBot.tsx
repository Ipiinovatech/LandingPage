"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import ReCAPTCHA from "react-google-recaptcha";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Bot, X, Shield } from "lucide-react";
import { countries } from "@/lib/countries";

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters"
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters"
  }),
  country: z.string().min(2, {
    message: "Please select a country"
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters"
  }),
});

type FormData = z.infer<typeof formSchema>;

export function ChatBot() {
  const { language } = useLanguage();
  const [isMinimized, setIsMinimized] = useState(true);
  const [isVerified, setIsVerified] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      country: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    if (!isVerified) {
      toast({
        title: language === "es" ? "Error" : "Error",
        description: language === "es" 
          ? "Por favor, verifica que no eres un robot" 
          : "Please verify that you're not a robot",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: language === "es" 
        ? "¡Mensaje Enviado con Éxito!" 
        : "Message Sent Successfully!",
      description: language === "es"
        ? "Gracias por contactarnos. Te responderemos dentro de las próximas 24-48 horas hábiles."
        : "Thank you for contacting us. We will respond within the next 24-48 business hours.",
      className: "bg-white border-2 border-[var(--primary-blue)] shadow-lg",
    });
    
    setIsSubmitting(false);
    setIsVerified(false);
    reset();
    setIsMinimized(true);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isMinimized ? (
        <Button
          onClick={() => setIsMinimized(false)}
          className="rounded-full w-16 h-16 bg-gradient-to-r from-[var(--primary-blue)] to-[var(--accent-blue)] hover:opacity-90 shadow-lg group"
        >
          <Bot className="h-8 w-8 text-white transition-transform group-hover:scale-110" />
        </Button>
      ) : (
        <Card className="w-[380px] shadow-xl bg-white/95 backdrop-blur-sm border-2 border-[var(--primary-blue)]">
          <CardHeader className="bg-gradient-to-r from-[var(--primary-blue)] to-[var(--accent-blue)] text-white p-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">
                {language === "es" ? "Asistente Virtual" : "Virtual Assistant"}
              </h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMinimized(true)}
                className="text-white hover:text-white/80"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-4">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Input
                    {...register("firstName")}
                    placeholder={language === "es" ? "Nombre" : "First Name"}
                    className="bg-white/50"
                  />
                  {errors.firstName && (
                    <p className="text-sm text-red-500 mt-1">
                      {language === "es" ? "Nombre es requerido" : errors.firstName.message}
                    </p>
                  )}
                </div>
                <div>
                  <Input
                    {...register("lastName")}
                    placeholder={language === "es" ? "Apellido" : "Last Name"}
                    className="bg-white/50"
                  />
                  {errors.lastName && (
                    <p className="text-sm text-red-500 mt-1">
                      {language === "es" ? "Apellido es requerido" : errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <Select onValueChange={(value) => setValue("country", value)}>
                  <SelectTrigger className="w-full bg-white">
                    <SelectValue placeholder={language === "es" ? "Seleccionar país" : "Select country"} />
                  </SelectTrigger>
                  <SelectContent className="bg-white max-h-[200px] overflow-y-auto">
                    {countries.map((country) => (
                      <SelectItem 
                        key={country.code} 
                        value={country.code}
                        className="cursor-pointer hover:bg-gray-100"
                      >
                        {country.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.country && (
                  <p className="text-sm text-red-500 mt-1">
                    {language === "es" ? "País es requerido" : errors.country.message}
                  </p>
                )}
              </div>

              <div>
                <Textarea
                  {...register("message")}
                  placeholder={language === "es" ? "Mensaje" : "Message"}
                  className="bg-white/50 min-h-[120px] resize-none"
                />
                {errors.message && (
                  <p className="text-sm text-red-500 mt-1">
                    {language === "es" ? "Mensaje es requerido" : errors.message.message}
                  </p>
                )}
              </div>

              <div className="flex justify-center">
                <ReCAPTCHA
                  sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                  onChange={(value) => setIsVerified(!!value)}
                  theme="light"
                  size="normal"
                />
              </div>

              <Button 
                type="submit"
                className={`w-full group relative ${
                  !isVerified 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-[var(--primary-blue)] to-[var(--accent-blue)] hover:opacity-90'
                } text-white transition-all duration-300`}
                disabled={!isVerified || isSubmitting}
              >
                <span className="flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    language === "es" ? "Enviando..." : "Sending..."
                  ) : (
                    <>
                      {!isVerified && <Shield className="h-4 w-4" />}
                      {language === "es" ? "Enviar Mensaje" : "Send Message"}
                    </>
                  )}
                </span>
              </Button>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  );
}