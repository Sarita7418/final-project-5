import React from "react";
import "@/components/Formulario.css";
import { Button } from "@/components/ui/button";
import Link from "next/link";


const Formulario = () => {
  return (
    <div className="form">
      <h2 className="titlef">Formulario de Sensor</h2>
    <div className="form-container">
      <div className="form-group">
        <label htmlFor="sensor-name" className="form-label">
          Nombre del Sensor
        </label>
        <input
          type="text"
          id="sensor-name"
          className="form-input"
          placeholder="Ej. Sensor de Humedad - Planta Alta"
        />
      </div>

      <div className="form-group">
        <label htmlFor="sensor-type" className="form-label">
          Tipo del sensor
        </label>
        <input
          type="text"
          id="sensor-type"
          className="form-input"
          placeholder="Ej. Movimiento"
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
          placeholder="Ej. Planta Alta - Sala de Reuniones"
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
        <Link href="">Guardar</Link>
        </Button>
        <Button variant="outline" className="form-buttonC">
        <Link href="/SensoresP">Cancelar</Link>
        </Button>
      </div>
    </div>
    </div>
  );
};

export default Formulario;
