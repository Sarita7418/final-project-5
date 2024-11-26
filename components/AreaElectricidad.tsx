import React, { useEffect, useState } from "react";
import { ComparativeG } from "./ComparativeG";
import { PieArea } from "./PieArea";
import "./ConsumoGC.css";
import "./AreaElectricidad.css";
import { useAuthStore } from "@/app/store";

const AreaElectricidad = () => {
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
    (area) => area.uMedida === "L" && area.area === "P1"
  );
  const dataE = areas.filter(
    (area) => area.uMedida === "kWh" && area.area === "P2"
  );
  const dataG = areas.filter(
    (area) => area.uMedida === "m^3" && area.area === "P3"
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
      <span className="title text-center w-[1030px] font-manrope text-[28px] font-semibold leading-normal text-[--Strong-Purple]">
        Electicidad
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

export default AreaElectricidad;
