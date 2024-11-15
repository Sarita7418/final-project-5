import React from "react";
import "./LegendG.css";

const LegendG = () => {
  return (
    <div className="legend_container">
      <div>
        <div className="circle_ant"></div>
        <span>Semana anterior</span>
      </div>
      <div>
        <div className="circle_act"></div>
        <span>Semana actual</span>
      </div>
    </div>
  );
};

export default LegendG;
