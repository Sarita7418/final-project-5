import React from "react";
import "@/components/AddArea.css";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Formulario = () => {
  return (
    <div className="form">
      <h2 className="titlef">Agregar Area</h2>
      <div className="form-container">
        <div className="form-group">
          <label htmlFor="sensor-name" className="form-label">
            Nombre del Area
          </label>
          <input
            type="text"
            id="sensor-name"
            className="form-input"
            placeholder="Ej. Cocina"
          />
        </div>

        <div className="form-group">
          <label htmlFor="sensor-location" className="form-label">
            Ubicación
          </label>
          <input
            type="text"
            id="sensor-location"
            className="form-input"
            placeholder="Ej. Planta Alta"
          />
        </div>

        <div className="form-group">
          <label htmlFor="sensor-status" className="form-label">
            Estado
          </label>
          <select id="sensor-status" className="form-select">
            <option>Elegir</option>
            <option>Activo</option>
            <option>Inactivo</option>
          </select>
        </div>

        <div>
          <Button variant="outline" className="form-buttonG">
            <Link href="">Agregar</Link>
          </Button>
          <Button variant="outline" className="form-buttonC">
            <Link href="/Areas">Cancelar</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
