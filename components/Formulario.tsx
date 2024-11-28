"use client";
import React, { useState } from "react";
import "./Formulario.css";
import { Button } from "./ui/button";
import Link from "next/link";

const Formulario = () => {
  const [sensor, setSensor] = useState("");
  const [tipo, setTipo] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [estado, setEstado] = useState("Activo");
  const [recurso, setRecurso] = useState("Electricidad");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newSensor = {
      createdAt: new Date().toISOString(),
      sensor,
      tipo,
      ubicacion,
      estado,
      recurso: recurso.toLowerCase(),
      id: Date.now().toString(),
    };

    try {
      const response = await fetch(
        "https://673778bcaafa2ef22233f00b.mockapi.io/Sensores",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newSensor),
        }
      );

      if (response.ok) {
        alert("Sensor agregado exitosamente.");
        setSensor("");
        setTipo("");
        setUbicacion("");
        setEstado("Activo");
        setRecurso("Electricidad");
      } else {
        alert("Error al agregar el sensor.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error al conectar con el servidor.");
    }
  };

  return (
    <div className="form">
      <h2 className="titlef">Formulario de Sensor</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="sensor-name" className="form-label">
            Nombre del Sensor
          </label>
          <input
            type="text"
            id="sensor-name"
            className="form-input"
            placeholder="Ej. Sensor de Humedad - Planta Alta"
            value={sensor}
            onChange={(e) => setSensor(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="sensor-type" className="form-label">
            Tipo del Sensor
          </label>
          <input
            type="text"
            id="sensor-type"
            className="form-input"
            placeholder="Ej. Movimiento"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            required
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
            value={ubicacion}
            onChange={(e) => setUbicacion(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="sensor-status" className="form-label">
            Estado
          </label>
          <select
            id="sensor-status"
            className="form-select"
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
            required
          >
            <option value="Activo">Activo</option>
            <option value="Inactivo">Inactivo</option>
            <option value="Mantenimiento">Mantenimiento</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="sensor-recurso" className="form-label">
            Recurso
          </label>
          <select
            id="sensor-recurso"
            className="form-select"
            value={recurso}
            onChange={(e) => setRecurso(e.target.value)}
            required
          >
            <option value="Electricidad">Electricidad</option>
            <option value="Agua">Agua</option>
            <option value="Gas">Gas</option>
          </select>
        </div>

        <div className="form-buttons">
          <Button type="submit" variant="outline" className="form-buttonG">
            Guardar
          </Button>
          <Button variant="outline" className="form-buttonC">
            <Link href="/SensoresP">Cancelar</Link>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;