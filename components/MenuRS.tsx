"use client";

import React, { useState } from "react";
import ListaRS from "./ListaRS";
import "./MenuRS.css";

const MenuRS = () => {
  const [selectedTab, setSelectedTab] = useState<string>("electricidad");

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <section className="allconfig">
      <div className="tabs">
        <button
          className={`tab ${selectedTab === "electricidad" ? "active_tab" : ""}`}
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

      <div className="contenido_config">
        {/* Pasa la pestaña seleccionada como prop */}
        <ListaRS recurso={selectedTab} />
      </div>
    </section>
  );
};

export default MenuRS;
