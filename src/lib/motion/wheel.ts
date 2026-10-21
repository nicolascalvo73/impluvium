import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const PUSH = 4; // desplazamiento hacia afuera (px del viewBox) del cuadrante activo o con hover
const DIR: Record<string, [number, number]> = { urbano: [-1, -1], humano: [1, -1], economico: [1, 1], gobierno: [-1, 1] };

/** Rueda del municipio: entrada, hover y cambio de panel. La lógica de selección vive en MunicipalityWheel.astro. */
export function initWheelMotion(): void {
  document.querySelectorAll<HTMLElement>('[data-wheel]').forEach((root) => {
    const quads = [...root.querySelectorAll<SVGGElement>('.quad')];
    const center = root.querySelector<SVGElement>('svg > circle');

    const push = (el: SVGGElement, on: boolean) => {
      const [dx, dy] = DIR[el.dataset.area ?? ''] ?? [0, 0];
      const active = el.getAttribute('aria-expanded') === 'true';
      const k = on || active ? 1 : 0;
      gsap.to(el, { x: dx * PUSH * k, y: dy * PUSH * k, duration: 0.4, ease: 'power3.out', overwrite: 'auto' });
    };

    // Entrada: los cuadrantes giran y escalan desde el centro.
    gsap.set(quads, { transformOrigin: '200px 200px', opacity: 0, scale: 0.85, rotation: -12 });
    const svg = root.querySelector('svg');
    ScrollTrigger.create({
      trigger: svg,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        gsap.to(quads, { opacity: 1, scale: 1, rotation: 0, duration: 0.8, ease: 'back.out(1)', stagger: 0.08, onComplete: () => quads.forEach((q) => push(q, false)) });
        if (center) gsap.from(center, { scale: 0, transformOrigin: '200px 200px', duration: 0.6, ease: 'back.out(1.2)', delay: 0.35 });
      },
    });

    quads.forEach((q) => {
      q.addEventListener('pointerenter', () => push(q, true));
      q.addEventListener('pointerleave', () => push(q, false));
      q.addEventListener('focus', () => push(q, true));
      q.addEventListener('blur', () => push(q, false));
    });

    // Cuando cambia la selección: el cuadrante activo se desplaza y el panel entra suavemente.
    root.addEventListener('wheel:select', (event) => {
      const { id } = (event as CustomEvent<{ id: string | null }>).detail;
      quads.forEach((q) => push(q, false));
      if (!id) return;
      const panel = root.querySelector<HTMLElement>(`[data-panel="${id}"]`);
      if (panel) gsap.fromTo(panel, { opacity: 0, y: -4 }, { opacity: 1, y: 0, duration: 0.35, ease: 'power3.out', clearProps: 'all' });
      const items = panel?.querySelectorAll('li, .collab');
      if (items?.length) gsap.from(items, { opacity: 0, x: -5, duration: 0.3, stagger: 0.04, ease: 'power2.out', delay: 0.08, clearProps: 'all' });
    });
  });
}
