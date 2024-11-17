import React from "react";
import Link from "next/link";
import "@/components/Menu.css";
import dashboard from "@/public/home 2 plomo.svg";
import lectura from "@/public/carbon_report.svg";
import sensor from "@/public/sensormorado.svg";
import alerta from "@/public/service 1.svg";
import config from "@/public/settings solid 1.svg";
import area from "@/public/mdi_report-line.svg";

const Menu = () => {
  return (
    <nav className="sidebar">
      <ul className="menu">
        <li className="menu_element ">
          <img src={dashboard.src} alt="" />
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li className="menu_element selected_menu">
          <div className="rectangle_menu"></div>
          <img src={sensor.src} alt="" />
          <Link href="/SensoresP">Sensores</Link>
        </li>
        <li className="menu_element">
          <img src={area.src} alt="" />
          <Link href="/Areas">Áreas</Link>
        </li>
        <li className="menu_element">
          <img src={lectura.src} alt="" />
          <Link href="/Lecturas">Lecturas</Link>
        </li>
        <li className="menu_element">
          <img src={alerta.src} alt="" />
          <Link href="/Alerts">Alertas</Link>
        </li>
        <li className="menu_element">
          <img src={config.src} alt="" />
          <Link href="/configuracion">Configuración</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
