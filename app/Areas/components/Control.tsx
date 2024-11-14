// components/FloorControl.js
import React from "react";
import "./Control.css";

const FloorControl = () => {
  return (
    <div className="floor-control">
      <h3>Control De Pisos</h3>
      <button className="add-area-btn">Añadir Áreas</button>
      <button className="all-areas-btn">Todas Las Áreas</button>
      <div className="floor-selector">
        <label htmlFor="floor-select">Seleccionar Piso:</label>
        <select id="floor-select">
          <option>Primer Piso</option>
          <option>Segundo Piso</option>
          <option>Tercer Piso</option>
        </select>
      </div>
    </div>
  );
};

export default FloorControl;
