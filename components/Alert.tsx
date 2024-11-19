import React from "react";
import "./Alert.css";
import Icon from "./Icon";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Alert = () => {
  return (
    <div className="alerts">
      <section className="alert-container">
        <Icon type="alert" />
        <div className="alert-content">
          <span id="alert-text">Alerta Detectada</span>
          <span>Fecha y Hora: 24/09/2024 21:44</span>
          <span>Límite de Consumo: 5000 Lt</span>
          <span>Consumo Actual: 5500 Lt</span>
          <span>Estado de Alerta: Pendiente</span>
          <span>Acciones Recomendadas:</span>
          <li>Verifica posibles fugas en las tuberías.</li>
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
      <section className="alert-container">
        <Icon type="anomaly" />
        <div className="alert-content">
          <span className="alert-text">Anomalía Detectada</span>
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
      <section className="alert-container">
        <Icon type="consumption" />
        <div className="alert-content">
          <span className="alert-text">Consumo Estabilizado</span>
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
    </div>
  );
};
export default Alert;
