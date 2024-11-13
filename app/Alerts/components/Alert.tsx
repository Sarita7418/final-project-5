import React from 'react';
import './Alert.css';
import Icon from './Icon';
import Button from './Button';

const Alert = () => {
  return (
    <div className="alert-container">
      <Icon/>
      <span className="alert-text">Alerta de Límite de Consumo</span>
      <span></span>
      <Button label="Eliminar" disabled />
      <Button label="Verificar" />
    </div>
  );
};

export default Alert;