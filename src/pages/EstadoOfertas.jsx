import React, { useState, useEffect } from "react";
import { HeaderAdminOfertante } from "../components/HeaderAdminOfertante";
import { db } from "../firebase/config";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";

function EstadoOfertas() {
  const [ofertas, setOfertas] = useState([]);
  const [categorias, setCategorias] = useState({
    "Pendientes": [],
    "Aprobadas": [],
    "Rechazadas": [],
  });

  useEffect(() => {
    const obtenerOfertas = async () => {
      const querySnapshot = await getDocs(collection(db, "ofertas"));
      const listaOfertas = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setOfertas(listaOfertas);
      clasificarOfertas(listaOfertas);
    };

    obtenerOfertas();
  }, []);

  const clasificarOfertas = (ofertasRegistradas) => {
    const nuevasCategorias = {
      "Pendientes": [],
      "Aprobadas": [],
      "Rechazadas": [],
    };

    ofertasRegistradas.forEach((oferta) => {
      if (oferta.estado === "pendiente") {
        nuevasCategorias["Pendientes"].push(oferta);
      } else if (oferta.estado === "aprobada") {
        nuevasCategorias["Aprobadas"].push(oferta);
      } else if (oferta.estado === "rechazada") {
        nuevasCategorias["Rechazadas"].push(oferta);
      }
    });

    setCategorias(nuevasCategorias);
  };

  const cambiarEstado = async (id, nuevoEstado) => {
    try {
      await updateDoc(doc(db, "ofertas", id), { estado: nuevoEstado });
      alert(`Oferta actualizada a estado: ${nuevoEstado}`);

      // Actualizar la lista de ofertas después del cambio
      const nuevasOfertas = ofertas.map((oferta) =>
        oferta.id === id ? { ...oferta, estado: nuevoEstado } : oferta
      );
      setOfertas(nuevasOfertas);
      clasificarOfertas(nuevasOfertas);
    } catch (error) {
      console.error("Error al actualizar el estado:", error);
    }
  };

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
                <th className="px-4 py-3 text-center">Precio Regular</th>
                <th className="px-4 py-3 text-center">Precio Oferta</th>
                <th className="px-4 py-3 text-center">Estado</th>
                <th className="px-4 py-3 text-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {ofertasCategoria.map((oferta) => (
                <tr key={oferta.id} className="border-t hover:bg-gray-100">
                  <td className="px-4 py-3">{oferta.titulo}</td>
                  <td className="px-4 py-3 text-center">${oferta.precioRegular}</td>
                  <td className="px-4 py-3 text-center">${oferta.precioOferta}</td>
                  <td className="px-4 py-3 text-center">{oferta.estado}</td>
                  <td className="px-4 py-3 text-center space-x-2">
                    {oferta.estado === "pendiente" && (
                      <>
                        <button
                          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                          onClick={() => cambiarEstado(oferta.id, "aprobada")}
                        >
                          Aprobar
                        </button>
                        <button
                          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                          onClick={() => cambiarEstado(oferta.id, "rechazada")}
                        >
                          Rechazar
                        </button>
                      </>
                    )}
                  </td>
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

        {renderTablaOfertas("Pendientes", categorias["Pendientes"])}
        {renderTablaOfertas("Aprobadas", categorias["Aprobadas"])}
        {renderTablaOfertas("Rechazadas", categorias["Rechazadas"])}
      </main>
    </div>
  );
}

export default EstadoOfertas;