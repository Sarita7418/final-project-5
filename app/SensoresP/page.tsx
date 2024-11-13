import React from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";

const sensor = () => {
  return (
    <div>
      <Header />
      <section className="content">
        <Menu />
        <section className="dashboard_content">
        </section>
      </section>
</div>
  );
};

export default sensor;
