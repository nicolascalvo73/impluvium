const MESES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

/** "29 de septiembre, 2026" (usa UTC para no depender de la zona horaria del build). */
export function longDate(date: Date): string {
  return `${date.getUTCDate()} de ${MESES[date.getUTCMonth()]}, ${date.getUTCFullYear()}`;
}
