import React from "react";
import { ComparativeG } from "./ComparativeG";
import "./AreaGas.css";
import { PieArea } from "./PieArea";

const AreaAgua = () => {
  return (
    <section className="container_area">
      <span className="span-title">Consumo Semanal</span>
      <h1 className="title"> Gas</h1>
      <div className="graficos">
        <ComparativeG />
        <PieArea />
      </div>
    </section>
  );
};

export default AreaAgua;
