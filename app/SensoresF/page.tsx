import React from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Formulario from "./components/Formulario";

const sensorf = () => {
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

export default sensorf;
