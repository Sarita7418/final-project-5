"use client";

import React, { useState, useEffect } from "react";
import { useAuthStore } from "@/app/store";
import "@/components/CambiarPassword.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Iconos para mostrar/ocultar la contraseña

const CambiarPassword = () => {
  const { usuarios, fetchUsuarios, cambiarPassword, isLoading, errorMessage } =
    useAuthStore();
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Estado para controlar la visibilidad de la contraseña
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Estado para la confirmación de la contraseña
  const router = useRouter();

  // Cargar los usuarios si no están disponibles
  useEffect(() => {
    if (usuarios.length === 0) {
      fetchUsuarios(); // Llamamos a la acción de cargar usuarios
    }
  }, [usuarios, fetchUsuarios]);

  // Validar que la contraseña cumpla con los requisitos
  const validatePassword = (password: string): boolean => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{6,}$/;
    return regex.test(password);
  };

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

    if (!validatePassword(newPassword)) {
      toast.warn(
        "La contraseña debe tener al menos 6 caracteres, incluir una letra mayúscula, una letra minúscula, un número y un carácter especial."
      );
      return;
    }

    const success = await cambiarPassword(email, newPassword);

    if (success) {
      toast.success("Contraseña actualizada exitosamente.");
      setTimeout(() => router.push("/"), 3000);
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
            Ingrese su correo electrónico
          </label>
          <input
            className="form-input"
            type="email"
            placeholder="Ejm. juan@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="new-password" className="form-label">
            Ingrese la nueva contraseña
          </label>
          <div className="password-container">
            <input
              className="form-input"
              type={showPassword ? "text" : "password"} // Alternar tipo entre 'text' y 'password'
              placeholder="Ejm. AbapiC128E"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <button
              type="button"
              className="toggle-password-btn"
              onClick={() => setShowPassword(!showPassword)} // Alternar visibilidad
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="confirm-password" className="form-label">
            Confirme la nueva contraseña
          </label>
          <div className="password-container">
            <input
              className="form-input"
              type={showConfirmPassword ? "text" : "password"} // Alternar tipo entre 'text' y 'password'
              placeholder="Confirmar nueva contraseña"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              type="button"
              className="toggle-password-btn"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)} // Alternar visibilidad
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        <div>
          <button
            className="form-buttonG"
            onClick={handlePasswordChange}
            disabled={isLoading}
          >
            {isLoading ? "Cargando..." : "RESTABLECER"}
          </button>
        </div>
        {message && <p>{message}</p>}
      </div>
      <ToastContainer />
    </div>
  );
};
export default CambiarPassword;
