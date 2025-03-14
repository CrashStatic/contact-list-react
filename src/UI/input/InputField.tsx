import './InputField.css';
import React, {forwardRef} from "react";
import {formatPhoneNumber} from "../../utils/phoneFormatter";
import {InputFieldProps} from "../../types/types";

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(({
                                                                    id,
                                                                    label,
                                                                    type = "text",
                                                                    value,
                                                                    onChange,
                                                                    ...props}, ref) => {

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    let inputValue = e.target.value;

    if (type === 'phone') {
      inputValue = formatPhoneNumber(inputValue);
    }
    onChange?.({ ...e, target: { ...e.target, value: inputValue } });
  }

  return (
    <div className="wrapper">
      <label className="label" htmlFor={id}>{label}</label>
      <input
        {...props}
        id={id} name={id}
        type={type === 'phone' ? 'tel' : 'text'}
        value={value}
        onChange={handleInputChange}
        ref={ref}
      />
    </div>
  );
});

export default InputField;
