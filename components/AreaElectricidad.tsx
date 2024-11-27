import React, { useEffect, useState } from "react";
import { ComparativeG } from "./ComparativeG";
import { PieArea } from "./PieArea";
import "./ConsumoGC.css";
import "./AreaElectricidad.css";
import { useAuthStore } from "@/app/store";

const AreaElectricidad = ({ floor }: { floor: string }) => {
  const { areas, fetchAreas, piedashboard, fetchPiedashboard } = useAuthStore();

  useEffect(() => {
    fetchAreas();
    fetchPiedashboard();
  }, [fetchAreas, fetchPiedashboard]);

  const dataE = areas.filter(
    (area) => area.uMedida === "kWh" && area.area === floor
  );

  const dataEP = piedashboard.filter((pie) => pie.recurso === "kWh");

  return (
    <section className="container_consumo">
      <span className="span-title">Consumo Semanal</span>
      <span className="title text-center w-[1030px] font-manrope text-[28px] font-semibold leading-normal text-[--Strong-Purple]">
        Electicidad
      </span>
      <div className="graficos">
        {
          <>
            <ComparativeG data={dataE} />
            <PieArea data={dataEP} />
          </>
        }
      </div>
    </section>
  );
};

export default AreaElectricidad;
