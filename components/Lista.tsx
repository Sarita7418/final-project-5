import React, { useEffect } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Laura from "@/public/Laura.svg";
import "./Lista.css";
import { useAuthStore } from "@/app/store";

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

  const { usuarios, fetchUsuarios, eliminarUsuario } = useAuthStore();

  const guardarIDEdit = useAuthStore((state) => state.guardarIDEdit);

  useEffect(() => {
    fetchUsuarios();
  }, [fetchUsuarios]);

  function editClick( id: string) {
    handleEditClick(); 
    guardarIDEdit(id);
  }

  return (
    <>
      <div className="table_users">
        <div className="encabezados">
          <span>Nombre</span>
          <span>Departamento</span>
          <span>Rol</span>
          <span>Correo</span>
        </div>
        {usuarios.map((usuario) => (
        <div className="perfil" key={usuario.id}>
          <div className="user_principal">
            <img src={usuario.avatar} alt={usuario.name} className="foto" />
            <span className="name_user">{usuario.name}</span>
          </div>
          <span>{usuario.direccion}</span>
          <span>{usuario.rol}</span>
          <span>{usuario.email}</span>
          <div className="buttons-perfil">
            <Button variant="outline" onClick={() => editClick(usuario.id)}>
              Editar
            </Button>
            <Button variant="outline" onClick={() => eliminarUsuario(usuario.id)}>
               Archivar
            </Button>
          </div>
        </div>
      ))}
      </div>
    </>
  );
};

export default Lista;
