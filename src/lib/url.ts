/**
 * Arma una ruta interna respetando `base` (ej. /impluvium).
 * Las páginas terminan en "/" (GitHub Pages sirve cada una como carpeta); los archivos (favicon.svg) no.
 */
export function url(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (path === '/' || path === '') return `${base}/`;
  if (path.startsWith('#')) return path;
  const full = `${base}${path.startsWith('/') ? path : `/${path}`}`;
  return /\.[a-z0-9]+$/i.test(full) || full.endsWith('/') ? full : `${full}/`;
}

/** Ancla de la Home desde cualquier página. */
export function homeAnchor(id: string): string {
  return `${url('/')}#${id}`;
}
