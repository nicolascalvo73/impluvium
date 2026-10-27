import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initHeader } from './header';
import { initHero } from './hero';
import { initReveals } from './reveal';
import { initCounters } from './counters';
import { initPointer } from './pointer';

gsap.registerPlugin(ScrollTrigger);

/**
 * Punto de entrada de las animaciones. Solo corre si el visitante no pidió reducir movimiento;
 * en ese caso el CSS no oculta nada y la página se ve en su estado final.
 * Los módulos se activan por atributos: data-reveal, data-stagger, data-img-reveal, data-count,
 * data-tilt y data-hero (ver cada módulo).
 */
const mm = gsap.matchMedia();

mm.add('(prefers-reduced-motion: no-preference)', () => {
  (window as unknown as { __motion: boolean }).__motion = true;
  initHeader();
  initHero();
  initReveals();
  initCounters();
  initPointer();
});

export const EASE = { out: 'power3.out', soft: 'power2.out' } as const;
