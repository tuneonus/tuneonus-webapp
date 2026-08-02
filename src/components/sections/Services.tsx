import React from 'react';
import styles from './Services.module.css';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { ScrollReveal } from '../ui/ScrollReveal';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: 'AI Development',
      description: 'Add practical AI capabilities to new or existing products, including LLM integrations, knowledge assistants, data workflows, and task automation.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a4 4 0 0 1 4 4v1h1a3 3 0 0 1 0 6h-1v1a4 4 0 0 1-8 0v-1H7a3 3 0 0 1 0-6h1V6a4 4 0 0 1 4-4z"/>
          <circle cx="9" cy="9" r="1" fill="currentColor" stroke="none"/>
          <circle cx="15" cy="9" r="1" fill="currentColor" stroke="none"/>
          <path d="M9 16s1 1 3 1 3-1 3-1"/>
        </svg>
      ),
      color: '#8b5cf6',
      href: '/services/ai-development',
    },
    {
      title: 'Web Application Development',
      description: 'Build responsive web applications, customer portals, dashboards, and internal tools with maintainable frontend and backend architecture.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
          <line x1="12" y1="2" x2="12" y2="22"/>
        </svg>
      ),
      color: '#06b6d4',
      href: '/services/web-development',
    },
    {
      title: 'SaaS Product Development',
      description: 'Plan and build SaaS products with account workflows, role-based access, subscriptions, integrations, and multi-tenant architecture where required.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg>
      ),
      color: '#10b981',
      href: '/services/saas-development',
    },
    {
      title: 'Mobile App Development',
      description: 'Create cross-platform mobile applications with thoughtful user flows, API integration, device capabilities, testing, and release support.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
          <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2"/>
        </svg>
      ),
      color: '#f59e0b',
      href: '/services/mobile-development',
    },
    {
      title: 'Cloud & Backend Engineering',
      description: 'Engineer APIs, databases, authentication, integrations, and cloud infrastructure for reliable web, mobile, and AI-enabled products.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
        </svg>
      ),
      color: '#3b82f6',
      href: '/services/backend-api-development',
    },
    {
      title: 'Automation & Integrations',
      description: 'Connect business systems and reduce repetitive work with custom workflows, API integrations, data synchronization, and human approval steps.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"/>
          <path d="M19.07 4.93l-1.41 1.41M4.93 4.93l1.41 1.41M12 2v2M12 20v2M4.93 19.07l1.41-1.41M19.07 19.07l-1.41-1.41M2 12h2M20 12h2"/>
        </svg>
      ),
      color: '#ec4899',
      href: '/services/ai-agent-development',
    },
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        <ScrollReveal direction="up">
          <div className="text-center">
            <h2>Our Services</h2>
            <p className="subtitle">
              Product engineering from early technical planning through implementation, integration, testing, and launch support.
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 0.1} direction="up">
              <Link href={service.href} className={styles.cardLink} aria-label={`Explore ${service.title}`}>
                <Card hoverEffect={true} className={styles.card}>
                  <CardHeader>
                    <div className={styles.iconWrapper} style={{ '--icon-color': service.color } as React.CSSProperties}>
                      {service.icon}
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className={styles.description}>{service.description}</p>
                    <span className={styles.explore}>Explore service <span aria-hidden="true">→</span></span>
                  </CardContent>
                </Card>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
