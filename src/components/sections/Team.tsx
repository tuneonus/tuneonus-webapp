import React from 'react';
import styles from './Team.module.css';
import { ScrollReveal } from '../ui/ScrollReveal';

const teamMembers = [
  { 
    name: 'Prasanth', 
    role: 'Founder & Lead Engineer', 
    initial: 'P', 
    bio: 'A passionate developer specializing in scaling intelligent mobile experiences, robust web applications, and integrating next-gen AI capabilities. Dedicated to delivering premium software solutions.' 
  },
  { 
    name: 'Rahul', 
    role: 'Founder & Lead Engineer', 
    initial: 'R', 
    bio: 'Architecting robust, high-performance web applications from the database to the front-end, ensuring a seamless user experience.' 
  }
];

export default function Team() {
  return (
    <section id="team" className="section">
      <div className="container">
        <ScrollReveal direction="up">
          <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto 4rem' }}>
            <h2>About the Founders</h2>
            <p className="subtitle">
              The engineers behind our premium software solutions.
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          {teamMembers.map((member, i) => (
            <ScrollReveal key={i} delay={i * 0.1} direction="up">
              <div className={styles.card}>
                <div className={styles.avatarContainer}>
                  <div className={styles.avatarRing}></div>
                  <div className={styles.avatarPlaceholder}>{member.initial}</div>
                </div>
                <h3 className={styles.name}>{member.name}</h3>
                <p className={styles.role}>{member.role}</p>
                <p className={styles.bio}>{member.bio}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
