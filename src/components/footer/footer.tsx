import Logo from "@/components/logo/logo";
import SocialLinks from "@/components/footer/social-links";

export default function Footer() {
  return (
    <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
      <div className="container p-8">
        <div className="grid lg:grid-cols-6 gap-8">
          {/*left*/}
          <div className="lg:col-span-2">
            <a href="/" className="inline-block hover:opacity-80 transition-opacity">
              <Logo />
            </a>
            <p className="py-4 pr-4">
              Libere o potencial do seu negócio com as soluções da Data Nexus.
            </p>
            <SocialLinks />
          </div>
          {/*right*/}
          <div className="lg:col-span-4">
            <div className="md:flex justify-between">
              {/*menu-col-1*/}
              <div className="pb-8 md:pb-0">
                <h3 className="text-lg font-semibold">Company</h3>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Sobre Nós
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Equipe
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Carreiras
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Contato
                    </a>
                  </li>
                </ul>
              </div>
              {/*menu-col-2*/}
              <div className="pb-8 md:pb-0">
                <h3 className="text-lg font-semibold">Service</h3>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Serviços
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Projetos
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Portfólio
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Documentação
                    </a>
                  </li>
                </ul>
              </div>
              {/*menu-col-3*/}
              <div className="pb-8 md:pb-0">
                <h3 className="text-lg font-semibold">Legal</h3>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Política de Privacidade
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Termos e Condições
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Licenciamento
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-8" />
        <div className="text-center text-sm">
        @2025 <a href="https://www.webdesignhot.com/"></a> Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
