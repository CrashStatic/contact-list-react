import InteractionContainer from "../interaction/InteractionContainer";
import ContactTable from "../contacTable/ContactTable";
import {ALPHABET_A_M, ALPHABET_N_Z} from "../../alphabet/Alphabet";
import './Main.css';
import {Contact} from "../addContactForm/AddContactForm";
import {useCallback, useEffect, useState} from "react";

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

  const handleRemoveContact = useCallback((name: string) => {
    setContacts((prevContacts) => {
      const updatedContacts = prevContacts.filter(contact => contact.name !== name);
      localStorage.setItem("contacts", JSON.stringify(updatedContacts));
      return updatedContacts;
    });
  }, []);

  const handleEditContact = useCallback((updatedContact: Contact) => {
    setContacts((prevContacts) => {
      const updatedContacts = prevContacts.map(contact => contact.id === updatedContact.id ? updatedContact : contact)
      localStorage.setItem("contacts", JSON.stringify(updatedContacts));
      return updatedContacts;
    })
  }, [])

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
