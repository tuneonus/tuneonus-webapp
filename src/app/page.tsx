import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import AIAgents from "../components/sections/AIAgents";
import Solutions from "../components/sections/Solutions";
import FeaturedProjects from "../components/sections/FeaturedProjects";
import WhyTuneOnus from "../components/sections/WhyTuneOnus";
import Process from "../components/sections/Process";
import EngagementModels from "../components/sections/EngagementModels";
import TechStack from "../components/sections/TechStack";
import Team from "../components/sections/Team";
import Testimonials from "../components/sections/Testimonials";
import CTA from "../components/sections/CTA";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <main style={{ position: 'relative', zIndex: 1, background: 'transparent' }}>
      <Navbar />
      <Hero />
      <Services />
      <AIAgents />
      <Solutions />
      <FeaturedProjects />
      <WhyTuneOnus />
      <Process />
      <EngagementModels />
      <TechStack />
      <Team />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
