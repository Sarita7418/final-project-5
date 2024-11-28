"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Password from "@/components/CambiarPassword";
import { useAuthStore } from "../store";

const password = () => {
  const { user, usuarios } = useAuthStore();
  const [message, setMessage] = useState("");

  const isAuthenticated = !!user;

  return (
    <div>
      <Header />
      <section className="content">
        <Menu />
        <section className="page_content">
          <h2>Restablecer Contraseña</h2>
          {isAuthenticated ? (
            <div>
              <p>Ya estás autenticado, puedes cambiar tu contraseña.</p>
            </div>
          ) : (
            <Password />
          )}
          {message && <p>{message}</p>}
        </section>
      </section>
    </div>
  );
};

export default password;
