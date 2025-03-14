import { useState, useCallback } from "react";
import { validateForm} from "../validate/validate";
import {Contact, CurrentError, Validate, ValidateFunction, ValidationErrors} from "../types/types";

export function useValidation(contacts: Contact[]) {
  const [errors, setErrors] = useState<ValidationErrors>(null);
  const [currentError, setCurrentError] = useState<CurrentError>(null);

  const validate: ValidateFunction = useCallback((fields: string[]) => {
    const validationErrors: Validate = validateForm(fields, contacts);

    if (!validationErrors.isValid) {
      const errorMessages = Object.fromEntries(
        validationErrors.errors.map((error) => [error.input, error.message])
      );
      setErrors(errorMessages);
      setCurrentError(Object.keys(errorMessages)[0]);
      return false;
    }

    setErrors(null);
    setCurrentError(null);
    return true;
  }, [contacts]);

  return { errors, currentError, validate };
}
