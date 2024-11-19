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
          Gestión de usuarios
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
      </div>
    </section>
  );
};

export default ConsumoGC;
