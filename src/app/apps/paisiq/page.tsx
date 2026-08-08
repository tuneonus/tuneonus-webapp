import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';
import { absoluteUrl } from '../../../lib/site';

export const metadata: Metadata = {
  title: 'PaisiQ | TuneOnus App',
  description: 'PaisiQ is a local-first personal expense and budget tracker from TuneOnus.',
  alternates: { canonical: '/apps/paisiq' },
  openGraph: {
    title: 'PaisiQ | TuneOnus App',
    description: 'PaisiQ is a local-first personal expense and budget tracker from TuneOnus.',
    url: absoluteUrl('/apps/paisiq'),
  },
  twitter: {
    title: 'PaisiQ | TuneOnus App',
    description: 'PaisiQ is a local-first personal expense and budget tracker from TuneOnus.',
  },
};

export default function PaisiQAppPage() {
  return (
    <>
      <Navbar />
      <main className="container section" style={{ paddingTop: '120px', minHeight: '80vh' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <p className="eyebrow">PaisiQ</p>
          <h1>PaisiQ</h1>
          <p style={{ marginTop: '1rem', color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.8 }}>
            PaisiQ is a local-first personal expense and budget tracker from TuneOnus. It keeps financial data on the device, supports multiple currencies, allows exporting data, and includes optional local reminder notifications.
          </p>
          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link
              href="/privacy/paisiq"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.9rem 1.6rem',
                borderRadius: '999px',
                border: '1px solid var(--border-color)',
                background: 'transparent',
                color: 'var(--text-color)',
                textDecoration: 'none',
                fontWeight: 600,
              }}
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
