import {useState} from "react";
import Button from "../../UI/button/Button";
import cross from '../../assets/cross.svg';
import pencil from '../../assets/pencil.svg';
import './ContactCard.css';
import EditPopup from "../editPopup/EditPopup";
import {Contact, ContactCardProps} from "../../types/types";

export default function ContactCard({name, position, phone, id, onRemoveContact, onEditContact, contacts}: ContactCardProps) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing(true);
  }

  function handleClosePopup() {
    setIsEditing(false);
  }

  function handleSaveContact(updatedContact: Contact) {
    if (onEditContact) {
      onEditContact(updatedContact);
    }
    setIsEditing(false);
  }

  const deleteContact = () => {
    onRemoveContact?.(id);
  };

  return (
    <div className="message">
      <div className="message__info">
        <p>Name:<span>{name}</span></p>
        <p>Position:<span>{position}</span></p>
        <p>Phone:<span>{phone}</span></p>
      </div>
      <div className="message__buttons">
        <Button type="button" className={"interaction-button"} ariaLabel={"Delete contact"} onClick={deleteContact}>
          <img src={cross} alt="Кнопка удаления контакта"/>
        </Button>
        <Button type="button" className={"interaction-button"} ariaLabel={"Edit contact"} onClick={handleEditClick}>
          <img src={pencil} alt="Кнопка редактирования контакта"/>
        </Button>
      </div>

      {isEditing && (
        <EditPopup
          contact={{name, position, phone, id}}
          contacts={contacts}
          onSave={handleSaveContact}
          onClose={handleClosePopup} />
      )}
    </div>
  )
}
