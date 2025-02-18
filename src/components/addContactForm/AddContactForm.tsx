import Button from "../../UI/button/Button";
import './AddContactForm.css';
import InputField from "../../UI/input/InputField";
import React, {useState} from "react";

export interface Contact {
  name: string;
  position: string;
  phone: string;
}

export interface AddContactFormProps {
  onAddContact: (contact: Contact) => void;
}

export default function AddContactForm({onAddContact}: AddContactFormProps) {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [phone, setPhone] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const newContact: Contact = {
      name,
      position,
      phone
    };

    onAddContact(newContact);

    setName("");
    setPosition("");
    setPhone("");
  }

  return (
    <form className="form" action="#" method="post" name="contact-add" onSubmit={handleSubmit}>
      <div className="form__inputs">
        <InputField
          id='name'
          label='Name'
          type='text'
          placeholder='Ivan'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputField
          id='position'
          label='Position'
          type='text'
          placeholder='Developer'
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
        <InputField
          id='phone'
          label='Phone'
          type='phone'
          placeholder='+7 999 999 99 99'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <p className="form__error" aria-live="assertive"></p>

      <div className="form__buttons">
        <Button className={'button'} type="submit" ariaLabel={"Add contact"}>ADD</Button>
        <Button className={'button'} type="reset" ariaLabel={"Clear contact list"}>Clear List</Button>
        <Button className={'button'} type="button" ariaLabel={"Search contact"}>Search</Button>
      </div>
    </form>
  )
}
