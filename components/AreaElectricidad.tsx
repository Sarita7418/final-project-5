import React from "react";
import { ComparativeG } from "./ComparativeG";
import { PieArea } from "./PieArea";
import "./AreaElectricidad.css";

const AreaElectricidad = () => {
  return (
    <section className="container_area">
      <span className="span-title">Consumo Semanal</span>
      <h1 className="title"> Electricidad</h1>
      <div className="graficos">
        <ComparativeG />
        <PieArea />
      </div>
    </section>
  );
};

export default AreaElectricidad;
