import React from "react";
import agua from "@/public/ion_water-outline.svg";
import elect from "@/public/Group (1).svg";
import gas from "@/public/Group.svg";
import "./SensorCard.css";

interface SensorCardProps {
  data: any;
}

const SensorCard: React.FC<SensorCardProps> = ({ data }) => {
  return (
    <>
      <div className="sensor_card">
        <div className="element_sensor">
          <img src={agua.src} alt="" />
          <span>Agua: {data[0]} sensores</span>
        </div>
        <div className="element_sensor">
          <img src={gas.src} alt="" />
          <span>Gas: {data[1]} sensores</span>
        </div>
        <div className="element_sensor">
          <img src={elect.src} alt="" />
          <span>Electricidad: {data[2]} sensores</span>
        </div>
      </div>
    </>
  );
};

export default SensorCard;
