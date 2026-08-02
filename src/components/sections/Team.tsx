import React from 'react';
import styles from './Team.module.css';
import { ScrollReveal } from '../ui/ScrollReveal';

const teamMembers = [
  { 
    name: 'Shan', 
    role: 'Founder & Lead Engineer', 
    initial: 'S', 
    bio: 'A passionate developer specializing in scaling intelligent mobile experiences, robust web applications, and integrating next-gen AI capabilities. Dedicated to delivering premium software solutions.' 
  }
];

export default function Team() {
  return (
    <section id="team" className="section">
      <div className="container">
        <ScrollReveal direction="up">
          <div className={styles.header}>
            <span className={styles.eyebrow}>Leadership</span>
            <h2>About the Founder</h2>
            <p className="subtitle">
              Meet the engineer behind TuneOnus.
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          {teamMembers.map((member, i) => (
            <ScrollReveal key={i} delay={i * 0.1} direction="up">
              <div className={styles.card}>
                <div className={styles.identity}>
                  <div className={styles.avatarPlaceholder} aria-hidden="true">{member.initial}</div>
                  <div className={styles.identityText}>
                    <h3 className={styles.name}>{member.name}</h3>
                    <p className={styles.role}>{member.role}</p>
                  </div>
                </div>
                <div className={styles.story}>
                  <span className={styles.storyLabel}>Founder profile</span>
                  <p className={styles.bio}>{member.bio}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
