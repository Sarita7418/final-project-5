import React from "react";
import alerta from "@/public/fluent_warning-16-filled.svg";
import "./Lista.tsx";
import Laura from "@/public/Laura.svg";
import Rosam from "@/public/Rosam.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AlertCard = () => {
  return (
    <>
      <div className="sensor_card">
        <div className="fondo">
          <div>
            <div className="encabezados">
              <span>Usuarios</span>
              <span>Área</span>
              <span>Puesto</span>
              <span>Correo</span>
            </div>
            <div className="linea"></div>
          </div>
          <div className="perfil">
            <div className="foto">
              <img src={Laura.src} alt="" />
            </div>
            <div className="datosT">
              <span>Laura Flores</span>
              <span>Admnistración</span>
              <span>Asuntos externos</span>
              <span>laura@gmail.com</span>
              <div className="botonedit">
              <Button variant="outline" className="botonedit" >
                    <Link href="/configuracion">Editar</Link>
                </Button>
                <Button variant="outline" className="botonedit" >
                    <Link href="/configuracion">Archivar</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="lineados"></div>
          <div className="perfil">
            <div className="foto">
              <img src={Rosam.src} alt="" />
            </div>
            <div className="datosdos">
              <span>Rosa Montes</span>
              <span>Admnistración</span>
              <span>Auditoria</span>
              <span>rosamontes@gmail.com</span>
              <div className="botonedit">
              <Button variant="outline" className="botonedit" >
                    <Link href="/configuracion">Editar</Link>
                </Button>
                <Button variant="outline" className="botonedit" >
                    <Link href="/configuracion">Archivar</Link>
                </Button>
                </div>
            </div>
          </div>
          <div className="lineados"></div>
          <div className="pie">
          <Button variant="outline" className="agregado" >
                    <Link href="/configuracion">Agregar</Link>
                </Button>
                <Button variant="outline" className="agregado" >
                    <Link href="/configuracion">Mostrar mas</Link>
                </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlertCard;
