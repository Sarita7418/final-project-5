// components/InputField.js
import React from "react";
import "./InputField.css";

interface InputFieldProps {
  type: string;
  placeholder: string;
}
const InputField: React.FC<InputFieldProps>= ({ type, placeholder }) => {
  return (
    <input className="input-field" type={type} placeholder={placeholder} />
  );
};

export default InputField;
