import './InputField.css';
import React, {forwardRef} from "react";

interface InputFieldProps {
  id: string,
  label?: string,
  placeholder: string,
  type: 'phone' | 'text',
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  className: string,
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(({
                                                                    id,
                                                                    label,
                                                                    placeholder,
                                                                    type,
                                                                    value,
                                                                    onChange,
                                                                    className
                                                                  }, ref) => {

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

      onChange({ target: { value: formattedValue } } as React.ChangeEvent<HTMLInputElement>);
    } else {
      onChange(e);
    }
  }

  return (
    <div className="wrapper">
      <label className="label" htmlFor={id}>{label}</label>
      <input
        className={className}
        id={id} name={id}
        type={type === 'phone' ? 'tel' : 'text'}
        value={value}
        placeholder={placeholder}
        onChange={handleInputChange}
        ref={ref} // Здесь передаем ref
      />
    </div>
  );
});

export default InputField;
