// Calculadora 2.0

//Creamos las dos variables 

function sumar () {
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let resultado = numero1 + numero2;
    document.getElementById("resultado").innerText("El resultado es: " + resultado);
}


