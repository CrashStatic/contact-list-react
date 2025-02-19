import InputField from "../../UI/input/InputField.js";
import React, {useState} from "react";
import Button from "../../UI/button/Button.js";
import ModalHeader from "../modal/ModalHeader";
import './EditPopup.css';
import {Contact} from "../addContactForm/AddContactForm";

interface EditPopupProps {
  contact: Contact;
  onClose: () => void;
  onSave: (contact: Contact) => void;
}

export default function EditPopup({contact, onSave, onClose}: EditPopupProps) {
  const [name, setName] = useState(contact.name);
  const [position, setPosition] = useState(contact.position);
  const [phone, setPhone] = useState(contact.phone);

  function handleSave(e: React.FormEvent) {
    e.preventDefault();
    const updatedContact = { ...contact, name, position, phone }; // Учитываем id
    onSave(updatedContact);
    onClose();
  }

  return (
    <dialog className="modal" open>
      <div className="modal__container">
        <ModalHeader onClose={onClose}/>
        <div className="modal__body" id="modal-body">
          <p className="popup__error" aria-live="assertive"></p>
          <form className="popup__form form" action="#" method="post" name="popup-contact-add" onSubmit={handleSave}>
            <div className="form__inputs inputs--popup">
              <InputField
                id='popup-name'
                label='Name'
                placeholder='Ivan'
                type='text'
                value={name}
                onChange={e => setName(e.target.value)}
                className={'input'}
              />
              <InputField
                id='popup-position'
                label='Position'
                placeholder='Developer'
                type='text'
                value={position}
                onChange={e => setPosition(e.target.value)}
                className={'input'}
              />
              <InputField
                id='popup-phone'
                label='Phone'
                placeholder='+7 999 999 99 99'
                type='phone'
                value={phone}
                onChange={e => setPhone(e.target.value)}
                className={'input'}
              />
            </div>
            <Button className={'button'} type="submit" ariaLabel={"Save contact"}>Save</Button>
          </form>
        </div>
      </div>
    </dialog>
  )
}
