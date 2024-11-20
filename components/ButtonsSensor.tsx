import React from "react";
import "./ButtonsSensor.css";
import Link from "next/link";
import alert from "@/public/white_alert.svg"
import sensor from "@/public/white_sensor.svg"

const ButtonsSensor = () => {
  return (
    <div className="buttons_sensor">
      <Link href="/SensoresP">
        <button className="bs_element">
          <span>Detalles</span>
          <img src={sensor.src} alt="" />
        </button>
      </Link>
      <Link href="/Alerts">
        <button className="bs_element">
          <span>Alertas</span>
          <img src={alert.src} alt="" />
        </button>
      </Link>
    </div>
  );
};

export default ButtonsSensor;
