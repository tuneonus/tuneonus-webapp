import React from 'react';
import styles from './WhyTuneOnus.module.css';
import { ScrollReveal } from '../ui/ScrollReveal';

export default function WhyTuneOnus() {
  const reasons = [
    { title: 'Fast Execution', text: 'We ship quality code rapidly without compromising on architecture.' },
    { title: 'Product Thinking', text: 'We focus on business metrics, user experience, and market fit, not just lines of code.' },
    { title: 'Secure Architecture', text: 'Built-in security practices from day one to protect your data and users.' },
    { title: 'Scalable Systems', text: 'Cloud-native infrastructure designed to handle millions of users.' },
    { title: 'Clean UX', text: 'Beautiful, intuitive interfaces that delight users and drive conversion.' }
  ];

  return (
    <section id="about" className={`section ${styles.whySection}`}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <ScrollReveal direction="right">
              <h2>Why Choose <span className="text-gradient">TuneOnus</span></h2>
              <p className="subtitle" style={{ marginLeft: 0 }}>
                We're not just a development agency; we're your technical co-founders.
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
                      <h4 className={styles.itemTitle}>{reason.title}</h4>
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
                <div className={styles.glow}></div>
                <div className={styles.abstractShape1}></div>
                <div className={styles.abstractShape2}></div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
