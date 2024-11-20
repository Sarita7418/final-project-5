import React from "react";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import LecturasTable from "@/components/LecturasTable";

const sensor = () => {
  return (
    <div>
      <Header />
      <section className="content">
        <Menu />
        <section className="page_content">
          <LecturasTable/>
        </section>
      </section>
</div>
  );
};

export default sensor;