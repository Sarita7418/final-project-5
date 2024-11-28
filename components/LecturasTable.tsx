"use client";

import React, { useState, useEffect } from "react";
import pdf from "@/public/pdf.svg";
import "./LecturasTable.css";
import { generatePDF } from "@/lib/generatePDF";
import { useAuthStore } from "@/app/store";

const playSound = () => {
  const sound = new Audio("/click.mp3");
  sound.play();
};
interface Lectura {
  createdAt: string;
  sensor: string;
  fecha: string;
  hora: string;
  valor: string;
  recurso: string;
  id: string;
};

const LecturasTable = () => {
  const [tipoLectura, setTipoLectura] = useState("general");
  const [lecturas, setLecturas] = useState<Lectura[]>([]);
  const [lecturasFiltradas, setLecturasFiltradas] = useState<Lectura[]>([]);
  const { reportID } = useAuthStore();

  useEffect(() => {
    if (reportID) {
      setTipoLectura(reportID.toLowerCase());
    }
  }, [reportID]);

  //Cargar datos MockAPI
  useEffect(() => {
    const fetchLecturas = async () => {
      try {
        const res = await fetch("https://673778bcaafa2ef22233f00b.mockapi.io/lecturas");
        const data: Lectura[] = await res.json();
        setLecturas(data);
        setLecturasFiltradas(data);
      } catch (error) {
        console.error("Error al cargar las lecturas:", error);
      }
    };

    fetchLecturas();
  }, []);

  useEffect(() => {
    if (tipoLectura === "general") {
      setLecturasFiltradas(lecturas); 
    } else {
      const filtradas = lecturas.filter(
        (lectura) => lectura.recurso.toLowerCase() === tipoLectura
      );
      setLecturasFiltradas(filtradas);
    }
  }, [tipoLectura, lecturas]);

  const handleGeneratePDF = () => {
    generatePDF(tipoLectura);
  };

  return (
    <div className="allconfig">
      <div className="controls">
        <select
          className="combo-box-lecturas"
          value={tipoLectura}
          onChange={(e) => setTipoLectura(e.target.value)}
        >
          <option value="general">General</option>
          <option value="agua">Agua</option>
          <option value="electricidad">Electricidad</option>
          <option value="gas">Gas</option>
        </select>
        <div className="exportar">
          <span>Exportar</span>
          <button onClick={() => {handleGeneratePDF(); playSound();}}>
            <img src={pdf.src} alt="Exportar PDF" />
          </button>
        </div>
      </div>
      <div className="table_users">
        {/* Encabezados */}
        <div className="encabezados_s">
          <span>Sensor</span>
          <span>Fecha</span>
          <span>Hora</span>
          <span>Valor</span>
          <span>Recursos</span>
        </div>

        {/* Filas dinámicas */}
        {lecturasFiltradas.map((lectura) => (
          <div className="perfil_s" key={lectura.id}>
            <div className="user_principal">
              <span className="sensort">{lectura.sensor}</span>
            </div>
            <span className="tipot">{lectura.fecha}</span>
            <span className="ubit">{lectura.hora}</span>
            <span className="estt">{lectura.valor}</span>
            <span className="recursos">{lectura.recurso}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LecturasTable;
