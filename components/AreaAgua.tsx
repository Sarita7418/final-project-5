import React from 'react'
import { ComparativeG } from "./ComparativeG";
import { PieArea } from "./PieArea";
import "./ConsumoGC.css"
import "./AreaElectricidad.css"

const AreaAgua = () => {
  return (
    <section className="container_consumo">
     <span className="span-title">
        Consumo Semanal
     </span>
     <div className="graficos">
      <ComparativeG />
      <PieArea />  
     </div>
      
    </section>
  )
}

export default AreaAgua