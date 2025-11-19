
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
      <button onClick={obtenerMensaje}>Obtener mensaje aleatorio</button>
    </div>
  );
}

export default ChistesRandom;