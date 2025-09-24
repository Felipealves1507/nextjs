import React from "react";
import { FaFingerprint, FaBolt, FaMoon, FaShieldAlt } from "react-icons/fa";

type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const features: FeatureProps[] = [
  {
    icon: <FaFingerprint className="text-blue-600 w-7 h-7" />,
    title: "Transferências Confiáveis",
    description:
      "Desfrute de transferências de dinheiro seguras e sem interrupções com nossa tecnologia de ponta, garantindo que suas transações estejam sempre seguras e eficientes.", 
  },
  {
    icon: <FaBolt className="text-orange-600 w-8 h-8" />,
    title: "Notificações Instantâneas",
    description:
      "Mantenha-se informado com notificações instantâneas sobre a atividade da sua conta, garantindo que você esteja sempre ciente de suas transações financeiras.",
  },
  {
    icon: <FaMoon className="text-green-600 w-8 h-8" />,
    title: "Interface Amigável",
    description:
      "Experimente nossa interface intuitiva e fácil de usar, projetada para proporcionar uma experiência de usuário suave e agradável para todas as suas necessidades de pagamento.",
  },
  {
    icon: <FaMoon className="text-purple-600 w-8 h-8" />,
    title: "Suporte 24/7",
    description:
      "Obtenha assistência a qualquer momento com nossa equipe de suporte dedicada 24/7, sempre pronta para ajudá-lo com quaisquer problemas ou dúvidas que você possa ter.",
  },
  {
    icon: (
      <svg
        className="text-gray-600 w-9 h-9"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M15 10l4.553-2.276A2 2 0 0122 9.618v4.764a2 2 0 01-2.447 1.894L15 14m0-4v8m0-8L9.447 7.724A2 2 0 008 9.618v4.764a2 2 0 001.553 1.894L15 14m0-4H9m6 0v8m0-8L9 14"
        />
      </svg>
    ),
    title: "Planos Personalizáveis",
    description:
      "Escolha entre uma variedade de planos e personalize-os para atender às suas necessidades específicas de negócios, garantindo que você pague apenas pelo que usa.",
  },
  {
    icon: <FaShieldAlt className="text-yellow-600 w-8 h-8" />,
    title: "Segurança Avançada",
    description:
      "Proteja suas transações com nossos protocolos de segurança avançados e criptografia, garantindo que seus dados estejam sempre seguros.",
  },
];

const commonStyle = "relative flex items-center justify-center mx-auto";

export default function Feature() {
  return (
    <section id="features" className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl lg:text-center flex flex-col justify-center items-center pb-20">
          <h2 className="text-base font-semibold leading-7 text-purple-100 bg-purple-600 px-3 rounded-lg uppercase mb-4 lg:mb-8">
            Principais Funcionalidades
          </h2>
          <h3 className="lg:text-7xl text-4xl md:text-5xl font-bold tracking-tight text-gray-900 text-center">
            Solução
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-blue-800 to-gray-900">
              &nbsp;Aprimorada
            </span>
          </h3>
          <p className="mt-6 text-md text-gray-600 max-w-lg text-center">
          Descubra as características excepcionais dos nossos serviços projetados para suas necessidades.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 text-center sm:grid-cols-2 md:grid-cols-3 lg:gap-y-16">
          {features.map((feature, index) => (
            <div key={index}>
              <div className={commonStyle}>
                <div className="bg-gray-100 w-16 h-16 flex items-center justify-center rounded-full">
                  {feature.icon}
                </div>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                {feature.title}
              </h3>
              <p className="mt-4 text-base text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
