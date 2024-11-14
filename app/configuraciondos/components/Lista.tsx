import React from 'react'
import alerta from "@/public/fluent_warning-16-filled.svg"
import "./Lista.jsx"
import Laura from "@/public/Laura.svg"
import Rosam from "@/public/Rosam.svg"
import Fabricio from "@/public/Fabricio.svg"

const AlertCard = () => {
  return (
    <>
      <div className="sensor_card">
          <div className="fondo">
            <div>
                <div className="encabezados">
                   <span>Usuarios</span>
                   <span>Área</span> 
                   <span>Puesto</span>
                   <span>Correo</span>                   
                </div>
                <div className="linea"></div>
            </div> 
            <div className="perfil">              
              <div className="foto">
                    <img src={Laura.src} alt="" />
                  
                </div>
                <div className="datosT">
                    <span>Laura Flores</span>
                    <span>Admnistración</span> 
                    <span>Asuntos externos</span>
                    <span>laura@gmail.com</span>
                    <button>Editar</button>
                    <button>Archivar</button>
                </div>                
              </div> 
            <div className="lineados"></div>
            <div className="perfil">              
              <div className="foto">
                    <img src={Fabricio.src} alt="" />
                  
                </div>
                <div className="datosdos">
                    <span>Carlos Lopez</span>
                    <span>Admnistración</span> 
                    <span>Recepción</span>
                    <span>clopez@gmail.com</span>
                    <button>Editar</button>
                    <button>Archivar</button>
                </div>                
              </div> 
            <div className="lineados"></div>
            <div className="perfil">              
              <div className="foto">
                    <img src={Rosam.src} alt="" />
                  
                </div>
                <div className="datosdos">
                    <span>Rosa Montes</span>
                    <span>Admnistración</span> 
                    <span>Auditoria</span>
                    <span>rosamontes@gmail.com</span>
                    <button>Editar</button>
                    <button>Archivar</button>
                </div>                
              </div> 
            <div className="lineados"></div>
            <div className='pie'>
               <button className="botonA">Agregar</button>
               <button className="botonA">Mostrar Mas</button>
            </div>
          </div>        
      </div>
    </>
  ) 
}

export default AlertCard