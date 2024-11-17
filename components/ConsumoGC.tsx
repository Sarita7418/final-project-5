"use client"

import React, { useState } from "react";
import { ComparativeG } from "./ComparativeG";
import { PieG } from "./PieG";
import "./ConsumoGC.css";

const ConsumoGC = () => {
  const [selectedTab, setSelectedTab] = useState<string>("agua");

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <section className="container_consumo">
      <span className="span-title">Consumo Semanal</span>

      {/* Menú de pestañas */}
      <div className="tabs">
        <button
          className={`tab ${selectedTab === "agua" ? "active_tab" : ""}`}
          onClick={() => handleTabChange("agua")}
        >
          Agua
        </button>
        <button
          className={`tab ${selectedTab === "electricidad" ? "active_tab" : ""}`}
          onClick={() => handleTabChange("electricidad")}
        >
          Electricidad
        </button>
        <button
          className={`tab ${selectedTab === "gas" ? "active_tab" : ""}`}
          onClick={() => handleTabChange("gas")}
        >
          Gas
        </button>
      </div>

      {/* Contenido dinámico basado en la pestaña seleccionada */}
      <div className="graficos">
        {selectedTab === "agua" && (
          <>
            <ComparativeG />
            <PieG />
          </>
        )}
        {selectedTab === "electricidad" && (
          <>
            <ComparativeG />
            <PieG />
          </>
        )}
        {selectedTab === "gas" && (
          <>
            <ComparativeG />
            <PieG />
          </>
        )}
      </div>
    </section>
  );
};

export default ConsumoGC;

