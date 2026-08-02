import React from 'react';
import styles from './Process.module.css';
import { ScrollReveal } from '../ui/ScrollReveal';

export default function Process() {
  const steps = [
    { title: 'Discover', desc: 'Clarify the product goal, users, requirements, and constraints.' },
    { title: 'Strategy', desc: 'Define the scope, architecture, priorities, and delivery plan.' },
    { title: 'Design', desc: 'Shape user flows, interfaces, and testable product prototypes.' },
    { title: 'Development', desc: 'Build the product in focused, reviewable iterations.' },
    { title: 'Testing', desc: 'Review functionality, accessibility, security, and performance.' },
    { title: 'Launch', desc: 'Prepare the production release, deployment, and handoff.' },
    { title: 'Improve', desc: 'Use feedback and product needs to guide the next iteration.' },
  ];

  return (
    <section id="process" className={`section ${styles.process}`}>
      <div className="container">
        <ScrollReveal direction="up">
          <div className={`text-center ${styles.header}`}>
            <span className={styles.eyebrow}>How we work</span>
            <h2>Our Process</h2>
            <p className="subtitle">
              A practical path from early product decisions to launch and continuous improvement.
            </p>
          </div>
        </ScrollReveal>

        <ol className={styles.timeline}>
          {steps.map((step, i) => (
            <li key={step.title} className={styles.step}>
              <ScrollReveal delay={i * 0.06} direction="up" className={styles.reveal}>
                <article className={styles.card}>
                  <div className={styles.cardTop}>
                    <span className={styles.number}>{String(i + 1).padStart(2, '0')}</span>
                    <span className={styles.stage}>Stage {i + 1}</span>
                  </div>
                  <div className={styles.content}>
                    <h3 className={styles.title}>{step.title}</h3>
                    <p className={styles.desc}>{step.desc}</p>
                  </div>
                  <span className={styles.progress} aria-hidden="true" />
                </article>
              </ScrollReveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
