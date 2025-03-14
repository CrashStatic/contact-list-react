import '../../index.css';
import './InteractionContainer.css';
import AddContactForm from "../addContactForm/AddContactForm";
import {AddContactFormProps} from "../../types/types";

export default function InteractionContainer({
                                               addContact,
                                               contacts,
                                               onEditContact,
                                               onRemoveContact,
                                               handleRemoveAllContacts
                                             }: AddContactFormProps) {
  return (
    <section className="interaction">
      <h2 className="visually-hidden">Contact information form</h2>
      <AddContactForm
        addContact={addContact}
        contacts={contacts}
        handleRemoveAllContacts={handleRemoveAllContacts}
        onRemoveContact={onRemoveContact}
        onEditContact={onEditContact}/>
    </section>
  )
}
