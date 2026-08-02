import React from 'react';
import styles from './Solutions.module.css';
import { ScrollReveal } from '../ui/ScrollReveal';

export default function Solutions() {
  const industries = [
    {
      name: 'Startups',
      label: 'Launch & scale',
      desc: 'MVP development and scalable architectures for rapid growth.',
      icon: <><path d="M12 3v18M5 8h14M7 16h10" /><path d="M7 8v8M17 8v8" /></>,
    },
    {
      name: 'Enterprises',
      label: 'Modernize systems',
      desc: 'Internal tools, integrations, and product modernization for established organizations.',
      icon: <><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 7h3M8 11h3M8 15h3M15 7h1M15 11h1M15 15h1" /></>,
    },
    {
      name: 'Finance',
      label: 'Connect workflows',
      desc: 'Fintech product concepts, transaction workflows, dashboards, and system integrations.',
      icon: <><path d="M3 9h18M5 9v9M9 9v9M15 9v9M19 9v9M3 19h18M12 3l9 4H3l9-4z" /></>,
    },
    {
      name: 'Retail',
      label: 'Sell & operate',
      desc: 'E-commerce platforms and inventory management systems.',
      icon: <><path d="M4 8h16l-1 13H5L4 8zM8 8a4 4 0 0 1 8 0" /><path d="M9 12v1M15 12v1" /></>,
    },
    {
      name: 'Productivity',
      label: 'Coordinate work',
      desc: 'Collaboration tools and internal dashboard applications.',
      icon: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M8 9v11M12 13h5M12 16h3" /></>,
    },
    {
      name: 'Healthcare',
      label: 'Improve workflows',
      desc: 'Healthcare workflow, patient communication, and telemedicine product experiences.',
      icon: <><path d="M12 21s-8-4.8-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 6.2-8 11-8 11z" /><path d="M9 12h6M12 9v6" /></>,
    },
  ];

  return (
    <section id="solutions" className={`section ${styles.solutions}`}>
      <div className="container">
        <ScrollReveal direction="up">
          <div className={`text-center ${styles.header}`}>
            <span className={styles.eyebrow}>Built around your context</span>
            <h2>Industry Solutions</h2>
            <p className="subtitle">
              Explore the types of product and workflow challenges our engineering services can support.
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          {industries.map((industry, i) => (
            <ScrollReveal key={industry.name} delay={i * 0.07} direction="up" className={styles.reveal}>
              <article className={styles.item}>
                <div className={styles.cardTop}>
                  <span className={styles.icon} aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      {industry.icon}
                    </svg>
                  </span>
                  <span className={styles.number}>{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div className={styles.content}>
                  <span className={styles.label}>{industry.label}</span>
                  <h3 className={styles.title}>{industry.name}</h3>
                  <p className={styles.desc}>{industry.desc}</p>
                </div>
                <span className={styles.accent} aria-hidden="true" />
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
