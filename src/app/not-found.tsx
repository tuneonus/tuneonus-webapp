'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 1.5rem', position: 'relative', overflow: 'hidden' }}>
        {/* Abstract Backgrounds */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', width: '60vw', height: '60vw', background: 'var(--gradient-accent)', opacity: 0.1, filter: 'blur(100px)', transform: 'translate(-50%, -50%)', zIndex: -1, borderRadius: '50%' }} />
        
        <div style={{ textAlign: 'center', maxWidth: '600px', zIndex: 10 }}>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ fontSize: '6rem', fontWeight: 900, background: 'var(--gradient-accent)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', margin: 0, lineHeight: 1 }}
          >
            404
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontSize: '2rem', marginTop: '1rem', marginBottom: '1.5rem' }}
          >
            Lost in the Void
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.125rem' }}
          >
            The page you are looking for doesn't exist, has been moved, or is temporarily unavailable. Let's get you back on track.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link href="/">
              <Button variant="primary" size="lg">Return to Homepage</Button>
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
