import { useState, useEffect } from 'react';
import './App.css';

function App(  ) {
  
  const [tareas, setTareas] = useState(() => {
    const tareasGuardadas = localStorage.getItem('tareas');
    return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
  });
  const [texto, setTexto] = useState('');
  const [editId, setEditId] = useState(null);
  const [editTexto, setEditTexto] = useState('');

  // Eliminado el efecto de lectura inicial, ya se hace en el useState

  // Guardar tareas en localStorage cada vez que cambian
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  const agregarTarea = () => {
    if (!texto.trim()) return;
    setTareas([...tareas, { id: Date.now(), texto, completada: false }]);
    setTexto('');
  };

  const toggleCompletada = (id) => {
    setTareas(tareas.map(t =>
      t.id === id ? { ...t, completada: !t.completada } : t
    ));
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter(t => t.id !== id));
  };

  // Editar tarea
  const iniciarEdicion = (id, texto) => {
    setEditId(id);
    setEditTexto(texto);
  };

  const guardarEdicion = (id) => {
    setTareas(tareas.map(t =>
      t.id === id ? { ...t, texto: editTexto } : t
    ));
    setEditId(null);
    setEditTexto('');
  };

  return (
    <div className="contenedor">
      <h1>📝 Lista de Tareas</h1>
      <div className="input-area">
        <input
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Escribe una tarea..."
        />
        <button onClick={agregarTarea}>Agregar</button>
      </div>

      <ul>
        {tareas.map(t => (
          <li key={t.id}>
            {editId === t.id ? (
              <>
                <input
                  type="text"
                  value={editTexto}
                  onChange={e => setEditTexto(e.target.value)}
                />
                <button onClick={() => guardarEdicion(t.id)}>Guardar</button>
                <button onClick={() => { setEditId(null); setEditTexto(''); }}>Cancelar</button>
              </>
            ) : (
              <>
                <span
                  className={t.completada ? 'completada' : ''}
                  onClick={() => toggleCompletada(t.id)}
                >
                  {t.texto}
                </span>
                <button onClick={() => iniciarEdicion(t.id, t.texto)}>✏️</button>
                <button onClick={() => eliminarTarea(t.id)}>❌</button>
            
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
