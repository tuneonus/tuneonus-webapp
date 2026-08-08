import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { apps } from '../../content/apps';
import { absoluteUrl } from '../../lib/site';

export const metadata: Metadata = {
  title: 'Apps | TuneOnus',
  description: 'Explore TuneOnus apps and discover PaisiQ, a local-first personal expense and budget tracker.',
  alternates: { canonical: '/apps' },
  openGraph: {
    title: 'Apps | TuneOnus',
    description: 'Explore TuneOnus apps and discover PaisiQ, a local-first personal expense and budget tracker.',
    url: absoluteUrl('/apps'),
  },
  twitter: {
    title: 'Apps | TuneOnus',
    description: 'Explore TuneOnus apps and discover PaisiQ, a local-first personal expense and budget tracker.',
  },
};

export default function AppsPage() {
  return (
    <>
      <Navbar />
      <main className="container section" style={{ paddingTop: '120px', minHeight: '80vh' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <p className="eyebrow">Apps</p>
          <h1>TuneOnus apps</h1>
          <p style={{ marginTop: '1rem', color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.8 }}>
            TuneOnus is a developer brand for software products and digital services. Here you can find the first app launch from TuneOnus, with a clean structure that supports future mobile and web products.
          </p>
        </div>

        <div style={{ marginTop: '3rem', display: 'grid', gap: '1.5rem' }}>
          {apps.map((app) => (
            <article key={app.slug} style={{ padding: '2rem', borderRadius: '1.25rem', border: '1px solid var(--border-color)', background: 'var(--card-bg)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap' }}>
                <div style={{ maxWidth: 'calc(100% - 160px)' }}>
                  <h2 style={{ margin: 0 }}>{app.name}</h2>
                  <p style={{ margin: '0.75rem 0', color: 'var(--text-muted)' }}>{app.tagline}</p>
                </div>
                <Link
                  href={app.detailsPath}
                  style={{
                    alignSelf: 'center',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0.9rem 1.6rem',
                    borderRadius: '999px',
                    background: 'var(--text-color)',
                    color: 'var(--background-color)',
                    textDecoration: 'none',
                    fontWeight: 600,
                  }}
                >
                  Learn more
                </Link>
              </div>
              <p style={{ marginTop: '1.5rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>{app.description}</p>
              <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href={app.privacyPath}>Privacy Policy</Link>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
