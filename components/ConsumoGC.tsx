"use client";

import React, { useEffect, useState } from "react";
import { ComparativeG } from "./ComparativeG";
import { PieG } from "./PieG";
import "./ConsumoGC.css";
import { useAuthStore } from "@/app/store";

const playSound = () => {
  const sound = new Audio("/click.mp3");
  sound.play();
}

const ConsumoGC = () => {
  const { areas, fetchAreas } = useAuthStore();

  useEffect(() => {
    fetchAreas();
  }, [fetchAreas]);

  const { piedashboard, fetchPiedashboard } = useAuthStore();

  useEffect(() => {
    fetchPiedashboard();
  }, [fetchPiedashboard]);

  const [selectedTab, setSelectedTab] = useState<string>("agua");

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };

  const dataA = areas.filter(
    (area) => area.uMedida === "L" && area.area === "general"
  );
  const dataE = areas.filter(
    (area) => area.uMedida === "kWh" && area.area === "general"
  );
  const dataG = areas.filter(
    (area) => area.uMedida === "m^3" && area.area === "general"
  );

  const dataAP = piedashboard.filter(
    (pie) => pie.recurso === "(Litros/día)"
  );
  const dataEP = piedashboard.filter(
    (pie) => pie.recurso === "(kWh/día)"
  );
  const dataGP = piedashboard.filter(
    (pie) => pie.recurso === "(m³/día)"
  );

  return (
    <section className="container_consumo">
      <span className="span-title">Consumo Semanal</span>

      {/* Menú de pestañas */}
      <div className="tabs">
        <button
          className={`tab ${selectedTab === "agua" ? "active_tab" : ""}`}
          onClick={() => {handleTabChange("agua"); playSound();}}
        >
          Agua
        </button>
        <button
          className={`tab ${
            selectedTab === "electricidad" ? "active_tab" : ""
          }`}
          onClick={() => {handleTabChange("electricidad"); playSound();}}
        >
          Electricidad
        </button>
        <button
          className={`tab ${selectedTab === "gas" ? "active_tab" : ""}`}
          onClick={() => {handleTabChange("gas"); playSound();}}
        >
          Gas
        </button>
      </div>

      {/* Contenido dinámico basado en la pestaña seleccionada */}
      <div className="graficos">
        {selectedTab === "agua" && (
          <>
            <ComparativeG data={dataA}/>
            <PieG data={dataAP}/>
          </>
        )}
        {selectedTab === "electricidad" && (
          <>
            <ComparativeG data={dataE}/>
            <PieG data={dataEP}/>
          </>
        )}
        {selectedTab === "gas" && (
          <>
            <ComparativeG data={dataG}/>
            <PieG data={dataGP}/>
          </>
        )}
      </div>
    </section>
  );
};

export default ConsumoGC;
