import Hero from "@/components/Hero";
import About from "@/components/About";
import Agenda from "@/components/Agenda";
import Achievements from "@/components/Achievements";
import Vision from "@/components/Vision";
import Leadership from "@/components/Leadership";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Agenda />
      <Achievements />
      <Vision />
      <Leadership />
      <Footer />
    </main>
  );
};

export default Index;
