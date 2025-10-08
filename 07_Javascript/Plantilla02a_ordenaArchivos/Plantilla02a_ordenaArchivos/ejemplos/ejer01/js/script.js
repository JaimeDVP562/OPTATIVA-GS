"use strict"

const texto = "Estoy mostrando el resultado del ejercicio 01";
const boton = document.getElementById("boton");
const resultado = document.getElementById("resultado");
boton.addEventListener("click", function () {
    mostrar(texto, resultado);
});