import React from 'react';
import Image from 'next/image';
import styles from './FeaturedProjects.module.css';
import { Card, CardContent } from '../ui/Card';
import { Button } from '../ui/Button';

export default function FeaturedProjects() {
  const projects = [
    {
      name: 'Nexus AI',
      category: 'AI Platform',
      result: 'Automated 80% of customer support workflows',
      metrics: '+45% Efficiency',
      image: '/projects/nexus-ai.png'
    },
    {
      name: 'PayFlow SaaS',
      category: 'Fintech Web App',
      result: 'Processed $10M+ in early transactions securely',
      metrics: '0 Downtime',
      image: '/projects/payflow.png'
    },
    {
      name: 'HealthSync Mobile',
      category: 'Healthcare App',
      result: 'Connected 50,000+ patients with doctors',
      metrics: '4.9 App Store Rating',
      image: '/projects/healthsync.png'
    }
  ];

  return (
    <section id="work" className="section">
      <div className="container">
        <div className={styles.header}>
          <div>
            <h2 className="animate-fade-in">Featured Work</h2>
            <p className="subtitle animate-fade-in" style={{ margin: 0 }}>
              Recent digital products we've engineered.
            </p>
          </div>
          <Button variant="outline" className="hidden-mobile">View All Projects</Button>
        </div>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <Card key={i} variant="default" className={styles.card}>
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
                <p className={styles.result}>{project.result}</p>
                <div className={styles.metric}>
                  <span className={styles.metricIcon}>↗</span> {project.metrics}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className={styles.mobileAction}>
          <Button variant="outline" style={{ width: '100%' }}>View All Projects</Button>
        </div>
      </div>
    </section>
  );
}
