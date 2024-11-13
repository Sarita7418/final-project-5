import React from 'react';
import './Alert.css';

interface ButtonProps {
  label: string;
  disabled?: boolean;
}
const Button: React.FC<ButtonProps> = ({ label, disabled = false }) => {
  return (
    <button className="button" disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;