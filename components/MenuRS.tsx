"use client";
import ListaRS from "./ListaRS";
import "./MenuRS.css";
import React, { useState } from "react";

const playSound =() => {
  const sound = new Audio("/click.mp3");
  sound.play();
}

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
          onClick={() => {handleTabChange("electricidad");
            playSound();
          }}
        >
          Electricidad
        </button>
        <button
          className={`tab ${selectedTab === "agua" ? "active_tab" : ""}`}
          onClick={() => {handleTabChange("agua")
            playSound();
          }}
        >
          Agua
        </button>
        <button
          className={`tab ${selectedTab === "gas" ? "active_tab" : ""}`}
          onClick={() => {handleTabChange("gas")
            playSound();
          }}
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
