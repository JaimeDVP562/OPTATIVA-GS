import { useState } from "react";
import "./App.css";

export default function App() {
  const [color, setColor] = useState("#ffffff");

  const generarColor = () => {
    const nuevoColor =
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");
    setColor(nuevoColor);
  };

  return (
    <div className="contenedor" >
      <div className="card" style={{ backgroundColor: color }}>
        <h1>Color actual:</h1>
        <p className="hex">{color}</p>
        <button onClick={generarColor}>Generar color aleatorio</button>
      </div>
    </div>
  );
}
