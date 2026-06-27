'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import styles from './Hero.module.css';
import { Button } from '../ui/Button';

const AIGlobe = dynamic(() => import('../three/AIGlobe'), { ssr: false });

export default function Hero() {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showGlobe, setShowGlobe] = useState(false);

  const phrases = ['AI Products', 'Web Applications', 'Mobile Apps', 'SaaS Platforms'];

  useEffect(() => {
    // Always show globe
    setShowGlobe(true);
  }, []);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && text === currentPhrase) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && text === '') {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(() => {
      setText(currentPhrase.slice(0, text.length + (isDeleting ? -1 : 1)));
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex]);

  return (
    <section className={styles.hero}>
      {/* Background Elements */}
      <div className={styles.bgGlow}></div>
      <div className={styles.bgGrid}></div>

      <div className={`container ${styles.container}`}>
        {/* Text Content */}
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeDot}></span>
            Tune The Future
          </div>

          <h1 className={styles.title}>
            Build Intelligent{' '}
            <span className="text-gradient">{text}</span>
            <span className={styles.cursor}>|</span>
          </h1>

          <p className={styles.subtitle}>
            We design and develop AI-powered products, scalable web &amp; mobile applications, and modern software solutions.
          </p>

          <div className={styles.actions}>
            <Button variant="primary" size="lg">Start Project</Button>
            <Button variant="outline" size="lg">View Work</Button>
          </div>
        </div>

        {/* 3D AI Globe — hidden on mobile via CSS */}
        <div className={styles.globeWrapper}>
          <AIGlobe />
        </div>
      </div>
    </section>
  );
}
