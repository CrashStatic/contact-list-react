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
    setContacts(prevContacts => [...prevContacts, newContact]);
  }

  function handleRemoveContacts() {
    setContacts([]);
    localStorage.removeItem("contacts");
  }

  function handleRemoveContact(name: string) {
    const updatedContacts = contacts.filter(contact => contact.name !== name);
    setContacts(updatedContacts);
    localStorage.setItem("contacts", JSON.stringify(updatedContacts));
  }

  return (
    <main className="main">
      <InteractionContainer
        onAddContact={handleAddContact}
        contacts={contacts}
        onRemoveContacts={handleRemoveContacts} />
      <ContactTable
        alphabetLeft={ALPHABET_A_M}
        alphabetRight={ALPHABET_N_Z}
        contacts={contacts}
        onRemoveContact={handleRemoveContact}
      />
    </main>
  )
}
