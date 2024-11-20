import React from "react";
import alerta from "@/public/fluent_warning-16-filled.svg";
import Laura from "@/public/Laura.svg";
import Rosam from "@/public/Rosam.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import "./Lista.css";

const AlertCard = () => {
  return (
    <>
      <div className="table_users">
        <div className="encabezados">
          <span>Usuarios</span>
          <span>Área</span>
          <span>Puesto</span>
          <span>Correo</span>
        </div>
        <div className="perfil">
          <div className="user_principal">
          <img src={Laura.src} alt="" className="foto" />
          <span>Laura Flores</span>  
          </div>
          <span>Admnistración</span>
          <span>Asuntos externos</span>
          <span>laura@gmail.com</span>
          <div className="buttons-perfil">
            <Button variant="outline">
              <Link href="/configuracion">Editar</Link>
            </Button>
            <Button variant="outline">
              <Link href="/configuracion">Archivar</Link>
            </Button>
          </div>
        </div>
        <div className="pie">
          <Button variant="outline">
            <Link href="/configuracion">Agregar</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default AlertCard;
