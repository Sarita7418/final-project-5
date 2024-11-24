import React from "react";
import "./InputField.css";

interface InputFieldProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const InputField: React.FC<InputFieldProps>= ({ type }) => {
  return (
    <input className="input-field" type={type} />
  );
};

export default InputField;
