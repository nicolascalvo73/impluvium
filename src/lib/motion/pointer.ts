import { gsap } from 'gsap';

/** Microinteracciones de puntero (solo dispositivos con mouse): tarjetas con ilustración que sigue el cursor. */
export function initPointer(): void {
  const mm = gsap.matchMedia();
  mm.add('(hover: hover) and (pointer: fine)', () => {
    document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((card) => {
      const art = card.querySelector<HTMLElement>('[data-tilt-art]');
      if (!art) return;
      const x = gsap.quickTo(art, 'x', { duration: 0.6, ease: 'power3.out' });
      const y = gsap.quickTo(art, 'y', { duration: 0.6, ease: 'power3.out' });
      const rot = gsap.quickTo(art, 'rotation', { duration: 0.8, ease: 'power3.out' });
      const lift = gsap.quickTo(card, 'y', { duration: 0.5, ease: 'power3.out' });
      card.addEventListener('pointermove', (e) => {
        const r = card.getBoundingClientRect();
        const nx = (e.clientX - r.left) / r.width - 0.5;
        const ny = (e.clientY - r.top) / r.height - 0.5;
        x(nx * 9); y(ny * 6); rot(nx * 1.5); lift(-3);
      });
      card.addEventListener('pointerleave', () => { x(0); y(0); rot(0); lift(0); });
    });

  });
}
