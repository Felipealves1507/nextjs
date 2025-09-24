import Image from "next/image";

interface Feature {
  title: string;
  description: string;
  imageUrl: string;
  listItems: string[];
}

const features: Feature[] = [
  {
    title: "Análise Avançada de Dados",
    description:
      "Obtenha insights profundos sobre seus dados com nossas poderosas ferramentas de análise. Visualize tendências, identifique padrões e tome decisões baseadas em dados com facilidade.",
    imageUrl: "/dashboard-mockup.png",
    listItems: [
      "Processamento de dados em tempo real",
      "Dashboards personalizáveis",
      "Análise preditiva",
    ],
  },
  {
    title: "Integração Sem Esforço",
    description:
      "Integre nosso produto sem esforço com suas ferramentas e fluxos de trabalho existentes. Nossa API flexível e conectores pré-construídos garantem uma transição suave.",
    imageUrl: "/dashboard-mockup.png",
    listItems: [
      "API Restful",
      "Conectores pré-construídos",
      "Documentação abrangente",
    ],
  },
  {
    title: "Segurança Aprimorada",
    description:
      "Proteja seus dados com nossos robustos recursos de segurança. Garanta a integridade e confidencialidade de suas informações com nossa criptografia avançada e controles de acesso.",
    imageUrl: "/dashboard-mockup.png",
    listItems: [
      "Criptografia avançada",
      "Autenticação de múltiplos fatores",
      "Controle de acesso baseado em funções",
    ],
  },
  {
    title: "Fluxo de Trabalho Simplificado",
    description:
      "Otimize seu fluxo de trabalho com nossa interface intuitiva e ferramentas de automação. Simplifique tarefas, reduza erros e aumente a produtividade.",
    imageUrl: "/dashboard-mockup.png",
    listItems: [
      "Interface intuitiva",
      "Automação de tarefas repetitivas",
      "Priorização de tarefas",
    ],
  },
];

export default function ProductFeatures() {
  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Aumente seu desempenho
          </h2>
        </div>
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col items-start justify-start mb-16 last:mb-0 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className="w-full md:w-1/2 mb-6 md:mb-0 flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300 transform rotate-3"></div>
                <Image
                  src={feature.imageUrl}
                  alt={feature.title}
                  width={600}
                  height={400}
                  className="relative rounded-2xl shadow-2xl border-4 border-white dark:border-gray-700 group-hover:scale-105 transition-transform duration-300"
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 md:px-8 text-center md:text-left">
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground mb-4">
                {feature.description}
              </p>
              <ul className="list-disc list-inside text-muted-foreground">
                {feature.listItems.map((item, itemIndex) => (
                  <li key={itemIndex} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
