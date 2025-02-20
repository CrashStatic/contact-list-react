import {createPortal} from "react-dom";
import ModalHeader from "../modal/ModalHeader";
import InputField from "../../UI/input/InputField";
import Button from "../../UI/button/Button";
import React, {useState} from "react";
import './SearchPopup.css';
import '../modal/Modal.css';

export default function SearchPopup() {
  const [input, setInput] = useState<string>('');

  return createPortal(
    <dialog className="modal" open onClick={} onKeyDown={e => e.stopPropagation()}>
      <div className="modal__container">
        <ModalHeader onClose={}/>
        <div className="modal__body">
          <InputField
            id={"search"}
            placeholder={"Search..."}
            type={"text"}
            value={input}
            onChange={e => setInput(e.target.value)}
            className={"modal__input input"} />
          <div className="modal__search-area"></div>
          <Button className="modal__button-show button" type="button" ariaLabel={"Show all contacts"}>Show all</Button>
        </div>
      </div>
    </dialog>,
    document.getElementById('modal-search')!
  )
}
