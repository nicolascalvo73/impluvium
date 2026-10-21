/**
 * ÚNICO punto de configuración de los formularios (newsletter y contacto).
 *
 * TODO: el sitio es estático (GitHub Pages), por eso hoy los formularios son una MAQUETA:
 * validan, exigen consentimiento y muestran un estado de éxito, pero NO envían nada.
 * Para conectarlos a un servicio (Brevo, Buttondown, Formspree, etc.):
 *   1. cargar el `endpoint` de cada formulario,
 *   2. cambiar `mode` a 'live',
 *   3. adaptar el cuerpo del envío en `src/lib/forms.ts` (función `submitToService`).
 */
export type FormMode = 'mock' | 'live';

export const formConfig = {
  mode: 'mock' as FormMode,
  endpoints: {
    newsletter: '' as string, // TODO: URL del servicio de newsletter
    contact: '' as string, // TODO: URL del servicio de contacto
  },
};

export type FormName = keyof typeof formConfig.endpoints;
