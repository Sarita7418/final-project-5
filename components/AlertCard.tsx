import React from 'react'
import alerta from "@/public/fluent_warning-16-filled.svg"

const AlertCard = () => {
  return (
    <>
      <div className="sensor_card">
        <div className="element_sensor">
          <img src={alerta.src} alt="" />
          <span>Agua: 2 sensores</span>
        </div>
        <div className="element_sensor">
          <img src={alerta.src} alt="" />
          <span>Gas: 7 sensores</span>
        </div>
        <div className="element_sensor">
          <img src={alerta.src} alt="" />
          <span>Electricidad: 4 sensores</span>
        </div>
      </div>
    </>
  )
}

export default AlertCard