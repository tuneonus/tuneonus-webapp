import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Solutions from "../components/sections/Solutions";
import FeaturedProjects from "../components/sections/FeaturedProjects";
import WhyTuneOnus from "../components/sections/WhyTuneOnus";
import Process from "../components/sections/Process";
import TechStack from "../components/sections/TechStack";
import Testimonials from "../components/sections/Testimonials";
import CTA from "../components/sections/CTA";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Solutions />
      <FeaturedProjects />
      <WhyTuneOnus />
      <Process />
      <TechStack />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
