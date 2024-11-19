"use client";
import React, { useState } from "react";
import "./ConsumoGC.css";
import Lista from "./Lista";
import BotonAgr from "./BotonAgr";
import "./ConfigMenu.css";

const ConsumoGC = () => {
  const [selectedTab, setSelectedTab] = useState<string>("ajustesGenerales");

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <section className="allconfig">
      <div className="tabs">
        <button
          className={`tab ${
            selectedTab === "ajustesGenerales" ? "active_tab" : ""
          }`}
          onClick={() => handleTabChange("ajustesGenerales")}
        >
          Usuarios
        </button>
        <button
          className={`tab ${
            selectedTab === "gestionUsuariosRoles" ? "active_tab" : ""
          }`}
          onClick={() => handleTabChange("gestionUsuariosRoles")}
        >
          Gestión de usuarios y roles
        </button>
        <button
          className={`tab ${
            selectedTab === "ajustesSistema" ? "active_tab" : ""
          }`}
          onClick={() => handleTabChange("ajustesSistema")}
        >
          Ajustes del sistema
        </button>
      </div>

      <div className="contenido_config">
        {selectedTab === "ajustesGenerales" && (
          <>
            <Lista />
          </>
        )}
        {selectedTab === "gestionUsuariosRoles" && (
          <div>
            <p>Contenido de Gestión de Usuarios y Roles</p>
          </div>
        )}
        {selectedTab === "ajustesSistema" && (
          <div>
            <p>Contenido de Ajustes del Sistema</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ConsumoGC;
