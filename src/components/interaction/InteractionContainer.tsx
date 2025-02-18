import '../../index.css';
import './InteractionContainer.css';
import AddContactForm, {Contact} from "../addContactForm/AddContactForm";

export default function InteractionContainer({onAddContact}: {onAddContact: (contact: Contact) => void}) {
  return (
    <section className="interaction">
      <h2 className="visually-hidden">Contact information form</h2>
      <AddContactForm onAddContact={onAddContact} />
    </section>
  )
}
