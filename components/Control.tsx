"use client";
// components/FloorControl.js
import React, {useState} from "react";
import Link from "next/link";
import Plus from "@/public/plus.svg";
import Calendar from "@/public/calendar.svg";
import "./Control.css";

const playSound = () =>{
  const sound = new Audio("/click.mp3");
  sound.play();
} 

const FloorControl = ({ onFloorChange }: { onFloorChange: (value: string) => void }) => {
  const handleFloorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFloorChange(e.target.value);
  };
  return (
    <section className="floor-control">
      <div className="options">
        <h3>Control De Pisos</h3>
      </div>
      <div className="floor-selector">
        <label htmlFor="floor-select">Seleccionar Piso:</label>
        <select id="floor-select" onChange={handleFloorChange}>
          <option value="P1">Primer Piso</option>
          <option value="P2">Segundo Piso</option>
          <option value="P3">Tercer Piso</option>
        </select>
      </div>
    </section>
  );
};

export default FloorControl;
