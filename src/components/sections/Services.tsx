import React from 'react';
import styles from './Services.module.css';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { ScrollReveal } from '../ui/ScrollReveal';

export default function Services() {
  const services = [
    {
      title: 'AI Development',
      description: 'Custom AI models, machine learning algorithms, and intelligent automation tailored to your business needs.',
      icon: '🧠'
    },
    {
      title: 'Web Application Development',
      description: 'Scalable, high-performance web applications built with modern frameworks like React and Next.js.',
      icon: '💻'
    },
    {
      title: 'SaaS Product Development',
      description: 'End-to-end SaaS development from architecture and multi-tenancy to deployment and scaling.',
      icon: '🚀'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile experiences that users love, built with React Native.',
      icon: '📱'
    },
    {
      title: 'Cloud & Backend Engineering',
      description: 'Robust, secure, and scalable backend systems deployed on AWS, GCP, or Azure.',
      icon: '☁️'
    },
    {
      title: 'Automation & Integrations',
      description: 'Streamline your operations with custom workflows and API integrations.',
      icon: '⚙️'
    }
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        <ScrollReveal direction="up">
          <div className="text-center">
            <h2>Our Services</h2>
            <p className="subtitle">
              Comprehensive engineering solutions to transform your ideas into reality.
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 0.1} direction="up">
              <Card hoverEffect={true} className={styles.card}>
                <CardHeader>
                  <div className={styles.iconWrapper}>
                    <span className={styles.icon}>{service.icon}</span>
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={styles.description}>{service.description}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
