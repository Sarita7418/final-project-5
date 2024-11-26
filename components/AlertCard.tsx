import React from 'react'
import alerta from "@/public/fluent_warning-16-filled.svg"

interface AlertCardProps {
  data: any;
}

const AlertCard: React.FC<AlertCardProps> = ({ data }) => {
  return (
    <>
      <div className="sensor_card">
        <div className="element_sensor">
          <img src={alerta.src} alt="" />
          <span>Agua: {data[0]} sensores</span>
        </div>
        <div className="element_sensor">
          <img src={alerta.src} alt="" />
          <span>Gas: {data[1]} sensores</span>
        </div>
        <div className="element_sensor">
          <img src={alerta.src} alt="" />
          <span>Electricidad: {data[2]} sensores</span>
        </div>
      </div>
    </>
  )
}

export default AlertCard