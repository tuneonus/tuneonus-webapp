import React from 'react';
import styles from './Team.module.css';
import { ScrollReveal } from '../ui/ScrollReveal';

const teamMembers = [
  { name: 'ShaN', role: 'Mobile App & AI Developer', initial: 'S' },
  { name: 'Rahul', role: 'Full Stack Web Developer', initial: 'R' },
  { name: 'Venki', role: 'App Developer', initial: 'V' },
  { name: 'Dharani', role: 'Test Engineer', initial: 'D' },
  { name: 'JK', role: 'Client Success Manager', initial: 'J' },
];

export default function Team() {
  return (
    <section id="team" className="section">
      <div className="container">
        <ScrollReveal>
          <div className="section-header text-center">
            <h2>Meet The Team</h2>
            <p className="section-subtitle">
              The engineers and visionaries behind our premium software solutions.
            </p>
          </div>
        </ScrollReveal>
        <div className={styles.grid}>
          {teamMembers.map((member, i) => (
            <ScrollReveal key={i} delay={i * 0.1} direction="up">
              <div className={styles.card}>
                <div className={styles.avatarPlaceholder}>{member.initial}</div>
                <h3 className={styles.name}>{member.name}</h3>
                <p className={styles.role}>{member.role}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
