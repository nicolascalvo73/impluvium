import type { RestorationStage } from '../types';

export const restoration = {
  title: 'Programa de restauración de edificios públicos patrimoniales',
  stages: [
    {
      n: 1,
      title: 'Firma de convenios',
      items: [
        'Convenio marco de colaboración entre las entidades involucradas (educación, cultura, arquitectura y urbanismo)',
        'Convenio específico para proyectos puntuales',
        'Convenio de incentivos fiscales para patrocinantes',
      ],
    },
    { n: 2, title: 'Evaluación financiera', items: ['Definición de patrocinantes', 'Prefactibilidad económica-financiera'] },
    {
      n: 3,
      title: 'Estudios técnicos iniciales',
      items: [
        'Relevamiento planialtimétrico',
        'Estudio del estado edilicio y de patologías constructivas',
        'Estudio para conservación histórico/patrimonial',
        'Estudio de seguridad e higiene para actividades públicas',
      ],
    },
    {
      n: 4,
      title: 'Proyecto arquitectónico y de actualización escenográfica',
      items: [
        'Proyecto de consolidación edilicia',
        'Cálculos estructurales',
        'Proyecto de restauración edilicia integral',
        'Cálculos de instalaciones sanitarias, termomecánicas y de seguridad',
        'Proyecto de equipamiento e instalaciones escenográficas',
        'Estimación de cómputo y presupuesto de obras',
      ],
    },
    {
      n: 5,
      title: 'Obras de restauración y puesta en valor',
      items: ['Definición de empresa contratista', 'Plan de trabajo y curva financiera', 'Ejecución de obras', 'Certificación de final de obra'],
    },
    {
      n: 6,
      title: 'Programa de gestión cultural',
      items: ['Evento inaugural Impluvium', 'Definición del equipo de gestión cultural', 'Programa de gestión cultural anual'],
    },
  ] satisfies RestorationStage[],
};
