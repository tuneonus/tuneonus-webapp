'use client';

import React from 'react';
import styles from './CTA.module.css';
import { Button } from '../ui/Button';
import { ScrollReveal } from '../ui/ScrollReveal';

export default function CTA() {
  return (
    <section id="contact" className={`section ${styles.ctaSection}`}>
      <div className="container">
        <div className={styles.card}>
          <div className={styles.glow}></div>
          <ScrollReveal direction="up" amount={0.5} className={styles.content}>
            <h2>Plan Your Next Software Product</h2>
            <p className={styles.subtitle}>
              Tell us what you want to build, who it is for, and where you need technical support. We&apos;ll use that context to start a focused project discussion.
            </p>
            <div className={styles.actions}>
              <Button variant="primary" size="lg" onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}>
                Discuss Your Project
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
