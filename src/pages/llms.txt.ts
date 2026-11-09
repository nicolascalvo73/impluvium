import type { APIRoute } from 'astro';
import { about } from '../data/about';
import { axes } from '../data/axes';
import { managementModel } from '../data/management';
import { restoration } from '../data/restoration';
import { site } from '../data/site';
import { referents } from '../data/team';
import { absoluteUrl } from '../lib/seo';

/** Resumen del sitio para asistentes de IA (https://llmstxt.org), generado desde los mismos datos que las páginas. */
const body = `# ${site.fullName}

> ${site.description}

${about.definition}

## Páginas

- [Inicio](${absoluteUrl('/')}): quiénes somos, qué hacemos, modelo de gestión, equipo y cómo colaborar.
- [${restoration.title}](${absoluteUrl('/programa-de-restauracion')}): las seis etapas del programa.
- [Contacto](${absoluteUrl('/')}#contacto): dirección, teléfonos, correo y formulario.

## Ejes de trabajo

${axes.map((axis) => `### ${axis.title}\n\n${axis.items.map((item) => `- ${item.title}`).join('\n')}`).join('\n\n')}

## Modelo de gestión

${managementModel.map((step, i) => `${i + 1}. ${step}`).join('\n')}

## ${restoration.title}

${restoration.stages.map((stage) => `${stage.n}. ${stage.title}`).join('\n')}

## Equipo

${referents.map((person) => `- ${person.name}, ${person.role}`).join('\n')}

## Contacto

- Dirección: ${site.address}, Argentina
- Teléfonos: ${site.phones.map((phone) => phone.label).join(' / ')}
- Correo electrónico: ${site.email}

## Información legal

- [Política de privacidad](${absoluteUrl('/politica-de-privacidad')})
- [Términos de uso](${absoluteUrl('/terminos-de-uso')})
`;

export const GET: APIRoute = () => new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
