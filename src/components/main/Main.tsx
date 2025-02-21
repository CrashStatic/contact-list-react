import InteractionContainer from "../interaction/InteractionContainer";
import ContactTable from "../contacTable/ContactTable";
import {ALPHABET_A_M, ALPHABET_N_Z} from "../../alphabet/Alphabet";
import './Main.css';
import {Contact} from "../addContactForm/AddContactForm";
import {useEffect, useState} from "react";

export default function Main() {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    const savedContacts: string | null = localStorage.getItem("contacts");
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }, [contacts]);

  function handleAddContact(newContact: Contact) {
    const contactWithId = {
      ...newContact,
      id: Date.now().toString()
    };
    setContacts(prevContacts => [...prevContacts, contactWithId]);
  }

  function handleRemoveAllContacts() {
    setContacts([]);
    localStorage.removeItem("contacts");
  }

  function handleRemoveContact(name: string) {
    const updatedContacts = contacts.filter(contact => contact.name !== name);
    setContacts(updatedContacts);
    localStorage.setItem("contacts", JSON.stringify(updatedContacts));
  }

  function handleEditContact(updatedContact: Contact) {
    const updatedContacts = contacts.map(contact =>
      contact.id === updatedContact.id ? updatedContact : contact
    );
    setContacts(updatedContacts);  // Обновляем состояние с новым контактами
    localStorage.setItem("contacts", JSON.stringify(updatedContacts));  // Обновляем localStorage
  }

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
        alphabetLeft={ALPHABET_A_M}
        alphabetRight={ALPHABET_N_Z}
        contacts={contacts}
        onRemoveContact={handleRemoveContact}
        onEditContact={handleEditContact}
      />
    </main>
  )
}
