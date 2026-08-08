import type { Metadata } from 'next';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';
import { absoluteUrl } from '../../../lib/site';

export const metadata: Metadata = {
  title: 'PaisiQ Privacy Policy',
  description: 'PaisiQ privacy policy for local-first expense and budget tracking with optional reminder notifications.',
  alternates: { canonical: '/privacy/paisiq' },
  openGraph: {
    title: 'PaisiQ Privacy Policy',
    description: 'PaisiQ privacy policy for local-first expense and budget tracking with optional reminder notifications.',
    url: absoluteUrl('/privacy/paisiq'),
  },
  twitter: {
    title: 'PaisiQ Privacy Policy',
    description: 'PaisiQ privacy policy for local-first expense and budget tracking with optional reminder notifications.',
  },
};

export default function PaisiQPrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="container section" style={{ paddingTop: '120px', minHeight: '80vh' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <p className="eyebrow">Privacy Policy</p>
          <h1>PaisiQ Privacy Policy</h1>
          <p style={{ marginTop: '1rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
            This Privacy Policy describes how TuneOnus handles information related to PaisiQ, a local-first personal expense and budget tracker mobile app.
          </p>

          <section style={{ marginTop: '2.5rem' }}>
            <h2>1. Introduction</h2>
            <p>
              TuneOnus is a developer brand providing software products and digital services. PaisiQ is an app designed to store your expense and budget information locally on your device.
            </p>
          </section>

          <section style={{ marginTop: '1.75rem' }}>
            <h2>2. Information and data handling</h2>
            <p>
              PaisiQ stores your financial entries, budgets, currencies, and related settings on the device. It does not require user accounts or banking credentials.
            </p>
          </section>

          <section style={{ marginTop: '1.75rem' }}>
            <h2>3. Local device storage</h2>
            <p>
              All data entered in PaisiQ is stored locally on the user&apos;s device using SQLite or equivalent local storage. Your expense and budget data remains on the device unless you choose to export it.
            </p>
          </section>

          <section style={{ marginTop: '1.75rem' }}>
            <h2>4. Network/server data transmission</h2>
            <p>
              PaisiQ does not transmit personal expense or budget data to external servers as part of normal use. If any network-capable feature is added in the future, this policy will be updated accordingly.
            </p>
          </section>

          <section style={{ marginTop: '1.75rem' }}>
            <h2>5. Notifications and permissions</h2>
            <p>
              PaisiQ supports optional local daily reminder notifications. Notification permission is requested only when you enable the reminder feature.
            </p>
          </section>

          <section style={{ marginTop: '1.75rem' }}>
            <h2>6. Data export</h2>
            <p>
              The app supports exporting data in CSV or JSON format through your device&apos;s native share functionality. Exported files are created on the device and shared through the system share sheet.
            </p>
          </section>

          <section style={{ marginTop: '1.75rem' }}>
            <h2>7. Data deletion</h2>
            <p>
              PaisiQ includes an erase-all-data function so you can delete your expense and budget data from the device at any time.
            </p>
          </section>

          <section style={{ marginTop: '1.75rem' }}>
            <h2>8. Third-party services</h2>
            <p>
              PaisiQ does not use analytics or third-party services to collect user expense or budget data at this time. If third-party services are added later, this policy will be updated.
            </p>
          </section>

          <section style={{ marginTop: '1.75rem' }}>
            <h2>9. Children&apos;s privacy</h2>
            <p>
              PaisiQ is not intended for children under 13. Guardians should review the app before use by younger individuals.
            </p>
          </section>

          <section style={{ marginTop: '1.75rem' }}>
            <h2>10. Security</h2>
            <p>
              While PaisiQ stores data locally, standard device security applies. The app does not guarantee protection beyond the controls available on your device.
            </p>
          </section>

          <section style={{ marginTop: '1.75rem' }}>
            <h2>11. Changes to this Privacy Policy</h2>
            <p>
              TuneOnus may update this Privacy Policy as the app evolves. Changes will be effective when posted on this page.
            </p>
          </section>

          <section style={{ marginTop: '1.75rem' }}>
            <h2>12. Contact information</h2>
            <p>
              For questions about this policy, email us at <a href="mailto:support@tuneonus.com">support@tuneonus.com</a>.
            </p>
          </section>

          <section style={{ marginTop: '1.75rem' }}>
            <h2>13. Effective date</h2>
            <p>Last updated: August 8, 2026.</p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
