import { gsap } from 'gsap';

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Sacudida corta para un campo inválido. */
export function shake(el: HTMLElement): void {
  if (reduced()) return;
  gsap.fromTo(el, { x: 0 }, { x: 0, keyframes: { x: [-4, 4, -3, 3, -1.5, 0] }, duration: 0.35, ease: 'power1.inOut', clearProps: 'transform' });
}

/** Entrada del mensaje de éxito. */
export function popIn(el: HTMLElement): void {
  if (reduced()) return;
  gsap.fromTo(el, { opacity: 0, y: 6, scale: 0.985 }, { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'back.out(1.2)', clearProps: 'transform' });
}
