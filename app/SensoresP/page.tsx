import React from "react";
import Header from "./components/Header";
import Menu from "@/components/Menu";
import Listasensor from "../../components/Listasensor";

const sensor = () => {
  return (
    <div>
      <Header />
      <section className="content">
        <Menu />
        <section className="page_content">
          <Listasensor />
        </section>
      </section>
    </div>
  );
};

export default sensor;
