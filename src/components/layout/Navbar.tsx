'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';
import { Button } from '../ui/Button';
import { useTheme } from '../providers/ThemeProvider';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  // Prevent hydration mismatch for icon rendering
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services', hasDropdown: true },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Resources', href: '#resources', hasDropdown: true },
    { name: 'Contact Us', href: '#contact' },
    { name: 'Careers', href: '#careers' },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <Image 
            src="/brand-logo-white.svg" 
            alt="TuneOnus Logo" 
            width={230} 
            height={56} 
            priority 
          />
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav}>
          <ul className={styles.navLinks}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className={styles.navLink}>
                  {link.name}
                  {link.hasDropdown && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.dropdownIcon}>
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  )}
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.navActions}>
            <button 
              className={styles.themeToggle} 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
            >
              {mounted && (theme === 'dark' ? '☀️' : '🌙')}
            </button>
            <Button variant="primary">Start Project</Button>
          </div>
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className={styles.mobileToggle}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span className={`${styles.hamburger} ${mobileMenuOpen ? styles.active : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <ul className={styles.mobileNavLinks}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                href={link.href} 
                className={styles.mobileNavLink}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className={styles.mobileNavAction} style={{ display: 'flex', gap: '1rem' }}>
             <button 
               className={styles.themeToggle} 
               onClick={() => {
                 setTheme(theme === 'dark' ? 'light' : 'dark');
                 setMobileMenuOpen(false);
               }}
               aria-label="Toggle theme"
               style={{ width: '48px', height: '48px', flexShrink: 0 }}
             >
               {mounted && (theme === 'dark' ? '☀️' : '🌙')}
             </button>
             <Button variant="primary" style={{ flex: 1 }}>Start Project</Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
