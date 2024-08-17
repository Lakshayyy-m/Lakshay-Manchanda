import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Jobs from "@/components/Jobs";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Image
        src="/seperator.svg"
        alt="seperator"
        width={900}
        height={150}
        className="w-screen"
      />
      <TechStack />
      <Jobs />
      <Projects />

      <Image
        src="/wave.svg"
        alt="wave"
        width={900}
        height={150}
        className="w-screen my-16"
      />
      <Contact />
      <Footer />
    </>
  );
}
