import Header from "@/components/Header";
import Menu from "@/components/Menu";
import React from "react";
import SensorCard from "./components/SensorCard";
import AlertCard from "./components/AlertCard";
import ConsumoCard from "./components/ConsumoCard";
import Link from "next/link";
import report_b from "@/public/carbon_report_white.svg"
import ButtonsSensor from "./components/ButtonsSensor";
import ConsumoGC from "./components/ConsumoGC";

const dashboard = () => {
  return (
    <div>
      <Header />
      <section className="content">
        <Menu />
        <section className="dashboard_content page_content">
          <ConsumoGC/>
          <section className="container_dash">
            <h2>Sensores</h2>
            <section>
              <div className="sensor_aux">
                <h3 className="sensor_title green_s">Activos</h3>
                <SensorCard />
              </div>
              <div className="sensor_aux">
                <h3 className="sensor_title gray_s">Inactivos</h3>
                <SensorCard />
              </div>
              <div className="sensor_aux">
                <h3 className="sensor_title red_s">Alertas</h3>
                <AlertCard />
              </div>
            </section>
            <ButtonsSensor/>
          </section>
          <section className="container_consumo">
            <div>
              <h3 className="sensor_title purple_db">Consumo total mensual</h3>
              <ConsumoCard />
            </div>
            <Link href="">
              <button className="b_report_db">
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
