import React, { useState } from "react";
import { HeaderAdminOfertante } from "../components/HeaderAdminOfertante";
import { db } from "../firebase/config"; // Importa Firestore desde la configuración de Firebase
import { collection, addDoc } from "firebase/firestore";

function GestionOfertas() {
  const [nuevaOferta, setNuevaOferta] = useState({
    titulo: "",
    precioRegular: "",
    precioOferta: "",
    fechaInicio: "",
    fechaFin: "",
    fechaLimiteUso: "",
    descripcion: "",
    otrosDetalles: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevaOferta({ ...nuevaOferta, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "ofertas"), {
        ...nuevaOferta,
        estado: "pendiente", // Se agrega el campo estado como "pendiente" por defecto
      });

      alert("Oferta registrada con éxito y marcada como pendiente de revisión.");

      // Reiniciar el formulario después de guardar
      setNuevaOferta({
        titulo: "",
        precioRegular: "",
        precioOferta: "",
        fechaInicio: "",
        fechaFin: "",
        fechaLimiteUso: "",
        descripcion: "",
        otrosDetalles: "",
      });
    } catch (error) {
      console.error("Error al registrar la oferta:", error);
      alert("Hubo un error al registrar la oferta.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <HeaderAdminOfertante />
      <main className="flex-grow container mx-auto p-5 pt-24 flex flex-col items-center">
        <h1 className="text-3xl font-semibold text-gray-800 mb-8">Gestión de Ofertas</h1>

        <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Registrar Nueva Oferta</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Título de la Oferta</label>
                <input
                  type="text"
                  name="titulo"
                  value={nuevaOferta.titulo}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Precio Regular</label>
                  <input
                    type="number"
                    name="precioRegular"
                    value={nuevaOferta.precioRegular}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Precio de la Oferta</label>
                  <input
                    type="number"
                    name="precioOferta"
                    value={nuevaOferta.precioOferta}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Fecha de Inicio</label>
                  <input
                    type="date"
                    name="fechaInicio"
                    value={nuevaOferta.fechaInicio}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Fecha de Fin</label>
                  <input
                    type="date"
                    name="fechaFin"
                    value={nuevaOferta.fechaFin}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Fecha Límite para Usar el Cupón</label>
                  <input
                    type="date"
                    name="fechaLimiteUso"
                    value={nuevaOferta.fechaLimiteUso}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Descripción de la Oferta</label>
                <textarea
                  name="descripcion"
                  value={nuevaOferta.descripcion}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Otros Detalles</label>
                <textarea
                  name="otrosDetalles"
                  value={nuevaOferta.otrosDetalles}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <button type="submit" className="w-full sm:w-auto bg-blue-600 text-white font-semibold px-8 py-3 rounded hover:bg-blue-700 transition">
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