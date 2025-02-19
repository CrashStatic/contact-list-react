import {MouseEventHandler} from "react";
import Button from "../../UI/button/Button";
import cross from '../../assets/cross.svg';
import pencil from '../../assets/pencil.svg';
import './ContactCard.css';

interface ContactCardProps {
  name: string,
  position: string,
  phone: string,
  onRemoveContact?: (name: string) => void
}

export default function ContactCard({name, position, phone, onRemoveContact}: ContactCardProps) {
  const deleteContact: MouseEventHandler<HTMLButtonElement> = () => {
    if (onRemoveContact) {
      onRemoveContact(name);
    }
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
        <Button type="button" className={"interaction-button"} ariaLabel={"Edit contact"}>
          <img src={pencil} alt="Кнопка редактирования контакта"/>
        </Button>
      </div>
    </div>
  )
}
