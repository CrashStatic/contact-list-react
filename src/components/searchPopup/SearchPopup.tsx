import {createPortal} from "react-dom";
import ModalHeader from "../modal/ModalHeader";
import InputField from "../../UI/input/InputField";
import Button from "../../UI/button/Button";
import './SearchPopup.css';
import '../modal/Modal.css';
import {Contact} from "../addContactForm/AddContactForm";
import React, {useEffect} from "react";
import ContactCard from "../contactCard/ContactCard";

interface SearchPopupProps {
  onClose: () => void,
  input: string,
  filteredContacts: Contact[],
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  contacts: Contact[],
  onEditContact?: ((updatedContact: Contact) => void) | undefined,
  handleShowAll: () => void,
  onRemoveContact: ((name: string) => void) | undefined
}

export default function SearchPopup({
                                      onClose,
                                      input,
                                      filteredContacts,
                                      onInputChange,
                                      contacts,
                                      onEditContact,
                                      handleShowAll,
                                      onRemoveContact
                                    }: SearchPopupProps) {
  // useEffect(() => {
  //   // Этот эффект будет срабатывать при изменении contacts в родительском компоненте
  //   // или при изменении searchInput в SearchPopup.
  //   const filtered = contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(input.toLowerCase()) ||
  //     contact.position.toLowerCase().includes(input.toLowerCase()) ||
  //     contact.phone.toLowerCase().includes(input.toLowerCase())
  //   );
  //   onInputChange({
  //     target: { value: input }  // Эта строка перезапишет filteredContacts
  //   });
  // }, [contacts, input]);

  return createPortal(
    <dialog className="modal" open onKeyDown={e => e.stopPropagation()}>
      <div className="modal__container">
        <ModalHeader onClose={onClose}/>
        <div className="modal__body">
          <InputField
            id={"search"}
            placeholder={"Search..."}
            type={"text"}
            value={input}
            onChange={onInputChange}
            className={"modal__input input"}/>
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
          <Button
            className="modal__button-show button"
            type="button" ariaLabel={"Show all contacts"}
            onClick={handleShowAll}>
            Show all
          </Button>
        </div>
      </div>
    </dialog>,
    document.getElementById('modal-search')!
  )
}
