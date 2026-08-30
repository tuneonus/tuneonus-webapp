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
        <article style={{ maxWidth: '760px', margin: '0 auto', padding: '0 1.25rem', boxSizing: 'border-box', overflowWrap: 'break-word', wordWrap: 'break-word' }}>
          <p className="eyebrow">Privacy Policy</p>
          <h1>PaisiQ Privacy Policy</h1>
          <p style={{ marginTop: '1rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
            PaisiQ stores financial records locally. Advertising and app-health services may communicate externally, while exports leave only when you explicitly save or share them.
          </p>
          <p style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>Last updated: 30 August 2026</p>

          <section style={{ marginTop: '2.5rem' }}>
            <h2>1. Local financial data</h2>
            <p>
              Transactions, transfers, recurring rules, accounts, categories, budgets, and savings goals are stored in a local SQLite database on your device. Voice audio transcripts, receipt scanner camera photos, and imported gallery images are processed privately and entirely on-device; PaisiQ does not store audio recordings or upload photos to any external server.
            </p>
            <p style={{ marginTop: '0.75rem' }}>
              <strong>PaisiQ does not sell users&apos; personal or financial data.</strong>
            </p>
          </section>

          <section style={sectionStyle}>
            <h2>2. Analytics and diagnostics</h2>
            <p>
              Production builds use Firebase Analytics, Crashlytics, and Performance Monitoring for app-usage statistics, crash reporting, and technical performance diagnostics. These services may process installation identifiers, IP-derived location, device and app information, crash traces, performance measurements, and network URLs without query parameters or payloads.
            </p>
            <p style={{ marginTop: '0.75rem' }}>
              PaisiQ does not add financial amounts, balances, transaction notes, account names, backup contents, or other financial records to this telemetry. Development and preview builds disable collection.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2>3. Advertising</h2>
            <p>
              Google Mobile Ads may receive device, diagnostic, interaction, IP address, and advertising identifier data to deliver, measure, secure, and personalize ads under Google&apos;s policies. Where required, Google&apos;s consent form controls advertising consent and privacy options.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2>4. Notifications</h2>
            <p>
              If you enable reminders or budget alerts, PaisiQ requests notification permission and schedules notifications on your device. Denying permission does not affect expense tracking.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2>5. Home-screen widgets</h2>
            <p>
              If you add home-screen widgets, a summary of your budget progress, spent totals, and spending insights is synced to secure local storage on your device to update the widget layouts. This data remains on-device and is never transmitted externally.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2>6. Exports and sharing</h2>
            <p>
              PDF, CSV, and JSON exports can include dates, amounts, categories, accounts, and notes. Exported data leaves PaisiQ only when you explicitly save it to a chosen folder or share it with another destination. That destination controls its copy.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2>7. Your choices</h2>
            <p>
              You can deny notification permission, manage advertising consent and privacy options where available, choose whether to save or share exports, delete individual records, or erase all local data. Core expense tracking does not require an account or cloud connection.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2>8. Security</h2>
            <p>
              PaisiQ limits financial records to local app storage and disables Android system backup. External telemetry and advertising traffic uses the security protections provided by Google and Firebase. No method of storage or transmission can be guaranteed completely secure.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2>9. Retention and deletion</h2>
            <p>
              Local data remains until you delete records, use Erase all data, clear app storage, or uninstall PaisiQ. Erase all data removes transactions, transfers, recurring rules, accounts, budgets, and preferences, then restores default categories, accounts, and settings.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2>10. Android backup</h2>
            <p>
              PaisiQ disables Android system backup for its app data. This prevents sensitive financial records or an incompatible SQLite database from being silently restored. Use PaisiQ&apos;s explicit backup and restore tools when you need a portable copy.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2>11. Contact</h2>
            <p>
              For privacy questions, contact TuneOnus at{' '}
              <a href={`mailto:${siteConfig.email}`} style={{ wordBreak: 'break-all' }}>
                {siteConfig.email}
              </a>.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
