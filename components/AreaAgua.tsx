import React from "react";
import { ComparativeG } from "./ComparativeG";
import { PieArea } from "./PieArea";
import "./AreaAgua.css";

const AreaAgua = () => {
  return (
    <section className="container_area">
      <span className="span-title">Consumo Semanal</span>
      <h1 className="title">Agua</h1>
      <div className="graficos">
        <ComparativeG />
        <PieArea />
      </div>
    </section>
  );
};

export default AreaAgua;
