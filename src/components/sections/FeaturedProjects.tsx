import React from 'react';
import Image from 'next/image';
import styles from './FeaturedProjects.module.css';
import { Card, CardContent } from '../ui/Card';
import { Button } from '../ui/Button';
import { ScrollReveal } from '../ui/ScrollReveal';

export default function FeaturedProjects() {
  const projects = [
    {
      name: 'Nexus AI',
      category: 'AI Platform Concept',
      description: 'A demonstration of customer support workflow automation.',
      image: '/projects/nexus-ai.png'
    },
    {
      name: 'PayFlow SaaS',
      category: 'Fintech Web App Concept',
      description: 'A scalable transaction processing system showcase.',
      image: '/projects/payflow.png'
    },
    {
      name: 'HealthSync Mobile',
      category: 'Healthcare App Concept',
      description: 'A patient-doctor connectivity demonstration.',
      image: '/projects/healthsync.png'
    }
  ];

  return (
    <section id="portfolio" className="section">
      <div className="container">
        <ScrollReveal direction="down">
          <div className={styles.header}>
            <div>
              <h2>Concept Projects</h2>
              <p className="subtitle" style={{ margin: 0 }}>
                Technical demonstrations and sample builds.
              </p>
            </div>
            <Button variant="outline" className="hidden-mobile">View All Projects</Button>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <ScrollReveal key={i} delay={i * 0.2} direction="up">
              <Card variant="default" className={styles.card}>
                <div className={styles.imagePlaceholder}>
                  <Image 
                    src={project.image} 
                    alt={project.name} 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={styles.projectImage}
                  />
                </div>
                <CardContent className={styles.content}>
                  <div className={styles.category}>{project.category}</div>
                  <h3 className={styles.title}>{project.name}</h3>
                  <p className={styles.result}>{project.description}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
        
        <div className={styles.mobileAction}>
          <Button variant="outline" style={{ width: '100%' }}>View All Projects</Button>
        </div>
      </div>
    </section>
  );
}
