import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function incrementar() {
    setCount(count + 1)
  }
  function restar() {
    setCount(count - 1)
  }
  // Comprueba color
  let bgColor = '#9CA3AF' // gris por defecto
  if (count === 0) bgColor = '#6B7280' // gris
  else if (count > 0) bgColor = '#10B981' // verde
  else if (count < 0) bgColor = '#EF4444' // rojo

  let ctColor ='#ffffff';
  if (count > 10 ) ctColor= '#000000';
  else if (count < -10 ) ctColor= '#005656';

  // Cambia tamaño del resultado
  const size = `${count+20}px`;

  return (
    <>
      <h1>Proyecto Jaime Gavilán Torrero - Vite + React</h1>
      <div className="card">
        <button onClick={incrementar}>
          Sumar 
        </button>
        <button onClick={restar}>
          Restar 
        </button>
        <p style={{backgroundColor:bgColor, fontSize: size, color: ctColor}}>Resultado {count}</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App;