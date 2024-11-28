"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Bot, Check, ChevronsUpDown, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { countries } from "@/lib/countries";
import { toast } from "@/components/ui/use-toast";

const formSchema = z.object({
  firstName: z.string().min(2, "First name is too short"),
  lastName: z.string().min(2, "Last name is too short"),
  country: z.string().min(2, "Country is required"),
  message: z.string().min(10, "Message is too short"),
});

type FormData = z.infer<typeof formSchema>;

export function VirtualAssistant() {
  const { language } = useLanguage();
  const [isMinimized, setIsMinimized] = useState(true);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue: setFormValue,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const selectedCountry = countries.find(country => country.code === value);
  const filteredCountries = countries.filter(country => 
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: language === "es" 
        ? "¡Mensaje Enviado con Éxito!" 
        : "Message Sent Successfully!",
      description: language === "es"
        ? "¡Gracias por contactarnos! Hemos recibido tu mensaje correctamente. Nuestro equipo especializado lo revisará y te responderá dentro de las próximas 24-48 horas hábiles."
        : "Thank you for reaching out! We have successfully received your message. Our specialized team will review it and respond within the next 24-48 business hours.",
      className: "bg-white border-2 border-[var(--primary-blue)] shadow-lg",
    });
    
    setIsSubmitting(false);
    reset();
    setValue("");
    setIsMinimized(true);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isMinimized ? (
        <Button
          onClick={() => setIsMinimized(false)}
          className="rounded-full w-16 h-16 bg-gradient-to-r from-[var(--primary-blue)] to-[var(--accent-blue)] hover:opacity-90 shadow-lg"
        >
          <Bot className="h-8 w-8 text-white" />
        </Button>
      ) : (
        <Card className="w-[350px] shadow-xl bg-white/95 backdrop-blur-sm">
          <CardHeader className="bg-gradient-to-r from-[var(--primary-blue)] to-[var(--accent-blue)] text-white">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg">
                {language === "es" ? "Asistente Virtual" : "Virtual Assistant"}
              </CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMinimized(true)}
                className="text-white hover:text-white/80"
              >
                ✕
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-4">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-2">
                <Input
                  {...register("firstName")}
                  placeholder={language === "es" ? "Nombre" : "First Name"}
                  className="bg-white text-gray-900"
                />
                {errors.firstName && (
                  <p className="text-sm text-red-500">{errors.firstName.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Input
                  {...register("lastName")}
                  placeholder={language === "es" ? "Apellido" : "Last Name"}
                  className="bg-white text-gray-900"
                />
                {errors.lastName && (
                  <p className="text-sm text-red-500">{errors.lastName.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={open}
                      className={cn(
                        "w-full justify-between bg-white border-gray-200",
                        "hover:bg-gray-50 transition-colors duration-200",
                        "focus:border-[var(--primary-blue)]",
                        selectedCountry && "text-gray-900 font-medium"
                      )}
                    >
                      <div className="flex items-center gap-2 truncate">
                        <Globe className={cn(
                          "h-4 w-4",
                          selectedCountry ? "text-[var(--primary-blue)]" : "text-gray-500"
                        )} />
                        <span className={cn(
                          "truncate",
                          selectedCountry ? "font-medium text-[var(--primary-blue)]" : "text-gray-500"
                        )}>
                          {selectedCountry ? selectedCountry.name : language === "es" ? "Seleccionar país" : "Select country"}
                        </span>
                      </div>
                      <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0 bg-white shadow-xl border border-gray-200">
                    <Command className="w-full">
                      <CommandInput 
                        placeholder={language === "es" ? "Buscar país..." : "Search country..."}
                        value={searchQuery}
                        onValueChange={setSearchQuery}
                        className="border-none focus:ring-0"
                      />
                      <CommandEmpty className="py-2 px-4 text-sm text-gray-500">
                        {language === "es" ? "No se encontró el país" : "No country found"}
                      </CommandEmpty>
                      <CommandGroup className="max-h-[200px] overflow-y-auto">
                        {filteredCountries.map((country) => (
                          <CommandItem
                            key={country.code}
                            value={country.code}
                            onSelect={(currentValue) => {
                              setValue(currentValue === value ? "" : currentValue);
                              setFormValue("country", currentValue);
                              setSearchQuery("");
                              setOpen(false);
                            }}
                            className={cn(
                              "flex items-center gap-2 py-2 px-4 cursor-pointer",
                              "hover:bg-gray-50 transition-colors duration-200",
                              value === country.code && "bg-gray-50"
                            )}
                          >
                            <Check
                              className={cn(
                                "h-4 w-4 text-[var(--primary-blue)]",
                                value === country.code ? "opacity-100" : "opacity-0"
                              )}
                            />
                            <span className={cn(
                              "font-medium",
                              value === country.code && "text-[var(--primary-blue)]"
                            )}>
                              {country.name}
                            </span>
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
                {errors.country && (
                  <p className="text-sm text-red-500 mt-1">{errors.country.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Textarea
                  {...register("message")}
                  placeholder={language === "es" ? "Mensaje" : "Message"}
                  className="min-h-[100px] bg-white text-gray-900"
                />
                {errors.message && (
                  <p className="text-sm text-red-500">{errors.message.message}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[var(--primary-blue)] to-[var(--accent-blue)] hover:opacity-90 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting 
                  ? (language === "es" ? "Enviando..." : "Sending...") 
                  : (language === "es" ? "Enviar" : "Send")}
              </Button>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  );
}