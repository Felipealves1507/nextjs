"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
} from "lucide-react";

export default function Contact() {
  const [isHovered, setIsHovered] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "Primeiro nome é obrigatório";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Sobrenome é obrigatório";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Mensagem é obrigatória";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof typeof formData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
    
    // Limpar erro do campo quando o usuário começar a digitar
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ""
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simular envio da API (substitua por sua lógica de envio real)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitted(true);
      
      // Resetar formulário após 3 segundos
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
      }, 3000);
      
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 overflow-hidden relative"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM2YjIxYTgiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djItNWgtMnYzaDJ6bTAtMTF2Mi01aC0ydjNoMnptLTExIDBoMnYtM2gtMnYzem0wIDExaDJ2LTNoLTJ2M3pNMTQgMTRoMnYtMmgtMnYyem0wIDExaDJ2LTJoLTJ2MnptMTEgMGgydi0yaC0ydjJ6bTAgMTFoMnYtMmgtMnYyem0tMTEgMGgydi0yaC0ydjJ6bTAtMTFoMnYtMmgtMnYyem0yMiAwaDJ2LTJoLTJ2MnptMCAxMWgydi0yaC0ydjJ6bS0xMS0xMWgydi0yaC0ydjJ6bTExLTExaDJ2LTJoLTJ2MnptMCAxMWgydi0yaC0ydjJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.7))] dark:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djItNWgtMnYzaDJ6bTAtMTF2Mi01aC0ydjNoMnptLTExIDBoMnYtM2gtMnYzem0wIDExaDJ2LTNoLTJ2M3pNMTQgMTRoMnYtMmgtMnYyem0wIDExaDJ2LTJoLTJ2MnptMTEgMGgydi0yaC0ydjJ6bTAgMTFoMnYtMmgtMnYyem0tMTEgMGgydi0yaC0ydjJ6bTAtMTFoMnYtMmgtMnYyem0yMiAwaDJ2LTJoLTJ2MnptMCAxMWgydi0yaC0ydjJ6bS0xMS0xMWgydi0yaC0ydjJ6bTExLTExaDJ2LTJoLTJ2MnptMCAxMWgydi0yaC0ydjJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
      <div className="container px-8 md:px-6 relative">
        <div className="grid gap-6 lg:grid-cols-2 items-center">
          <div className="space-y-8 px-4 pb-10 md:pb-0">
            <div className="relative inline-block">
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-300 dark:to-purple-500">
                Entre em Contato
              </h2>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-300 dark:to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out" />
            </div>
            <p className="max-w-[600px] text-purple-800 dark:text-purple-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Estamos aqui para ajudar e responder a qualquer dúvida que você possa ter. Estamos
              ansiosos para ouvir de você e criar algo incrível
              juntos.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 group">
                <div className="bg-white dark:bg-purple-900 rounded-full p-3 shadow-md group-hover:shadow-lg transition-shadow duration-300">
                  <Mail className="h-6 w-6 text-purple-600 dark:text-purple-300" />
                </div>
                <span className="text-purple-800 dark:text-purple-200 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors duration-300">
                  data.nexus@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="bg-white dark:bg-purple-900 rounded-full p-3 shadow-md group-hover:shadow-lg transition-shadow duration-300">
                  <Phone className="h-6 w-6 text-purple-600 dark:text-purple-300" />
                </div>
                <span className="text-purple-800 dark:text-purple-200 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors duration-300">
                  +55 (24) 123-4567
                </span>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="bg-white dark:bg-purple-900 rounded-full p-3 shadow-md group-hover:shadow-lg transition-shadow duration-300">
                  <MapPin className="h-6 w-6 text-purple-600 dark:text-purple-300" />
                </div>
                <span className="text-purple-800 dark:text-purple-200 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors duration-300">
                   Rua Getúlio Vargas, Valença RJ, Brasil
                </span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl transform -rotate-6 scale-105 opacity-10 blur-2xl animate-pulse" />
            <div className="relative bg-white dark:bg-purple-900 rounded-2xl shadow-xl p-6 md:p-8 space-y-6">
              {isSubmitted ? (
                <div className="text-center space-y-6 py-8">
                  <div className="flex justify-center">
                    <div className="relative">
                      <CheckCircle className="h-16 w-16 text-green-500 animate-bounce" />
                      <div className="absolute inset-0 h-16 w-16 rounded-full bg-green-500 opacity-20 animate-ping" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-green-600 dark:text-green-400">
                      Mensagem Enviada com Sucesso! 🎉
                    </h3>
                    <p className="text-purple-700 dark:text-purple-300 text-lg">
                      Obrigado por entrar em contato conosco!
                    </p>
                    <p className="text-purple-600 dark:text-purple-400 text-sm">
                      Recebemos sua mensagem e nossa equipe entrará em contato em breve.
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-semibold text-purple-800 dark:text-purple-100">
                    Envie-nos uma mensagem
                  </h3>
                  <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="first-name"
                      className="text-sm font-medium text-purple-700 dark:text-purple-300"
                    >
                      Primeiro nome
                    </label>
                    <Input
                      id="first-name"
                      placeholder="Digite seu nome"
                      value={formData.firstName}
                      onChange={handleInputChange('firstName')}
                      className={`rounded-lg transition-colors duration-200 ${
                        errors.firstName 
                          ? "border-red-500 dark:border-red-400 focus:border-red-500 dark:focus:border-red-400" 
                          : "border-purple-300 dark:border-purple-700 focus:border-purple-500 dark:focus:border-purple-400"
                      }`}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 dark:text-red-400 text-xs mt-1">{errors.firstName}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="last-name"
                      className="text-sm font-medium text-purple-700 dark:text-purple-300"
                    >
                      Sobrenome
                    </label>
                    <Input
                      id="last-name"
                      placeholder="Digite seu sobrenome"
                      value={formData.lastName}
                      onChange={handleInputChange('lastName')}
                      className={`rounded-lg transition-colors duration-200 ${
                        errors.lastName 
                          ? "border-red-500 dark:border-red-400 focus:border-red-500 dark:focus:border-red-400" 
                          : "border-purple-300 dark:border-purple-700 focus:border-purple-500 dark:focus:border-purple-400"
                      }`}
                    />
                    {errors.lastName && (
                      <p className="text-red-500 dark:text-red-400 text-xs mt-1">{errors.lastName}</p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-purple-700 dark:text-purple-300"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    placeholder="Digite seu email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange('email')}
                    className={`rounded-lg transition-colors duration-200 ${
                      errors.email 
                        ? "border-red-500 dark:border-red-400 focus:border-red-500 dark:focus:border-red-400" 
                        : "border-purple-300 dark:border-purple-700 focus:border-purple-500 dark:focus:border-purple-400"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 dark:text-red-400 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-purple-700 dark:text-purple-300"
                  >
                    Mensagem
                  </label>
                  <Textarea
                    className={`min-h-[120px] rounded-lg transition-colors duration-200 ${
                      errors.message 
                        ? "border-red-500 dark:border-red-400 focus:border-red-500 dark:focus:border-red-400" 
                        : "border-purple-300 dark:border-purple-700 focus:border-purple-500 dark:focus:border-purple-400"
                    }`}
                    id="message"
                    placeholder="Digite sua mensagem aqui..."
                    value={formData.message}
                    onChange={handleInputChange('message')}
                  />
                  {errors.message && (
                    <p className="text-red-500 dark:text-red-400 text-xs mt-1">{errors.message}</p>
                  )}
                </div>
                <Button
                  className={`w-full rounded-lg bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white transition-all duration-300 transform hover:scale-105 ${
                    isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                  }`}
                  type="submit"
                  disabled={isSubmitting}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <span className="mr-2">
                    {isSubmitting ? "Enviando..." : "Enviar mensagem"}
                  </span>
                  <Send
                    className={`h-4 w-4 transition-transform duration-300 ${
                      isHovered && !isSubmitting ? "translate-x-1" : ""
                    } ${isSubmitting ? "animate-pulse" : ""}`}
                  />
                </Button>
              </form>
              </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
