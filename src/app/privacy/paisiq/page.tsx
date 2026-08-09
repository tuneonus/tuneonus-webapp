import type { Metadata } from 'next';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';
import { absoluteUrl, siteConfig } from '../../../lib/site';

const title = 'PaisiQ Privacy Policy | TuneOnus';
const description = 'Learn how PaisiQ stores local financial data and uses advertising, notifications, exports, and Android application services.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: absoluteUrl('/privacy/paisiq') },
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    url: absoluteUrl('/privacy/paisiq'),
  },
  twitter: {
    title,
    description,
  },
};

const sectionStyle = { marginTop: '1.75rem' };

export default function PaisiQPrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="container section" style={{ paddingTop: '120px', minHeight: '80vh' }}>
        <article style={{ maxWidth: '760px', margin: '0 auto' }}>
          <p className="eyebrow">Privacy Policy</p>
          <h1>PaisiQ Privacy Policy</h1>
          <p style={{ marginTop: '1rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
            PaisiQ is a personal money-tracking application developed by TuneOnus. This policy explains how PaisiQ stores, processes, exports, and deletes information.
          </p>
          <p style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>Last updated: August 9, 2026</p>

          <section style={{ marginTop: '2.5rem' }}>
            <h2>1. Information stored locally</h2>
            <p>
              Transactions, income, expenses, categories, budgets, notes, preferences, and related financial records are stored locally in a SQLite database on the user&apos;s device.
            </p>
            <p style={{ marginTop: '0.75rem' }}>
              PaisiQ V1 does not provide user accounts, cloud synchronization, bank connections, or server-side storage of transaction records.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2>2. Advertising</h2>
            <p>
              PaisiQ uses Google Mobile Ads to display advertisements. Google and its partners may process information such as device identifiers, advertising identifiers, IP address, diagnostic information, app interactions, and approximate location derived from network information.
            </p>
            <p style={{ marginTop: '0.75rem' }}>
              PaisiQ requests non-personalized advertisements where configured, but this does not mean that Google processes no data.
            </p>
            <p style={{ marginTop: '0.75rem' }}>
              Read the{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                Google Privacy Policy
              </a>.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2>3. Application updates</h2>
            <p>
              PaisiQ V1 does not use CodePush or another system to download executable JavaScript updates independently.
            </p>
            <p style={{ marginTop: '0.75rem' }}>
              Production application updates are distributed through Google Play. Google Play may process information when checking for, downloading, or installing updates.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2>4. Notifications</h2>
            <p>
              PaisiQ can schedule optional local reminders and budget alerts.
            </p>
            <p style={{ marginTop: '0.75rem' }}>
              Notification permission is requested only when the user enables a notification feature. If permission is denied, PaisiQ remains usable and reminders stay disabled.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2>5. Exports and user-initiated sharing</h2>
            <p>
              Users can export their PaisiQ data as CSV or JSON. An export may contain transaction dates, types, categories, amounts, accounts, notes, budgets, and other locally stored information.
            </p>
            <p style={{ marginTop: '0.75rem' }}>
              Exported data leaves PaisiQ only when the user explicitly selects a destination through the device&apos;s system sharing interface. The selected application or service is responsible for its copy of the exported data.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2>6. Data retention and deletion</h2>
            <p>Local data remains on the device until the user:</p>
            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginTop: '0.75rem' }}>
              <li>deletes individual records;</li>
              <li>uses PaisiQ&apos;s “Erase all data” option;</li>
              <li>clears the application&apos;s storage; or</li>
              <li>uninstalls PaisiQ.</li>
            </ul>
            <p style={{ marginTop: '0.75rem' }}>
              “Erase all data” deletes transactions, budgets, and preferences and restores only the application&apos;s default categories and settings.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2>7. Android backup</h2>
            <p>
              PaisiQ V1 disables Android system backup for application data. This prevents sensitive financial records or an incompatible SQLite database from being restored automatically.
            </p>
            <p style={{ marginTop: '0.75rem' }}>
              Users may create a portable copy through the export feature. PaisiQ V1 does not support importing or restoring exported files.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2>8. Data security</h2>
            <p>
              PaisiQ uses platform-provided application storage to isolate its local database. Users should protect access to their devices and carefully choose where exported files are shared or stored.
            </p>
            <p style={{ marginTop: '0.75rem' }}>No storage or transmission method can guarantee absolute security.</p>
          </section>

          <section style={sectionStyle}>
            <h2>9. Children&apos;s privacy</h2>
            <p>
              PaisiQ is not specifically directed at children. The application does not knowingly create profiles or collect transaction data from children through a PaisiQ account because PaisiQ does not provide accounts.
            </p>
            <p style={{ marginTop: '0.75rem' }}>
              Advertisements displayed in the application must be configured consistently with the app&apos;s Google Play target-audience declaration.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2>10. Third-party services</h2>
            <p>PaisiQ may interact with:</p>
            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginTop: '0.75rem' }}>
              <li>Google Mobile Ads for advertising;</li>
              <li>Google Play for application distribution and updates;</li>
              <li>the Android notification system for optional reminders; and</li>
              <li>applications selected by the user when sharing exports.</li>
            </ul>
            <p style={{ marginTop: '0.75rem' }}>These services operate under their respective privacy policies.</p>
          </section>

          <section style={sectionStyle}>
            <h2>11. Changes to this policy</h2>
            <p>
              TuneOnus may update this policy when PaisiQ&apos;s functionality, third-party services, or legal requirements change. The latest version and effective date will remain available on this page.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2>12. Contact</h2>
            <p>
              For privacy questions, contact TuneOnus at{' '}
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
