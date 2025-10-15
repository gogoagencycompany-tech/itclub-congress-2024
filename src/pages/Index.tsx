import Hero from "@/components/Hero";
import About from "@/components/About";
import Agenda from "@/components/Agenda";
import Achievements from "@/components/Achievements";
import PastActivities from "@/components/PastActivities";
import Vision from "@/components/Vision";
import UpcomingActivities from "@/components/UpcomingActivities";
import Leadership from "@/components/Leadership";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Agenda />
      <Achievements />
      <PastActivities />
      <Vision />
      <UpcomingActivities />
      <Leadership />
      <Footer />
    </main>
  );
};

export default Index;
