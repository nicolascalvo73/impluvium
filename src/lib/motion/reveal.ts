import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Nota: no usar clearProps sobre opacity ni clipPath: el CSS inicial (global.css) los oculta y volvería a aplicarse.
 * [data-reveal]: aparece subiendo. [data-stagger]: sus hijos aparecen en cascada. [data-img-reveal]: cortina + zoom.
 */
export function initReveals(): void {
  const singles = gsap.utils.toArray<HTMLElement>('[data-reveal]');
  gsap.set(singles, { y: 18 });
  ScrollTrigger.batch(singles, {
    start: 'top 94%',
    once: true,
    onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.06, overwrite: true }),
  });

  gsap.utils.toArray<HTMLElement>('[data-stagger]').forEach((group) => {
    const items = [...group.children] as HTMLElement[];
    gsap.set(items, { y: 20 });
    ScrollTrigger.create({
      trigger: group,
      start: 'top 94%',
      once: true,
      onEnter: () => gsap.to(items, { opacity: 1, y: 0, duration: 0.65, ease: 'power3.out', stagger: 0.055, clearProps: 'transform' }),
    });
  });

  gsap.utils.toArray<HTMLElement>('[data-img-reveal]').forEach((frame) => {
    const img = frame.querySelector('img');
    gsap.set(frame, { clipPath: 'inset(0 0 100% 0)' });
    if (img) gsap.set(img, { scale: 1.12 });
    ScrollTrigger.create({
      trigger: frame,
      start: 'top 96%',
      once: true,
      onEnter: () => {
        gsap.to(frame, { clipPath: 'inset(0 0 0% 0)', duration: 0.8, ease: 'power3.inOut' });
        if (img) gsap.to(img, { scale: 1, duration: 1.1, ease: 'power3.out', clearProps: 'transform' });
      },
    });
  });

  // Seguro: al llegar al final de la página, todo lo que siga oculto se muestra
  // (un elemento cerca del final puede no alcanzar nunca su umbral de entrada).
  ScrollTrigger.create({
    start: () => ScrollTrigger.maxScroll(window) - 4,
    end: 'max',
    onEnter: () => {
      gsap.to('[data-reveal], [data-stagger] > *', { opacity: 1, y: 0, duration: 0.5, overwrite: 'auto', clearProps: 'transform' });
      gsap.to('[data-img-reveal]', { clipPath: 'inset(0 0 0% 0)', duration: 0.5, overwrite: 'auto' });
    },
  });
}
