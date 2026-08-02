import React from 'react';
import styles from './EngagementModels.module.css';
import { ScrollReveal } from '../ui/ScrollReveal';

const models = [
  {
    title: 'MVP Launchpad',
    description: 'Fixed-scope development focused on getting the core of your startup idea ready for market.',
    features: ['Fixed Price & Timeline', 'Core Feature Focus', 'UI/UX Design', 'Production Ready']
  },
  {
    title: 'Dedicated Team',
    description: 'A dedicated team of senior engineers to scale your existing product.',
    features: ['Monthly Retainer', 'Scale Up or Down', 'Full-stack Experts', 'Direct Communication']
  },
  {
    title: 'AI Integration',
    description: 'Consulting and implementation to supercharge your app with AI capabilities.',
    features: ['LLM Integration', 'Custom AI Agents', 'Workflow Automation', 'Performance Optimization']
  }
];

export default function EngagementModels() {
  return (
    <section id="engagement" className="section bg-secondary">
      <div className="container">
        <ScrollReveal>
          <div className={`section-header text-center ${styles.header}`}>
            <span className={styles.eyebrow}>Ways to collaborate</span>
            <h2>How We Work With You</h2>
            <p className="section-subtitle">Flexible engagement models tailored to your business needs.</p>
          </div>
        </ScrollReveal>
        <div className={styles.grid}>
          {models.map((model, i) => (
            <ScrollReveal key={i} delay={i * 0.1} direction="up">
              <article className={styles.card}>
                <div className={styles.cardTop}>
                  <span className={styles.number}>{String(i + 1).padStart(2, '0')}</span>
                  <span className={styles.line} aria-hidden="true" />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.title}>{model.title}</h3>
                  <p className={styles.description}>{model.description}</p>
                </div>
                <ul className={styles.features}>
                  {model.features.map((feature, idx) => (
                    <li key={idx}><span className={styles.check} aria-hidden="true">✓</span>{feature}</li>
                  ))}
                </ul>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
