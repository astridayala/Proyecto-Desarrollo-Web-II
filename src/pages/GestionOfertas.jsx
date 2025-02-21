import React, { useState } from "react";
import { HeaderAdminOfertante } from "../components/HeaderAdminOfertante";

function GestionOfertas() {

  const [ofertas, setOfertas] = useState([
    { 
      id: 1, 
      categoria: "En espera de aprobación",
      nombre: "Oferta 1", 
      cuponesVendidos: 10, 
      cuponesDisponibles: 40, 
      precio: 20, 
      porcentajeComision: 0.1 
    },
    { 
      id: 2, 
      categoria: "Aprobadas futuras",
      nombre: "Oferta 2", 
      cuponesVendidos: 5, 
      cuponesDisponibles: 45, 
      precio: 15, 
      porcentajeComision: 0.1 
    },
    { 
      id: 3, 
      categoria: "Activas",
      nombre: "Oferta 3", 
      cuponesVendidos: 20, 
      cuponesDisponibles: 30, 
      precio: 25, 
      porcentajeComision: 0.15 
    },
    { 
      id: 4, 
      categoria: "Pasadas",
      nombre: "Oferta 4", 
      cuponesVendidos: 15, 
      cuponesDisponibles: 0, 
      precio: 18, 
      porcentajeComision: 0.1 
    },
    { 
      id: 5, 
      categoria: "Rechazadas",
      nombre: "Oferta 5", 
      cuponesVendidos: 0, 
      cuponesDisponibles: 50, 
      precio: 20, 
      porcentajeComision: 0.1 
    },
    { 
      id: 6, 
      categoria: "Descartadas",
      nombre: "Oferta 6", 
      cuponesVendidos: 0, 
      cuponesDisponibles: 50, 
      precio: 20, 
      porcentajeComision: 0.1 
    },
  ]);

  // Estado para manejar los valores del formulario de registro
  const [nuevaOferta, setNuevaOferta] = useState({
    nombre: "",
    categoria: "En espera de aprobación",
    cuponesVendidos: 0,
    cuponesDisponibles: 0,
    precio: 0,
    porcentajeComision: 0.1
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevaOferta({ ...nuevaOferta, [name]: value });
  };

  // Manejar el envío del formulario con Firebase
  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = ofertas.length + 1;
    setOfertas([...ofertas, { id: newId, ...nuevaOferta }]);
    
    setNuevaOferta({
      nombre: "",
      categoria: "En espera de aprobación",
      cuponesVendidos: 0,
      cuponesDisponibles: 0,
      precio: 0,
      porcentajeComision: 0.1
    });
  };

  
  const filtrarOfertas = (categoria) => {
    return ofertas.filter((oferta) => oferta.categoria === categoria);
  };

  
  const categorias = [
    "En espera de aprobación",
    "Aprobadas futuras",
    "Activas",
    "Pasadas",
    "Rechazadas",
    "Descartadas",
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <HeaderAdminOfertante />

      
      <main className="flex-grow container mx-auto p-5 pt-24 flex flex-col items-center">
        <h1 className="text-3xl font-semibold text-gray-800 mb-8">
          Gestión de Ofertas
        </h1>

        
        <div className="w-full max-w-4xl mb-10">
          {categorias.map((cat) => {
            const ofertasFiltradas = filtrarOfertas(cat);

            
            if (ofertasFiltradas.length === 0) return null;

            return (
              <div key={cat} className="mb-8">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">
                  {cat}
                </h2>
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                  <table className="min-w-full border-collapse">
                    <thead className="bg-gray-200">
                      <tr>
                        <th className="px-4 py-3 text-left">Nombre</th>
                        <th className="px-4 py-3 text-center">Cupones Vendidos</th>
                        <th className="px-4 py-3 text-center">Cupones Disponibles</th>
                        <th className="px-4 py-3 text-center">Ingresos Totales</th>
                        <th className="px-4 py-3 text-center">Cargo por Servicio</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ofertasFiltradas.map((oferta) => {
                        const ingresosTotales = oferta.cuponesVendidos * oferta.precio;
                        const cargoServicio = ingresosTotales * oferta.porcentajeComision;
                        return (
                          <tr
                            key={oferta.id}
                            className="border-t hover:bg-gray-100"
                          >
                            <td className="px-4 py-3">{oferta.nombre}</td>
                            <td className="px-4 py-3 text-center">
                              {oferta.cuponesVendidos}
                            </td>
                            <td className="px-4 py-3 text-center">
                              {oferta.cuponesDisponibles}
                            </td>
                            <td className="px-4 py-3 text-center">
                              ${ingresosTotales}
                            </td>
                            <td className="px-4 py-3 text-center">
                              ${cargoServicio}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}
        </div>
        

                {/* Registro de nuevas ofertas */}
                <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Registrar Nueva Oferta
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Nombre de la Oferta
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={nuevaOferta.nombre}
                  onChange={handleChange}
                  placeholder="Ej. Oferta Especial"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Categoría
                </label>
                <select
                  name="categoria"
                  value={nuevaOferta.categoria}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {categorias.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Cupones Vendidos
                </label>
                <input
                  type="number"
                  name="cuponesVendidos"
                  value={nuevaOferta.cuponesVendidos}
                  onChange={handleChange}
                  min="0"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Cupones Disponibles
                </label>
                <input
                  type="number"
                  name="cuponesDisponibles"
                  value={nuevaOferta.cuponesDisponibles}
                  onChange={handleChange}
                  min="0"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Precio del Cupón
                </label>
                <input
                  type="number"
                  name="precio"
                  value={nuevaOferta.precio}
                  onChange={handleChange}
                  min="0"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Porcentaje de Comisión
                </label>
                <input
                  type="number"
                  step="0.01"
                  name="porcentajeComision"
                  value={nuevaOferta.porcentajeComision}
                  onChange={handleChange}
                  min="0"
                  max="1"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full sm:w-auto bg-blue-600 text-blue font-semibold px-8 py-3 rounded hover:bg-blue-700 transition"
              >
                Registrar Oferta
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default GestionOfertas;
