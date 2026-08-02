import React from 'react';
import Image from 'next/image';
import styles from './FeaturedProjects.module.css';
import { Card, CardContent } from '../ui/Card';
import { ScrollReveal } from '../ui/ScrollReveal';

export default function FeaturedProjects() {
  const projects = [
    {
      name: 'Nexus AI',
      category: 'AI Platform Concept',
      description: 'A concept interface exploring how customer questions, knowledge retrieval, and support workflow automation could work together.',
      image: '/projects/nexus-ai.webp'
    },
    {
      name: 'PayFlow SaaS',
      category: 'Fintech Web App Concept',
      description: 'A fintech SaaS concept focused on transaction visibility, account workflows, and operational dashboards.',
      image: '/projects/payflow.webp'
    },
    {
      name: 'HealthSync Mobile',
      category: 'Healthcare App Concept',
      description: 'A mobile product concept exploring patient communication, appointment workflows, and access to care information.',
      image: '/projects/healthsync.webp'
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
                Technical demonstrations that show product thinking and interface direction. These are concepts, not client case studies.
              </p>
            </div>
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
                    loading="lazy"
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
        
      </div>
    </section>
  );
}
