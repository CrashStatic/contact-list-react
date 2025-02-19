import React, {MouseEventHandler} from "react";
import Button from "../../UI/button/Button";
import cross from "../../assets/cross.svg";
import './ModalHeader.css';

export default function ModalHeader({onClose}: {onClose: MouseEventHandler<HTMLButtonElement>}) {
  return (
    <div>
      <h2 className="modal__title">Search contact</h2>
      <Button type="button" className={"modal__close-button interaction-button"} ariaLabel={"Cancel modal"} onClick={onClose}>
        <img src={cross} alt="Кнопка закрытия попапа редактирования"/>
      </Button>
    </div>
  )
}
