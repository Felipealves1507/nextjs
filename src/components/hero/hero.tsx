import { FlipWords } from "@/components/ui/flip-words";
import LogoClouds from "@/components/logo-clouds/logo-clouds";
import CtaButton from "@/components/button/cta-button";
import Image from "next/image";

export default function Hero() {




  return (
    <section className="bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 text-primary-foreground">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center pt-32 md:pt-52">
          <h1 className="mb-4 text-4xl text-center font-extrabold tracking-tight leading-relaxed text-gray-900 md:text-3xl lg:text-5xl">
            Nós criamos soluções para um mundo melhor!

          </h1>
          <p className="text-lg md:text-xl text-gray-900">
            Desbloqueie o Potencial do Seu Negócio
          </p>

          <div className="flex flex-row items-center justify-center mt-16">
            <CtaButton text={'Teste Free'} />
          </div>
          <LogoClouds />
          <div className="flex justify-center mt-12">
            <div className="relative group max-w-5xl">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-t-3xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500 transform -rotate-1"></div>
              <Image
                src="/dashboard.png"
                alt="Dashboard image"
                width={1500}
                height={1500}
                className="relative rounded-t-3xl shadow-2xl border-8 border-white/20 backdrop-blur-sm group-hover:scale-[1.02] transition-transform duration-500"
                style={{ width: "auto", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
