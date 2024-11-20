"use client";
import ListaRS from "./ListaRS";
import "./MenuRS.css";
import React, { useState } from "react";

const MenuRS = () => {
  const [selectedTab, setSelectedTab] = useState<string>("electricidad");

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <section className="allconfig">
      <div className="tabs">
        {/* Opciones del menú */}
        <button
          className={`tab ${
            selectedTab === "electricidad" ? "active_tab" : ""
          }`}
          onClick={() => handleTabChange("electricidad")}
        >
          Electricidad
        </button>
        <button
          className={`tab ${selectedTab === "agua" ? "active_tab" : ""}`}
          onClick={() => handleTabChange("agua")}
        >
          Agua
        </button>
        <button
          className={`tab ${selectedTab === "gas" ? "active_tab" : ""}`}
          onClick={() => handleTabChange("gas")}
        >
          Gas
        </button>
      </div>

      {/* Contenido basado en la pestaña seleccionada */}
      <div className="contenido_config">
        {selectedTab === "electricidad" && (
          <>
            <ListaRS />
          </>
        )}
        {selectedTab === "agua" && (
          <>
            <ListaRS />
          </>
        )}
        {selectedTab === "gas" && (
          <>
            <ListaRS />
          </>
        )}
      </div>
    </section>
  );
};

export default MenuRS;
