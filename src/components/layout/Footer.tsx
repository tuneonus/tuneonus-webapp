'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import styles from './Footer.module.css';
import { useTheme } from '../providers/ThemeProvider';

const FooterWave = dynamic(() => import('../three/FooterWave'), { ssr: false });

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <footer className={styles.footer}>
      <FooterWave />
      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              <Image 
                src={mounted && theme === 'light' ? "/brand-logo.svg" : "/brand-logo-white.svg"} 
                alt="TuneOnus Logo" 
                width={230} 
                height={48} 
                className={styles.logoImage} 
              />
            </Link>
            <p className={styles.description}>
              We design and develop AI-powered products, scalable web applications, and modern software solutions.
            </p>
          </div>

          {/* Links Columns */}
          <div className={styles.linksCol}>
            <h4 className={styles.columnTitle}>Company</h4>
            <ul className={styles.linkList}>
              <li><Link href="#about">About</Link></li>
              <li><Link href="#services">Services</Link></li>
              <li><Link href="#portfolio">Portfolio</Link></li>
              <li><Link href="#contact-form">Contact</Link></li>
            </ul>
          </div>

          <div className={styles.linksCol}>
            <h4 className={styles.columnTitle}>Connect</h4>
            <ul className={styles.linkList}>
              <li><a href="mailto:tuneonus@gmail.com">Email Us</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {currentYear} TuneOnus. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
