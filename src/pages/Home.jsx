import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HeaderGeneral } from "../components/HeaderGeneral";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";

const Home = () => {
  const [ofertas, setOfertas] = useState([]);

  useEffect(() => {
    const obtenerOfertas = async () => {
      const querySnapshot = await getDocs(collection(db, "ofertas"));
      const ofertasAprobadas = querySnapshot.docs
        .map((doc) => ({ id: doc.id, ...doc.data() }))
        .filter((oferta) => oferta.estado === "aprobada");

      setOfertas(ofertasAprobadas);
    };

    obtenerOfertas();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <HeaderGeneral />
      <main className="container mx-auto p-5 pt-24 pb-10"> 
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">Ofertas Disponibles</h1> 

        {ofertas.length === 0 ? (
          <p className="text-center text-gray-600">No hay ofertas disponibles.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
            {ofertas.map((oferta) => (
              <div key={oferta.id} className="bg-white shadow-lg rounded-lg p-4">
                <h2 className="text-lg font-semibold">{oferta.titulo}</h2>
                <p className="text-gray-700">
                  Precio regular: <span className="line-through">${oferta.precioRegular}</span>
                </p>
                <p className="text-green-600 font-bold">Precio oferta: ${oferta.precioOferta}</p>
                <p className="text-gray-700">Descripción: {oferta.descripcion}</p> 
                <Link 
                  to={`/oferta/${oferta.id}`} 
                  className="block mt-3 bg-blue-500 text-white text-center py-2 rounded-lg hover:bg-blue-600"
                >
                  Ver más
                </Link>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
