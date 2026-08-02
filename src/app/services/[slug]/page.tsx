import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServicePage from '../../../components/services/ServicePage';
import { JsonLd } from '../../../components/seo/JsonLd';
import { servicePages, servicesBySlug } from '../../../content/services';
import { createPageMetadata } from '../../../lib/metadata';
import { siteConfig } from '../../../lib/site';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return servicePages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesBySlug[slug];
  if (!service) return {};
  return createPageMetadata(service.title, service.description, `/services/${service.slug}`);
}

export default async function ServiceRoute({ params }: Props) {
  const { slug } = await params;
  const service = servicesBySlug[slug];
  if (!service) notFound();
  const url = `${siteConfig.url}/services/${service.slug}`;

  return (
    <>
      <JsonLd data={[
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
            { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteConfig.url}/services` },
            { '@type': 'ListItem', position: 3, name: service.shortName, item: url },
          ],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: service.name,
          description: service.description,
          url,
          provider: { '@id': `${siteConfig.url}/#organization` },
          serviceType: service.shortName,
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: service.faqs.map(({ question, answer }) => ({
            '@type': 'Question',
            name: question,
            acceptedAnswer: { '@type': 'Answer', text: answer },
          })),
        },
      ]} />
      <ServicePage service={service} />
    </>
  );
}
