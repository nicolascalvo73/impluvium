import { gsap } from 'gsap';

/** Entrada del hero (línea de tiempo) + parallax de la foto al salir. */
export function initHero(): void {
  const hero = document.querySelector<HTMLElement>('.hero');
  if (!hero) return;

  const q = <T extends HTMLElement>(sel: string) => hero.querySelector<T>(sel);
  const photo = q('[data-hero-photo]');
  const shade = q('.shade');
  const title = q('[data-hero="title"]');
  const facts = document.querySelector<HTMLElement>('.facts-wrap');

  // Titular: cada palabra sube desde una máscara. El texto sigue siendo legible para lectores de pantalla.
  let words: HTMLElement[] = [];
  if (title) {
    const parts = (title.textContent ?? '').split(/(\s+)/);
    title.textContent = '';
    parts.forEach((part) => {
      if (/^\s+$/.test(part) || part === '') return title.append(' ');
      const mask = document.createElement('span');
      mask.style.cssText = 'display:inline-block;overflow:hidden;vertical-align:top;padding-bottom:0.12em;margin-bottom:-0.12em';
      const word = document.createElement('span');
      word.style.display = 'inline-block';
      word.textContent = part;
      mask.append(word);
      title.append(mask);
      words.push(word);
    });
    gsap.set(words, { yPercent: 60 });
    gsap.set(title, { opacity: 1 });
  }

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  if (photo) tl.fromTo(photo, { scale: 1.09 }, { scale: 1, duration: 1.8, ease: 'power2.out' }, 0);
  if (shade) tl.fromTo(shade, { opacity: 0 }, { opacity: 1, duration: 0.8, ease: 'power1.out' }, 0);
  tl.fromTo('[data-hero="mark"]', { opacity: 0, y: 12, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 0.7 }, 0.2)
    .fromTo('[data-hero="eyebrow"]', { opacity: 0, x: -10 }, { opacity: 1, x: 0, duration: 0.6 }, 0.35);
  if (words.length) tl.to(words, { yPercent: 0, duration: 0.75, stagger: 0.07 }, 0.4);
  tl.fromTo('[data-hero="support"]', { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.7 }, 0.8)
    .fromTo('[data-hero="actions"] > *', { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, clearProps: 'transform' }, 0.95);
  if (facts) tl.fromTo(facts, { opacity: 0, y: 35 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power4.out' }, 1.1);

  // Parallax: la foto se desplaza más lento que el scroll.
  if (photo) {
    gsap.to(photo, {
      yPercent: 3.5,
      ease: 'none',
      scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true },
    });
  }
}
