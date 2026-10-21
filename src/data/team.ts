import type { Advisor, TeamMember } from '../types';

export const executive: TeamMember[] = [
  { name: 'Arq. Patricio Baldracco', role: 'Presidente', area: 'Diseño urbano y arquitectónico' },
  { name: 'Dr. Arq. Carlos Pizoni', role: 'Secretario', area: 'Economía urbana' },
  // Cargo pendiente: se muestra como marcador, no se rellena.
  { name: 'Dg. Evangelina Morales', area: 'Educación, arte y cultura' },
];

export const advisors: Advisor[] = [
  { name: 'Dra. Arqta. Miriam Liborio', area: 'Urbanismo' },
  { name: 'Mgtr. Arq. Laura Cuezzo', area: 'Patrimonio' },
  { name: 'Esp. Arqta. Marcela Michelutti', area: 'Paisaje' },
  { name: 'Arq. Esp. Bruno Moiraghi', area: 'Espacios escenográficos' },
  { name: 'Lic. Cecilia Castillo', area: 'Gestión cultural' },
  { name: 'Dr. Fernando Peirone', area: 'Educación' },
];

export const friends = {
  name: 'Observatorio Interuniversitario de Sociedad, Tecnología y Educación',
  institutions: ['UNSAM', 'UNIPE', 'UNPAZ'],
};
