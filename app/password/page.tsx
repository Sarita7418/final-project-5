"use client"; 

import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Password from "@/components/NewPassword";
import { useAuthStore } from "../store";

const password = () => {
  const { usuarios, fetchUsuarios, user } = useAuthStore(); // Obtener usuarios y user desde el store
  const [message, setMessage] = useState("");

  // Cargar los usuarios cuando la página se monta
  useEffect(() => {
    const fetchData = async () => {
      await fetchUsuarios(); // Cargar usuarios
    };
    fetchData();
  }, [fetchUsuarios]);

  // Verificar si el usuario está autenticado
  const isAuthenticated = user !== null;

  return (
    <div>
      <Header />
      <section className="content">
        <Menu />
        <section className="page_content">
          <h2>Restablecer Contraseña</h2>

          {/* Si el usuario está autenticado, mostramos el formulario */}
          {isAuthenticated ? (
            <Password userId={user.id} />
          ) : (
            <p>Debes estar autenticado para cambiar tu contraseña.</p>
          )}
        </section>
      </section>
    </div>
  );
};
export default password;