"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Hook para obtener la ruta activa
import "./Menu.css";
import dashboardPlomo from "@/public/home 2 plomo.svg";
import dashboardMorado from "@/public/home 2.svg";
import lecturaPlomo from "@/public/carbon_report.svg";
import lecturaMorado from "@/public/carbon_report_morado.svg";
import sensorPlomo from "@/public/material-symbols_sensors-krx-outline-rounded.svg";
import sensorMorado from "@/public/sensormorado.svg";
import alertaPlomo from "@/public/service 1.svg";
import alertaMorado from "@/public/servicem.svg";
import configPlomo from "@/public/settings solid 1.svg";
import configMorado from "@/public/cofigmorado.svg";
import areaPlomo from "@/public/mdi_report-line.svg";
import areaMorado from "@/public/mdi_report-line-morado.svg";

const Menu = () => {
  const pathname = usePathname(); // Obtener la ruta actual

  const menuItems = [
    {
      label: "Dashboard",
      href: "/dashboard",
      iconPlomo: dashboardPlomo,
      iconMorado: dashboardMorado,
    },
    {
      label: "Sensores",
      href: "/SensoresP",
      iconPlomo: sensorPlomo,
      iconMorado: sensorMorado,
    },
    {
      label: "Áreas",
      href: "/Areas",
      iconPlomo: areaPlomo,
      iconMorado: areaMorado,
    },
    {
      label: "Lecturas",
      href: "/Lecturas",
      iconPlomo: lecturaPlomo,
      iconMorado: lecturaMorado,
    },
    {
      label: "Alertas",
      href: "/Alerts",
      iconPlomo: alertaPlomo,
      iconMorado: alertaMorado,
    },
    {
      label: "Configuración",
      href: "/configuracion",
      iconPlomo: configPlomo,
      iconMorado: configMorado,
    },
  ];

  return (
    <nav className="sidebar">
      <ul className="menu">
        {menuItems.map((item) => (
          <li
            key={item.href}
            className={`menu_element ${
              pathname === item.href ? "selected_menu" : ""
            }`}
          >
            <div
              className={`${
                pathname === item.href ? "rectangle_menu" : ""
              }`}
            ></div>
            <img
              src={
                pathname === item.href ? item.iconMorado.src : item.iconPlomo.src
              }
              alt={`${item.label} icon`}
            />
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
