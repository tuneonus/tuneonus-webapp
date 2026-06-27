import React from 'react';
import styles from './Process.module.css';
import { ScrollReveal } from '../ui/ScrollReveal';

export default function Process() {
  const steps = [
    { title: 'Discover', desc: 'Understanding requirements and goals.' },
    { title: 'Strategy', desc: 'Architecture and technical planning.' },
    { title: 'Design', desc: 'UI/UX design and prototyping.' },
    { title: 'Development', desc: 'Agile coding and implementation.' },
    { title: 'Testing', desc: 'QA, security, and performance checks.' },
    { title: 'Launch', desc: 'Deployment and production release.' },
    { title: 'Scale', desc: 'Ongoing optimization and growth.' },
  ];

  return (
    <section className={`section ${styles.process}`}>
      <div className="container">
        <ScrollReveal direction="up">
          <div className="text-center">
            <h2>Our Process</h2>
            <p className="subtitle">
              A proven methodology for delivering robust software.
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.timeline}>
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.1} direction="up">
              <div className={styles.step}>
                <div className={styles.dot}>
                  <span className={styles.number}>{i + 1}</span>
                </div>
                <div className={styles.content}>
                  <h4 className={styles.title}>{step.title}</h4>
                  <p className={styles.desc}>{step.desc}</p>
                </div>
                {i < steps.length - 1 && <div className={styles.line}></div>}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
