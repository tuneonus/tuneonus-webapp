import React from 'react';
import Link from 'next/link';
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
          <h1
            className="animate-fade-in"
            style={{ fontSize: '6rem', fontWeight: 900, background: 'var(--gradient-accent)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', margin: 0, lineHeight: 1 }}
          >
            404
          </h1>
          <h2
            className="animate-fade-in"
            style={{ fontSize: '2rem', marginTop: '1rem', marginBottom: '1.5rem' }}
          >
            Lost in the Void
          </h2>
          <p
            className="animate-fade-in"
            style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.125rem' }}
          >
            The page you are looking for doesn&apos;t exist, has been moved, or is temporarily unavailable. Let&apos;s get you back on track.
          </p>
          <div className="animate-fade-in">
            <Link href="/">
              <Button variant="primary" size="lg">Return to Homepage</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
