"use client";

import React, { useState } from "react";
import pdf from "@/public/pdf.svg";
import "./LecturasTable.css";
import { generatePDF } from "@/lib/generatePDF";

const LecturasTable = () => {
  const [tipoLectura, setTipoLectura] = useState("agua");

  const handleGeneratePDF = () => {
    generatePDF(tipoLectura);
  };

  return (
    <>
      <div className="allconfig">
        <div className="controls">
          <select
            className="combo-box-lecturas"
            value={tipoLectura}
            onChange={(e) => setTipoLectura(e.target.value)}
          >
            <option value="agua">Agua</option>
            <option value="electricidad">Electricidad</option>
            <option value="gas">Gas</option>
            <option value="general">General</option>
          </select>
          <div className="exportar">
            <span>Exportar</span>
            <button onClick={handleGeneratePDF}>
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

          {/* Fila de datos */}
          <div className="perfil_s">
            <div className="user_principal">
              <span className="sensort">Sensor T-PB</span>
            </div>
            <span className="tipot">2023-10-01</span>
            <span className="ubit">14:30</span>
            <span className="estt">23 Litros</span>
            <span className="recursos">Agua</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default LecturasTable;