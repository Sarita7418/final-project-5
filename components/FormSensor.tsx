import React, { useState, useEffect } from "react";
import { Button } from "./ui/button"; // Asegúrate de importar Button si lo usas
import "./Formulario.css";
interface Sensor {
  id?: string;
  sensor: string;
  tipo: string;
  ubicacion: string;
  estado: string;
  recurso: string;
}

const FormSensor = ({ sensor, onClose }: { sensor: Sensor; onClose: () => void }) => {
  const [sensorData, setSensorData] = useState<Sensor>(sensor);
  const [recurso, setRecurso] = useState<string>(sensor.recurso); // Estado para 'recurso'
  const [estado, setEstado] = useState<string>(sensor.estado); // Estado para 'estado'

  useEffect(() => {
    setSensorData(sensor); // Actualiza los datos del sensor
    setRecurso(sensor.recurso); // Actualiza el recurso
    setEstado(sensor.estado); // Actualiza el estado
  }, [sensor]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSensorData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSelectChangeRecurso = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setRecurso(value); // Actualiza el valor del recurso
    setSensorData((prevData) => ({ ...prevData, recurso: value })); // También actualiza el objeto completo
  };

  const handleSelectChangeEstado = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setEstado(value); // Actualiza el estado
    setSensorData((prevData) => ({ ...prevData, estado: value })); // También actualiza el objeto completo
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const method = sensor.id ? "PUT" : "POST";
      const url = sensor.id
        ? `https://673778bcaafa2ef22233f00b.mockapi.io/Sensores/${sensor.id}`
        : `https://673778bcaafa2ef22233f00b.mockapi.io/Sensores`;

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sensorData),
      });

      if (!response.ok) {
        throw new Error("Error al guardar el sensor");
      }

      alert("Sensor guardado exitosamente");
      onClose(); // Cierra el formulario después de guardar
    } catch (error) {
      console.error("Error al guardar el sensor:", error);
    }
  };

  return (
    <div className="form">
      <h2 className="titlef">{sensor.id ? "Editar Sensor" : "Formulario de Sensor"}</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="sensor-name" className="form-label">
            Nombre del Sensor
          </label>
          <input
            type="text"
            id="sensor-name"
            name="sensor"
            className="form-input"
            placeholder="Ej. Sensor de Humedad - Planta Alta"
            value={sensorData.sensor}
            onChange={handleInputChange}
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
            name="tipo"
            className="form-input"
            placeholder="Ej. Movimiento"
            value={sensorData.tipo}
            onChange={handleInputChange}
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
            name="ubicacion"
            className="form-input"
            placeholder="Ej. Planta Alta - Sala de Reuniones"
            value={sensorData.ubicacion}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Campo de Estado */}
        <div className="form-group">
          <label htmlFor="sensor-status" className="form-label">
            Estado
          </label>
          <select
            id="sensor-status"
            className="form-select"
            value={estado} // El valor aquí es el que se corresponde con el estado del sensor
            onChange={handleSelectChangeEstado}
            required
          >
            <option value="Activo">Activo</option>
            <option value="Inactivo">Inactivo</option>
            <option value="Mantenimiento">Mantenimiento</option>
          </select>
        </div>

        {/* Campo de Recurso */}
        <div className="form-group">
          <label htmlFor="sensor-recurso" className="form-label">
            Recurso
          </label>
          <select
            id="sensor-recurso"
            className="form-select"
            value={recurso} // El valor aquí es el que se corresponde con el recurso del sensor
            onChange={handleSelectChangeRecurso}
            required
          >
            <option value="Electricidad">Electricidad</option>
            <option value="Agua">Agua</option>
            <option value="Gas">Gas</option>
          </select>
        </div>

        <Button variant="outline" className="form-buttonG" type="submit">
          Guardar
        </Button>

        <Button variant="outline" className="form-buttonC" onClick={onClose}>
          Cancelar
        </Button>
      </form>
    </div>
  );
};

export default FormSensor;
