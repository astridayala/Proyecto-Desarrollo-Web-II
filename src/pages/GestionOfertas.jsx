import React, { useState } from "react";
import { HeaderAdminOfertante } from "../components/HeaderAdminOfertante";

function GestionOfertas() {
  const [ofertas, setOfertas] = useState([]);

  const [nuevaOferta, setNuevaOferta] = useState({
    nombre: "",
    categoria: "En espera de aprobación",
    cuponesVendidos: 0,
    cuponesDisponibles: 0,
    precioRegular: "",
    precioOferta: "",
    fechaInicio: "",
    fechaFin: "",
    fechaLimiteUso: "",
    descripcion: "",
    otrosDetalles: "",
    porcentajeComision: 0.1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    let newValue = value;

    
    if (name === "precioRegular" || name === "precioOferta") {
      if (/^\d*\.?\d*$/.test(value)) {
        newValue = value;
      } else {
        return; 
      }
    }

    setNuevaOferta({ ...nuevaOferta, [name]: newValue });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    if ((name === "precioRegular" || name === "precioOferta") && value) {
      setNuevaOferta({
        ...nuevaOferta,
        [name]: parseFloat(value).toFixed(2), 
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = ofertas.length + 1;

    setOfertas([...ofertas, { id: newId, ...nuevaOferta, categoria: "En espera de aprobación" }]);

    setNuevaOferta({
      nombre: "",
      categoria: "En espera de aprobación",
      cuponesVendidos: 0,
      cuponesDisponibles: 0,
      precioRegular: "",
      precioOferta: "",
      fechaInicio: "",
      fechaFin: "",
      fechaLimiteUso: "",
      descripcion: "",
      otrosDetalles: "",
      porcentajeComision: 0.1,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <HeaderAdminOfertante />
      <main className="container mx-auto p-5 pt-24">
        <h1 className="text-3xl font-semibold text-gray-800 mb-8">
          Gestión de Ofertas
        </h1>

        <div className="max-w-4xl bg-white p-8 rounded-lg shadow-lg mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Registrar Nueva Oferta
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Nombre de la Oferta
              </label>
              <input
                type="text"
                name="nombre"
                value={nuevaOferta.nombre}
                onChange={handleChange}
                className="w-full p-3 border rounded"
                required
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
                className="w-full p-3 border rounded"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Precio Regular
                </label>
                <input
                  type="text"
                  name="precioRegular"
                  value={nuevaOferta.precioRegular}
                  onChange={handleChange}
                  onBlur={handleBlur} 
                  className="w-full p-3 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Precio de Oferta
                </label>
                <input
                  type="text"
                  name="precioOferta"
                  value={nuevaOferta.precioOferta}
                  onChange={handleChange}
                  onBlur={handleBlur} 
                  className="w-full p-3 border rounded"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Fecha de Inicio
                </label>
                <input
                  type="date"
                  name="fechaInicio"
                  value={nuevaOferta.fechaInicio}
                  onChange={handleChange}
                  className="w-full p-3 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Fecha de Fin
                </label>
                <input
                  type="date"
                  name="fechaFin"
                  value={nuevaOferta.fechaFin}
                  onChange={handleChange}
                  className="w-full p-3 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Fecha Límite de Uso
                </label>
                <input
                  type="date"
                  name="fechaLimiteUso"
                  value={nuevaOferta.fechaLimiteUso}
                  onChange={handleChange}
                  className="w-full p-3 border rounded"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Descripción
              </label>
              <textarea
                name="descripcion"
                value={nuevaOferta.descripcion}
                onChange={handleChange}
                className="w-full p-3 border rounded"
                required
              ></textarea>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Otros Detalles (Opcional)
              </label>
              <textarea
                name="otrosDetalles"
                value={nuevaOferta.otrosDetalles}
                onChange={handleChange}
                className="w-full p-3 border rounded"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-black p-3 rounded hover:bg-blue-600"
            >
              Registrar Oferta
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default GestionOfertas;
