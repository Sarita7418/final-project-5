"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Control from "@/components/Control";
import Electricidad from "@/components/AreaElectricidad";
import Agua from "@/components/AreaAgua";
import Gas from "@/components/AreaGas";
import { useAuthStore } from "../store";
const Areas = () => {
  const { fetchAreas } = useAuthStore();
  const [selectedFloor, setSelectedFloor] = useState<string>("P1");

  useEffect(() => {
    fetchAreas(); // Cargar áreas al iniciar
  }, [fetchAreas]);

  // Función para actualizar el piso seleccionado
  const handleFloorChange = (floor: string) => {
    setSelectedFloor(floor);
  };
  return (
    <div>
      <Header />
      <section className="content">
        <Menu />
        <section className="page_content">
          <Control onFloorChange={handleFloorChange}/>
          <div>
            <Electricidad floor={selectedFloor} />
          </div>
          <div>
            <Agua floor={selectedFloor} />
          </div>
          <div>
            <Gas floor={selectedFloor} />
          </div>
        </section>
      </section>
    </div>
  );
};

export default Areas;
