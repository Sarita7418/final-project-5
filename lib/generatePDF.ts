// lib/generatePDF.ts
import jsPDF from "jspdf";
import "jspdf-autotable";

export const generatePDF = (tipoLectura: string) => {
  const doc = new jsPDF();

  // Agrega el nombre del hotel en la esquina superior izquierda
  doc.setFontSize(12);
  doc.text("Hotel Flamingo", 10, 10);

  // Determina el título basado en el tipo de lectura
  const titulo = tipoLectura === "general" ? "Reporte de lecturas general" : `Reporte de lecturas de ${tipoLectura}`;

  // Agrega el título centrado en la línea siguiente
  doc.setFontSize(18);
  doc.text(titulo, doc.internal.pageSize.getWidth() / 2, 25, { align: "center" });

  const tableData: string[][] = [];
  document.querySelectorAll(".perfil_s").forEach((row) => {
    const rowData: string[] = [];
    row.querySelectorAll("span").forEach((cell) => {
      rowData.push(cell.textContent || "");
    });
    tableData.push(rowData);
  });

  (doc as any).autoTable({
    head: [["Sensor", "Fecha", "Hora", "Valor", "Recursos"]],
    body: tableData,
    startY: 31, // Ajusta la posición de inicio de la tabla para que no se superponga con el título
    styles: {
      halign: "center", // Centrar el contenido de las celdas
      fillColor: [230, 230, 255], // Fondo morado muy claro
      lineColor: [0, 0, 0], // Color de los bordes
      lineWidth: 0.1, // Ancho de los bordes
      cellPadding: 2, // Espaciado interno de las celdas
      cellWidth: "wrap", // Ajustar el ancho de las celdas al contenido
    },
    headStyles: {
      halign: "center", // Centrar el contenido de las celdas del encabezado
      fillColor: [117, 45, 193], // Fondo morado oscuro
      textColor: [255, 255, 255], // Texto blanco
      lineColor: [0, 0, 0], // Color de los bordes
      lineWidth: 0.1, // Ancho de los bordes
      cellPadding: 2, // Espaciado interno de las celdas
      cellWidth: "wrap", // Ajustar el ancho de las celdas al contenido
    },
    columnStyles: {
      0: { cellWidth: "auto" }, // Ajustar el ancho de la primera columna
      1: { cellWidth: "auto" }, // Ajustar el ancho de la segunda columna
      2: { cellWidth: "auto" }, // Ajustar el ancho de la tercera columna
      3: { cellWidth: "auto" }, // Ajustar el ancho de la cuarta columna
      4: { cellWidth: "auto" }, // Ajustar el ancho de la quinta columna
    },
    tableLineWidth: 0.1, // Ancho de los bordes de la tabla
    margin: { top: 27 }, // Margen superior
  });

  // Obtener la fecha y hora actual
  const now = new Date();
  const fecha = now.toLocaleDateString();
  const hora = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // Formatear la hora sin segundos

  // Agregar el texto al final de la tabla
  const finalY = (doc as any).lastAutoTable.finalY || 27; // Obtener la posición Y final de la tabla
  doc.setFontSize(12);
  doc.text(`Reporte generado el ${fecha} a las ${hora}`, 10, finalY + 10);

  doc.save("reporte_lecturas.pdf");
};