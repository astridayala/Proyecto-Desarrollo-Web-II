import React, { useState, useEffect } from "react";
import { HeaderGeneralAdmin } from "../components/HeaderGeneralAdmin";
import { Footer } from "../components/Footer";
import { db } from "../firebase/config"; // Asegúrate de importar correctamente Firebase
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";

function GestionEmpresas() {
  const [empresas, setEmpresas] = useState([]);
  const [nuevaEmpresa, setNuevaEmpresa] = useState({
    nombre: "",
    codigo: "",
    direccion: "",
    contacto: "",
    telefono: "",
    correo: "",
    rubro: "",
    porcentajeComision: 0.1,
  });

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevaEmpresa({ ...nuevaEmpresa, [name]: value });
  };

  // Cargar empresas desde Firebase
  useEffect(() => {
    const fetchEmpresas = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "clientes"));
        const empresasData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setEmpresas(empresasData);
      } catch (error) {
        console.error("Error al obtener empresas: ", error);
      }
    };

    fetchEmpresas();
  }, []);

  // Agregar empresa a Firebase
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "clientes"), nuevaEmpresa);
      console.log("Empresa agregada con ID: ", docRef.id);

      setEmpresas([...empresas, { id: docRef.id, ...nuevaEmpresa }]);

      setNuevaEmpresa({
        nombre: "",
        codigo: "",
        direccion: "",
        contacto: "",
        telefono: "",
        correo: "",
        rubro: "",
        porcentajeComision: 0.1,
      });
    } catch (error) {
      console.error("Error al agregar empresa: ", error);
    }
  };

  // Eliminar empresa de Firebase
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "clientes", id));
      setEmpresas(empresas.filter((empresa) => empresa.id !== id));
    } catch (error) {
      console.error("Error al eliminar empresa: ", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <HeaderGeneralAdmin />
      <main className="container mx-auto px-5 flex flex-col items-center pt-36 flex-grow overflow-y-auto h-[calc(100vh-140px)]">
        <div className="form-container">
          <div className="formulario">
            <h2 className="head">Gestión de Empresas</h2>
            <form onSubmit={handleSubmit} className="loginForm">
              <div className="inputContainer">
                <input
                  type="text"
                  name="nombre"
                  placeholder="Nombre de la empresa"
                  value={nuevaEmpresa.nombre}
                  onChange={handleChange}
                  required
                  className="text"
                />
              </div>

              <div className="inputContainer">
                <input
                  type="text"
                  name="codigo"
                  placeholder="Código (ABC123)"
                  value={nuevaEmpresa.codigo}
                  onChange={handleChange}
                  required
                  className="text"
                />
              </div>

              <div className="inputContainer">
                <input
                  type="text"
                  name="direccion"
                  placeholder="Dirección"
                  value={nuevaEmpresa.direccion}
                  onChange={handleChange}
                  required
                  className="text"
                />
              </div>

              <div className="inputContainer">
                <input
                  type="text"
                  name="contacto"
                  placeholder="Nombre del contacto"
                  value={nuevaEmpresa.contacto}
                  onChange={handleChange}
                  required
                  className="text"
                />
              </div>

              <div className="inputContainer">
                <input
                  type="tel"
                  name="telefono"
                  placeholder="Teléfono"
                  value={nuevaEmpresa.telefono}
                  onChange={handleChange}
                  required
                  className="text"
                />
              </div>

              <div className="inputContainer">
                <input
                  type="email"
                  name="correo"
                  placeholder="Correo"
                  value={nuevaEmpresa.correo}
                  onChange={handleChange}
                  required
                  className="text"
                />
              </div>

              <div className="inputContainer">
                <select
                  name="rubro"
                  value={nuevaEmpresa.rubro}
                  onChange={handleChange}
                  required
                  className="text"
                >
                  <option value="">Seleccionar Rubro</option>
                  <option value="Salud">Salud</option>
                  <option value="Belleza">Belleza</option>
                  <option value="Viajes">Viajes</option>
                  <option value="Comida">Comida</option>
                </select>
              </div>

              <div className="inputContainer">
                <input
                  type="number"
                  name="porcentajeComision"
                  placeholder="% Comisión"
                  step="0.01"
                  min="0"
                  max="1"
                  value={nuevaEmpresa.porcentajeComision}
                  onChange={handleChange}
                  required
                  className="text"
                />
              </div>

              <button type="submit" className="botonIngresar">
                Registrar Empresa
              </button>
            </form>
          </div>
        </div>

        {/* Contenedor de las empresas registradas */}
        <div className="empresas-container">
          {empresas.length === 0 ? (
            <p>No hay empresas registradas.</p>
          ) : (
            empresas.map((empresa) => (
              <div key={empresa.id} className="empresa-card">
                <div>
                  <h2>
                    {empresa.nombre} ({empresa.codigo})
                  </h2>
                  <p>Rubro: {empresa.rubro}</p>
                  <p>Contacto: {empresa.contacto}</p>
                  <p>Tel: {empresa.telefono}</p>
                  <p>Email: {empresa.correo}</p>
                </div>
                <button
                  onClick={() => handleDelete(empresa.id)}
                  className="eliminar-btn"
                >
                  Eliminar
                </button>
              </div>
            ))
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default GestionEmpresas;
