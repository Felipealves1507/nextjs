import Image from "next/image";

const teamMembers = [
  {
    name: "Felipe Alves",
    role: "CEO & Web Developer",
    description:
      "Felipe, jovem criador da Data Nexus, é especialista e fascinado por soluções.",
    image: "/team1.png",
  },
  {
    name: "Gustavo Faria",
    role: "Gerente de Projetos",
    description:
      "Gustavo, Gerente de Projetos da Data Nexus, fica responsável por gerenciar e coordenar as equipes em projetos estratégicos.",
    image: "/team2.png",
  },
  {
    name: "Rafael Marcolino",
    role: "Diretor Comercial",
    description:
      "Rafael, pai de família e diretor comercial, impulsiona a estratégia técnica da plataforma e da marca Data Nexus.",
    image: "/team3.png",
  },
  {
    name: "Lais Siqueira",
    role: "Analista de Suporte",
    description:
      "Lais, especialista em atendimento ao cliente, garante que nossos usuários tenham a melhor experiência possível.",
    image: "/team.png",
  },
];

export default function Team() {
  return (
    <section id="team" className="bg-gradient-to-br from-purple-50 via-white to-purple-100 dark:from-gray-900 dark:via-purple-900 dark:to-gray-800 relative overflow-hidden">
      {/* Padrão de fundo decorativo */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM2YjIxYTgiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItNWgtMnYzaDJ6bTAtMTF2Mi01aC0ydjNoMnptLTExIDBoMnYtM2gtMnYzem0wIDExaDJ2LTNoLTJ2M3pNMTQgMTRoMnYtMmgtMnYyem0wIDExaDJ2LTJoLTJ2MnptMTEgMGgydi0yaC0ydjJ6bTAgMTFoMnYtMmgtMnYyem0tMTEgMGgydi0yaC0ydjJ6bTAtMTFoMnYtMmgtMnYyem0yMiAwaDJ2LTJoLTJ2MnptMCAxMWgydi0yaC0ydjJ6bS0xMS0xMWgydi0yaC0ydjJ6bTExLTExaDJ2LTJoLTJ2MnptMCAxMWgydi0yaC0ydjJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
      
      {/* Elementos decorativos flutuantes */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-300/20 dark:bg-purple-500/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute top-32 right-20 w-16 h-16 bg-pink-300/20 dark:bg-pink-500/20 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-purple-400/15 dark:bg-purple-400/15 rounded-full blur-xl animate-pulse delay-2000" />
      <div className="absolute bottom-32 right-1/3 w-18 h-18 bg-purple-200/25 dark:bg-purple-600/25 rounded-full blur-xl animate-pulse delay-3000" />
      
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 relative z-10">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <div className="relative inline-block mb-6">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-300 dark:to-purple-500">
              Conheça Nossa Equipe
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-300 dark:to-purple-500 rounded-full" />
          </div>
          <p className="font-light text-purple-800 dark:text-purple-200 lg:mb-16 sm:text-xl">
            Desbloqueie o potencial do seu negócio com a Data Nexus
          </p>
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="items-center bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 sm:flex dark:bg-gray-800/90 dark:border-purple-500/30 border border-purple-200/50 dark:border-gray-600 overflow-hidden group hover:scale-105 hover:bg-white dark:hover:bg-gray-800"
            >
              <div className="relative p-4 sm:p-6">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                  <Image
                    className="relative w-full h-48 sm:h-56 sm:w-48 rounded-2xl object-cover border-4 border-white dark:border-gray-700 shadow-xl group-hover:scale-105 transition-transform duration-300"
                    src={member.image}
                    alt={`${member.name} Avatar`}
                    width={200}
                    height={200}
                  />
                </div>
              </div>
              <div className="p-6 flex-1">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2 hover:text-purple-600 transition-colors duration-200">
                    <a href="#" className="hover:underline">{member.name}</a>
                  </h3>
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                    {member.role}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  {member.description}
                </p>
                {/* Social media icons (unchanged) */}
                <ul className="flex space-x-4 sm:mt-0">
                  {/* ... (keep the existing social media icon code) ... */}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
