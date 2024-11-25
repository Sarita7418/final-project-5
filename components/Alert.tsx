"use client";
import React, { useEffect } from "react";
import { useAuthStore } from "@/app/store";
import Icon from "./Icon";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Alert = () => {
  const { alertas, fetchAlertas } = useAuthStore();

  useEffect(() => {
    fetchAlertas();
  }, [fetchAlertas]);

  return (
    <div className="alerts">
      {alertas.map(alerta => (
        <section className="alert-container" key={alerta.id}>
          <Icon type={
            alerta.tipoAlerta === "Alerta Detectada" ? "alert" 
            : alerta.tipoAlerta === "Anomalía Detectada" ? "anomaly" 
            : "consumption"
          } />
          <div className="alert-content">
            <span id="alert-text">{alerta.tipoAlerta}</span>
            <span>Fecha y Hora: {alerta.fecha} {alerta.hora}</span>
            {alerta.limiteConsumo && <span>Límite de Consumo: {alerta.limiteConsumo}</span>}
            {alerta.consumoActual && <span>Consumo Actual: {alerta.consumoActual}</span>}
            <span>Estado de Alerta: {alerta.estadoAlerta}</span>
            <span>Acciones Recomendadas: {alerta.accionRecomendada}</span>
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
