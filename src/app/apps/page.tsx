import type { Metadata } from 'next';
import ProductCard from '../../components/apps/ProductCard';
import styles from '../../components/apps/Product.module.css';
import design from './page.module.css';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { apps } from '../../content/apps';
import { absoluteUrl } from '../../lib/site';

export const metadata: Metadata = {
  title: { absolute: 'Apps | TuneOnus' },
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
      <main className={`section ${styles.page}`}>
        <div className="container">
          <div className={design.intro}>
            <p className={design.eyebrow}>BUILT BY TUNEONUS</p>
            <h1>Small apps.<br /><span className="text-gradient">Everyday possibilities.</span></h1>
            <p className={styles.description}>Explore our live products, starting with PaisiQ, our personal finance app for Android.</p>
          </div>
          <section className={design.collection} aria-labelledby="available-apps-title">
            <div className={design.collectionHeader}>
              <h2 id="available-apps-title">Available now</h2>
              <span className={design.platform}>Android · Google Play</span>
            </div>
            {apps.map((app) => <ProductCard key={app.slug} app={app} showcase />)}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
