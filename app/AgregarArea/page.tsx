import React from "react";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Agregar from "@/components/AddArea";

function page() {
  return (
    <div>
      <Header />
      <section className="content">
        <Menu />
        <section className="page_content">
          <Agregar />
        </section>
      </section>
    </div>
  );
}

export default page;
