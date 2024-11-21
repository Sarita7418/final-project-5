"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import alertLogo from "../public/pdfbutton.svg";
import Link from "next/link";
import "./ListaLecturas.css";

const ListaLecturas = () => {
  const [selectedOption, setSelectedOption] = useState("General");

  return (
    <div>
      <h2>Sensores</h2>
      <Select>
        <SelectTrigger className="w-[180px] ">
          <SelectValue placeholder="General" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Opciones</SelectLabel>
            <SelectItem
              value="General"
              onClick={() => setSelectedOption("General")}
            >
              General
            </SelectItem>
            <SelectItem value="Luz" onClick={() => setSelectedOption("Luz")}>
              Luz
            </SelectItem>
            <SelectItem value="Agua" onClick={() => setSelectedOption("Agua")}>
              Agua
            </SelectItem>
            <SelectItem value="Gas" onClick={() => setSelectedOption("Gas")}>
              Gas
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <div>
        <span>Exportar</span>
        <Link href="">
          <img src={alertLogo.src} alt="Alertas" className="headerButton" />
        </Link>
      </div>
      <div className="mt-4">
        {selectedOption === "General" && (
          <table>
            <thead>
              <tr>
                <th>Columna General 1</th>
                <th>Columna General 2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dato General 1</td>
                <td>Dato General 2</td>
              </tr>
            </tbody>
          </table>
        )}

        {selectedOption === "Luz" && (
          <table>
            <thead>
              <tr>
                <th>Columna Luz 1</th>
                <th>Columna Luz 2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dato Luz 1</td>
                <td>Dato Luz 2</td>
              </tr>
            </tbody>
          </table>
        )}

        {selectedOption === "Agua" && (
          <table>
            <thead>
              <tr>
                <th>Columna Agua 1</th>
                <th>Columna Agua 2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dato Agua 1</td>
                <td>Dato Agua 2</td>
              </tr>
            </tbody>
          </table>
        )}

        {selectedOption === "Gas" && (
          <table>
            <thead>
              <tr>
                <th>Columna Gas 1</th>
                <th>Columna Gas 2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dato Gas 1</td>
                <td>Dato Gas 2</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ListaLecturas;
