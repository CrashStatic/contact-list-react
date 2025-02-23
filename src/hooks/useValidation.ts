import { useState, useCallback } from "react";
import { Contact } from "../components/addContactForm/AddContactForm";
import {validateForm} from "../validate/validate";

export function useValidation(contacts: Contact[]) {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [currentError, setCurrentError] = useState<string | null>(null);

  const validate = useCallback((fields: string[]) => {
    const validationErrors = validateForm(fields, contacts);

    if (!validationErrors.isValid) {
      const errorMessages = Object.fromEntries(
        validationErrors.errors.map((error) => [error.input, error.message])
      );
      setErrors(errorMessages);
      setCurrentError(Object.keys(errorMessages)[0]);
      return false;
    }

    setErrors({});
    setCurrentError(null);
    return true;
  }, [contacts]);

  return { errors, currentError, validate };
}
