import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import "./ListaRS.css"

const playSound = () =>{
  const sound = new Audio("/click.mp3");
  sound.play();
} 

const ListaRS = () => {
  return (
    <>
      <div className="table_users">
        {/* Encabezados */}
        <div className="encabezados_s">
          <span>Sensor</span>
          <span>Tipo</span>
          <span>Ubicación</span>
          <span>Estado</span>
          <span>Opciones de sensor</span>
        </div>
        
        {/* Fila de datos */}
        <div className="perfil_s">
          <div className="user_principal">
            <span className="sensort">Sensor #T-PB</span>
          </div>
          <span className="tipot">Temperatura</span>
          <span className="ubit">Sala 3 - Planta Baja</span>
          <span className="estt inactive">Inactivo</span>
          <div className="buttons-perfil">
            <Button variant="outline" className="form-button" onClick={playSound}>
              <Link href="/sensoresf">Editar</Link>
            </Button>
            <Button variant="outline" className="form-button" onClick={playSound}>
              Eliminar
            </Button>
          </div>
        </div>

        {/* Pie de la tabla */}
        <div className="pie">
          <Button variant="outline" className="bañadir" onClick={playSound}>
            <Link href="/sensoresf">Añadir</Link>
          </Button>
        </div>
      </div>
    </>
  )
}

export default ListaRS