import React from 'react';
import './Alert.css';
import Icon from './Icon';
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Alert = () => { 
  return ( 
  <div className="alerts"> 
    <section className="alert-container"> 
      <Icon type="alert"/> 
      <div className="alert-content"> 
        <span className="alert-text">Alerta Detectada</span> 
        <div className="alert-buttons">
        <Button variant="outline" className="buttondisabled">
            <Link href="">Eliminar</Link>
          </Button>
          <Button variant="outline" className="button">
            <Link href="/dashboard">Verificar</Link>
          </Button>
        </div> 
      </div> 
    </section> 
    <section className="alert-container"> 
      <Icon type="anomaly"/> 
      <div className="alert-content"> 
        <span className="alert-text">Anomalía Detectada</span> 
        <div className="alert-buttons">
        <Button variant="outline" className="buttondisabled">
            <Link href="">Eliminar</Link>
          </Button>
          <Button variant="outline" className="button">
            <Link href="/dashboard">Verificar</Link>
          </Button>
        </div>
      </div> 
    </section> 
    <section className="alert-container"> 
      <Icon type="consumption"/> 
      <div className="alert-content"> 
        <span className="alert-text">Consumo Estabilizado</span> 
        <div className="alert-buttons">
        <Button variant="outline" className="buttondisabled">
            <Link href="">Eliminar</Link>
          </Button>
          <Button variant="outline" className="button">
            <Link href="/dashboard">Verificar</Link>
          </Button>
        </div>
      </div> 
    </section> 
  </div> 
  ); 
}; 
export default Alert;