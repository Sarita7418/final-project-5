"use client";

import React, { useEffect, useState } from "react";
import Password from "@/components/CambiarPassword";
import { useAuthStore } from "../store";

const password = () => {
  const { user, usuarios } = useAuthStore();
  const [message, setMessage] = useState("");

  const isAuthenticated = !!user;

  return (
    <div>
        <section className="page_content">
          {isAuthenticated ? (
            <div>
              <p>Ya estás autenticado, puedes cambiar tu contraseña.</p>
            </div>
          ) : (
            <Password />
          )}
          {message && <p>{message}</p>}
        </section>
    </div>
  );
};

export default password;
