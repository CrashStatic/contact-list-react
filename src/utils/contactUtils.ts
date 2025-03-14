import {Contact, LetterProps} from "../types/types";

export function filterContactsByLetter(contacts: Contact[], letter: LetterProps) {
  return contacts.filter(contact => contact.name.toLowerCase().startsWith(letter.id));
}

export function updateContactList(contacts: Contact[], updatedContact: Contact) {
  return contacts.map(contact =>
    contact.id === updatedContact.id ? updatedContact : contact
  );
}

export function removeContact(contacts: Contact[], id: string) {
  return contacts.filter(contact => contact.id !== id);
}
