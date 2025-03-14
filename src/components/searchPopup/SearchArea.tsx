import ContactCard from "../contactCard/ContactCard";
import React from "react";
import './SearchPopup.css';
import {SearchAreaProps} from "../../types/types";

export default function SearchArea({filteredContacts, onRemoveContact, onEditContact, contacts}: SearchAreaProps) {
  return (
    <div className="modal__search-area">
      {filteredContacts.length > 0 ? (
        filteredContacts.map((contact) => (
          <ContactCard
            key={contact.id}
            name={contact.name}
            position={contact.position}
            phone={contact.phone}
            id={contact.id}
            contacts={contacts}
            onRemoveContact={onRemoveContact}
            onEditContact={onEditContact}
          />
        ))
      ) : (
        <p className={"modal__not-found"}>No contacts found</p>
      )}
    </div>
  )
}
