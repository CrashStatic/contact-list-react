import Button from "../../UI/button/Button";
import './AddContactForm.css';
import InputField from "../../UI/input/InputField";
import React, {useState} from "react";
import {validateForm} from "../../validate/validate";

export interface Contact {
  name: string;
  position: string;
  phone: string;
}

export interface AddContactFormProps {
  onAddContact: (contact: Contact) => void,
  contacts: Contact[],
  onRemoveContacts: any
}

export default function AddContactForm({onAddContact, contacts, onRemoveContacts}: AddContactFormProps) {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [currentError, setCurrentError] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const validationErrors = validateForm([name, position, phone], contacts);

    if (validationErrors.isValid) {
      const newContact: Contact = {
        name,
        position,
        phone
      };

      onAddContact(newContact);

      setName("");
      setPosition("");
      setPhone("");
      setErrors({});
      setCurrentError(null);
    } else {
      const errorMessages: { [key: string]: string } = {};

      validationErrors.errors.forEach((error) => {
        if (error.input) {
          errorMessages[error.input] = error.message;
        }
      });

      setErrors(errorMessages);
      setCurrentError(Object.keys(errorMessages)[0]);
    }
  }

  const getInputClassName = (field: string) => {
    return `input${errors[field] ? " input--error" : ""}`;
  };

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
          className={getInputClassName("name")}
        />
        <InputField
          id='position'
          label='Position'
          type='text'
          placeholder='Developer'
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className={getInputClassName("position")}
        />
        <InputField
          id='phone'
          label='Phone'
          type='phone'
          placeholder='+7 999 999 99 99'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={getInputClassName("phone")}
        />
      </div>

      {currentError && (
        <p className="form__error" aria-live="assertive">
          {errors[currentError]}
        </p>
      )}

      <div className="form__buttons">
        <Button className={'button'} type="submit" ariaLabel={"Add contact"}>ADD</Button>
        <Button className={'button'} type="reset" ariaLabel={"Clear contact list"} onClick={onRemoveContacts}>Clear List</Button>
        <Button className={'button'} type="button" ariaLabel={"Search contact"}>Search</Button>
      </div>
    </form>
  )
}
