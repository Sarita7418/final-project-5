import React from 'react'
import agua from "@/public/ion_water-outline.svg";
import elect from "@/public/Group (1).svg";
import gas from "@/public/Group.svg";
import "./ConsumoCard.css";

const ConsumoCard = () => {
  return (
    <>
      <div className="sensor_card">
        <div className="element_sensor">
          <img src={agua.src} alt="" />
          <span>Agua: 1500 [Litros]</span>
        </div>
        <div className="element_sensor">
          <img src={gas.src} alt="" />
          <span>Gas: 700 [m^3]</span>
        </div>
        <div className="element_sensor">
          <img src={elect.src} alt="" />
          <span>Electricidad: 400 [kHz]</span>
        </div>
      </div>
    </>
  )
}

export default ConsumoCard