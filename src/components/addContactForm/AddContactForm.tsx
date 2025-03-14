import Button from "../../UI/button/Button";
import './AddContactForm.css';
import InputField from "../../UI/input/InputField";
import React, { useEffect, useState} from "react";
import SearchPopup from "../searchPopup/SearchPopup";
import {useValidation} from "../../hooks/useValidation";
import {AddContactFormProps, Contact} from "../../types/types";

export default function AddContactForm({
                                         addContact,
                                         contacts,
                                         handleRemoveAllContacts,
                                         onEditContact,
                                         onRemoveContact
                                       }: AddContactFormProps) {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [phone, setPhone] = useState("");

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [filteredContacts, setFilteredContacts] = useState<Contact[]>([]);

  const { errors, currentError, validate } = useValidation(contacts);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!validate([name, position, phone])) return;

    const newContact: Contact = {
      name,
      position,
      phone,
      id: Date.now().toString()
    };

    addContact(newContact);

    setName("");
    setPosition("");
    setPhone("");
  }

  const getInputClassName = (field: string) => {
    return `input${errors && errors[field] ? " input--error" : ""}`;
  };

  function handleOpenSearch() {
    setIsSearchOpen(true);
  }

  function handleCloseSearch() {
    setIsSearchOpen(false);
    setSearchInput("");
    setFilteredContacts([]);
  }

  function handleSearchInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const query = e.target.value.toLowerCase();
    setSearchInput(query);
  }

  useEffect(() => {
    if (searchInput === "") {
      setFilteredContacts(contacts);
    } else {
      const filtered = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        contact.position.toLowerCase().includes(searchInput.toLowerCase()) ||
        contact.phone.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredContacts(filtered);
    }
  }, [contacts, searchInput]);

  function handleShowAll() {
    setSearchInput("");
    setFilteredContacts(contacts);
  }

  return (
    <>
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

        {currentError && errors && (
          <p className="form__error" aria-live="assertive">
            {errors[currentError]}
          </p>
        )}

        <div className="form__buttons">
          <Button className={'button'} type="submit" ariaLabel={"Add contact"}>ADD</Button>
          <Button className={'button'} type="reset" ariaLabel={"Clear contact list"} onClick={handleRemoveAllContacts}>Clear
            List</Button>
          <Button className={'button'} type="button" ariaLabel={"Search contact"}
                  onClick={handleOpenSearch}>Search</Button>
        </div>
      </form>

      {isSearchOpen && (
        <SearchPopup
          onClose={handleCloseSearch}
          input={searchInput}
          filteredContacts={filteredContacts}
          onInputChange={handleSearchInputChange}
          contacts={contacts}
          onRemoveContact={onRemoveContact}
          onEditContact={onEditContact}
          handleShowAll={handleShowAll}
        />
      )}
    </>
  )
}
