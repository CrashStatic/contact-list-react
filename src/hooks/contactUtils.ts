import {Contact} from "../components/addContactForm/AddContactForm";
import {LetterProps} from "../components/letter/Letter";

export function filterContactsByLetter(contacts: Contact[], letter: LetterProps) {
  return contacts.filter(contact => contact.name.toLowerCase().startsWith(letter.id));
}

export function updateContactList(contacts: Contact[], updatedContact: Contact) {
  return contacts.map(contact =>
    contact.id === updatedContact.id ? updatedContact : contact
  );
}

export function removeContactByName(contacts: Contact[], name: string) {
  return contacts.filter(contact => contact.name !== name);
}
