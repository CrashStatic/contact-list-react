import './InputField.css';

interface InputFieldProps {
  id: string;
  label: string;
  placeholder: string;
}

export default function InputField({id, label, placeholder}: InputFieldProps) {
  return (
    <div className="wrapper">
      <label className="label" htmlFor={id}>{label}</label>
      <input className="input" id={id} name={id} type="text" placeholder={placeholder} />
    </div>
  )
}
