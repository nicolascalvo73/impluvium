import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/** Encabezado: se oculta al bajar y vuelve al subir; barra de progreso; sección activa en el menú. */
export function initHeader(): void {
  const header = document.querySelector<HTMLElement>('.site-header');
  const bar = document.querySelector<HTMLElement>('[data-progress]');

  if (bar) {
    gsap.set(bar, { scaleX: 0, transformOrigin: '0 50%' });
    gsap.to(bar, { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: 0.3 } });
  }

  if (header) {
    const show = () => gsap.to(header, { yPercent: 0, duration: 0.35, ease: 'power3.out', overwrite: true });
    const hide = () => gsap.to(header, { yPercent: -100, duration: 0.35, ease: 'power3.out', overwrite: true });
    const menuOpen = () => header.querySelector('[data-menu-toggle]')?.getAttribute('aria-expanded') === 'true';

    ScrollTrigger.create({
      start: 0,
      end: 'max',
      onUpdate: (self) => {
        if (self.direction === 1 && self.scroll() > 400 && !menuOpen()) hide();
        else if (self.direction === -1) show();
      },
    });
    header.addEventListener('focusin', show);
  }

  // Resalta en el menú la sección visible (solo enlaces a anclas de esta página).
  document.querySelectorAll<HTMLAnchorElement>('.site-header .nav a[href*="#"]').forEach((link) => {
    const id = link.hash.slice(1);
    const section = id && document.getElementById(id);
    if (!section) return;
    ScrollTrigger.create({
      trigger: section,
      start: 'top 45%',
      end: 'bottom 45%',
      onToggle: (self) => link.classList.toggle('is-active', self.isActive),
    });
  });
}
