import Link from 'next/link';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { JsonLd } from '../../components/seo/JsonLd';
import { ScrollReveal } from '../../components/ui/ScrollReveal';
import { serviceHubFaqs, servicePages } from '../../content/services';
import { createPageMetadata } from '../../lib/metadata';
import { siteConfig } from '../../lib/site';
import styles from '../../components/services/ServicePage.module.css';

const description = 'Explore TuneOnus AI, AI agent, web, mobile, SaaS, backend, API, automation, and integration development services.';

export const metadata = createPageMetadata('Software Development Services', description, '/services');

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={[
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
            { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteConfig.url}/services` },
          ],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Software Development Services',
          description,
          url: `${siteConfig.url}/services`,
          provider: { '@id': `${siteConfig.url}/#organization` },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'TuneOnus Development Services',
            itemListElement: servicePages.map((service) => ({
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: service.name, url: `${siteConfig.url}/services/${service.slug}` },
            })),
          },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: serviceHubFaqs.map(({ question, answer }) => ({
            '@type': 'Question',
            name: question,
            acceptedAnswer: { '@type': 'Answer', text: answer },
          })),
        },
      ]} />
      <Navbar />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className="container">
            <nav aria-label="Breadcrumb" className={styles.breadcrumbs}>
              <Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Services</span>
            </nav>
            <div className={styles.heroContent}>
              <span className={styles.eyebrow}>Product engineering capabilities</span>
              <h1>Software Development Services</h1>
              <p className={styles.lead}>Build AI-enabled, web, mobile, SaaS, and backend products around clear user and business needs.</p>
              <p className={styles.intro}>{description}</p>
              <div className={styles.actions}>
                <Link href="/#contact-form" className={styles.primaryAction}>Discuss Your Project</Link>
                <Link href="/#process" className={styles.secondaryAction}>How We Work</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className={styles.sectionHeading}>
              <h2>Explore TuneOnus Services</h2>
              <p>Each service page explains the problem, approach, capabilities, typical deliverables, technologies, process, FAQs, and related services.</p>
            </div>
            <div className={styles.relatedGrid}>
              {servicePages.map((service) => (
                <ScrollReveal key={service.slug} direction="up">
                  <Link href={`/services/${service.slug}`} className={styles.relatedCard}>
                    <span>{service.eyebrow}</span>
                    <h2>{service.shortName}</h2>
                    <p>{service.description}</p>
                    <strong>Explore service <span aria-hidden="true">→</span></strong>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className={`section ${styles.altSection}`}>
          <div className={`container ${styles.faqContainer}`}>
            <div className={styles.sectionHeading}>
              <h2>Services FAQ</h2>
              <p>Choose capabilities around the product outcome rather than treating each discipline as an isolated engagement.</p>
            </div>
            <div className={styles.faqList}>
              {serviceHubFaqs.map((faq) => (
                <details key={faq.question} className={styles.faqItem}>
                  <summary>{faq.question}</summary><p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={`container ${styles.cta}`}>
            <div><span className={styles.eyebrow}>Start with context</span><h2>Not Sure Which Service Fits?</h2><p>Describe the product, users, current stage, existing systems, and the help you need.</p></div>
            <Link href="/#contact-form" className={styles.primaryAction}>Contact TuneOnus</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
