"use client";

import React, { useState } from "react";
import ListaRS from "./ListaRS";
import "./MenuRS.css";

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
        <button
          className={`tab ${selectedTab === "electricidad" ? "active_tab" : ""}`}
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
            playSound()
          }}
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
