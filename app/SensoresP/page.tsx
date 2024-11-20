import React from "react";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Listasensor from "../../components/Listasensor";
import MenuRS from "@/components/MenuRS";

const sensor = () => {
  return (
    <div>
      <Header />
      <section className="content">
        <Menu />
        <section className="page_content">
          <MenuRS />
        </section>
      </section>
    </div>
  );
};

export default sensor;
