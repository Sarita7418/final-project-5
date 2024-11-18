import React from "react";
import Header from "../SensoresP/components/Header";
import Menu from "@/components/Menu";
import Formulario from "../../components/Formulario";

const sensor = () => {
  return (
    <div>
      <Header />
      <section className="content">
        <Menu />
        <section className="page_content">
          <Formulario />
        </section>
      </section>
    </div>
  );
};

export default sensor;
