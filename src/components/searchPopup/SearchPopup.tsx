import {createPortal} from "react-dom";
import ModalHeader from "../modal/ModalHeader";
import InputField from "../../UI/input/InputField";
import Button from "../../UI/button/Button";
import './SearchPopup.css';
import '../modal/Modal.css';
import React, {useEffect, useRef} from "react";
import SearchArea from "./SearchArea";
import {SearchPopupProps} from "../../types/types";

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
  const searchRef = useRef<HTMLInputElement>(null);

  function handleClickOutside(e: React.MouseEvent) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  function handleEscKeyDown(e: KeyboardEvent) {
    if (e.key === "Escape") {
      onClose();
    }
  }

  // Добавляем слушатель нажатия клавиш при монтировании компонента
  useEffect(() => {
    document.addEventListener("keydown", handleEscKeyDown);

    return () => {
      document.removeEventListener("keydown", handleEscKeyDown);
    };
  }, []);

  useEffect(() => {
    if (searchRef.current) {
      searchRef.current.focus();
    }
  }, []);

  return createPortal(
    <dialog className="modal" open onClick={handleClickOutside} >
      <div className="modal__container">
        <ModalHeader onClose={onClose}/>
        <div className="modal__body">
          <InputField
            ref={searchRef}
            id={"search"}
            placeholder={"Search..."}
            type={"text"}
            value={input}
            onChange={onInputChange}
            className={"modal__input input"}/>
          <SearchArea
            filteredContacts={filteredContacts}
            onRemoveContact={onRemoveContact}
            onEditContact={onEditContact}
            contacts={contacts}
          />
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
