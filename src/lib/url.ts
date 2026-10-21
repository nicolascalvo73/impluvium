/** Arma una ruta interna respetando `base` (ej. /impluvium). */
export function url(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (path === '/' || path === '') return `${base}/`;
  if (path.startsWith('#')) return path;
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

/** Ancla de la Home desde cualquier página. */
export function homeAnchor(id: string): string {
  return `${url('/')}#${id}`;
}
