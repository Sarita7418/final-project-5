import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import "./ListaRS.css";
import FormSensor from "./FormSensor";
import Link from "next/link";

interface Sensor {
  id: string;
  sensor: string;
  tipo: string;
  ubicacion: string;
  estado: string;
  recurso: string; // Aseguramos que esta propiedad esté presente
  oculto?: boolean;
}

const ListaRS = ({ recurso }: { recurso: string }) => {
  const [sensores, setSensores] = useState<Sensor[]>([]);
  const [editandoSensor, setEditandoSensor] = useState<Sensor | null>(null); // Estado para el sensor en edición

  useEffect(() => {
    const fetchSensores = async () => {
      try {
        const response = await fetch(
          `https://673778bcaafa2ef22233f00b.mockapi.io/Sensores?recurso=${recurso}`
        );
        if (!response.ok) {
          throw new Error("Error al obtener los datos del MockAPI");
        }
        const data: Sensor[] = await response.json();

        // Asegurarse de que cada sensor tenga la propiedad 'recurso'
        const sensoresConRecurso = data.map((sensor) => ({
          ...sensor,
          recurso: sensor.recurso || "Default Recurso", // Valor predeterminado si 'recurso' no está presente
        }));

        const sensoresVisibles = sensoresConRecurso.filter(
          (sensor) => !sensor.oculto
        );
        setSensores(sensoresVisibles);
      } catch (error) {
        console.error("Error al cargar sensores:", error);
        setSensores([]); // En caso de error, muestra una lista vacía.
      }
    };

    fetchSensores();
  }, [recurso]);

  const ocultarSensor = async (id: string) => {
    try {
      await fetch(
        `https://673778bcaafa2ef22233f00b.mockapi.io/Sensores/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ oculto: true }),
        }
      );

      setSensores((prevSensores) =>
        prevSensores.filter((sensor) => sensor.id !== id)
      );
    } catch (error) {
      console.error("Error al ocultar el sensor:", error);
    }
  };

  const handleEditar = (sensor: Sensor) => {
    setEditandoSensor(sensor); // Establece el sensor para editar
  };

  const handleCerrarEdicion = () => {
    setEditandoSensor(null); // Cierra el formulario de edición
  };

  return (
    <div className="table_users">
      {/* Mostrar FormSensor cuando se está editando un sensor */}
      {editandoSensor ? (
        <div>
          <FormSensor sensor={editandoSensor} onClose={handleCerrarEdicion} />
        </div>
      ) : (
        <>
          <div className="encabezados_s">
            <span>Sensor</span>
            <span>Tipo</span>
            <span>Ubicación</span>
            <span>Estado</span>
            <span>Opciones de sensor</span>
          </div>

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
                  <Button
                    variant="outline"
                    className="form-button"
                    onClick={() => handleEditar(sensor)} // Abrir el formulario de edición
                  >
                    Editar
                  </Button>
                  <Button
                    variant="outline"
                    className="form-button"
                    onClick={() => ocultarSensor(sensor.id)}
                  >
                    Eliminar
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <p>No hay sensores disponibles para el recurso seleccionado.</p>
          )}

          <div className="pie">
            <Button variant="outline" className="bañadir">
              <Link href="/sensoresf">Añadir</Link>
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default ListaRS;
