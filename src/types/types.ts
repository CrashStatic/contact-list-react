import React from "react";

export type ValidationErrors = { [key: string]: string } | null;
export type CurrentError = string | null;
export type ValidateFunction = (fields: string[]) => boolean;

export interface Contact {
  name: string;
  position: string;
  phone: string;
  id: string;
}

export interface AddContactFormProps {
  addContact: (contact: Contact) => void;
  contacts: Contact[];
  handleRemoveAllContacts: () => void;
  onEditContact: ((updatedContact: Contact) => void);
  onRemoveContact: ((id: string) => void)
}

export interface ContactTableProps {
  alphabetLeft?: LetterProps[],
  alphabetRight?: LetterProps[],
  contacts: Contact[];
  onRemoveContact: (id: string) => void;
  onEditContact: (updateContact: Contact) => void;
}

export interface ContactCardProps extends Contact, Pick<ContactTableProps, "contacts">, Partial<Pick<ContactTableProps, "onRemoveContact" | "onEditContact">> {}

export interface EditPopupProps {
  contact: Contact;
  contacts: Contact[];
  onClose: () => void;
  onSave: (contact: Contact) => void;
}

export interface LetterProps extends Partial<ContactTableProps>{
  letter: string;
  id: string;
}

export interface SearchPopupProps extends ContactTableProps {
  onClose: () => void;
  input: string;
  filteredContacts: Contact[];
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleShowAll: () => void
}

export interface SearchAreaProps extends Pick<SearchPopupProps, 'filteredContacts' | 'onRemoveContact' | 'onEditContact' | 'contacts'> {}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  ariaLabel: string;
  children: React.ReactNode;
}

export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
}

export interface ErrorInput {
  input: string | null;
  message: string
}

export interface Validate {
  isValid: boolean;
  errors: ErrorInput[];
}
