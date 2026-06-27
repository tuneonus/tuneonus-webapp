'use client';

import React, { useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import styles from './Hero.module.css';
import { Button } from '../ui/Button';

export default function Hero() {
  // Example Backend Fetch (Silent)
  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
        const res = await fetch(`${apiUrl}/api/home`);
        if (res.ok) {
          const data = await res.json();
          console.log('✅ Backend API connection successful:', data.message);
        }
      } catch (err) {
        console.error('❌ Backend API connection failed:', err);
      }
    };
    
    fetchStatus();
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section className={styles.hero}>
      {/* Background Elements */}
      <div className={styles.bgGlow}></div>
      <div className={styles.bgGrid}></div>
      
      <div className={`container ${styles.container}`}>
        <motion.div 
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className={styles.badge}>
            <span className={styles.badgeDot}></span>
            Tune The Future
          </motion.div>
          
          <motion.h1 variants={itemVariants} className={styles.title}>
            Build Intelligent{' '}
            <span className="text-gradient">Software For The Future</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className={styles.subtitle}>
            We design and develop AI-powered products, scalable web applications, and modern software solutions.
          </motion.p>
          
          <motion.div variants={itemVariants} className={styles.actions}>
            <Button variant="primary" size="lg">Start Project</Button>
            <Button variant="outline" size="lg">View Work</Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
