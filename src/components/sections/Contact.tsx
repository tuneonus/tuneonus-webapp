'use client';

import React, { useState } from 'react';
import styles from './Contact.module.css';
import { Button } from '../ui/Button';
import { ScrollReveal } from '../ui/ScrollReveal';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      if (!apiUrl) {
        throw new Error('Online form delivery is not configured. Please email support@tuneonus.com.');
      }
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Something went wrong. Please try again.');
      }

      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch (err: unknown) {
      console.error('Submission error:', err);
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Unable to submit your message at this time.');
    }
  };

  return (
    <section id="contact-form" className={`section ${styles.contactSection}`}>
      <div className="container">
        <ScrollReveal>
          <div className={`section-header text-center ${styles.header}`}>
            <span className={styles.eyebrow}>Start a conversation</span>
            <h2>Discuss Your Software Project</h2>
            <p className="section-subtitle">
              Share your product goal, current stage, key users, and the technical help you need. You can also email us directly at{' '}
              <a href="mailto:support@tuneonus.com">support@tuneonus.com</a>.
            </p>
          </div>
        </ScrollReveal>
        
        <div className={styles.layout}>
          <ScrollReveal direction="right" className={styles.reveal}>
            <aside className={styles.guide} aria-labelledby="contact-guide-title">
              <span className={styles.guideLabel}>A useful starting point</span>
              <h3 id="contact-guide-title">Help us understand the project</h3>
              <p>You do not need a complete specification. A short outline of these details is enough to begin.</p>
              <ul>
                <li><span>01</span>Your product goal and intended users</li>
                <li><span>02</span>The current product or project stage</li>
                <li><span>03</span>The technical support you need</li>
              </ul>
              <a className={styles.emailLink} href="mailto:support@tuneonus.com">support@tuneonus.com <span aria-hidden="true">→</span></a>
            </aside>
          </ScrollReveal>
          <ScrollReveal direction="left" className={styles.reveal}>
          <div className={styles.formContainer}>
            {status === 'success' ? (
              <div className={styles.successMessage}>
                <h3>Thank you!</h3>
                <p>We&apos;ll be in touch with you shortly.</p>
                <Button onClick={() => setStatus('idle')} variant="outline">Send another message</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form} aria-busy={status === 'submitting'}>
                {status === 'error' && (
                  <div className={styles.errorMessage} role="alert">
                    {errorMsg}{' '}
                    <a href="mailto:support@tuneonus.com">Email TuneOnus</a>
                  </div>
                )}
                
                <div className={styles.formGroup}>
                  <label htmlFor="name">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    placeholder="John Doe" 
                    className={styles.input} 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={status === 'submitting'}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    placeholder="john@example.com" 
                    className={styles.input} 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === 'submitting'}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    required 
                    placeholder="What are you building, who is it for, and what support do you need?"
                    className={styles.input}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    disabled={status === 'submitting'}
                  ></textarea>
                </div>
                <div className={styles.submitContainer}>
                  <Button type="submit" variant="primary" size="lg" disabled={status === 'submitting'}>
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>
              </form>
            )}
          </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
