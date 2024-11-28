"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import "@/components/Header.css";
import configLogo from "../public/002-notification-1.svg";
import alertLogo from "../public/settings 1.svg";
import { useAuthStore } from "@/app/store";
import DropdownMenu from './MenuDesplegable'; // Importamos el componente

const Header = () => {
  const pathname = usePathname(); 

  const pageTitles: { [key: string]: string } = {
    "/dashboard": "Dashboard",
    "/SensoresP": "Sensores",
    "/sensoresf": "Sensores",
    "/Areas": "Áreas",
    "/Lecturas": "Lecturas",
    "/Alerts": "Alertas",
    "/configuracion": "Usuarios",
  };

  const { rolselected } = useAuthStore();

  let rol = "";
  if (rolselected === "Administracion") {
    rol = "ADMINISTRACIÓN";
  } else if (rolselected === "Mantenimiento") {
    rol = "MANTENIMIENTO";
  }

  const title = pageTitles[pathname] || "Página no encontrada";

  return (
    <header>
      <h1>{rol}</h1>
      <div className="auxiliar">
        <h2>{title}</h2> 
        <div className="buttons">
          <Link href="/Alerts">
            <img src={configLogo.src} alt="Configuración" className="headerButton" />
          </Link>
          
          <DropdownMenu /> {/* Añadimos el componente DropdownMenu aquí */}
        </div>
      </div>
    </header>
  );
};

export default Header;
