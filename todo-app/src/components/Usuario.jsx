import React from "react";

function Usuario({ nombre = "Invitado" }) {
  return <h1>Hola, {nombre}</h1>;
}

export default Usuario;
