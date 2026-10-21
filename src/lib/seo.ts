import { site } from '../data/site';
import { url } from './url';

interface SeoInput { title: string; description: string; path: string }

const origin = () => import.meta.env.SITE.replace(/\/$/, '');

export function buildSeo({ title, description, path }: SeoInput) {
  const fullTitle = path === '/' ? `${site.fullName} | ${site.tagline}` : `${title} | ${site.fullName}`;
  return {
    title: fullTitle,
    description,
    canonical: `${origin()}${url(path)}`,
    favicon: url('/favicon.svg'),
    image: `${origin()}${url('/og-image.jpg')}`,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: site.fullName,
      url: `${origin()}${url('/')}`,
      email: site.email,
      telephone: site.phones.map((p) => p.label),
      address: { '@type': 'PostalAddress', streetAddress: 'Pasaje Courel 860', addressLocality: 'Córdoba', addressCountry: 'AR' },
      slogan: site.tagline,
    },
  };
}
