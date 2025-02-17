import './InputField.css';
import React, {useState} from "react";

interface InputFieldProps {
  id: string;
  label: string;
  placeholder: string;
  type: 'phone' | 'text';
}

export default function InputField({id, label, placeholder, type}: InputFieldProps) {
  const [value, setValue] = useState('');

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    let inputValue = e.target.value;

    if (type === 'phone') {
      inputValue = inputValue.replace(/\D/g, '');

      if (inputValue.length === 1 && inputValue[0] !== '7') {
        inputValue = `7${inputValue}`;
      }

      let formattedValue = '+7 ';

      if (inputValue.length > 1) formattedValue += inputValue.substring(1, 4);
      if (inputValue.length > 4) formattedValue += ` ${inputValue.substring(4, 7)}`;
      if (inputValue.length > 7) formattedValue += ` ${inputValue.substring(7, 9)}`;
      if (inputValue.length > 9) formattedValue += ` ${inputValue.substring(9, 11)}`;

      setValue(formattedValue);
    } else {
      setValue(inputValue);
    }
  }

  return (
    <div className="wrapper">
      <label className="label" htmlFor={id}>{label}</label>
      <input
        className="input"
        id={id} name={id}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={handleInputChange}
      />
    </div>
  )
}
