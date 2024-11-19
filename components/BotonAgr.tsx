import React from "react";
import Descargado from "@/public/descargado.svg";

const BotonAgr = () => {
  return (
    <div className="buttons-c-cont">
      <button className="button_s boton1">
        Guardar Cambios
        <img src={Descargado.src} alt="" />
      </button>
      <button className="button_s">Cerrar sin Cambios</button>
    </div>
  );
};

export default BotonAgr;
