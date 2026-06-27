import React from 'react';
import styles from './Hero.module.css';
import { Button } from '../ui/Button';

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background Elements */}
      <div className={styles.bgGlow}></div>
      <div className={styles.bgGrid}></div>
      
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <div className={`${styles.badge} animate-fade-in`}>
            <span className={styles.badgeDot}></span>
            Tune The Future
          </div>
          
          <h1 className={`${styles.title} animate-fade-in`}>
            Build Intelligent{' '}
            <span className="text-gradient">Software For The Future</span>
          </h1>
          
          <p className={`${styles.subtitle} animate-fade-in`}>
            We design and develop AI-powered products, scalable web applications, and modern software solutions.
          </p>
          
          <div className={`${styles.actions} animate-fade-in`}>
            <Button variant="primary" size="lg">Start Project</Button>
            <Button variant="outline" size="lg">View Work</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
