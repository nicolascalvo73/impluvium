import { gsap } from 'gsap';

/** Microinteracciones de puntero (solo dispositivos con mouse): botones magnéticos y tarjetas con ilustración que sigue el cursor. */
export function initPointer(): void {
  const mm = gsap.matchMedia();
  mm.add('(hover: hover) and (pointer: fine)', () => {
    const cleanups: Array<() => void> = [];

    document.querySelectorAll<HTMLElement>('.btn').forEach((btn) => {
      const x = gsap.quickTo(btn, 'x', { duration: 0.5, ease: 'elastic.out(1, 0.5)' });
      const y = gsap.quickTo(btn, 'y', { duration: 0.5, ease: 'elastic.out(1, 0.5)' });
      const move = (e: PointerEvent) => {
        const r = btn.getBoundingClientRect();
        x((e.clientX - (r.left + r.width / 2)) * 0.11);
        y((e.clientY - (r.top + r.height / 2)) * 0.15);
      };
      const reset = () => { x(0); y(0); };
      const down = () => gsap.to(btn, { scale: 0.98, duration: 0.1 });
      const up = () => gsap.to(btn, { scale: 1, duration: 0.3, ease: 'back.out(3)' });
      btn.addEventListener('pointermove', move);
      btn.addEventListener('pointerleave', reset);
      btn.addEventListener('pointerdown', down);
      btn.addEventListener('pointerup', up);
      btn.addEventListener('pointerleave', up);
      cleanups.push(() => { btn.removeEventListener('pointermove', move); btn.removeEventListener('pointerleave', reset); });
    });

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

    return () => cleanups.forEach((fn) => fn());
  });
}
