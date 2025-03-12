import InteractionContainer from "../interaction/InteractionContainer";
import ContactTable from "../contacTable/ContactTable";
import { ALPHABET } from "../../alphabet/alphabet";
import './Main.css';
import {Contact} from "../addContactForm/AddContactForm";
import {useCallback} from "react";
import {useLocalStorage} from "../../hooks/useLocalStorage";
import {removeContact, updateContactList} from "../../utils/contactUtils";

export default function Main() {
  const [contacts, setContacts] = useLocalStorage<Contact[]>("contacts", []);

  function handleAddContact(newContact: Contact) {
    const contactWithId = {
      ...newContact,
      id: Date.now().toString()
    };
    setContacts(prevContacts => [...prevContacts, contactWithId]);
  }

  function handleRemoveAllContacts() {
    setContacts([]);
  }

  const handleRemoveContact = useCallback((id: string) => {
    setContacts((prevContacts) => removeContact(prevContacts, id));
  }, [setContacts]);

  const handleEditContact = useCallback((updatedContact: Contact) => {
    setContacts((prevContacts) => updateContactList(prevContacts, updatedContact))
  }, [setContacts])

  return (
    <main className="main">
      <InteractionContainer
        onAddContact={handleAddContact}
        contacts={contacts}
        handleRemoveAllContacts={handleRemoveAllContacts}
        onRemoveContact={handleRemoveContact}
        onEditContact={handleEditContact}
      />
      <ContactTable
        alphabet={ALPHABET}
        contacts={contacts}
        onRemoveContact={handleRemoveContact}
        onEditContact={handleEditContact}
      />
    </main>
  )
}
