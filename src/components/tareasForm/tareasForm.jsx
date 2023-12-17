// src/components/TareasForm.jsx
import React, { useState } from 'react';
import './tareasForm.css';

const TareasForm = ({ onSubmit }) => {
  const [nuevaTarea, setNuevaTarea] = useState({ titulo: '', descripcion: '', asignado: '', prioridad: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(nuevaTarea);
    setNuevaTarea({ titulo: '', descripcion: '', asignado: '', prioridad: '' });
  };

  return (
    <div className="nueva-tarea-tarjeta">
      <h2>Agregar Nueva Tarea</h2>
      <form onSubmit={handleSubmit}>
        <div className="formulario-item">
          <label htmlFor="titulo">Título:</label>
          <input
            type="text"
            id="titulo"
            value={nuevaTarea.titulo}
            onChange={(e) => setNuevaTarea({ ...nuevaTarea, titulo: e.target.value })}
          />
        </div>
        <div className="formulario-item">
          <label htmlFor="descripcion">Descripción:</label>
          <input
            type="text"
            id="descripcion"
            value={nuevaTarea.descripcion}
            onChange={(e) => setNuevaTarea({ ...nuevaTarea, descripcion: e.target.value })}
          />
        </div>
        <div className="formulario-item">
          <label htmlFor="asignado">Asignado a:</label>
          <input
            type="text"
            id="asignado"
            value={nuevaTarea.asignado}
            onChange={(e) => setNuevaTarea({ ...nuevaTarea, asignado: e.target.value })}
          />
        </div>
        <div className="formulario-item">
          <label htmlFor="prioridad">Prioridad:</label>
          <input
            type="text"
            id="prioridad"
            value={nuevaTarea.prioridad}
            onChange={(e) => setNuevaTarea({ ...nuevaTarea, prioridad: e.target.value })}
          />
        </div>
        <button type="submit">Agregar Tarea</button>
      </form>
    </div>
  );
};

export default TareasForm;