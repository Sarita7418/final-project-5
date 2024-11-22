import React from "react";
import Descargado from "@/public/descargado.svg";

interface BotonAgrProps {
  handleTabChange: (tab: string) => void;
}

const BotonAgr: React.FC<BotonAgrProps> = ({ handleTabChange }) => {
  const handleSaveClick = () => {
    handleTabChange("gestionUsuariosRoles");
  };
  return (
    <div className="buttons-c-cont">
      <button className="button_s boton1" onClick={handleSaveClick}>
        Guardar Cambios
        <img src={Descargado.src} alt="" />
      </button>
      <button className="button_s">Cerrar sin Cambios</button>
    </div>
  );
};

export default BotonAgr;