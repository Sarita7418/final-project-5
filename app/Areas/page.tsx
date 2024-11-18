import React from "react";
import Header from "./components/Header";
import Menu from "@/components/Menu";
import Control from "@/components/Control";
const Areas = () => {
  return (
    <div>
      <Header />
      <section className="content">
        <Menu />
        <section className="page_content">
          <Control />
        </section>
      </section>
    </div>
  );
};

export default Areas;
