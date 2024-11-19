import React from "react";
import "./GUsuarios.css";
import pencil from "@/public/pencil.svg";

const GUsuarios = () => {
  return (
    <section className="gestion_container">
      <div className="rellenables">
        <div className="new_image">
          <img
            src="https://i.pinimg.com/736x/00/d0/7c/00d07c16fc2d806ce50ac33e69762dd5.jpg"
            alt="Foto de perfil"
            className="gestion_imagen"
          />
          <img src={pencil.src} alt="" className="pencil" />
        </div>

        <div className="gestion_datos">
          <div>
            <span>Nombre:</span>
            <input type="text" placeholder="Ingrese nombre completo" />
          </div>
          <div>
            <span>Nombre de Usuario:</span>
            <input
              type="text"
              placeholder="Ingrese un nombre y su apellido paterno"
            />
          </div>
          <div>
            <section className="Email">
              <span>Email:</span>{" "}
              <span id="letra_peque">
                *Este correo sera usado para mandar notificaciones
              </span>
            </section>
            <input type="email" placeholder="Ingrese su correo electronico" />
          </div>
          <div>
            <span>Contraseña:</span>
            <input type="password" placeholder="Ingrese una contraseña" />
          </div>
          <div>
            <span>Fecha de Nacimiento:</span>
            <input type="date" placeholder="Ingrese su fecha de nacimiento" />
          </div>
          <div>
            <span>Dirección:</span>
            <input type="text" placeholder="Ingrese su dirección" />
          </div>
          <div>
            <span>Rol en la Empresa:</span>
            <select>
              <option value="">Seleccione un rol</option>
              <option value="admin">Administrador</option>
              <option value="manager">Gestor de Datos</option>
              <option value="employee">Empleado</option>
              <option value="intern">Practicante</option>
            </select>
          </div>
          <div>
            <span>Gestión:</span>
            <input type="text" placeholder="Ingrese la gestion actual" />
          </div>
        </div>
      </div>
      <button className="gestion_boton">Registrar</button>
    </section>
  );
};

export default GUsuarios;
