import React, { useState, useEffect } from "react";
import { useAuthStore } from "@/app/store";

interface PasswordProps {
  user: any; // Tipo del usuario, puedes especificar un tipo más detallado si es necesario
}
const NewPassword = ({ userId }: { userId: string }) => {
    const { cambiarPassword, isLoading, errorMessage } = useAuthStore();
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
  
    const handlePasswordChange = async () => {
      if (!userId) {
        setMessage("Usuario no válido. Inténtalo nuevamente.");
        return;
      }
  
      if (newPassword !== confirmPassword) {
        setMessage("Las contraseñas no coinciden.");
        return;
      }
  
      if (newPassword.length < 6) {
        setMessage("La contraseña debe tener al menos 6 caracteres.");
        return;
      }
  
      const success = await cambiarPassword(userId, newPassword);
  
      if (success) {
        setMessage("Contraseña actualizada exitosamente.");
      } else {
        setMessage(errorMessage || "Error al actualizar la contraseña.");
      }
    };
  
    return (
      <div>
        <h2>Cambiar Contraseña</h2>
        <div>
          <input
            type="password"
            placeholder="Nueva contraseña"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Confirmar contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button
          onClick={handlePasswordChange}
          className="bg-blue-500 text-white px-4 py-2 rounded"
          disabled={isLoading}
        >
          {isLoading ? "Cargando..." : "Cambiar Contraseña"}
        </button>
        {message && <p>{message}</p>}
      </div>
    );
  };
export default NewPassword;
