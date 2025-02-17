import Button from "../../UI/button/Button";
import './AddContactForm.css';
import InputField from "../../UI/input/InputField";

export default function AddContactForm() {
  return (
    <form className="interaction__form form" action="#" method="post" name="contact-add">
      <div className="form__inputs">
        <InputField id='name' label='Name' placeholder='Ivan' />
        <InputField id='position' label='Position' placeholder='Developer' />
        <InputField id='phone' label='Phone' placeholder='+7 999 999 99 99' />
        {/*<div className="inputs__wrapper">*/}
        {/*  <label className="inputs__label" htmlFor="name">Name</label>*/}
        {/*  <input className="inputs__input input" id="name" name="name" type="text" placeholder="Ivan"/>*/}
        {/*</div>*/}

        {/*<div className="inputs__wrapper">*/}
        {/*  <label className="inputs__label" htmlFor="position">Position</label>*/}
        {/*  <input className="inputs__input input" id="position" name="position" type="text" placeholder="Developer"/>*/}
        {/*</div>*/}

        {/*<div className="inputs__wrapper">*/}
        {/*  <label className="inputs__label" htmlFor="phone">Phone</label>*/}
        {/*  <input className="inputs__input input" id="phone" name="phone" type="text" placeholder="+7 999 999 99 99"/>*/}
        {/*</div>*/}
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
