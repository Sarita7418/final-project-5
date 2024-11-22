import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Laura from "@/public/Laura.svg"; // Asegúrate de que la ruta de la imagen sea correcta
import "./Lista.css";

interface ListaProps {
  handleTabChange: (tab: string) => void;
}

const Lista: React.FC<ListaProps> = ({ handleTabChange }) => {
  const handleEditClick = () => {
    handleTabChange("gestionUsuariosRoles");
  };

  const handleAddClick = () => {
    handleTabChange("gestionUsuariosRoles");
  };

  return (
    <>
      <div className="table_users">
        <div className="encabezados">
          <span>Nombre</span>
          <span>Departamento</span>
          <span>Rol</span>
          <span>Correo</span>
        </div>
        <div className="perfil">
          <div className="user_principal">
            <img src={Laura.src} alt="" className="foto" />
            <span>Laura Flores</span>
          </div>
          <span>Administración</span>
          <span>Asuntos externos</span>
          <span>laura@gmail.com</span>
          <div className="buttons-perfil">
            <Button variant="outline" onClick={handleEditClick}>
              Editar
            </Button>
            <Button variant="outline">
              <Link href="/configuracion">Archivar</Link>
            </Button>
          </div>
        </div>
        <div className="pie">
          <Button variant="outline" onClick={handleAddClick}>
            Agregar
          </Button>
        </div>
      </div>
    </>
  );
};

export default Lista;
