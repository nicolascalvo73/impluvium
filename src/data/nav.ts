import type { NavItem } from '../types';

/** Anclas de la Home; `url.ts` les antepone la ruta base. */
export const navItems: (NavItem & { page?: 'programa' | 'blog' })[] = [
  { label: 'Quiénes somos', href: '#quienes-somos' },
  { label: 'Qué hacemos', href: '#que-hacemos' },
  { label: 'Programa de restauración', href: '/programa-de-restauracion', page: 'programa' },
  { label: 'Antecedentes', href: '#antecedentes' },
  { label: 'Blog', href: '/blog', page: 'blog' },
  { label: 'Contacto', href: '#contacto' },
];

export const ctaItem: NavItem = { label: 'Sumate', href: '#colaborar' };
