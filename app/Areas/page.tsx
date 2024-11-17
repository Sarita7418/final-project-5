import React from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Control from "./components/Control";
import Electricidad from "@/components/AreaElectricidad";
import Agua from "@/components/AreaAgua";
import Gas from "@/components/AreaGas";
const Areas = () => {
  return (
    <div>
      <Header />
      <section className="content">
        <Menu />
        <section className="page_content">
          <Control />
          <div>
            <Electricidad />
          </div>
          <div>
            <Agua />
          </div>
          <div>
            <Gas />
          </div>
        </section>
      </section>
    </div>
  );
};

export default Areas;
