
import React from "react";

function Hijo(t) {
  return <p>{t.texto1} {t.texto2}</p>;
}

function Hijo2({texto1, texto2}) {
  return <p>{texto1} {texto2}</p>;
}

export default Hijo;
