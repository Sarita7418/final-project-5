"use client";

import React, { useState, useEffect } from "react";
import { useAuthStore } from "@/app/store";
import "@/components/CambiarPassword.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CambiarPassword = () => {
  const { usuarios, fetchUsuarios, cambiarPassword, isLoading, errorMessage } =
    useAuthStore();
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  // Cargar los usuarios si no están disponibles
  useEffect(() => {
    if (usuarios.length === 0) {
      fetchUsuarios(); // Llamamos a la acción de cargar usuarios
    }
  }, [usuarios, fetchUsuarios]);

  const handlePasswordChange = async () => {
    // Validar si el correo está registrado en el mockAPI
    const userExists = usuarios.some((user) => user.email === email);
    if (!userExists) {
      toast.error("El correo electrónico no está registrado.");
      return;
    }
    if (newPassword !== confirmPassword) {
      toast.error("Las contraseñas no coinciden.");
      return;
    }

    if (newPassword.length < 6) {
      toast.warn("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    const success = await cambiarPassword(email, newPassword);

    if (success) {
      toast.success("Contraseña actualizada exitosamente.");
    } else {
      toast.error(errorMessage || "Hubo un error al cambiar la contraseña.");
    }
  };
  return (
    <div className="form">
      <h2 className="titlef">Restablezca su contraseña</h2>
      <div className="form-container">
        <div className="form-group">
          <label htmlFor="sensor-name" className="form-label">
            Ingrese su coreo electronico
          </label>
          {/* Paso 1: Ingresar el correo electrónico */}
          <input
            className="form-input"
            type="email"
            placeholder="Ejm. juan@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="sensor-name" className="form-label">
            Ingrese la nueva contraseña
          </label>
          {/* Paso 2: Ingresar la nueva contraseña */}
          <input
            className="form-input"
            type="password"
            placeholder="Ejm. AbapiC128E"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="sensor-name" className="form-label">
            Confirme la nueva contraseña
          </label>
          {/* Paso 3: Confirmar la nueva contraseña */}
          <input
            className="form-input"
            type="password"
            placeholder="Confirmar nueva contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div>
          <button
            className="form-buttonG"
            onClick={handlePasswordChange}
            disabled={isLoading}
          >
            {isLoading ? "Cargando..." : "Restablecer Contraseña"}
          </button>
        </div>
        {message && <p>{message}</p>}
      </div>
      <ToastContainer />
    </div>
  );
};
export default CambiarPassword;
