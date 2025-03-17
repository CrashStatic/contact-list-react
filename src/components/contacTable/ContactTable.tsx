import '../../index.css';
import './ContactTable.css';
import Letter from "../letter/Letter";
import React, {useMemo} from "react";
import {filterContactsByLetter} from "../../utils/contactUtils";
import {ContactTableProps} from "../../types/types";
import {ALPHABET_A_M, ALPHABET_N_Z} from "../../constants/constants";

const ContactTable = React.memo(({
                                   contacts,
                                   onRemoveContact,
                                   onEditContact
                                 }: ContactTableProps) => {
  const groupedLeft = useMemo(() => {
    return ALPHABET_A_M.map((letter) => ({
      ...letter,
      contacts: filterContactsByLetter(contacts, letter),
    }));
  }, [contacts]);

  const groupedRight = useMemo(() => {
    return ALPHABET_N_Z.map((letter) => ({
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
