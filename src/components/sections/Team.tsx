'use client';
import React from 'react';
import styles from './Team.module.css';
import { ScrollReveal } from '../ui/ScrollReveal';

const teamMembers = [
  { 
    name: 'ShaN', 
    role: 'Mobile App & AI Developer', 
    initial: 'S', 
    bio: 'Specializes in scaling intelligent mobile experiences and integrating next-gen AI capabilities.' 
  },
  { 
    name: 'Rahul', 
    role: 'Full Stack Web Developer', 
    initial: 'R', 
    bio: 'Architecting robust, high-performance web applications from the database to the front-end.' 
  },
  { 
    name: 'Venki', 
    role: 'App Developer', 
    initial: 'V', 
    bio: 'Creating seamless, beautifully designed cross-platform mobile solutions for our clients.' 
  },
  { 
    name: 'Dharani', 
    role: 'Test Engineer', 
    initial: 'D', 
    bio: 'Ensuring flawless execution and bulletproof code quality across all major product releases.' 
  },
  { 
    name: 'JK', 
    role: 'Client Success Manager', 
    initial: 'J', 
    bio: 'Bridging the gap between engineering excellence and the client’s strategic business vision.' 
  },
];

export default function Team() {
  return (
    <section id="team" className="section">
      <div className="container">
        <ScrollReveal direction="up">
          <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto 4rem' }}>
            <h2>Meet The Team</h2>
            <p className="subtitle">
              The elite engineers and visionaries behind our premium software solutions.
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
