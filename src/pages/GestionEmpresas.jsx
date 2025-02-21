import React, { useState } from "react";
import { HeaderGeneralAdmin } from "../components/HeaderGeneralAdmin";
import { Footer } from "../components/Footer";

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevaEmpresa({ ...nuevaEmpresa, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmpresas([...empresas, { id: empresas.length + 1, ...nuevaEmpresa }]);
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
  };

  const handleDelete = (id) => {
    setEmpresas(empresas.filter((empresa) => empresa.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <HeaderGeneralAdmin />
      <main className="container mx-auto px-5 flex flex-col items-center">
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
                    <option value="Belleza">Viajes</option>
                    <option value="Things">Comida</option>
                    <option value="Viajes">Belleza</option>
                    <option value="Comida">Things</option>
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
          {empresas.map((empresa) => (
            <div key={empresa.id} className="empresa-card">
              <div>
                <h2>{empresa.nombre} ({empresa.codigo})</h2>
                <p>Rubro: {empresa.rubro}</p>
                <p>Contacto: {empresa.contacto}</p>
                <p>Tel: {empresa.telefono}</p>
                <p>Email: {empresa.correo}</p>             
              </div>
              <button onClick={() => handleDelete(empresa.id)} className="eliminar-btn">
                Eliminar
              </button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default GestionEmpresas;
