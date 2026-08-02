import React from 'react';
import styles from './WhyTuneOnus.module.css';
import { ScrollReveal } from '../ui/ScrollReveal';

export default function WhyTuneOnus() {
  const reasons = [
    { title: 'Focused Delivery', text: 'We organize delivery around agreed product goals, scope, and technical constraints.' },
    { title: 'Product Thinking', text: 'We focus on business metrics, user experience, and market fit, not just lines of code.' },
    { title: 'Security-Aware Engineering', text: 'We consider authentication, permissions, data handling, and operational risks during implementation.' },
    { title: 'Maintainable Systems', text: 'We design software with clear boundaries, practical documentation, and future change in mind.' },
    { title: 'Clear User Experience', text: 'We aim for interfaces that make important tasks understandable and straightforward.' }
  ];

  return (
    <section id="about" className={`section ${styles.whySection}`}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <ScrollReveal direction="right">
              <span className={styles.eyebrow}>Engineering principles</span>
              <h2>Why Choose <span className="text-gradient">TuneOnus</span></h2>
              <p className="subtitle" style={{ marginLeft: 0 }}>
                TuneOnus combines product thinking with practical software engineering.
              </p>
            </ScrollReveal>
            
            <div className={styles.list}>
              {reasons.map((reason, i) => (
                <ScrollReveal key={i} delay={i * 0.1} direction="up">
                  <div className={styles.item}>
                    <div className={styles.iconWrapper}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h3 className={styles.itemTitle}>{reason.title}</h3>
                      <p className={styles.itemText}>{reason.text}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
          <div className={styles.visual}>
            <ScrollReveal direction="left" delay={0.3}>
              <div className={styles.visualElement}>
                <div className={styles.visualHeader}>
                  <span>Product engineering</span>
                  <span className={styles.status}><i aria-hidden="true" /> Built for change</span>
                </div>
                <div className={styles.flow}>
                  <div className={styles.flowItem}>
                    <span className={styles.flowNumber}>01</span>
                    <div><strong>Understand</strong><small>Goals, users and constraints</small></div>
                  </div>
                  <span className={styles.connector} aria-hidden="true" />
                  <div className={styles.flowItem}>
                    <span className={styles.flowNumber}>02</span>
                    <div><strong>Engineer</strong><small>Clear, secure product systems</small></div>
                  </div>
                  <span className={styles.connector} aria-hidden="true" />
                  <div className={styles.flowItem}>
                    <span className={styles.flowNumber}>03</span>
                    <div><strong>Improve</strong><small>Maintain and evolve the product</small></div>
                  </div>
                </div>
                <div className={styles.visualFooter}>
                  <span>Product thinking</span><span>Practical delivery</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
