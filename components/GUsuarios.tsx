"use client";

import React, { useState } from "react";
import "./GUsuarios.css";
import pencil from "@/public/pencil.svg";
import fdefault from "@/public/perfil-default.jpg";
import { useAuthStore } from "@/app/store";

const GUsuarios = () => {
  const [selectedImage, setSelectedImage] = useState<
    string | ArrayBuffer | null
  >(null);
  const [nombre, setNombre] = useState<string>("");
  const [nombreUsuario, setNombreUsuario] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [fechaNacimiento, setFechaNacimiento] = useState<string>("");
  const [direccion, setDireccion] = useState<string>("");
  const [rol, setRol] = useState<string>("");
  const [gestion, setGestion] = useState<string>("");
  const { editUserID } = useAuthStore();

  const agregarUsuarioA = useAuthStore((state) => state.agregarUsuarioA);
  const editarUsuarioA = useAuthStore((state) => state.editarUsuarioA);
  const guardarIDEdit = useAuthStore((state) => state.guardarIDEdit);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  function agregarUsuario() {
    const usuario = {
      id: Date.now().toString(),
      name: nombre,
      userName: nombreUsuario,
      nacimiento: fechaNacimiento,
      email,
      password,
      direccion,
      rol,
      gestion,
      avatar:
        "https://i.pinimg.com/736x/72/f2/5d/72f25dbaf2f232d4a44850395453b64f.jpg",
    };
    agregarUsuarioA(usuario);
  }

  function editarUsuario() {
    const usuario = {
      id: editUserID,
      name: nombre,
      userName: nombreUsuario,
      nacimiento: fechaNacimiento,
      email,
      password,
      direccion,
      rol,
      gestion,
      avatar:
        "https://i.pinimg.com/736x/72/f2/5d/72f25dbaf2f232d4a44850395453b64f.jpg",
    };
    console.log("Usuario agregado:", usuario);
    editarUsuarioA(editUserID, usuario);
    guardarIDEdit("");
  }

  let validate = editUserID === "" ? true : false;

  console.log("ID:", editUserID);
  console.log(validate)

  return (
    <section className="gestion_container">
      <div className="rellenables">
        <div className="new_image">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: "none" }}
            id="fileInput"
          />
          <label htmlFor="fileInput" className="custom-file-upload">
            <img
              src={selectedImage ? (selectedImage as string) : fdefault.src}
              alt="Foto de perfil"
              className="gestion_imagen"
            />
          </label>
          <img src={pencil.src} alt="" className="pencil" />
        </div>

        <div className="gestion_datos">
          <div>
            <span>Nombre:</span>
            <input
              type="text"
              placeholder="Ingrese nombre completo"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div>
            <span>Nombre de Usuario:</span>
            <input
              type="text"
              placeholder="Ingrese un nombre y su apellido paterno"
              value={nombreUsuario}
              onChange={(e) => setNombreUsuario(e.target.value)}
            />
          </div>
          <div>
            <section className="Email">
              <span>Email:</span>{" "}
              <span id="letra_peque">
                *Este correo sera usado para mandar notificaciones
              </span>
            </section>
            <input
              type="email"
              placeholder="Ingrese su correo electronico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <span>Contraseña:</span>
            <input
              type="password"
              placeholder="Ingrese una contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <span>Fecha de Nacimiento:</span>
            <input
              type="date"
              placeholder="Ingrese su fecha de nacimiento"
              value={fechaNacimiento}
              onChange={(e) => setFechaNacimiento(e.target.value)}
            />
          </div>
          <div>
            <span>Dirección:</span>
            <input
              type="text"
              placeholder="Ingrese su dirección"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
            />
          </div>
          <div>
            <span>Rol en la Empresa:</span>
            <select value={rol} onChange={(e) => setRol(e.target.value)}>
              <option value="">Seleccione un rol</option>
              <option value="Administracion">Administrador</option>
              <option value="Mantenimiento">Personal de mantenimiento</option>
            </select>
          </div>
          <div>
            <span>Gestión:</span>
            <input
              type="text"
              placeholder="Ingrese la gestion actual"
              value={gestion}
              onChange={(e) => setGestion(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="usuarios-buttons">
        <button className="gestion_boton" onClick={agregarUsuario}>
          Registrar
        </button>
        <button className="gestion_boton" onClick={editarUsuario} disabled={validate}>
          Editar
        </button>
      </div>
    </section>
  );
};

export default GUsuarios;
