import React, { useState } from "react";
import { HeaderAdminOfertante } from "../components/HeaderAdminOfertante";

function GestionEmpleados() {
  const [empleados, setEmpleados] = useState([
    { id: 1, nombres: "Juan", apellidos: "Pérez", email: "juan.perez@example.com" },
    { id: 2, nombres: "María", apellidos: "Gómez", email: "maria.gomez@example.com" },
  ]);

  const [nuevoEmpleado, setNuevoEmpleado] = useState({
    nombres: "",
    apellidos: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevoEmpleado({ ...nuevoEmpleado, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = empleados.length ? empleados[empleados.length - 1].id + 1 : 1;
    setEmpleados([...empleados, { id: newId, ...nuevoEmpleado }]);
    setNuevoEmpleado({ nombres: "", apellidos: "", email: "" });
  };

  const handleDelete = (id) => {
    setEmpleados(empleados.filter((emp) => emp.id !== id));
  };

  const handleUpdate = (id) => {
    alert(`Actualizar empleado con id: ${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <HeaderAdminOfertante />

      <main className="flex-grow container mx-auto p-5 pt-24 flex flex-col items-center">
        <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Registrar Empleado
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Nombres
                </label>
                <input
                  type="text"
                  name="nombres"
                  value={nuevoEmpleado.nombres}
                  onChange={handleChange}
                  placeholder="Juan"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Apellidos
                </label>
                <input
                  type="text"
                  name="apellidos"
                  value={nuevoEmpleado.apellidos}
                  onChange={handleChange}
                  placeholder="Pérez"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div className="flex flex-col md:col-span-2">
                <label className="block text-gray-700 font-medium mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  name="email"
                  value={nuevoEmpleado.email}
                  onChange={handleChange}
                  placeholder="juan.perez@example.com"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full sm:w-auto bg-blue-600 text-black font-semibold px-8 py-3 rounded hover:bg-blue-700 transition"
              >
                Registrar Empleado
              </button>
            </div>
          </form>
        </div>

        
        <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Lista de Empleados
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                    Nombres
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                    Apellidos
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                    Correo
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody>
                {empleados.map((emp) => (
                  <tr key={emp.id} className="border-t hover:bg-gray-100">
                    <td className="px-4 py-3 text-sm text-gray-800">{emp.nombres}</td>
                    <td className="px-4 py-3 text-sm text-gray-800">{emp.apellidos}</td>
                    <td className="px-4 py-3 text-sm text-gray-800">{emp.email}</td>
                    <td className="px-4 py-3 text-sm text-center">
                      <button
                        onClick={() => handleUpdate(emp.id)}
                        className="bg-green-600 text-black px-3 py-1 rounded hover:bg-green-700 transition mr-2"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => handleDelete(emp.id)}
                        className="bg-red-600 text-black px-3 py-1 rounded hover:bg-red-700 transition"
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
                {empleados.length === 0 && (
                  <tr>
                    <td colSpan="4" className="px-4 py-3 text-center text-gray-600">
                      No hay empleados registrados.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default GestionEmpleados;
