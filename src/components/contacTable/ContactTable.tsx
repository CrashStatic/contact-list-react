import '../../index.css';
import './ContactTable.css';
import Letter, {LetterProps} from "../letter/Letter";
import {Contact} from "../addContactForm/AddContactForm";

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
  function groupContactsByLetter(alphabet: LetterProps[]) {
    return alphabet.map((letter) => {
      const contactsForLetter = contacts.filter(
        (contact) => contact.name.toLowerCase().startsWith(letter.id)
      );
      return {
        ...letter,
        contacts: contactsForLetter
      };
    })
  }

  const groupedLeft = groupContactsByLetter(alphabetLeft);
  const groupedRight = groupContactsByLetter(alphabetRight);

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
