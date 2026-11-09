import type { NavItem } from '../types';

/** Anclas de la Home; `url.ts` les antepone la ruta base. */
export const navItems: (NavItem & { page?: 'programa' })[] = [
  { label: 'Quiénes somos', href: '#quienes-somos' },
  { label: 'Qué hacemos', href: '#que-hacemos' },
  { label: 'Programa de restauración', href: '/programa-de-restauracion', page: 'programa' },
  { label: 'Contacto', href: '#contacto' },
];

export const ctaItem: NavItem = { label: 'Sumate', href: '#colaborar' };

export const legalItems: NavItem[] = [
  { label: 'Política de privacidad', href: '/politica-de-privacidad' },
  { label: 'Términos de uso', href: '/terminos-de-uso' },
];
