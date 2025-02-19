import '../../index.css';
import './InteractionContainer.css';
import AddContactForm, {Contact} from "../addContactForm/AddContactForm";

export default function InteractionContainer({onAddContact, contacts, onRemoveContacts}: {
  onAddContact: (contact: Contact) => void,
  onRemoveContacts: () => void,
  contacts: Contact[]
}) {
  return (
    <section className="interaction">
      <h2 className="visually-hidden">Contact information form</h2>
      <AddContactForm onAddContact={onAddContact} contacts={contacts} onRemoveContacts={onRemoveContacts} />
    </section>
  )
}
