import InputField from "../../UI/input/InputField.js";
import React, {useEffect, useRef, useState} from "react";
import Button from "../../UI/button/Button.js";
import ModalHeader from "../modal/ModalHeader";
import './EditPopup.css';
import '../modal/Modal.css';
import {Contact} from "../addContactForm/AddContactForm";
import {createPortal} from "react-dom";
import {useValidation} from "../../hooks/useValidation";

interface EditPopupProps {
  contact: Contact;
  contacts: Contact[];
  onClose: () => void;
  onSave: (contact: Contact) => void;
}

export default function EditPopup({contact, onSave, onClose, contacts}: EditPopupProps) {
  const [name, setName] = useState(contact.name);
  const [position, setPosition] = useState(contact.position);
  const [phone, setPhone] = useState(contact.phone);

  const nameInputRef = useRef<HTMLInputElement>(null);

  const { errors, currentError, validate } = useValidation(contacts);

  function handleSave(e: React.FormEvent) {
    e.preventDefault();

    const updatedContact = { ...contact, name, position, phone };

    if (!validate([name, position, phone])) return;

    onSave(updatedContact);
    onClose();
  }

  const getInputClassName = (field: string) => {
    return `input${errors && errors[field] ? " input--error" : ""}`;
  };

  function handleClickOutsidePopup(e: React.MouseEvent) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  function handleEscKeyDown(e: React.KeyboardEvent<HTMLDialogElement>) {
    if (e.key === "Escape") {
      onClose();
    }
  }

  // useEffect(() => {
  //   const handleEsc = (e: KeyboardEvent) => handleEscKeyDown(e);
  //
  //   document.addEventListener("keydown", handleEsc as EventListener);
  //
  //   return () => {
  //     document.removeEventListener('keydown', handleEsc as EventListener)
  //   }
  // }, [])

  useEffect(() => {
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, []);

  return createPortal(
    <dialog className="modal edit-popup" open onClick={handleClickOutsidePopup} onKeyDown={handleEscKeyDown}>
      <div className="modal__container">
        <ModalHeader onClose={onClose}/>
        <div className="modal__body" id="modal-body">
          {currentError && (
            <p className="popup__error" aria-live="assertive">
              {errors && errors[currentError]}
            </p>
          )}
          <form className="popup__form form" action="#" method="post" name="popup-contact-add" onSubmit={handleSave}>
            <div className="form__inputs inputs--popup">
              <InputField
                id='popup-name'
                label='Name'
                placeholder='Ivan'
                type='text'
                value={name}
                onChange={e => setName(e.target.value)}
                className={getInputClassName('name')}
                ref={nameInputRef}
              />
              <InputField
                id='popup-position'
                label='Position'
                placeholder='Developer'
                type='text'
                value={position}
                onChange={e => setPosition(e.target.value)}
                className={getInputClassName('position')}
              />
              <InputField
                id='popup-phone'
                label='Phone'
                placeholder='+7 999 999 99 99'
                type='phone'
                value={phone}
                onChange={e => setPhone(e.target.value)}
                className={getInputClassName('phone')}
              />
            </div>
            <Button className={'button'} type="submit" ariaLabel={"Save contact"}>Save</Button>
          </form>
        </div>
      </div>
    </dialog>,
    document.getElementById('modal-popup')!
  )
}
