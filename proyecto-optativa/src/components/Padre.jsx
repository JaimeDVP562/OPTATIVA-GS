
import React, { useState } from "react";
import Hijo from "./Hijo";  


function ChistesRandom() {
  const [mensaje, setMensaje] = useState("");

  const obtenerMensaje = async () => {
    try {
      const res = await fetch("https://api.chucknorris.io/jokes/random");
      const data = await res.json();
      setMensaje(data.value);
    } catch {
      setMensaje("Error al obtener el mensaje");
    }
  };

  return (
    <div className="chistes-container">
      <p>{mensaje}</p>
      <Hijo texto1="texto prueba 1" texto2="prueba texto 2" />
      <Hijo2 texto1 ="otro texto 1" texto2="otro texto 2" />
      <button onClick={obtenerMensaje}>Obtener mensaje aleatorio</button>
    </div>
  );
}

export default ChistesRandom;