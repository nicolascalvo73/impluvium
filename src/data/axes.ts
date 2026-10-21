import azul from '../assets/illustrations/azul-urbanismo.png';
import mostaza from '../assets/illustrations/mostaza-herramientas.png';
import terracota from '../assets/illustrations/terracota-trabajo.png';
import verde from '../assets/illustrations/verde-plusvalia.png';
import type { Axis } from '../types';

/** Color por eje: propuesta de diseño (no definida por el cliente). */
export const axes: Axis[] = [
  {
    id: 'educacion',
    title: 'Educación',
    tone: 'azul',
    illustration: azul,
    items: [
      { title: 'Programas educativos sobre el valor del espacio urbano como sede de la identidad colectiva, orientado a la Educación Primaria' },
      { title: 'Programas educativos sobre educación mediada por tecnologías, orientado a la Educación Primaria' },
      {
        title: 'Programa de actualización en gestión para agentes de la administración pública',
        subitems: ['Charlas-capacitaciones sobre cambios en el mundo laboral en la época actual'],
      },
    ],
  },
  {
    id: 'cultura',
    title: 'Cultura',
    tone: 'durazno',
    illustration: terracota,
    items: [
      {
        title: 'Eventos para el desarrollo y afirmación de la identidad local',
        subitems: [
          'Desarrollo de instalación conceptual y poética-musical con eje en la sensibilización sobre el habitar urbano, el espacio de lo público y la vida en comunidad',
        ],
      },
      { title: 'Puesta en valor de bienes y servicios locales y regionales' },
    ],
  },
  {
    id: 'urbanismo',
    title: 'Urbanismo',
    tone: 'crema',
    illustration: mostaza,
    items: [
      { title: 'Diseño urbano y reglamentaciones' },
      { title: 'Gestión de suelo y desarrollo de plusvalía' },
      { title: 'Seguridad vial' },
      {
        title: 'Energía solar para el consumo urbano de edificios y alumbrado público',
        subitems: [
          'Provisión de alumbrado público de energía solar en sectores estratégicos',
          'Parques solares para el suministro eléctrico urbano',
          'Paneles fotovoltaicos para el suministro eléctrico en edificios públicos',
        ],
      },
    ],
  },
  {
    id: 'arquitectura',
    title: 'Arquitectura',
    tone: 'verde',
    illustration: verde,
    items: [
      {
        title: 'Gestión y desarrollo de proyectos y obras de interés público y patrimoniales',
        subitems: [
          'Programa de restauración de edificios públicos patrimoniales',
          'Dotación de servicios de apoyo para espacios públicos; baños públicos modulares',
          'Concursos de ideas orientados a profesionales de la arquitectura en relación a mejoras de espacios públicos, con eje en la identidad local y regional',
        ],
      },
    ],
  },
];
