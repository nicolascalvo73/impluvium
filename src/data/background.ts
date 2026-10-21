import tecnoteca from '../assets/photos/tecnoteca-1.jpg';
import obispo from '../assets/photos/obispo-mercadillo-2.jpg';
import alberdi from '../assets/photos/mercado-alberdi-1.jpg';
import corredores from '../assets/photos/corredores-3.jpg';
import fuerza from '../assets/photos/fuerza-x-distancia-1.jpg';
import recorridos from '../assets/photos/recorridos-patrimoniales-1.jpg';
import tren from '../assets/photos/tren-reciclado-1.jpg';
import type { BackgroundItem } from '../types';

export const projects: BackgroundItem[] = [
  { title: 'Tecnoteca', place: 'Ciudad de Rosario, Santa Fe', description: 'Escuela de Tecnología y Oficios Digitales', image: tecnoteca, alt: 'Tecnoteca, Rosario' },
  { title: 'Recuperación del Obispo Mercadillo', place: 'Ciudad de Córdoba, Córdoba', image: obispo, alt: 'Obispo Mercadillo, Córdoba' },
  { title: 'Restauración Mercado de Alberdi', place: 'Ciudad de Córdoba, Córdoba', image: alberdi, alt: 'Mercado de Alberdi, Córdoba' },
  { title: 'Corredor Maipú, Corredor Ambrosio Olmos y Peatonal Ayacucho', place: 'Ciudad de Córdoba, Córdoba', image: corredores, alt: 'Corredores Maipú y Ambrosio Olmos, y peatonal Ayacucho, Córdoba' },
];

export const experiences: BackgroundItem[] = [
  { title: 'Evento Fuerza x Distancia, CAPC', place: 'Noche de los Museos, Ciudad de Córdoba', image: fuerza, alt: 'Evento Fuerza x Distancia en el CAPC, Córdoba' },
  { title: 'Recorridos Patrimoniales', place: 'Municipalidad de Cnel. Moldes, Córdoba', image: recorridos, alt: 'Recorridos patrimoniales, Coronel Moldes' },
  { title: 'Actividades Culturales, Tren Reciclado', place: 'Ciudad de Cnel. Moldes, Córdoba', image: tren, alt: 'Actividades culturales en el tren reciclado, Coronel Moldes' },
];
