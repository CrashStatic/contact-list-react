import '../../index.css';
import './InteractionContainer.css';
import AddContactForm from "../addContactForm/AddContactForm";

export default function InteractionContainer() {
  return (
    <section className="interaction">
      <h2 className="visually-hidden">Contact information form</h2>
      <AddContactForm />
    </section>
  )
}
