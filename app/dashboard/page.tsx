"use client";

import Header from "@/components/Header";
import Menu from "@/components/Menu";
import React, { useEffect } from "react";
import SensorCard from "../../components/SensorCard";
import AlertCard from "../../components/AlertCard";
import ConsumoCard from "../../components/ConsumoCard";
import Link from "next/link";
import report_b from "@/public/carbon_report_white.svg";
import ButtonsSensor from "../../components/ButtonsSensor";
import ConsumoGC from "../../components/ConsumoGC";
import { useAuthStore } from "../store";

const playSound = () =>{
  const sound = new Audio("/click.mp3");
  sound.play();
}

const dashboard = () => {
  const { sensores, fetchSensores } = useAuthStore();
  const { guardarReportID } = useAuthStore();

  useEffect(() => {
    fetchSensores();
  }, [fetchSensores]);

  let numA = [
    sensores.filter(
      (sensor) => sensor.recurso === "agua" && sensor.estado === "Activo"
    ).length,
    sensores.filter(
      (sensor) => sensor.recurso === "gas" && sensor.estado === "Activo"
    ).length,
    sensores.filter(
      (sensor) =>
        sensor.recurso === "electricidad" && sensor.estado === "Activo"
    ).length,
  ];

  let numI = [
    sensores.filter(
      (sensor) => sensor.recurso === "agua" && sensor.estado === "Inactivo"
    ).length,
    sensores.filter(
      (sensor) => sensor.recurso === "gas" && sensor.estado === "Inactivo"
    ).length,
    sensores.filter(
      (sensor) =>
        sensor.recurso === "electricidad" && sensor.estado === "Inactivo"
    ).length,
  ];

  let numAL = [
    sensores.filter(
      (sensor) => sensor.recurso === "agua" && sensor.estado === "alerta"
    ).length,
    sensores.filter(
      (sensor) => sensor.recurso === "gas" && sensor.estado === "alerta"
    ).length,
    sensores.filter(
      (sensor) =>
        sensor.recurso === "electricidad" && sensor.estado === "alerta"
    ).length,
  ];

  return (
    <div>
      <Header />
      <section className="content">
        <Menu />
        <section className="dashboard_content page_content">
          <ConsumoGC />
          <section className="container_dash">
            <h2>Sensores</h2>
            <section>
              <div className="sensor_aux">
                <h3 className="sensor_title green_s">Activos</h3>
                <SensorCard data={numA} />
              </div>
              <div className="sensor_aux">
                <h3 className="sensor_title gray_s">Inactivos</h3>
                <SensorCard data={numI} />
              </div>
              <div className="sensor_aux">
                <h3 className="sensor_title red_s">Alertas</h3>
                <AlertCard data={numAL} />
              </div>
            </section>
            <ButtonsSensor />
          </section>
          <section className="container_consumo_gen">
            <div className="aux_consum">
              <h3 className="sensor_title purple_db">Consumo total mensual</h3>
              <ConsumoCard />
            </div>
            <Link href="/Lecturas">
              <button className="b_report_db" onClick={() => {guardarReportID("general"); playSound();}}>
                <img src={report_b.src} alt="" />
                <span>Generar reporte</span>
              </button>
            </Link>
          </section>
        </section>
      </section>
    </div>
  );
};

export default dashboard;
