import Link from 'next/link';
import type { ServicePage as ServicePageData } from '../../content/services';
import { servicesBySlug } from '../../content/services';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import Process from '../sections/Process';
import { ScrollReveal } from '../ui/ScrollReveal';
import styles from './ServicePage.module.css';

export default function ServicePage({ service }: { service: ServicePageData }) {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className="container">
            <nav aria-label="Breadcrumb" className={styles.breadcrumbs}>
              <Link href="/">Home</Link><span aria-hidden="true">/</span>
              <Link href="/services">Services</Link><span aria-hidden="true">/</span>
              <span aria-current="page">{service.shortName}</span>
            </nav>
            <div className={styles.heroContent}>
              <span className={styles.eyebrow}>{service.eyebrow}</span>
              <h1>{service.name}</h1>
              <p className={styles.lead}>{service.hero}</p>
              <p className={styles.intro}>{service.description}</p>
              <div className={styles.actions}>
                <Link href="/#contact-form" className={styles.primaryAction}>Discuss Your Project</Link>
                <Link href="/services" className={styles.secondaryAction}>Explore All Services</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className={`container ${styles.twoColumn}`}>
            <ScrollReveal direction="right">
              <article className={styles.panel}>
                <span className={styles.panelLabel}>The challenge</span>
                <h2>Problem</h2>
                <p>{service.problem}</p>
              </article>
            </ScrollReveal>
            <ScrollReveal direction="left">
              <article className={`${styles.panel} ${styles.highlightPanel}`}>
                <span className={styles.panelLabel}>Our approach</span>
                <h2>Solution</h2>
                <p>{service.solution}</p>
              </article>
            </ScrollReveal>
          </div>
        </section>

        <section className={`section ${styles.altSection}`}>
          <div className="container">
            <SectionHeading title="Services" description={`Capabilities that can be included in a ${service.shortName.toLowerCase()} engagement.`} />
            <FeatureGrid items={service.capabilities} />
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading title="Typical Deliverables" description="The exact deliverables depend on the agreed scope, product stage, and existing systems." />
            <FeatureGrid items={service.deliverables} numbered />
          </div>
        </section>

        <section className={`section ${styles.altSection}`}>
          <div className="container">
            <SectionHeading title="Technology Stack" description="Relevant technologies already represented in the TuneOnus engineering stack." />
            <ul className={styles.tags} aria-label="Technologies">
              {service.technologies.map((technology) => <li key={technology}>{technology}</li>)}
            </ul>
          </div>
        </section>

        <Process />

        <section className="section">
          <div className="container">
            <SectionHeading title="Industries and Product Contexts" description="TuneOnus can support product and workflow challenges in these repository-verified contexts." />
            <ul className={styles.industryGrid}>
              {service.industries.map((industry) => <li key={industry}>{industry}</li>)}
            </ul>
          </div>
        </section>

        <section className={`section ${styles.altSection}`}>
          <div className={`container ${styles.faqContainer}`}>
            <SectionHeading title={`${service.shortName} FAQ`} description="Answers based on the services and capabilities currently documented by TuneOnus." />
            <div className={styles.faqList}>
              {service.faqs.map((faq) => (
                <details key={faq.question} className={styles.faqItem}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading title="Related Services" description="Combine complementary engineering capabilities around one product goal." />
            <div className={styles.relatedGrid}>
              {service.related.map((slug) => {
                const related = servicesBySlug[slug];
                return (
                  <Link key={slug} href={`/services/${slug}`} className={styles.relatedCard}>
                    <span>{related.eyebrow}</span>
                    <h3>{related.shortName}</h3>
                    <p>{related.description}</p>
                    <strong>Explore service <span aria-hidden="true">→</span></strong>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={`container ${styles.cta}`}>
            <div>
              <span className={styles.eyebrow}>Start with context</span>
              <h2>Discuss Your {service.shortName} Project</h2>
              <p>Share your product goal, users, current stage, constraints, and the technical support you need.</p>
            </div>
            <Link href="/#contact-form" className={styles.primaryAction}>Contact TuneOnus</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function SectionHeading({ title, description }: { title: string; description: string }) {
  return (
    <ScrollReveal direction="up">
      <div className={styles.sectionHeading}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </ScrollReveal>
  );
}

function FeatureGrid({ items, numbered = false }: { items: string[]; numbered?: boolean }) {
  return (
    <ul className={styles.featureGrid}>
      {items.map((item, index) => (
        <li key={item}>
          <span aria-hidden="true">{numbered ? String(index + 1).padStart(2, '0') : '✓'}</span>
          {item}
        </li>
      ))}
    </ul>
  );
}
