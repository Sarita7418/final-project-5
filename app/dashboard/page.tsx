import Header from "@/components/Header";
import Menu from "@/components/Menu";
import React from "react";
import SensorCard from "./components/SensorCard";
import AlertCard from "./components/AlertCard";

const dashboard = () => {
  return (
    <div>
      <Header />
      <section className="content">
        <Menu />
        <section className="dashboard_content">
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
                <AlertCard/>
              </div>
            </section>
          </section>
        </section>
      </section>
    </div>
  );
};

export default dashboard;
