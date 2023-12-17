// src/components/TareasList.jsx
import React from 'react';
import './tareasList.css';

const TareasList = ({ tareas, onCompletar, onDelete }) => {
  return (
    <div className="tareas-list">
      <h2>Lista de Tareas</h2>
      {tareas && tareas.length > 0 ? (
        <div className="tareas-tarjetas">
          {tareas.map((tarea) => (
            <div key={tarea.id} className={`tarea-tarjeta ${tarea.completado ? 'completada' : ''}`}>
              <h3>{tarea.titulo}</h3>
              <p>{tarea.descripcion}</p>
              <p>Asignado a: {tarea.asignado}</p>
              <button onClick={() => onCompletar(tarea.id)}>Completar</button>
              <button onClick={() => onDelete(tarea.id)}>Eliminar</button>
            </div>
          ))}
        </div>
      ) : (
        <p>No hay tareas</p>
      )}
    </div>
  );
};

export default TareasList;
