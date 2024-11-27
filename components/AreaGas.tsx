import React, { useEffect, useState } from "react";
import { ComparativeG } from "./ComparativeG";
import "./ConsumoGC.css";
import "./AreaElectricidad.css";
import { PieArea } from "./PieArea";
import { useAuthStore } from "@/app/store";

const AreaGas = ({ floor }: { floor: string }) => {
  const { areas, fetchAreas, piedashboard, fetchPiedashboard } = useAuthStore();

  useEffect(() => {
    fetchAreas();
    fetchPiedashboard();
  }, [fetchAreas, fetchPiedashboard]);

  const dataG = areas.filter(
    (area) => area.uMedida === "m^3" && area.area === floor
  );

  const dataGP = areas.filter(
    (pie) => pie.uMedida === "m^3"
  );
  return (
    <section className="container_consumo">
      <span className="span-title">Consumo Semanal</span>
      <span className="title text-center w-[1030px] font-manrope text-[28px] font-semibold leading-normal text-[--Strong-Purple]">
        Gas
      </span>
      <div className="graficos">
        {
          <>
            <ComparativeG data={dataG} />
            <PieArea data={dataGP} />
          </>
        }
      </div>
    </section>
  );
};

export default AreaGas;
