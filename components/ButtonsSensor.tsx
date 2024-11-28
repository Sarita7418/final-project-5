import React from "react";
import "./ButtonsSensor.css";
import Link from "next/link";
import alert from "@/public/white_alert.svg"
import sensor from "@/public/white_sensor.svg"

const playSound =() => {
  const sound = new Audio("/click.mp3");
  sound.play();
}

const ButtonsSensor = () => {
  return (
    <div className="buttons_sensor">
      <Link href="/SensoresP">
        <button className="bs_element" onClick={playSound}>
          <span>Detalles</span>
          <img src={sensor.src} alt="" />
        </button>
      </Link>
      <Link href="/Alerts">
        <button className="bs_element" onClick={playSound}>
          <span>Alertas</span>
          <img src={alert.src} alt="" />
        </button>
      </Link>
    </div>
  );
};

export default ButtonsSensor;
