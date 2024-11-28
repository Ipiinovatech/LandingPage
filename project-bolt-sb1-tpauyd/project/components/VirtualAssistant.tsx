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
import { Bot, Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { countries } from "@/lib/countries";

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

  const {
    register,
    handleSubmit,
    setValue: setFormValue,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
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
                      className="w-full justify-between bg-white text-gray-900 border-input"
                    >
                      {value
                        ? countries.find((country) => country.code === value)?.name
                        : language === "es" ? "País" : "Country"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0">
                    <Command className="w-full">
                      <CommandInput placeholder={language === "es" ? "Buscar país..." : "Search country..."} />
                      <CommandEmpty>
                        {language === "es" ? "No se encontró el país" : "No country found"}
                      </CommandEmpty>
                      <CommandGroup className="max-h-[200px] overflow-y-auto">
                        {countries.map((country) => (
                          <CommandItem
                            key={country.code}
                            value={country.code}
                            onSelect={(currentValue) => {
                              setValue(currentValue === value ? "" : currentValue);
                              setFormValue("country", currentValue);
                              setOpen(false);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                value === country.code ? "opacity-100" : "opacity-0"
                              )}
                            />
                            {country.name}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
                {errors.country && (
                  <p className="text-sm text-red-500">{errors.country.message}</p>
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
              >
                {language === "es" ? "Enviar" : "Send"}
              </Button>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  );
}