import React, { useState } from 'react';
import './MenuDesplegable.css';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import cerrarsesionLogo from '../public/cerrarsesion.svg';  // Importa la imagen

const MenuDesplegable = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <Avatar className="avatarHeader" onClick={toggleMenu}>
        <AvatarImage src="https://i.pinimg.com/736x/72/f2/5d/72f25dbaf2f232d4a44850395453b64f.jpg" />
        <AvatarFallback>PF</AvatarFallback>
      </Avatar>
      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            <li className="logout">
              <Link href="/" className="logout-link">
                Cerrar sesión
                <img src={cerrarsesionLogo.src} alt="Cerrar sesión" className="logout-icon" />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuDesplegable;
