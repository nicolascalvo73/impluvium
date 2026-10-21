import { formConfig, type FormName } from './form-config';
import { popIn, shake } from './motion/feedback';

/**
 * Conecta un <form data-form="newsletter|contact"> con validación nativa y estado de éxito.
 * En modo 'mock' no se envía nada.
 */
export function initForm(form: HTMLFormElement): void {
  const name = form.dataset.form as FormName;
  const status = form.querySelector<HTMLElement>('[data-status]');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (status) status.hidden = true;

    if (!validate(form)) return;

    if (formConfig.mode === 'live') {
      await submitToService(name, new FormData(form));
    }
    // modo 'mock': no se envía nada.

    form.reset();
    if (status) {
      status.hidden = false;
      popIn(status);
      status.focus();
    }
  });
}

function validate(form: HTMLFormElement): boolean {
  let firstInvalid: HTMLElement | null = null;
  form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('[data-validate]').forEach((el) => {
    const error = form.querySelector<HTMLElement>(`[data-error-for="${el.id}"]`);
    const message = messageFor(el);
    el.setAttribute('aria-invalid', message ? 'true' : 'false');
    if (error) error.textContent = message;
    if (message) shake(el.closest<HTMLElement>('.field') ?? el);
    if (message && !firstInvalid) firstInvalid = el;
  });
  (firstInvalid as HTMLElement | null)?.focus();
  return !firstInvalid;
}

function messageFor(el: HTMLInputElement | HTMLTextAreaElement): string {
  const value = el.value.trim();
  if (el instanceof HTMLInputElement && el.type === 'checkbox') {
    return el.checked ? '' : 'Necesitamos tu consentimiento para continuar.';
  }
  if (el.required && !value) return 'Completá este campo.';
  if (el instanceof HTMLInputElement && el.type === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
    return 'Ingresá un correo electrónico válido.';
  }
  return '';
}

// TODO: implementar el envío real cuando `formConfig.mode` sea 'live'.
async function submitToService(name: FormName, data: FormData): Promise<void> {
  const endpoint = formConfig.endpoints[name];
  if (!endpoint) throw new Error(`Falta el endpoint de "${name}" en form-config.ts`);
  await fetch(endpoint, { method: 'POST', body: data });
}
