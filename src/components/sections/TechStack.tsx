import React from 'react';
import styles from './TechStack.module.css';
import { ScrollReveal } from '../ui/ScrollReveal';

export default function TechStack() {
  const techs = [
    'React', 'Next.js', 'React Native', 'Flutter', 
    'Swift', 'Kotlin', 'Node.js', 'Python', 
    'TypeScript', 'AI', 'Cloud'
  ];

  return (
    <section className="section">
      <div className="container text-center">
        <ScrollReveal direction="down">
          <div className={styles.header}>
            <span className={styles.eyebrow}>Technology stack</span>
            <h2>Tools Chosen for the Product</h2>
            <p className="subtitle">Modern technologies selected around product requirements, maintainability, and the systems they need to support.</p>
          </div>
        </ScrollReveal>
        <div className={styles.techList}>
          {techs.map((tech, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 0.05}>
              <div className={styles.techBadge}>
                <span className={styles.dot} aria-hidden="true" />{tech}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
