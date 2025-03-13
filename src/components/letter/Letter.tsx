import "./Letter.css";
import {Contact} from "../addContactForm/AddContactForm";
import ContactCard from "../contactCard/ContactCard";
import React, {useState} from "react";

export interface LetterProps {
  letter: string,
  id: string,
  contacts?: Contact[],
  onRemoveContact?: (id: string) => void,
  onEditContact?: (updateContact: Contact) => void
}

const Letter = React.memo(({letter, id, contacts, onRemoveContact, onEditContact}: LetterProps) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle(e: React.MouseEvent) {
    if ((e.target as HTMLElement).closest(".modal")) return;
    setIsOpen(prev => !prev);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") {
      setIsOpen(prevState => !prevState);
    }
  }

  const hasContacts = contacts && contacts.length > 0;
  const letterClassName = hasContacts ? "letter letter--active" : "letter";
  const counterClassName = hasContacts ? "letter__counter--active" : "letter__counter";
  const contactsClassName = isOpen ? "letter__contacts--open" : "letter__contacts";

  return (
    <div
      className={letterClassName}
      tabIndex={0}
      onClick={handleToggle}
      onKeyDown={handleKeyDown}>
      <div className="letter__container">
        <div className="letter__letter" data-id={id}>{letter}</div>
        <span className={counterClassName}>
          {contacts?.length}
        </span>
      </div>
      <div className={contactsClassName}>
        {contacts?.map((contact: Contact) => (
          <ContactCard
            key={contact.id}
            name={contact.name}
            position={contact.position}
            phone={contact.phone}
            onRemoveContact={onRemoveContact}
            onEditContact={onEditContact}
            contacts={contacts}
            id={contact.id}
          />
        ))}
      </div>
    </div>
  )
})

export default Letter;
