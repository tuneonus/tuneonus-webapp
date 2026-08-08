'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import styles from './Hero.module.css';
import { Button } from '../ui/Button';
import { canUseWebGL } from '../../lib/webgl';

const AIGlobe = dynamic(() => import('../three/AIGlobe'), { ssr: false });

export default function Hero() {
  const [showGlobe, setShowGlobe] = useState(false);

  useEffect(() => {
    if (!canUseWebGL()) return;
    const delay = window.innerWidth < 768 ? 150 : 500;
    const timer = window.setTimeout(() => setShowGlobe(true), delay);
    return () => window.clearTimeout(timer);
  }, []);

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
            Build Intelligent <span className="text-gradient">AI Products &amp; Custom Software</span>
          </h1>

          <p className={styles.subtitle}>
            TuneOnus is a developer brand building custom AI products, web and mobile applications, SaaS platforms, and the backend systems that support them.
          </p>

          <div className={styles.actions}>
            <Button variant="primary" size="lg" onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}>Discuss Your Project</Button>
          </div>
        </div>

        {/* Responsive 3D AI globe */}
        <div className={styles.globeWrapper}>
          {showGlobe && <AIGlobe />}
        </div>
      </div>
    </section>
  );
}
