import {Contact, ErrorInput, Validate} from "../types/types";
import {ERROR_MESSAGES, LETTERS_REGEX, MINIMUM_LENGTH, PHONE_REGEX} from "../constants/constants";

export function validateEmptyFields(inputs: string[]): ErrorInput[] {
  const errors: ErrorInput[] = [];
  const fields = ["name", "position", "phone"];

  inputs.forEach((input, index) => {
    if (!input.trim()) {
      errors.push({ input: fields[index], message: ERROR_MESSAGES.REQUIRED });
    }
  });
  return errors;
}

export function validateContactUniqueness(storage: Contact[], contact: Omit<Contact, 'id'>): ErrorInput[] {
  const existingContact = storage.some((existingContact) => (
    existingContact.name.toLowerCase() === contact.name.toLowerCase() &&
    existingContact.position.toLowerCase() === contact.position.toLowerCase() &&
    existingContact.phone === contact.phone
  ));
  return existingContact
    ? [{ input: "name", message: ERROR_MESSAGES.DUPLICATE }]
    : [];
}

function validateLetters(input: string, field: keyof Omit<Contact, "id">): ErrorInput[] {
  const errors: ErrorInput[] = [];

  if (input.length < MINIMUM_LENGTH) {
    errors.push({ input: field, message: ERROR_MESSAGES.MIN_LENGTH(MINIMUM_LENGTH) });
  }

  if (!LETTERS_REGEX.test(input)) {
    errors.push({ input: field, message: ERROR_MESSAGES.ONLY_LETTERS });
  }

  return errors;
}

function validatePhone(phone: string): ErrorInput[] {
  return !PHONE_REGEX.test(phone) ? [{ input: "phone", message: ERROR_MESSAGES.WRONG_PHONE }] : [];
}

export function validateForm(inputs: string[], storage: Contact[]): Validate {
  const errors: ErrorInput[] = [];

  const contactToValidate: Omit<Contact, 'id'> = {
    name: inputs[0],
    position: inputs[1],
    phone: inputs[2]
  };

  errors.push(...validateEmptyFields(inputs));

  if (errors.length > 0) {
    return { isValid: false, errors };
  }

  errors.push(...validateContactUniqueness(storage, contactToValidate));
  errors.push(...validateLetters(inputs[0], 'name'));
  errors.push(...validateLetters(inputs[1], 'position'));
  errors.push(...validatePhone(inputs[2]));

  return errors.length > 0 ? { isValid: false, errors } : { isValid: true, errors: [] };
}
