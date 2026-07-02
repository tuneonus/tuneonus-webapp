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
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
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
    } catch (err: any) {
      console.error('Submission error:', err);
      setStatus('error');
      setErrorMsg(err.message || 'Unable to submit your message at this time.');
    }
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
            {status === 'success' ? (
              <div className={styles.successMessage}>
                <h3>Thank you!</h3>
                <p>We'll be in touch with you shortly.</p>
                <Button onClick={() => setStatus('idle')} variant="outline">Send another message</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                {status === 'error' && (
                  <div className={styles.errorMessage}>
                    {errorMsg}
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
                    placeholder="Tell us about your project..." 
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
    </section>
  );
}
