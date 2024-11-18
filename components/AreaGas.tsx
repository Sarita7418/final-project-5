import React from 'react'
import { ComparativeG } from "./ComparativeG";
import "./ConsumoGC.css"
import "./AreaElectricidad.css"
import { PieArea } from './PieArea';

const   AreaAgua = () => {
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