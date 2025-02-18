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
  inputs.forEach((input: string) => {
    if (!input.trim()) {
      errors.push({ input: null, message: 'Fill in all fields!' });
    }
  });
  return errors;
}

export function validateContactUniqueness(storage: Contact[], contact: Contact): Error[] {
  const existingContact = storage.some((existingContact) => (
    existingContact.name?.toLowerCase() === contact.name.toLowerCase() &&
    existingContact.position?.toLowerCase() === contact.position.toLowerCase() &&
    existingContact.phone === contact.phone
  ));
  return existingContact
    ? [{ input: null, message: 'This contact has already been recorded!' }]
    : [];
}

function validateLetters(input: string, minLength: number): Error[] {
  const errors = [];
  const regLetters = /^[a-zA-Z]+$/;

  if (input.length < minLength) {
    errors.push({ input, message: `Value cannot be shorter than ${minLength} letters!` });
  }
  if (!regLetters.test(input)) {
    errors.push({ input, message: 'Value must contain English letters!' });
  }
  return errors;
}

function validatePhone(phone: string): Error[] {
  const regNumbers = /^\+7 \d{3} \d{3} \d{2} \d{2}$/;
  return !regNumbers.test(phone)
    ? [{ input: phone, message: 'Wrong number!' }]
    : [];
}

export function validateForm(inputs: string[], storage: Contact[]): Validate {
  const errors: Error[] = [];

  const contactToValidate: Contact = {
    name: inputs[0],
    position: inputs[1],
    phone: inputs[2]
  };

  errors.push(...validateEmptyFields(inputs));
  errors.push(...validateContactUniqueness(storage, contactToValidate));
  errors.push(...validateLetters(inputs[0], MINIMUM_LENGTH));
  errors.push(...validateLetters(inputs[1], MINIMUM_LENGTH));
  errors.push(...validatePhone(inputs[2]));

  return errors.length > 0 ? { isValid: false, errors } : { isValid: true, errors: [] };
}
