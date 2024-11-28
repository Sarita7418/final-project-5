import React, { useState, useEffect } from 'react';
import './MenuDesplegable.css';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import cerrarsesionLogo from '../public/cerrarsesion.svg';

type Usuario = {
  email: string;
  name: string;
  avatar: string;
  userName: string;
};

const MenuDesplegable = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [usuarioActual, setUsuarioActual] = useState<Usuario | null>(null);

  useEffect(() => {
    const usuarioLogueado = localStorage.getItem('usuarioLogueado');
    if (usuarioLogueado) {
      setUsuarioActual(JSON.parse(usuarioLogueado));
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <Avatar className="avatarHeader" onClick={toggleMenu}>
        <AvatarImage src={usuarioActual?.avatar || "https://i.pinimg.com/736x/72/f2/5d/72f25dbaf2f232d4a44850395453b64f.jpg"} />
        <AvatarFallback>{usuarioActual?.name[0] || 'PF'}</AvatarFallback>
      </Avatar>
      {isOpen && usuarioActual && (
        <div className="dropdown-menu">
          <div className="dropdown-header">
            <span className="username">{usuarioActual.name}</span>
            <span className="email">{usuarioActual.email}</span>
          </div>
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
