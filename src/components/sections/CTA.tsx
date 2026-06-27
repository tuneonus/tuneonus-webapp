import React from 'react';
import styles from './CTA.module.css';
import { Button } from '../ui/Button';

export default function CTA() {
  return (
    <section id="contact" className={`section ${styles.ctaSection}`}>
      <div className="container">
        <div className={styles.card}>
          <div className={styles.glow}></div>
          <div className={styles.content}>
            <h2>Let's Build Your Next Digital Product</h2>
            <p className={styles.subtitle}>
              Ready to transform your ideas into reality? Partner with TuneOnus to engineer the future.
            </p>
            <div className={styles.actions}>
              <Button variant="primary" size="lg">Book Consultation</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
