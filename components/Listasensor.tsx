"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import "@/components/Listasensor.css";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
const sensores = [
  {
    sensor: "Sensor-PB",
    tipo: "luz",
    ubicacion: "Plata baja resepcion",
    estado: "Activo",
  },
  {
    sensor: "Sensor-PB",
    tipo: "luz",
    ubicacion: "Plata baja resepcion",
    estado: "Activo",
  },
  {
    sensor: "Sensor-PB",
    tipo: "luz",
    ubicacion: "Plata baja resepcion",
    estado: "Activo",
  },
  {
    sensor: "Sensor-PB",
    tipo: "luz",
    ubicacion: "Plata baja resepcion",
    estado: "Activo",
  },
  {
    sensor: "Sensor-PB",
    tipo: "luz",
    ubicacion: "Plata baja resepcion",
    estado: "Activo",
  },
  {
    sensor: "Sensor-PB",
    tipo: "luz",
    ubicacion: "Plata baja resepcion",
    estado: "Activo",
  },
  {
    sensor: "Sensor-PB",
    tipo: "luz",
    ubicacion: "Plata baja resepcion",
    estado: "Activo",
  },
  {
    sensor: "Sensor-PB",
    tipo: "agua",
    ubicacion: "Plata baja resepcion",
    estado: "Activo",
  },
  {
    sensor: "Sensor-PB",
    tipo: "agua",
    ubicacion: "Plata baja resepcion",
    estado: "Activo",
  },
  {
    sensor: "Sensor-PB",
    tipo: "agua",
    ubicacion: "Plata baja resepcion",
    estado: "Activo",
  },
  {
    sensor: "Sensor-PB",
    tipo: "agua",
    ubicacion: "Plata baja resepcion",
    estado: "Activo",
  },
  {
    sensor: "Sensor-PB",
    tipo: "agua",
    ubicacion: "Plata baja resepcion",
    estado: "Activo",
  },
  {
    sensor: "Sensor-PB",
    tipo: "agua",
    ubicacion: "Plata baja resepcion",
    estado: "Activo",
  },
  {
    sensor: "Sensor-PB",
    tipo: "agua",
    ubicacion: "Plata baja resepcion",
    estado: "Activo",
  },
  {
    sensor: "Sensor-PB",
    tipo: "agua",
    ubicacion: "Plata baja resepcion",
    estado: "Activo",
  },
  {
    sensor: "Sensor-PB",
    tipo: "agua",
    ubicacion: "Plata baja resepcion",
    estado: "Activo",
  },
  {
    sensor: "Sensor-PB",
    tipo: "agua",
    ubicacion: "Plata baja resepcion",
    estado: "Activo",
  },
  {
    sensor: "Sensor-PB",
    tipo: "agua",
    ubicacion: "Plata baja resepcion",
    estado: "Activo",
  },
];

const Listasensor = () => {
  const [selectedTab, setSelectedTab] = useState<string>("agua");

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };
  return (
    <section className="container_consumo">
      <h2 className="titleGS">Gestión de Sensores</h2>
      {/* Menú de pestañas */}
      <div className="tabs">
        <button
          className={`tab ${selectedTab === "agua" ? "active_tab" : ""}`}
          onClick={() => handleTabChange("agua")}
        >
          Agua
        </button>
        <button
          className={`tab ${
            selectedTab === "electricidad" ? "active_tab" : ""
          }`}
          onClick={() => handleTabChange("electricidad")}
        >
          Electricidad
        </button>
        <button
          className={`tab ${selectedTab === "gas" ? "active_tab" : ""}`}
          onClick={() => handleTabChange("gas")}
        >
          Gas
        </button>
      </div>

      {/* Contenido dinámico basado en la pestaña seleccionada */}
      <div className="listas">
        {selectedTab === "agua" && (
          <>
            <Table>
              <TableHeader className="head-text">
                <TableRow>
                  <TableHead className="sensorh">Sensor</TableHead>
                  <TableHead className="tipoh">Tipo</TableHead>
                  <TableHead className="ubih">Ubicación</TableHead>
                  <TableHead className="esth">Estado</TableHead>
                  <TableHead className="opciones">Opciones de Sensor</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sensores.map((sensor) => (
                  <TableRow key={sensor.sensor}>
                    <TableCell className="sensort">{sensor.sensor}</TableCell>
                    <TableCell className="tipot">
                      {sensor.tipo}
                    </TableCell>
                    <TableCell className="ubit">
                      {sensor.ubicacion}
                    </TableCell>
                    <TableCell className="estt">
                      {sensor.estado}
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" className="form-button">
                        <Link href="">Editar</Link>
                      </Button>
                      <Button variant="outline" className="form-button">
                        <Link href="">Eliminar</Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <Button variant="outline" className="bañadir">
                  <Link href="/sensoresf">Añadir ++</Link>
                </Button>
              </TableFooter>
            </Table>
          </>
        )}
        {selectedTab === "electricidad" && (
          <Table>
            <TableHeader className="head-text">
              <TableRow>
                <TableHead className="sensorh">Sensor</TableHead>
                <TableHead className="tipoh">Tipo</TableHead>
                <TableHead className="ubih">Ubicación</TableHead>
                <TableHead className="esth">Estado</TableHead>
                <TableHead className="opciones">Opciones de Sensor</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
                {sensores.map((sensor) => (
                  <TableRow key={sensor.sensor}>
                    <TableCell className="sensort">{sensor.sensor}</TableCell>
                    <TableCell className="tipot">
                      {sensor.tipo}
                    </TableCell>
                    <TableCell className="ubit">
                      {sensor.ubicacion}
                    </TableCell>
                    <TableCell className="estt">
                      {sensor.estado}
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" className="form-button">
                        <Link href="">Editar</Link>
                      </Button>
                      <Button variant="outline" className="form-button">
                        <Link href="">Eliminar</Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            <TableFooter>
              <Button variant="outline" className="bañadir">
                <Link href="/sensoresf">Añadir ++</Link>
              </Button>
            </TableFooter>
          </Table>
        )}
        {selectedTab === "gas" && (
          <>
            <Table>
              <TableHeader className="head-text">
                <TableRow>
                  <TableHead className="sensorh">Sensor</TableHead>
                  <TableHead className="tipoh">Tipo</TableHead>
                  <TableHead className="ubih">Ubicación</TableHead>
                  <TableHead className="esth">Estado</TableHead>
                  <TableHead className="opciones">Opciones de Sensor</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sensores.map((sensor) => (
                  <TableRow key={sensor.sensor}>
                    <TableCell className="sensort">{sensor.sensor}</TableCell>
                    <TableCell className="tipot">
                      {sensor.tipo}
                    </TableCell>
                    <TableCell className="ubit">
                      {sensor.ubicacion}
                    </TableCell>
                    <TableCell className="estt">
                      {sensor.estado}
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" className="form-button">
                        <Link href="">Editar</Link>
                      </Button>
                      <Button variant="outline" className="form-button">
                        <Link href="">Eliminar</Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <Button variant="outline" className="bañadir">
                  <Link href="/sensoresf">Añadir ++</Link>
                </Button>
              </TableFooter>
            </Table>
          </>
        )}
      </div>
    </section>
  );
};

export default Listasensor;
