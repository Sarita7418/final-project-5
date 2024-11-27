import React, { useEffect, useState } from 'react'
import { ComparativeG } from "./ComparativeG";
import { PieArea } from "./PieArea";
import "./ConsumoGC.css"
import "./AreaElectricidad.css"
import { useAuthStore } from '@/app/store';

const AreaAgua = ({ floor }: { floor: string }) => {
  const { areas, fetchAreas, piedashboard, fetchPiedashboard } = useAuthStore();

  useEffect(() => {
    fetchAreas();
    fetchPiedashboard();
  }, [fetchAreas, fetchPiedashboard]);

  const dataA = areas.filter(
    (area) => area.uMedida === "L" && area.area === floor
  );

  const dataAP = piedashboard.filter(
    (pie) => pie.recurso === "(Litros/día)"
  );
  return (
    <section className="container_consumo">
      <span className="span-title">Consumo Semanal</span>
      <span className="title text-center w-[1030px] font-manrope text-[28px] font-semibold leading-normal text-[--Strong-Purple]">
        Agua
      </span>
      <div className="graficos">
        {
          <>
            <ComparativeG data={dataA} />
            <PieArea data={dataAP} />
          </>
        }
      </div>
    </section>
  );
};


export default AreaAgua