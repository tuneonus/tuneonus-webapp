import type { Metadata } from "next";
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
import CTA from "../components/sections/CTA";
import Contact from "../components/sections/Contact";
import FAQ from "../components/sections/FAQ";
import Footer from "../components/layout/Footer";
import { JsonLd } from "../components/seo/JsonLd";
import { absoluteUrl, siteConfig } from "../lib/site";
import { homeFaqs, serviceNames } from "../content/home";
import ParticleBackgroundClient from "../components/three/ParticleBackgroundClient";

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <main style={{ position: 'relative', zIndex: 1, background: 'transparent', overflowX: 'hidden', width: '100%' }}>
      <ParticleBackgroundClient />
      <JsonLd data={[
        {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          '@id': `${siteConfig.url}/#organization`,
          name: siteConfig.name,
          url: siteConfig.url,
          logo: absoluteUrl('/brand-logo.svg'),
          email: `mailto:${siteConfig.email}`,
        },
        {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          '@id': `${siteConfig.url}/#website`,
          name: siteConfig.name,
          url: siteConfig.url,
          publisher: { '@id': `${siteConfig.url}/#organization` },
          inLanguage: 'en',
        },
        ...serviceNames.map((name) => ({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name,
          provider: { '@id': `${siteConfig.url}/#organization` },
          url: `${siteConfig.url}/#services`,
        })),
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: homeFaqs.map(({ question, answer }) => ({
            '@type': 'Question',
            name: question,
            acceptedAnswer: { '@type': 'Answer', text: answer },
          })),
        },
      ]} />
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
      <CTA />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
