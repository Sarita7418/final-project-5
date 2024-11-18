import React from 'react'
import Descargado from "@/public/descargado.svg"

const BotonAgr = () => {
  return (
    <div className="fondo2">
    
    <div className='pie'>
        <button className="boton1">Guardar Cambios</button>
        <img src={Descargado.src} alt="" />
    </div>

        <button className="boton2">Cerrar sin Cambios</button>
    
    </div>
  )
}

export default BotonAgr