import React from "react";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import ListaLecturas from "@/components/ListaLecturas";

const sensor = () => {
  return (
    <div>
      <Header />
      <section className="content">
        <Menu />
        <section className="page_content">
          <section>
            <ListaLecturas />
          </section>
        </section>
      </section>
    </div>
  );
};

export default sensor;
