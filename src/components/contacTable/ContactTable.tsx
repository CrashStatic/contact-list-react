import '../../index.css';
import './ContactTable.css';
import Letter, {LetterProps} from "../letter/Letter";
import {Contact} from "../addContactForm/AddContactForm";
import React, {useMemo} from "react";
import {filterContactsByLetter} from "../../utils/contactUtils";

interface ContactTableProps {
  alphabetLeft: LetterProps[],
  alphabetRight: LetterProps[],
  contacts: Contact[],
  onRemoveContact: (id: string) => void,
  onEditContact: (updateContact: Contact) => void,
}

const ContactTable = React.memo(({
                                       alphabetLeft,
                                       alphabetRight,
                                       contacts,
                                       onRemoveContact,
                                       onEditContact
                                     }: ContactTableProps) => {
  const groupedLeft = useMemo(() => {
    return alphabetLeft.map((letter) => ({
      ...letter,
      contacts: filterContactsByLetter(contacts, letter),
    }));
  }, [contacts]);

  const groupedRight = useMemo(() => {
    return alphabetRight.map((letter) => ({
      ...letter,
      contacts: filterContactsByLetter(contacts, letter),
    }));
  }, [contacts]);

  return (
    <section className="contact-table" aria-live="assertive">
      <h2 className="visually-hidden">Contact table</h2>
      <div className="contact-table__column">
        {groupedLeft.map(({letter, id, contacts}) => (
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
      <div className="contact-table__column">
        {groupedRight.map(({letter, id, contacts}) => (
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
