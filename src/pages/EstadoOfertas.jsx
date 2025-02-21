import React, { useState, useEffect } from "react";
import { HeaderAdminOfertante } from "../components/HeaderAdminOfertante";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";

// Esta función simula la obtención de ofertas registradas.
// En una aplicación real, estas ofertas podrían provenir de una API o de un contexto global.
const obtenerOfertas = () => {
  // Por ejemplo, se podrían obtener del localStorage:
  // return JSON.parse(localStorage.getItem("ofertas")) || [];
  // Aquí se utiliza una muestra de datos de ejemplo:
  return [
    {
      id: 1,
      nombre: "Oferta 1",
      categoria: "En espera de aprobación",
      cuponesVendidos: 0,
      cuponesDisponibles: 100,
      precioRegular: "50.00",
      precioOferta: "40.00",
      fechaInicio: "2025-03-01",
      fechaFin: "2025-03-31",
      fechaLimiteUso: "2025-04-15",
      descripcion: "Descripción de la oferta 1",
      otrosDetalles: "",
      porcentajeComision: 0.1,
    },
    {
      id: 2,
      nombre: "Oferta 2",
      categoria: "Aprobada",
      cuponesVendidos: 10,
      cuponesDisponibles: 90,
      precioRegular: "100.00",
      precioOferta: "80.00",
      fechaInicio: "2025-04-10",
      fechaFin: "2025-04-20",
      fechaLimiteUso: "2025-04-25",
      descripcion: "Descripción de la oferta 2",
      otrosDetalles: "",
      porcentajeComision: 0.1,
    },
    {
      id: 3,
      nombre: "Oferta 3",
      categoria: "Aprobada",
      cuponesVendidos: 20,
      cuponesDisponibles: 80,
      precioRegular: "75.00",
      precioOferta: "60.00",
      fechaInicio: "2025-02-01",
      fechaFin: "2025-02-28",
      fechaLimiteUso: "2025-03-05",
      descripcion: "Descripción de la oferta 3",
      otrosDetalles: "",
      porcentajeComision: 0.1,
    },
    {
      id: 4,
      nombre: "Oferta 4",
      categoria: "Rechazada",
      cuponesVendidos: 0,
      cuponesDisponibles: 50,
      precioRegular: "30.00",
      precioOferta: "25.00",
      fechaInicio: "2025-05-01",
      fechaFin: "2025-05-31",
      fechaLimiteUso: "2025-06-05",
      descripcion: "Descripción de la oferta 4",
      otrosDetalles: "",
      porcentajeComision: 0.1,
    },
    {
      id: 5,
      nombre: "Oferta 5",
      categoria: "Descartada",
      cuponesVendidos: 0,
      cuponesDisponibles: 60,
      precioRegular: "120.00",
      precioOferta: "100.00",
      fechaInicio: "2025-06-01",
      fechaFin: "2025-06-30",
      fechaLimiteUso: "2025-07-05",
      descripcion: "Descripción de la oferta 5",
      otrosDetalles: "",
      porcentajeComision: 0.1,
    },
  ];
};

function EstadoOfertas() {
  const [ofertas, setOfertas] = useState([]);
  const navigate = useNavigate();

  // Categorías para la visualización de ofertas
  const [categorias, setCategorias] = useState({
    "En espera de aprobación": [],
    "Ofertas aprobadas futuras": [],
    "Ofertas activas": [],
    "Ofertas pasadas": [],
    "Ofertas rechazadas": [],
    "Ofertas descartadas": [],
  });

  // Al montar el componente se obtienen las ofertas y se clasifican
  useEffect(() => {
    const hoy = new Date(); // Definir dentro del useEffect evita el bucle infinito
    const ofertasRegistradas = obtenerOfertas();
    setOfertas(ofertasRegistradas);
  
    const nuevasCategorias = {
      "En espera de aprobación": [],
      "Ofertas aprobadas futuras": [],
      "Ofertas activas": [],
      "Ofertas pasadas": [],
      "Ofertas rechazadas": [],
      "Ofertas descartadas": [],
    };
  
    ofertasRegistradas.forEach((oferta) => {
      const { categoria, fechaInicio, fechaFin } = oferta;
      const inicio = new Date(fechaInicio);
      const fin = new Date(fechaFin);
  
      if (categoria === "En espera de aprobación") {
        nuevasCategorias["En espera de aprobación"].push(oferta);
      } else if (categoria === "Rechazada") {
        nuevasCategorias["Ofertas rechazadas"].push(oferta);
      } else if (categoria === "Descartada") {
        nuevasCategorias["Ofertas descartadas"].push(oferta);
      } else if (categoria === "Aprobada") {
        if (hoy < inicio) {
          nuevasCategorias["Ofertas aprobadas futuras"].push(oferta);
        } else if (hoy >= inicio && hoy <= fin) {
          nuevasCategorias["Ofertas activas"].push(oferta);
        } else if (hoy > fin) {
          nuevasCategorias["Ofertas pasadas"].push(oferta);
        }
      }
    });
  
    setCategorias(nuevasCategorias);
  }, []); 

  // Función auxiliar para renderizar una tabla con ofertas de una categoría
  const renderTablaOfertas = (titulo, ofertasCategoria) => {
    if (!ofertasCategoria.length) return null;

    return (
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">{titulo}</h2>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full border-collapse">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-3 text-left">Nombre</th>
                <th className="px-4 py-3 text-center">Cupones Vendidos</th>
                <th className="px-4 py-3 text-center">Cupones Disponibles</th>
                <th className="px-4 py-3 text-center">Precio Regular</th>
                <th className="px-4 py-3 text-center">Precio Oferta</th>
              </tr>
            </thead>
            <tbody>
              {ofertasCategoria.map((oferta) => (
                <tr key={oferta.id} className="border-t hover:bg-gray-100">
                  <td className="px-4 py-3">{oferta.nombre}</td>
                  <td className="px-4 py-3 text-center">{oferta.cuponesVendidos}</td>
                  <td className="px-4 py-3 text-center">{oferta.cuponesDisponibles}</td>
                  <td className="px-4 py-3 text-center">${oferta.precioRegular}</td>
                  <td className="px-4 py-3 text-center">${oferta.precioOferta}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <HeaderAdminOfertante />
      <main className="container mx-auto p-5 pt-24">
        <h1 className="text-3xl font-semibold text-gray-800 mb-8">
          Estados de las Ofertas
        </h1>

        {renderTablaOfertas("En espera de aprobación", categorias["En espera de aprobación"])}
        {renderTablaOfertas("Ofertas aprobadas futuras", categorias["Ofertas aprobadas futuras"])}
        {renderTablaOfertas("Ofertas activas", categorias["Ofertas activas"])}
        {renderTablaOfertas("Ofertas pasadas", categorias["Ofertas pasadas"])}
        {renderTablaOfertas("Ofertas rechazadas", categorias["Ofertas rechazadas"])}
        {renderTablaOfertas("Ofertas descartadas", categorias["Ofertas descartadas"])}
      </main>
    </div>
  );
}

export default EstadoOfertas;
