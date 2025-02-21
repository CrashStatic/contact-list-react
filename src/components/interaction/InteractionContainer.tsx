import '../../index.css';
import './InteractionContainer.css';
import AddContactForm, {Contact} from "../addContactForm/AddContactForm";

interface InteractionContainerProps {
  onAddContact: (contact: Contact) => void,
  contacts: Contact[],
  onEditContact?: (updatedContact: Contact) => void,
  onRemoveContact?: (name: string) => void,
  handleRemoveAllContacts?: () => void
}

export default function InteractionContainer({
                                               onAddContact,
                                               contacts,
                                               onEditContact,
                                               onRemoveContact,
                                               handleRemoveAllContacts
                                             }: InteractionContainerProps) {
  return (
    <section className="interaction">
      <h2 className="visually-hidden">Contact information form</h2>
      <AddContactForm
        onAddContact={onAddContact}
        contacts={contacts}
        handleRemoveAllContacts={handleRemoveAllContacts}
        onRemoveContact={onRemoveContact}
        onEditContact={onEditContact}/>
    </section>
  )
}
