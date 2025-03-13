import '../../index.css';
import './ContactTable.css';
import Letter from "../letter/Letter";
import {Contact} from "../addContactForm/AddContactForm";
import React, {useMemo} from "react";
import {filterContactsByLetter} from "../../utils/contactUtils";
import {ALPHABET} from "../../alphabet/alphabet";

interface ContactTableProps {
  contacts: Contact[],
  onRemoveContact: (id: string) => void,
  onEditContact: (updateContact: Contact) => void,
}

const ContactTable = React.memo(({
                                       contacts,
                                       onRemoveContact,
                                       onEditContact
                                     }: ContactTableProps) => {
  const groupedLetters = useMemo(() => {
    return ALPHABET.map((letter) => ({
      ...letter,
      contacts: filterContactsByLetter(contacts, letter),
    }));
  }, [contacts]);

  return (
    <section className="contact-table" aria-live="assertive">
      <h2 className="visually-hidden">Contact table</h2>
      <div className="contact-table__grid">
        {groupedLetters.map(({letter, id, contacts}) => (
          <Letter
            key={id}
            letter={letter}
            id={id}
            contacts={contacts}
            onRemoveContact={onRemoveContact}
            onEditContact={onEditContact}
          />
        ))}
      </div>
    </section>
  )
})

export default ContactTable;
