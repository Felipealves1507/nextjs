import Image from "next/image";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Hero from "@/components/hero/hero";
import Feature from "@/components/feature/feature";
import Pricing from "@/components/pricing/pricing";
import Team1 from "@/components/team/team";
import Contact from "@/components/contact/contact";
import Section from "@/components/section/section";

export default function Home() {
  return (
    <>
      <div className="relative">
        <Header />
        <Hero />
      </div>
      <Feature />
      <Section />
      <Team1 />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}
