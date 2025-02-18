import InteractionContainer from "../interaction/InteractionContainer";
import ContactTable from "../contacTable/ContactTable";
import {ALPHABET_A_M, ALPHABET_N_Z} from "../../alphabet/Alphabet";
import './Main.css';
import {Contact} from "../addContactForm/AddContactForm";
import {useState} from "react";

export default function Main() {
  const [contacts, setContacts] = useState<Contact[]>([]);

  function handleAddContact(newContact: Contact) {
    setContacts(prevContacts => [...prevContacts, newContact]);
  }

  return (
    <main className="main">
      <InteractionContainer onAddContact={handleAddContact} />
      <ContactTable alphabetLeft={ALPHABET_A_M} alphabetRight={ALPHABET_N_Z} contacts={contacts} />
    </main>
  )
}
