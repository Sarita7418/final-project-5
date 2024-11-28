import React, { useState } from 'react';
import './MenuDesplegable.css';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from '@/components/ui/button';
import Link from "next/link";
import Login from "@/components/Login";

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
              <Button variant="outline">
                <Link href="/page">Cerrar sesión</Link>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuDesplegable;
