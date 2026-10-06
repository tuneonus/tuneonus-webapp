import styles from './Product.module.css';

export default function GooglePlayButton({ href, appName }: { href: string; appName: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={styles.playButton}
      aria-label={`Get ${appName} on Google Play (opens in a new tab)`}>
      <svg width="26" height="30" viewBox="0 0 26 30" fill="currentColor" aria-hidden="true">
        <path d="M2 1.5 24 15 2 28.5Z" />
      </svg>
      <span><span className={styles.playCaption}>Get it on</span><span className={styles.playName}>Google Play</span></span>
    </a>
  );
}
