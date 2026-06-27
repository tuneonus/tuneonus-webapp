import React from 'react';
import styles from './TechStack.module.css';
import { ScrollReveal } from '../ui/ScrollReveal';

export default function TechStack() {
  const techs = [
    'React', 'Next.js', 'React Native', 'Node.js', 
    'Python', 'TypeScript', 'AI', 'Cloud'
  ];

  return (
    <section className="section">
      <div className="container text-center">
        <ScrollReveal direction="down">
          <h3 className={styles.title}>Powered by Modern Technologies</h3>
        </ScrollReveal>
        <div className={styles.techList}>
          {techs.map((tech, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 0.05}>
              <div className={styles.techBadge}>
                {tech}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
