import { axes } from '../data/axes';
import { restoration } from '../data/restoration';
import { site } from '../data/site';
import { referents } from '../data/team';
import { url } from './url';

interface SeoInput { title: string; description: string; path: string }

const origin = () => import.meta.env.SITE.replace(/\/$/, '');

export const absoluteUrl = (path: string) => `${origin()}${url(path)}`;

export function buildSeo({ title, description, path }: SeoInput) {
  const fullTitle = path === '/' ? site.homeTitle : `${title} | ${site.fullName}`;
  const home = absoluteUrl('/');
  const canonical = absoluteUrl(path);
  const organization = { '@id': `${home}#organizacion` };
  const website = { '@id': `${home}#sitio` };
  const image = absoluteUrl('/og-image.jpg');

  const graph: Record<string, unknown>[] = [
    {
      '@type': 'NGO',
      ...organization,
      name: site.fullName,
      alternateName: site.name,
      url: home,
      logo: absoluteUrl('/favicon.svg'),
      image,
      description: site.description,
      slogan: site.tagline,
      email: site.email,
      telephone: site.phones.map((p) => p.label),
      address: { '@type': 'PostalAddress', streetAddress: 'Pasaje Courel 860', addressLocality: 'Córdoba', addressRegion: 'Córdoba', addressCountry: 'AR' },
      knowsAbout: axes.map((axis) => axis.title),
      founder: referents.filter((p) => p.role === 'Co-fundador').map((p) => ({ '@type': 'Person', name: p.name.replace(/^(Dr\. )?Arq\. /, '') })),
    },
    { '@type': 'WebSite', ...website, url: home, name: site.fullName, inLanguage: site.locale, publisher: organization },
    { '@type': 'WebPage', '@id': `${canonical}#pagina`, url: canonical, name: fullTitle, description, inLanguage: site.locale, isPartOf: website, about: organization, primaryImageOfPage: image },
  ];

  if (path !== '/' && path !== '/404') {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: home },
        { '@type': 'ListItem', position: 2, name: title, item: canonical },
      ],
    });
  }

  if (path === '/programa-de-restauracion') {
    graph.push({ '@type': 'Service', name: restoration.title, description, provider: organization, url: canonical });
  }

  return {
    title: fullTitle,
    description,
    canonical,
    favicon: url('/favicon.svg'),
    sitemap: url('/sitemap-index.xml'),
    image,
    jsonLd: { '@context': 'https://schema.org', '@graph': graph },
  };
}
