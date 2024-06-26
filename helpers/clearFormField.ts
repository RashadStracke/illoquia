import type { FormField } from '../types';
import { simulateEvent } from './simulateEvent';

/**
 * Clears the form field's value and emits an input and changed event.
 * If the field is a checkbox or a radio, it will unselect it.
 * @param field
 */
export const clearFormField = (field: FormField): void => {
  const { type } = field;

  if (field instanceof HTMLInputElement && ['checkbox', 'radio'].includes(type) && field.checked) {
    // Reset the field's value
    field.checked = false;

    // Emit DOM events
    simulateEvent(field, ['click', 'input', 'change']);

    return;
  }

  // Reset the field's value
  field.value = '';

  // Emit DOM events
  simulateEvent(field, ['input', 'change']);
};
