import Button from "../../UI/button/Button";
import cross from '../../assets/cross.svg';
import pencil from '../../assets/pencil.svg';
import './ContactCard.css';

interface ContactCardProps {
  name: string;
  position: string;
  phone: string;
}

export default function ContactCard({name, position, phone}: ContactCardProps) {
  return (
    <div className="message">
      <div className="message__info">
        <p>Name:<span>{name}</span></p>
        <p>Position:<span>{position}</span></p>
        <p>Phone:<span>{phone}</span></p>
      </div>
      <div className="message__buttons">
        <Button type="button" className={"interaction-button"} ariaLabel={"Delete contact"}>
          <img src={cross} alt="Кнопка удаления контакта" />
        </Button>
        <Button type="button" className={"interaction-button"} ariaLabel={"Edit contact"}>
          <img src={pencil} alt="Кнопка уредактирования контакта" />
        </Button>
      </div>
    </div>
  )
}
