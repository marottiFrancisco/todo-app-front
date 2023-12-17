// src/App.jsx
import React, { useState, useEffect } from 'react';
import TareasList from './components/tareasList/tareasList';
import TareasForm from './components/tareasForm/tareasForm';
import './App.css';

function App() {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    const fetchTareas = async () => {
      const response = await fetch('http://localhost:3000/tareas');
      const data = await response.json();
      setTareas(data);
    };

    fetchTareas();
  }, []);

  const handleCompletarTarea = async (id) => {
    await fetch(`http://localhost:3000/tareas/${id}`, { method: 'POST' });
    const updatedTareas = tareas.map((tarea) => (tarea.id === id ? { ...tarea, completado: true } : tarea));
    setTareas(updatedTareas);
  };

  const handleEliminarTarea = async (id) => {
    await fetch(`http://localhost:3000/tareas/${id}`, { method: 'DELETE' });
    const updatedTareas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(updatedTareas);
  };

  const handleAgregarTarea = async (nuevaTarea) => {
    await fetch('http://localhost:3000/tareas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(nuevaTarea),
    });
    const updatedTareas = [...tareas, nuevaTarea];
    setTareas(updatedTareas);
  };

  return (
    <div>
      <TareasForm onSubmit={handleAgregarTarea} />
      <div className="tareas-list">
        <h2>Lista de Tareas</h2>
        {tareas.length > 0 ? (
          <TareasList tareas={tareas} onCompletar={handleCompletarTarea} onDelete={handleEliminarTarea} />
        ) : (
          <p>No hay tareas</p>
        )}
      </div>
    </div>
  );
}

export default App;
