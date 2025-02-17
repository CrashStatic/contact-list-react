import Button from "../../UI/button/Button";
import './AddContactForm.css';
import InputField from "../../UI/input/InputField";

export default function AddContactForm() {
  return (
    <form className="interaction__form form" action="#" method="post" name="contact-add">
      <div className="form__inputs">
        <InputField id='name' label='Name' type='text' placeholder='Ivan' />
        <InputField id='position' label='Position' type='text' placeholder='Developer' />
        <InputField id='phone' label='Phone' type='phone' placeholder='+7 999 999 99 99' />
      </div>

      <p className="form__error" aria-live="assertive"></p>

      <div className="form__buttons">
        <Button type="submit" ariaLabel={"Add contact"}>ADD</Button>
        <Button type="reset" ariaLabel={"Clear contact list"}>Clear List</Button>
        <Button type="button" ariaLabel={"Search contact"}>Search</Button>
      </div>
    </form>
  )
}
