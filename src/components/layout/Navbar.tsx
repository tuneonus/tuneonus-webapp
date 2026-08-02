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
  // The theme value is stored in the browser; defer its icon until hydration.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
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

  const scrollToContact = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.assign('/#contact-form');
    }
  };

  const handleMobileStartProject = () => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      const contactForm = document.getElementById('contact-form');
      if (contactForm) {
        contactForm.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.assign('/#contact-form');
      }
    }, 100);
  };

  const navLinks = [
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/#portfolio' },
    { name: 'FAQ', href: '/#faq' },
    { name: 'Contact Us', href: '/#contact-form' },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <Image src="/icon.svg" alt="" width={38} height={38} priority className={styles.logoMark} />
          <span className={styles.logoText}>Tune<span>Onus</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav}>
          <ul className={styles.navLinks}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className={styles.navLink}>
                  {link.name}
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
            <Button variant="primary" onClick={scrollToContact}>Discuss Your Project</Button>
          </div>
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className={styles.mobileToggle}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          <span className={`${styles.hamburger} ${mobileMenuOpen ? styles.active : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-navigation" className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
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
             <Button variant="primary" onClick={handleMobileStartProject} style={{ flex: 1 }}>Discuss Project</Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
