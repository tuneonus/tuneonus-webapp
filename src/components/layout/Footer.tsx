import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoMark}>TNS</span>
              <span className={styles.logoText}>TuneOnus</span>
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
              <li><Link href="#work">Work</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
          </div>

          <div className={styles.linksCol}>
            <h4 className={styles.columnTitle}>Connect</h4>
            <ul className={styles.linkList}>
              <li><a href="mailto:hello@tuneonus.com">Email Us</a></li>
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
