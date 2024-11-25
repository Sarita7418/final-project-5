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
          <span>Fecha y Hora:</span>
          <span>Límite de Consumo:</span>
          <span>Consumo Actual:</span>
          <span>Estado de Alerta:</span>
          <span>Acciones Recomendadas:</span>
      
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
        <span id="alert-text">Anomalia Detectada</span>
        <span>Fecha y Hora:</span>
          <span>Detalle:</span>
          <span>Estado de Alerta:</span>
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
        <span id="alert-text">Consumo Estabilizado</span>
          <span>Fecha y Hora:</span>
          <span>Detalle:</span>
          <span>Estado de Alerta:</span>
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
