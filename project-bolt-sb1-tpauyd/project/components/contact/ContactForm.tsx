"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import ReCAPTCHA from "react-google-recaptcha";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const formSchema = z.object({
  firstName: z.string().min(2, "First name is too short"),
  lastName: z.string().min(2, "Last name is too short"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message is too short"),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const { language } = useLanguage();
  const [isVerified, setIsVerified] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCaptcha, setShowCaptcha] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    setShowCaptcha(true);
  };

  const handleVerify = async () => {
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
    setShowCaptcha(false);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: language === "es" 
        ? "¡Mensaje Enviado Exitosamente!" 
        : "Message Sent Successfully!",
      description: language === "es"
        ? "Gracias por contactarnos. Hemos recibido tu mensaje y nuestro equipo se pondrá en contacto contigo dentro de las próximas 24-48 horas hábiles. Tu consulta es importante para nosotros."
        : "Thank you for reaching out. We have received your message and our team will contact you within the next 24-48 business hours. Your inquiry is important to us.",
      className: "bg-white border-2 border-[var(--primary-blue)] shadow-lg",
    });
    
    setIsSubmitting(false);
    setIsVerified(false);
    reset();
  };

  return (
    <Card className="bg-white/80 border-gray-200">
      <CardHeader>
        <CardTitle>
          {language === "es" ? "Envíanos un mensaje" : "Send us a message"}
        </CardTitle>
        <CardDescription>
          {language === "es"
            ? "Completa el formulario y te responderemos pronto"
            : "Fill out the form and we'll get back to you soon"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Input
                {...register("firstName")}
                placeholder={language === "es" ? "Nombre" : "First Name"}
                className="bg-white/50"
              />
              {errors.firstName && (
                <p className="text-sm text-red-500 mt-1">{errors.firstName.message}</p>
              )}
            </div>
            <div>
              <Input
                {...register("lastName")}
                placeholder={language === "es" ? "Apellido" : "Last Name"}
                className="bg-white/50"
              />
              {errors.lastName && (
                <p className="text-sm text-red-500 mt-1">{errors.lastName.message}</p>
              )}
            </div>
          </div>
          
          <div>
            <Input
              {...register("email")}
              type="email"
              placeholder={language === "es" ? "Correo electrónico" : "Email"}
              className="bg-white/50"
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <Textarea
              {...register("message")}
              placeholder={language === "es" ? "Mensaje" : "Message"}
              className="bg-white/50 min-h-[150px]"
            />
            {errors.message && (
              <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>
            )}
          </div>

          <Button 
            type="submit"
            className="w-full bg-gradient-to-r from-[var(--primary-blue)] to-[var(--accent-blue)] hover:opacity-90 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting 
              ? (language === "es" ? "Enviando..." : "Sending...") 
              : (language === "es" ? "Enviar Mensaje" : "Send Message")}
          </Button>
        </form>

        <Dialog open={showCaptcha} onOpenChange={setShowCaptcha}>
          <DialogContent className="bg-white border-2 border-[var(--primary-blue)] shadow-xl max-w-md">
            <DialogHeader className="border-b border-gray-200 pb-4">
              <DialogTitle className="text-xl font-semibold text-gray-900">
                {language === "es" 
                  ? "Verificación de Seguridad" 
                  : "Security Verification"}
              </DialogTitle>
            </DialogHeader>
            <div className="flex flex-col items-center gap-6 py-6 px-4">
              <p className="text-base text-gray-700 text-center font-medium">
                {language === "es" 
                  ? "Por favor, completa la verificación para enviar tu mensaje"
                  : "Please complete the verification to send your message"}
              </p>
              <div className="transform hover:scale-[1.01] transition-transform">
                <ReCAPTCHA
                  sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                  onChange={(value) => setIsVerified(!!value)}
                  theme="light"
                  size="normal"
                />
              </div>
              <Button
                onClick={handleVerify}
                className={`w-full transition-all duration-300 ${
                  isVerified 
                    ? "bg-gradient-to-r from-[var(--primary-blue)] to-[var(--accent-blue)] hover:opacity-90" 
                    : "bg-gray-400"
                } text-white`}
                disabled={!isVerified || isSubmitting}
              >
                {language === "es" ? "Confirmar y Enviar" : "Confirm and Send"}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}