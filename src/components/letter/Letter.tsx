import "./Letter.css";
import {Contact} from "../addContactForm/AddContactForm";
import ContactCard from "../contactCard/ContactCard";
import React, {useState} from "react";

export interface LetterProps {
  letter: string,
  id: string,
  contacts?: Contact[],
  onRemoveContact?: (name: string) => void,
  onEditContact?: (updateContact: Contact) => void
}

const Letter = React.memo(({letter, id, contacts, onRemoveContact, onEditContact}: LetterProps) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle(e: React.MouseEvent) {
    if (e.target instanceof HTMLElement && e.target.closest('.modal')) {
      return;
    }
    setIsOpen(prevState => !prevState);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") {
      setIsOpen(prevState => !prevState);
    }
  }

  return (
    <div
      className={contacts?.length && contacts?.length > 0 ? 'letter letter--active' : 'letter'}
      tabIndex={0}
      onClick={handleToggle}
      onKeyDown={handleKeyDown}>
      <div className="letter__container">
        <div className="letter__letter" data-id={id}>{letter}</div>
        <span className={contacts?.length && contacts?.length > 0 ? 'letter__counter--active' : 'letter__counter'}>
          {contacts?.length}
        </span>
      </div>
      <div className={isOpen ? "letter__contacts--open" : "letter__contacts"}>
        {contacts?.map((contact: Contact, index: number) => (
          <ContactCard
            key={index}
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
