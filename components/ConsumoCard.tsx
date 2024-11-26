import React, { useEffect } from 'react'
import agua from "@/public/ion_water-outline.svg";
import elect from "@/public/Group (1).svg";
import gas from "@/public/Group.svg";
import "./ConsumoCard.css";
import { useAuthStore } from '@/app/store';

const ConsumoCard = () => {

  const { cmensual, fetchCmensual } = useAuthStore();

  useEffect(() => {
    fetchCmensual();
  }, [fetchCmensual]);

  if (!cmensual || cmensual.length < 1) {
    return <div>Loading...</div>;
  }


  return (
    <>
      <div className="sensor_card">
        <div className="element_sensor">
          <img src={agua.src} alt="" />
          <span>Agua: {cmensual[0].consumo} [Litros]</span>
        </div>
        <div className="element_sensor">
          <img src={gas.src} alt="" />
          <span>Gas: {cmensual[1].consumo} [m^3]</span>
        </div>
        <div className="element_sensor">
          <img src={elect.src} alt="" />
          <span>Electricidad: {cmensual[2].consumo} [kHz]</span>
        </div>
      </div>
    </>
  )
}

export default ConsumoCard