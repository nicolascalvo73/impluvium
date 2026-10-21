import type { WheelArea } from '../types';

export const wheel = {
  title: '¿Cómo se compone un Municipio?',
  center: 'CIUDAD',
  collaborates: ['Gestión urbana', 'Infraestructura', 'Edificios públicos', 'Espacio público'],
  areas: [
    {
      id: 'urbano',
      name: 'Desarrollo urbano',
      color: '#0A9A9F',
      components: ['Infraestructuras', 'Planeamiento', 'Ambiente y paisaje', 'Movilidad'],
      highlighted: true,
      note: 'Es donde colabora IMPLUVIUM',
    },
    { id: 'humano', name: 'Desarrollo humano', color: '#74A05E', components: ['Recreación', 'Trabajo', 'Deporte', 'Identidad'] },
    { id: 'economico', name: 'Desarrollo económico', color: '#F39D35', components: ['Comercio', 'Producción', 'Turismo', 'Servicios'] },
    { id: 'gobierno', name: 'Gobierno', color: '#519CD0', components: ['Salud y seguridad', 'Educación y cultura', 'Recaudación pública', 'Vinculación'] },
  ] satisfies WheelArea[],
};
