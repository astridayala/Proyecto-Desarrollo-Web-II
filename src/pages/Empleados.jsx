import React, { useState } from "react";
import { HeaderAdminOfertante } from "../components/HeaderAdminOfertante";
import { useNavigate } from "react-router-dom";

function Empleados() {
  const [empleados, setEmpleados] = useState([]);
  const [form, setForm] = useState({ nombres: "", apellidos: "", correo: "" });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedEmpleados = [...empleados];
      updatedEmpleados[editIndex] = form;
      setEmpleados(updatedEmpleados);
      setEditIndex(null);
    } else {
      setEmpleados([...empleados, form]);
    }
    setForm({ nombres: "", apellidos: "", correo: "" });
  };

  const handleEdit = (index) => {
    setForm(empleados[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setEmpleados(empleados.filter((_, i) => i !== index));
  };

  return (
    <div className="container mx-auto p-8 pt-24 bg-gray-100 min-h-screen">
      <HeaderAdminOfertante/>
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Gestión de Empleados</h1>
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto mb-6"
      >
        <div className="mb-4">
          <input
            type="text"
            name="nombres"
            placeholder="Nombres"
            value={form.nombres}
            onChange={handleChange}
            required
            className="border p-3 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="apellidos"
            placeholder="Apellidos"
            value={form.apellidos}
            onChange={handleChange}
            required
            className="border p-3 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="correo"
            placeholder="Correo Electrónico"
            value={form.correo}
            onChange={handleChange}
            required
            className="border p-3 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-blue-600 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-lg transition-all"
        >
          {editIndex !== null ? "Actualizar" : "Registrar"}
        </button>
      </form>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-6 py-3">Nombres</th>
              <th className="px-6 py-3">Apellidos</th>
              <th className="px-6 py-3">Correo</th>
              <th className="px-6 py-3">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {empleados.map((empleado, index) => (
              <tr key={index} className="border-t hover:bg-gray-100">
                <td className="px-6 py-3 text-center">{empleado.nombres}</td>
                <td className="px-6 py-3 text-center">{empleado.apellidos}</td>
                <td className="px-6 py-3 text-center">{empleado.correo}</td>
                <td className="px-6 py-3 text-center">
                  <button
                    onClick={() => handleEdit(index)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-black px-3 py-1 rounded-lg mr-2 transition-all"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="bg-red-500 hover:bg-red-600 text-black px-3 py-1 rounded-lg transition-all"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Empleados;