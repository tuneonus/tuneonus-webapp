import type { Metadata } from 'next';
import { siteConfig } from './site';

export function createPageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | TuneOnus`,
      description,
      url: path,
      siteName: siteConfig.name,
      type: 'website',
      images: [{
        url: siteConfig.ogImage,
        width: 1024,
        height: 1024,
        alt: 'TuneOnus — Tune The Future',
        type: 'image/jpeg',
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | TuneOnus`,
      description,
      images: [siteConfig.ogImage],
    },
  };
}
