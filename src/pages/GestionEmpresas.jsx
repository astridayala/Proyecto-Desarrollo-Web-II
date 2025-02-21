import React, { useState } from "react";
import { HeaderAdmin } from "../components/HeaderAdmin";

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
    setNuevaEmpresa({ nombre: "", codigo: "", direccion: "", contacto: "", telefono: "", correo: "", rubro: "", porcentajeComision: 0.1 });
  };

  const handleDelete = (id) => {
    setEmpresas(empresas.filter((empresa) => empresa.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <HeaderAdmin />
      <main className="container mx-auto p-5 pt-24 flex flex-col items-center">
        <h1 className="text-3xl font-semibold text-gray-800 mb-8">Gestión de Empresas</h1>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
          <input type="text" name="nombre" placeholder="Nombre de la empresa" value={nuevaEmpresa.nombre} onChange={handleChange} required className="input-style" />
          <input type="text" name="codigo" placeholder="Código (ABC123)" value={nuevaEmpresa.codigo} onChange={handleChange} required className="input-style" />
          <input type="text" name="direccion" placeholder="Dirección" value={nuevaEmpresa.direccion} onChange={handleChange} required className="input-style" />
          <input type="text" name="contacto" placeholder="Nombre del contacto" value={nuevaEmpresa.contacto} onChange={handleChange} required className="input-style" />
          <input type="tel" name="telefono" placeholder="Teléfono" value={nuevaEmpresa.telefono} onChange={handleChange} required className="input-style" />
          <input type="email" name="correo" placeholder="Correo" value={nuevaEmpresa.correo} onChange={handleChange} required className="input-style" />
          <input type="text" name="rubro" placeholder="Rubro" value={nuevaEmpresa.rubro} onChange={handleChange} required className="input-style" />
          <input type="number" name="porcentajeComision" placeholder="% Comisión" step="0.01" min="0" max="1" value={nuevaEmpresa.porcentajeComision} onChange={handleChange} required className="input-style" />
          <button type="submit" className="btn-primary">Registrar Empresa</button>
        </form>
        <div className="w-full max-w-4xl mt-10">
          {empresas.map((empresa) => (
            <div key={empresa.id} className="bg-white p-4 rounded shadow mb-4 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold">{empresa.nombre} ({empresa.codigo})</h2>
                <p>Rubro: {empresa.rubro}</p>
                <p>Contacto: {empresa.contacto} - Tel: {empresa.telefono} - Email: {empresa.correo}</p>
              </div>
              <button onClick={() => handleDelete(empresa.id)} className="btn-danger">Eliminar</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default GestionEmpresas;