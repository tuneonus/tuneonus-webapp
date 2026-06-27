'use client';

import React, { useState } from 'react';
import styles from './Contact.module.css';
import { Button } from '../ui/Button';
import { ScrollReveal } from '../ui/ScrollReveal';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact-form" className={`section ${styles.contactSection}`}>
      <div className="container">
        <ScrollReveal>
          <div className="section-header text-center">
            <h2>Get In Touch</h2>
            <p className="section-subtitle">
              Have a project in mind? Let's discuss how we can help.
            </p>
          </div>
        </ScrollReveal>
        
        <ScrollReveal direction="up">
          <div className={styles.formContainer}>
            {submitted ? (
              <div className={styles.successMessage}>
                <h3>Thank you!</h3>
                <p>We'll be in touch with you shortly.</p>
                <Button onClick={() => setSubmitted(false)} variant="outline">Send another message</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" required placeholder="John Doe" className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" required placeholder="john@example.com" className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows={5} required placeholder="Tell us about your project..." className={styles.input}></textarea>
                </div>
                <div className={styles.submitContainer}>
                  <Button type="submit" variant="primary" size="lg">
                    Send Message
                  </Button>
                </div>
              </form>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
