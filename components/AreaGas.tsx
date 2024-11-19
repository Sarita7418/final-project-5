import React from "react";
import { ComparativeG } from "./ComparativeG";
import "./ConsumoGC.css";
import "./AreaElectricidad.css";
import { PieArea } from "./PieArea";

const AreaAgua = () => {
  return (
    <section className="container_consumo">
      <span className="span-title">Consumo Semanal</span>
      <span className="title text-center w-[1030px] font-manrope text-[28px] font-semibold leading-normal text-[--Strong-Purple]">
        Gas
      </span>
      <div className="graficos">
        <ComparativeG />
        <PieArea />
      </div>
    </section>
  );
};

export default AreaAgua;
