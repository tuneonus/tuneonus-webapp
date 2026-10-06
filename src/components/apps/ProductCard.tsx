import Link from 'next/link';
import Image from 'next/image';
import { Card } from '../ui/Card';
import type { AppItem } from '../../content/apps';
import GooglePlayButton from './GooglePlayButton';
import styles from './Product.module.css';

export default function ProductCard({ app, showcase = false }: { app: AppItem; showcase?: boolean }) {
  return (
    <article aria-labelledby={`product-${app.slug}`}>
      <Card className={showcase ? `${styles.productCard} ${styles.showcaseCard}` : styles.productCard}>
        {showcase && (
          <Link href={app.detailsPath} className={styles.cardPreview} aria-label={`Explore ${app.name}`}>
            <Image src={app.showcase} width={1794} height={876}
              alt="PaisiQ overview, expense entry, and spending insights shown on three phone screens."
              sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1200px) calc(100vw - 64px), 1136px"
              preload className={styles.cardPreviewImage} />
            <span className={styles.previewCaption}>Explore the app <span aria-hidden="true">↗</span></span>
          </Link>
        )}
        <div>
          <p className={styles.label}>Live on Android · {app.category}</p>
          <div className={styles.identity}>
            <Image src={app.icon} alt={`${app.name} app icon`} width={72} height={72} className={styles.appIcon} />
            <h2 id={`product-${app.slug}`}>{app.name}</h2>
          </div>
          <p className={styles.brand}>By {app.brand}</p>
          <p className={styles.description}>{app.description}</p>
          {showcase && (
            <ul className={styles.featureTags} aria-label={`${app.name} features`}>
              {app.features.map((feature) => <li key={feature.title}>{feature.title}</li>)}
            </ul>
          )}
        </div>
        <div className={styles.actions}>
          <GooglePlayButton href={app.playStoreUrl} appName={app.name} />
          <Link href={app.detailsPath} className={styles.textLink}>Explore {app.name} →</Link>
          <Link href={app.privacyPath} className={styles.textLink}>Privacy Policy</Link>
        </div>
      </Card>
    </article>
  );
}
