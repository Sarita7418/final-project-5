"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import "@/components/Header.css";
import configLogo from "../public/002-notification-1.svg";
import alertLogo from "../public/settings 1.svg";

const Header = () => {
  const pathname = usePathname(); 

  const pageTitles: { [key: string]: string } = {
    "/dashboard": "Dashboard",
    "/SensoresP": "Sensores",
    "/sensoresf": "Sensores",
    "/Areas": "Áreas",
    "/Lecturas": "Lecturas",
    "/Alerts": "Alertas",
    "/configuracion": "Configuración",
  };

  const title = pageTitles[pathname] || "Página no encontrada";

  return (
    <header>
      <h1>MANTENIMIENTO</h1>
      <div className="auxiliar">
        <h2>{title}</h2> 
        <div className="buttons">
          <Link href="">
            <img src={configLogo.src} alt="Configuración" className="headerButton" />
          </Link>
          <Link href="">
            <img src={alertLogo.src} alt="Alertas" className="headerButton" />
          </Link>
          <Link href="">
            <Avatar className="avatarHeader">
              <AvatarImage src="https://i.pinimg.com/736x/72/f2/5d/72f25dbaf2f232d4a44850395453b64f.jpg" />
              <AvatarFallback>PF</AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

