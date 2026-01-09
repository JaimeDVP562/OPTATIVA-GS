import { useEffect, useRef, useState } from "react";

export default function VisualCounter() {
  const [count, setCount] = useState(0);
  const [bump, setBump] = useState(false);

  const bgColor = count === 0 ? "gray" : count > 0 ? "green" : "red";

  // Opcional: cambiar tamaño según valor
  const fontSize = `${Math.min(72, 24 + Math.abs(count) * 4)}px`;

  // Opcional: cambiar color de texto si supera un umbral
  // Usamos un color con mejor contraste para fondos verdes/redes.
  const textColor = Math.abs(count) > 5 ? "black" : "white";

  // Animación simple: pequeño 'bump' cuando cambia el contador
  // Evitar que la animación se dispare en el primer render
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    setBump(true);
    const t = setTimeout(() => setBump(false), 150);
    return () => clearTimeout(t);
  }, [count]);

  const style = {
    backgroundColor: bgColor,
    padding: "20px",
    color: textColor,
    display: "inline-block",
    minWidth: "80px",
    textAlign: "center",
    fontWeight: 700,
    fontSize,
    transition: "transform 150ms ease, font-size 150ms ease, background-color 150ms ease, color 150ms ease",
    transform: bump ? "scale(1.06)" : "scale(1)",
    borderRadius: 6,
  };

  return (
    <div>
      <div style={style}>{count}</div>
      <div style={{ marginTop: 12 }}>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)} style={{ marginLeft: 8 }}>-</button>
      </div>
    </div>
  );
}