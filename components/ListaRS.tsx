import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import "./ListaRS.css";

interface Sensor {
  id: string;
  sensor: string;
  tipo: string;
  ubicacion: string;
  estado: string;
}

const ListaRS = ({ recurso }: { recurso: string }) => {
  const [sensores, setSensores] = useState<Sensor[]>([]);

  useEffect(() => {
    const fetchSensores = async () => {
      try {
        const response = await fetch(`https://673778bcaafa2ef22233f00b.mockapi.io/Sensores?recurso=${recurso}`);
        if (!response.ok) {
          throw new Error("Error al obtener los datos del MockAPI");
        }
        const data = await response.json();
        setSensores(data);
      } catch (error) {
        console.error("Error al cargar sensores:", error);
        setSensores([]); // En caso de error, muestra una lista vacía.
      }
    };

    fetchSensores();
  }, [recurso]);

  return (
    <div className="table_users">
      {/* Encabezados */}
      <div className="encabezados_s">
        <span>Sensor</span>
        <span>Tipo</span>
        <span>Ubicación</span>
        <span>Estado</span>
        <span>Opciones de sensor</span>
      </div>

      {/* Filas de datos */}
      {sensores.length > 0 ? (
        sensores.map((sensor) => (
          <div key={sensor.id} className="perfil_s">
            <div className="user_principal">
              <span className="sensort">{sensor.sensor}</span>
            </div>
            <span className="tipot">{sensor.tipo}</span>
            <span className="ubit">{sensor.ubicacion}</span>
            <span className={`estt ${sensor.estado.toLowerCase()}`}>
              {sensor.estado}
            </span>
            <div className="buttons-perfil">
              <Button variant="outline" className="form-button">
                <Link href={`/sensoresf/${sensor.id}`}>Editar</Link>
              </Button>
              <Button variant="outline" className="form-button">
                Eliminar
              </Button>
            </div>
          </div>
        ))
      ) : (
        <p>No hay sensores disponibles para el recurso seleccionado.</p>
      )}

      {/* Pie de la tabla */}
      <div className="pie">
        <Button variant="outline" className="bañadir">
          <Link href="/sensoresf">Añadir</Link>
        </Button>
      </div>
    </div>
  );
};

export default ListaRS;
