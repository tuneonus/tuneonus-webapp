'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import styles from './Footer.module.css';
import { useTheme } from '../providers/ThemeProvider';
import { canUseWebGL } from '../../lib/webgl';

const FooterWave = dynamic(() => import('../three/FooterWave'), { ssr: false });

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [showWave, setShowWave] = useState(false);
  const footerRef = React.useRef<HTMLElement>(null);
  // The theme value is stored in the browser; defer the theme-specific logo.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);
  useEffect(() => {
    const footer = footerRef.current;
    if (!footer || !canUseWebGL()) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShowWave(true);
        observer.disconnect();
      }
    }, { rootMargin: '200px' });
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className={styles.footer}>
      {showWave && <FooterWave />}
      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              <Image 
                src={mounted && theme === 'light' ? "/brand-logo.svg" : "/brand-logo-white.svg"} 
                alt="TuneOnus"
                width={230} 
                height={48} 
                className={styles.logoImage} 
              />
            </Link>
            <p className={styles.description}>
              Custom AI product, web application, mobile app, SaaS, automation, and backend development.
            </p>
          </div>

          {/* Links Columns */}
          <div className={styles.linksCol}>
            <h2 className={styles.columnTitle}>Company</h2>
            <ul className={styles.linkList}>
              <li><Link href="/#about">About</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/#portfolio">Portfolio</Link></li>
              <li><Link href="/#faq">FAQ</Link></li>
              <li><Link href="/#contact-form">Contact</Link></li>
            </ul>
          </div>

          <div className={styles.linksCol}>
            <h2 className={styles.columnTitle}>Connect</h2>
            <ul className={styles.linkList}>
              <li><a href="mailto:tuneonus@gmail.com">Email Us</a></li>
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
