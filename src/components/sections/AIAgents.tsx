'use client';
import React from 'react';
import styles from './AIAgents.module.css';
import { Card, CardContent } from '../ui/Card';
import { ScrollReveal } from '../ui/ScrollReveal';

export default function AIAgents() {
  const agents = [
    {
      title: 'Custom GPTs & LLMs',
      description: 'Fine-tuned language models and conversational agents that understand your proprietary data and interact naturally with users.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          <path d="M12 7v0 M12 11v0 M12 15v0"/>
        </svg>
      ),
      color: '#22d3ee', // Cyan
    },
    {
      title: 'Autonomous Workflows',
      description: 'Multi-agent systems that chain complex tasks together, making decisions and executing operations without human intervention.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <line x1="9" y1="3" x2="9" y2="21"/>
          <path d="M13 8l2-2 2 2M15 6v6M11 16l-2 2-2-2M9 18v-6"/>
        </svg>
      ),
      color: '#8b5cf6', // Purple
    },
    {
      title: 'Intelligent Data Analysts',
      description: 'Agents that monitor databases, analyze trends in real-time, and generate actionable insights and reports automatically.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"/>
          <line x1="12" y1="20" x2="12" y2="4"/>
          <line x1="6" y1="20" x2="6" y2="14"/>
        </svg>
      ),
      color: '#10b981', // Emerald
    },
    {
      title: '24/7 Operations',
      description: 'Deploy AI agents that work around the clock, handling customer support, scheduling, and system monitoring continuously.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
      color: '#f59e0b', // Amber
    },
  ];

  return (
    <section id="ai-agents" className={`section ${styles.section}`}>
      <div className="container">
        <ScrollReveal direction="up">
          <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className={styles.tag}>Next-Gen Tech</span>
            <h2>Autonomous AI Agents</h2>
            <p className="subtitle">
              Move beyond simple chatbots. We build intelligent agentic systems that reason, learn, and execute complex business workflows autonomously.
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          {agents.map((agent, index) => (
            <ScrollReveal key={index} delay={index * 0.15} direction="up">
              <Card hoverEffect={false} className={styles.card}>
                <CardContent style={{ padding: '2rem' }}>
                  <div className={styles.iconWrapper} style={{ '--icon-color': agent.color } as React.CSSProperties}>
                    {agent.icon}
                  </div>
                  <h3 className={styles.cardTitle}>{agent.title}</h3>
                  <p className={styles.description}>{agent.description}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
