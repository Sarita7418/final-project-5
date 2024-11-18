"use client"
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Reemplaza useRouter con usePathname
import "./Menu.css";
import dashboard from "@/public/home 2.svg";
import lectura from "@/public/carbon_report.svg";
import sensor from "@/public/material-symbols_sensors-krx-outline-rounded.svg";
import alerta from "@/public/service 1.svg";
import config from "@/public/settings solid 1.svg";
import area from "@/public/mdi_report-line.svg";

const Menu = () => {
  const pathname = usePathname(); // Obtén la ruta actual

  const menuItems = [
    { label: "Dashboard", href: "/dashboard", icon: dashboard },
    { label: "Sensores", href: "/SensoresP", icon: sensor },
    { label: "Áreas", href: "/Areas", icon: area },
    { label: "Lecturas", href: "/Lecturas", icon: lectura },
    { label: "Alertas", href: "/Alerts", icon: alerta },
    { label: "Configuración", href: "/configuracion", icon: config },
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
            <img src={item.icon.src} alt={`${item.label} icon`} />
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
