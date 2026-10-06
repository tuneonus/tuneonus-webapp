import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';
import GooglePlayButton from '../../../components/apps/GooglePlayButton';
import styles from '../../../components/apps/Product.module.css';
import design from './page.module.css';
import { Card } from '../../../components/ui/Card';
import { apps } from '../../../content/apps';
import { absoluteUrl, siteConfig } from '../../../lib/site';

const app = apps[0];
const title = 'PaisiQ — Personal Finance App | TuneOnus';
const description = 'Meet PaisiQ, the personal finance app by TuneOnus for Android. Track expenses and budgets locally, use multiple currencies, and export your data.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: absoluteUrl(app.detailsPath) },
  openGraph: {
    title, description, url: absoluteUrl(app.detailsPath), siteName: siteConfig.name, type: 'website',
    images: [{ url: app.socialImage, width: 1024, height: 500, alt: 'PaisiQ — Money, made clear. Expenses, budgets, and accounts.' }],
  },
  twitter: { card: 'summary_large_image', title, description, images: [app.socialImage] },
};

export default function PaisiQAppPage() {
  return (
    <>
      <Navbar />
      <main className={`section ${styles.page}`}>
        <div className="container">
          <Link href="/apps" className={styles.textLink}>← All apps</Link>
          <div className={design.hero}>
            <div className={design.heroCopy}>
              <p className={design.badge}><span aria-hidden="true" /> Live on Android · {app.category}</p>
              <div className={styles.identity}>
                <h1 className={design.title}>{app.name}<span>Money, made clear.</span></h1>
              </div>
              <p className={styles.brand}>By {app.brand}</p>
              <p className={styles.description}>{app.description}</p>
              <div className={styles.actions}>
                <GooglePlayButton href={app.playStoreUrl} appName={app.name} />
                <Link href={app.privacyPath} className={styles.textLink}>Privacy Policy</Link>
                <a href={`mailto:${siteConfig.email}`} className={styles.textLink}>PaisiQ support</a>
              </div>
            </div>
            <div className={design.heroArt}>
              <Image src={app.icon} alt="PaisiQ app icon" width={256} height={256} preload className={design.heroIcon} />
              <p>Personal Finance</p>
              <span>A TuneOnus app for Android</span>
            </div>
          </div>
          <section className={design.preview} aria-labelledby="screenshots-title">
            <p className={design.sectionLabel}>INSIDE THE APP</p>
            <h2 id="screenshots-title">A clearer view of everyday money.</h2>
            <p className={styles.description}>Explore the overview, expense entry, and spending insights in PaisiQ.</p>
            <figure className={styles.showcase}>
              <a href={app.showcase} target="_blank" rel="noopener noreferrer" className={styles.showcaseLink}
                aria-label="View the PaisiQ three-screen showcase at full size (opens in a new tab)">
                <Image src={app.showcase} width={1794} height={876}
                  alt="PaisiQ promotional graphic showing three phone screens: balance and monthly budget overview, add expense with category and account selection, and spending insights with a chart and category breakdown."
                  sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1200px) calc(100vw - 64px), 1136px"
                  className={styles.showcaseImage} />
              </a>
              <figcaption className={styles.showcaseCaption}>PaisiQ overview, add expense, and insights. Select the image to view it at full size.</figcaption>
            </figure>
          </section>
          <section className={design.features} aria-labelledby="features-title">
            <p className={design.sectionLabel}>BUILT FOR EVERYDAY LIFE</p>
            <h2 id="features-title">Simple tools. More clarity.</h2>
            <div className={styles.featureGrid}>
              {app.features.map((feature, index) => (
                <Card key={feature.title} className={design.feature}>
                  <span className={design.featureNumber} aria-hidden="true">0{index + 1}</span>
                  <h3>{feature.title}</h3>
                  <p className={styles.description}>{feature.description}</p>
                </Card>
              ))}
            </div>
          </section>
          <section className={design.install} aria-labelledby="install-title">
            <div>
              <h2 id="install-title">Get PaisiQ for Android</h2>
              <p className={styles.description}>A personal finance app from TuneOnus, available now on Google Play.</p>
            </div>
            <GooglePlayButton href={app.playStoreUrl} appName={app.name} />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
