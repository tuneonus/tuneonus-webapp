import React from 'react';
import styles from './Testimonials.module.css';
import { Card, CardContent } from '../ui/Card';
import { ScrollReveal } from '../ui/ScrollReveal';

export default function Testimonials() {
  return (
    <section className={`section ${styles.testimonials}`}>
      <div className="container">
        <ScrollReveal direction="down">
          <div className="text-center">
            <h2>Client Feedback</h2>
            <p className="subtitle">
              Don't just take our word for it. Here's what our partners say.
            </p>
          </div>
        </ScrollReveal>

        <div className="text-center" style={{ marginTop: '3rem' }}>
          <p className="subtitle" style={{ fontStyle: 'italic' }}>Client testimonials coming soon.</p>
        </div>
      </div>
    </section>
  );
}
