import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/** [data-count]: cuenta de 0 al valor al entrar en pantalla. */
export function initCounters(): void {
  gsap.utils.toArray<HTMLElement>('[data-count]').forEach((el) => {
    const target = Number(el.dataset.count);
    if (!Number.isFinite(target)) return;
    const state = { v: 0 };
    el.textContent = '0';
    ScrollTrigger.create({
      trigger: el,
      start: 'top 92%',
      once: true,
      onEnter: () =>
        gsap.to(state, {
          v: target,
          duration: 1.4,
          ease: 'power2.out',
          snap: { v: 1 },
          onUpdate: () => { el.textContent = String(state.v); },
        }),
    });
  });
}
