import React, { useState, useEffect } from "react";
import { HeaderAdminOfertante } from "../components/HeaderAdminOfertante";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase/config";
import { collection, addDoc, updateDoc, doc, deleteDoc, getDocs } from "firebase/firestore";


function Empleados() {
  const [empleados, setEmpleados] = useState([]);
  const [form, setForm] = useState({ nombres: "", apellidos: "", correo: "" });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      if (editIndex !== null) {
        // Actualizar un empleado existente en Firestore
        const empleadoRef = doc(db, "empleados", empleados[editIndex].id);
        await updateDoc(empleadoRef, form);
  
        // Actualizar el estado local
        const updatedEmpleados = [...empleados];
        updatedEmpleados[editIndex] = { id: empleados[editIndex].id, ...form };
        setEmpleados(updatedEmpleados);
        setEditIndex(null);
      } else {
        // Agregar un nuevo empleado a Firestore
        const docRef = await addDoc(collection(db, "empleados"), form);
        setEmpleados([...empleados, { id: docRef.id, ...form }]);
      }
  
      setForm({ nombres: "", apellidos: "", correo: "" });
  
    } catch (error) {
      console.error("Error al guardar el empleado:", error);
    }
  };

  const fetchEmpleados = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "empleados"));
      const empleadosData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setEmpleados(empleadosData);
    } catch (error) {
      console.error("Error al obtener empleados:", error);
    }
  };
  
  useEffect(() => {
    fetchEmpleados();
  }, []);

  

  const handleEdit = (index) => {
    setForm(empleados[index]);
    setEditIndex(index);
  };

  const handleDelete = async (index) => {
    try {
      const empleadoId = empleados[index].id;
      await deleteDoc(doc(db, "empleados", empleadoId));
  
      // Actualizar el estado local
      setEmpleados(empleados.filter((_, i) => i !== index));
  
    } catch (error) {
      console.error("Error al eliminar empleado:", error);
    }
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