import '../../index.css';
import './ContactTable.css';
import Letter, {LetterProps} from "../letter/Letter";
import {Contact} from "../addContactForm/AddContactForm";
import React, {useMemo} from "react";
import {filterContactsByLetter} from "../../utils/contactUtils";

interface ContactTableProps {
  alphabet: LetterProps[],
  contacts: Contact[],
  onRemoveContact: (id: string) => void,
  onEditContact: (updateContact: Contact) => void,
}

const ContactTable = React.memo(({
                                       alphabet,
                                       contacts,
                                       onRemoveContact,
                                       onEditContact
                                     }: ContactTableProps) => {
  const groupedLetters = useMemo(() => {
    return alphabet.map((letter) => ({
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
