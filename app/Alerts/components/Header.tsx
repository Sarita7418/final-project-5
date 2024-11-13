import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import "@/components/Header.css";
import configLogo from "@/public/002-notification-1.svg";
import alertLogo from "@/public/settings 1.svg";
import "@/components/Header.css";

const Header = () => {
  return (
    <header>
      <h1>MANTENIMIENTO</h1>
      <div className="auxiliar">
        <h2>Alertas y Anomalias</h2>
        <div className="buttons">
          <Link href="">
            <img src={configLogo.src} alt="" className="headerButton" />
          </Link>
          <Link href="">
            <img src={alertLogo.src} alt="" className="headerButton" />
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
