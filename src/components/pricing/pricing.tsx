"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Bronze",
      description: "Perfeito para pequenas equipes",
      monthlyPrice: 49,
      yearlyPrice: 490,
      features: [
        "Até 5 usuários",
        "10GB de armazenamento",
        "Relatórios básicos",
        "Acesso á API",
        "Suporte por e-mail 24/7",
      ],
    },
    {
      name: "Prata",
      description: "Ideal para empresas em crescimento",
      monthlyPrice: 99,
      yearlyPrice: 990,
      features: [
        "Até 25 usuários",
        "50GB de armazenamento",
        "Relatórios avançados",
        "API dedicada",
        "Suporte por chat 24/7",
        "Recursos de segurança aprimorados",
      ],
    },
    {
      name: "Ouro",
      description: "Feito para grandes organizações",
      monthlyPrice: 199,
      yearlyPrice: 1990,
      features: [
        "Até 100 usuários",
        "200GB de armazenamento",
        "Relatórios personalizados",
        "Suporte dedicado à API",
        "Suporte telefônico 24/7",
        "Recursos avançados de segurança",
        "Integrações personalizadas",
      ],
    },
  ];

  return (
    <section
      id="pricing"
      className="w-full py-8 md:py-12 lg:py-24 bg-gradient-to-br from-purple-50 via-white to-purple-100 dark:from-gray-900 dark:via-purple-900 dark:to-gray-800 relative overflow-hidden"
    >
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM2YjIxYTgiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItNWgtMnYzaDJ6bTAtMTF2Mi01aC0ydjNoMnptLTExIDBoMnYtM2gtMnYzem0wIDExaDJ2LTNoLTJ2M3pNMTQgMTRoMnYtMmgtMnYyem0wIDExaDJ2LTJoLTJ2MnptMTEgMGgydi0yaC0ydjJ6bTAgMTFoMnYtMmgtMnYyem0tMTEgMGgydi0yaC0ydjJ6bTAtMTFoMnYtMmgtMnYyem0yMiAwaDJ2LTJoLTJ2MnptMCAxMWgydi0yaC0ydjJ6bS0xMS0xMWgydi0yaC0ydjJ6bTExLTExaDJ2LTJoLTJ2MnptMCAxMWgydi0yaC0ydjJ6Ii0+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
      
      {/* Círculos flutuantes animados */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-purple-300/20 dark:bg-purple-500/20 rounded-full blur-xl animate-pulse delay-0" />
      <div className="absolute top-40 right-20 w-24 h-24 bg-pink-300/20 dark:bg-pink-500/20 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-purple-400/15 dark:bg-purple-400/15 rounded-full blur-xl animate-pulse delay-2000" />
      <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-purple-200/25 dark:bg-purple-600/25 rounded-full blur-xl animate-pulse delay-3000" />
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="relative inline-block">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-300 dark:to-purple-500">
              Escolha o Plano Certo para Você
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-300 dark:to-purple-500 rounded-full animate-pulse" />
          </div>
          <p className="max-w-[900px] text-sm sm:text-base text-purple-700 dark:text-purple-200 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
            Experimente todos os recursos gratuitamente durante o período de
            avaliação de 14 dias. 
          </p>
        </div>
        <div className="flex items-center justify-center mt-6 mb-8 space-x-2">
          <span className={`text-sm font-medium transition-colors duration-300 ${!isYearly ? 'text-purple-600 dark:text-purple-400' : 'text-gray-500'}`}>
            Mensal
          </span>
          <Switch
            checked={isYearly}
            onCheckedChange={setIsYearly}
            aria-label="Toggle yearly pricing"
            className="data-[state=checked]:bg-purple-600"
          />
          <span className={`text-sm font-medium transition-colors duration-300 ${isYearly ? 'text-purple-600 dark:text-purple-400' : 'text-gray-500'}`}>
            Anual
          </span>
          <span className="ml-2 text-xs sm:text-sm text-green-500 font-medium bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full animate-bounce">
            Economize 20%
          </span>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name} 
              className={`flex flex-col relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/90 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 group ${
                index === 1 ? 'ring-2 ring-purple-500 lg:-mt-4 lg:mb-4' : ''
              }`}
            >
              {/* Efeito de gradiente animado no fundo */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Badge "Popular" para o plano do meio */}
              {index === 1 && (
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse z-20">
                  🔥 POPULAR
                </div>
              )}
              
              {/* Brilho decorativo */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className={`p-4 md:p-6 relative z-10 ${index === 1 ? 'pt-8 md:pt-10' : ''}`}>
                <CardTitle className="text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-300 dark:to-purple-500 group-hover:from-purple-500 group-hover:to-pink-600 transition-all duration-300">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-sm text-purple-600 dark:text-purple-300 group-hover:text-purple-500 transition-colors duration-300">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 flex-1 p-4 md:p-6 relative z-10">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  <span className="relative inline-block">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    {isYearly && (
                      <span className="absolute -top-4 -right-8 text-xs bg-green-500 text-white px-2 py-1 rounded-full animate-bounce">
                        -20%
                      </span>
                    )}
                  </span>
                  <span className="text-xs md:text-sm font-normal text-purple-500 dark:text-purple-400">
                    /{isYearly ? "ano" : "mês"}
                  </span>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm">
                  {plan.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex} 
                      className="flex items-center group/item hover:bg-purple-50 dark:hover:bg-purple-900/20 p-2 rounded-lg transition-all duration-300"
                      style={{
                        animationDelay: `${featureIndex * 100}ms`
                      }}
                    >
                      <div className="relative mr-3">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0 group-hover/item:text-green-400 group-hover/item:scale-110 transition-all duration-300" />
                        <div className="absolute inset-0 bg-green-500/20 rounded-full scale-0 group-hover/item:scale-150 transition-transform duration-300" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 group-hover/item:text-purple-600 dark:group-hover/item:text-purple-400 transition-colors duration-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-4 md:p-6 relative z-10">
                <Button className={`w-full rounded-full text-sm md:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-lg relative overflow-hidden group/btn ${
                  index === 1 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg' 
                    : 'bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900'
                }`}>
                  {/* Efeito de brilho no botão */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                  
                  <span className="relative z-10 font-semibold">
                    {index === 1 ? '🚀 Começar Agora' : 'Começar'}
                  </span>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
