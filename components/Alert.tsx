'use client'
import React, { useEffect } from "react";
import "./Alert.css";
import Icon from "./Icon";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useAuthStore } from "@/app/store";


interface AlertaProps {
  handleTabChange: (tab: string) => void;
}

const Alert: React.FC<AlertaProps> = ({ handleTabChange }) => {
  const handleEditClick = () => {
    handleTabChange("AlertasAnomaliasConsumo");
  };

  const { alertas, fetchAlertas } = useAuthStore();

  useEffect(() => {
    fetchAlertas();
  }, [fetchAlertas]);

  return (
    <div className="alerts">
      {alertas.map((alerta) => (
        <section className="alert-container" key={alerta.id}>
          <Icon type={
            alerta.tipoAlerta === "Alerta Detectada" ? "alert" 
            : alerta.tipoAlerta === "Anomalía Detectada" ? "anomaly" 
            : "consumption"
          } />
          <div className="alert-content">
            <span id="alert-text">{alerta.tipoAlerta}</span>
            <span><strong>Fecha y Hora:</strong> {alerta.fecha} {alerta.hora}</span>
            {alerta.limiteConsumo && <span><strong>Límite de Consumo:</strong> {alerta.limiteConsumo}</span>}
            {alerta.consumoActual && <span><strong>Consumo Actual:</strong> {alerta.consumoActual}</span>}
            <span><strong>Estado de Alerta:</strong> {alerta.estadoAlerta}</span>
            <span><strong>Acciones Recomendadas:</strong> {alerta.accionRecomendada}</span>
          </div>
          <div className="alert-buttons">
            <Button variant="outline" className="buttondisabled">
              <Link href="">Eliminar</Link>
            </Button>
            <Button variant="outline" className="button">
              <Link href="/dashboard">Verificar</Link>
            </Button>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Alert;
