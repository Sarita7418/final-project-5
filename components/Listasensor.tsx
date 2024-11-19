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
const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

const Listasensor = () => {
  const [selectedTab, setSelectedTab] = useState<string>("agua");

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };
  return (
    <section className="container_consumo">
      <span className="span-title">Consumo Semanal</span>

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
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Sensor</TableHead>
                  <TableHead>Tipo</TableHead>
                  <TableHead>Ubicación</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead className="w-[400px]">
                    Opciones de Sensor
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow key={invoice.invoice}>
                    <TableCell className="font-medium">
                      {invoice.invoice}
                    </TableCell>
                    <TableCell>{invoice.paymentStatus}</TableCell>
                    <TableCell>{invoice.paymentMethod}</TableCell>
                    <TableCell className="text-right">
                      {invoice.totalAmount}
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" className="form-button">
                        <Link href="">Editar</Link>
                      </Button>{" "}
                      <Button variant="outline" className="form-button">
                        <Link href="">Eliminar</Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <Button variant="outline" className="bañadir">
                  <Link href="/sensoresf">Añadir</Link>
                </Button>
              </TableFooter>
            </Table>
          </>
        )}
        {selectedTab === "electricidad" && (
          <>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Sensor</TableHead>
                  <TableHead>Tipo</TableHead>
                  <TableHead>Ubicacion</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead className="text-right">
                    Opciones de Sensor
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow key={invoice.invoice}>
                    <TableCell className="font-medium">
                      {invoice.invoice}
                    </TableCell>
                    <TableCell>{invoice.paymentStatus}</TableCell>
                    <TableCell>{invoice.paymentMethod}</TableCell>
                    <TableCell className="text-right">
                      {invoice.totalAmount}
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" className="form-button">
                        <Link href="">Editar</Link>
                      </Button>{" "}
                      <Button variant="outline" className="form-button">
                        <Link href="">Eliminar</Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <Button variant="outline" className="form-button">
                    <Link href="/sensoresf">Añadir</Link>
                  </Button>
                </TableRow>
              </TableFooter>
            </Table>
          </>
        )}
        {selectedTab === "gas" && (
          <>
            <Table>
              <TableCaption>A list of your recent invoices.</TableCaption>
              <TableHeader className="opciones">
                <TableRow>
                  <TableHead>Invoice</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead className="opciones">Opciones de Sensor</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow key={invoice.invoice}>
                    <TableCell>{invoice.invoice}</TableCell>
                    <TableCell>{invoice.paymentStatus}</TableCell>
                    <TableCell>{invoice.paymentMethod}</TableCell>
                    <TableCell >{invoice.totalAmount}</TableCell>
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
                <Button variant="outline" className="form-button bañadir">
                  <Link href="/sensoresf">Añadir</Link>
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
