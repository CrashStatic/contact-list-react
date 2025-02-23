import '../../index.css';
import './ContactTable.css';
import Letter, {LetterProps} from "../letter/Letter";
import {Contact} from "../addContactForm/AddContactForm";
import {useMemo} from "react";
import {filterContactsByLetter} from "../../hooks/contactUtils";

interface ContactTableProps {
  alphabetLeft: LetterProps[],
  alphabetRight: LetterProps[],
  contacts: Contact[],
  onRemoveContact: (name: string) => void,
  onEditContact: (updateContact: Contact) => void,
}

export default function ContactTable({
                                       alphabetLeft,
                                       alphabetRight,
                                       contacts,
                                       onRemoveContact,
                                       onEditContact
                                     }: ContactTableProps) {
  const groupedLeft = useMemo(() => {
    return alphabetLeft.map((letter) => ({
      ...letter,
      contacts: filterContactsByLetter(contacts, letter),
    }));
  }, [alphabetLeft, contacts]);

  const groupedRight = useMemo(() => {
    return alphabetRight.map((letter) => ({
      ...letter,
      contacts: filterContactsByLetter(contacts, letter),
    }));
  }, [alphabetRight, contacts]);

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
}
