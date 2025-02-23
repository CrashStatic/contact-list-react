import {Contact} from "../components/addContactForm/AddContactForm";

const MINIMUM_LENGTH = 3;

interface Error {
  input: string | null;
  message: string
}

interface Validate {
  isValid: boolean;
  errors: Error[];
}

export function validateEmptyFields(inputs: string[]): Error[] {
  const errors: Error[] = [];
  const fields = ["name", "position", "phone"];

  inputs.forEach((input, index) => {
    if (!input.trim()) {
      errors.push({ input: fields[index], message: 'Fill in all fields!' });
    }
  });
  return errors;
}

export function validateContactUniqueness(storage: Contact[], contact: Omit<Contact, 'id'>): Error[] {
  const existingContact = storage.some((existingContact) => (
    existingContact.name.toLowerCase() === contact.name.toLowerCase() &&
    existingContact.position.toLowerCase() === contact.position.toLowerCase() &&
    existingContact.phone === contact.phone
  ));
  return existingContact
    ? [{ input: "name", message: 'This contact has already been recorded!' }]
    : [];
}

function validateLetters(input: string, minLength: number, field: string): Error[] {
  const errors = [];
  const regLetters = /^[a-zA-Z]+$/;

  if (input.length < minLength) {
    errors.push({ input: field, message: `Value cannot be shorter than ${minLength} letters!` });
  }
  if (!regLetters.test(input)) {
    errors.push({ input: field, message: 'Value must contain English letters!' });
  }
  return errors;
}

function validatePhone(phone: string): Error[] {
  const regNumbers = /^\+7 \d{3} \d{3} \d{2} \d{2}$/;
  return !regNumbers.test(phone)
    ? [{ input: 'phone', message: 'Wrong number!' }]
    : [];
}

export function validateForm(inputs: string[], storage: Contact[]): Validate {
  const errors: Error[] = [];

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
  errors.push(...validateLetters(inputs[0], MINIMUM_LENGTH, 'name'));
  errors.push(...validateLetters(inputs[1], MINIMUM_LENGTH, 'position'));
  errors.push(...validatePhone(inputs[2]));

  return errors.length > 0 ? { isValid: false, errors } : { isValid: true, errors: [] };
}
