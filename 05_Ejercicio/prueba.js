
numero = prompt(
    "0 .Salir del programa" + "\n" +
    "1 .Suma dos numeros" + "\n" +
    "2 .Resta dos numeros" + "\n" +
    "3 .Multiplica dos numeros" + "\n" +
    "4 .Divide dos numeros")

console.log(numero);


switch (numero) {
    case "0":
        alert("Saliendo del programa...");
        break;
    case "1":
        numero1 = parseFloat(prompt("Introduzca el primer numero"));
        numero2 = parseFloat(prompt("Introduzca el segundo numero"));
        resultado = numero1 + numero2;
        break;
    case "2":
        numero1 = parseFloat(prompt("Introduzca el primer numero"));
        numero2 = parseFloat(prompt("Introduzca el segundo numero"));
        resultado = numero1 - numero2;
        break;
    case "3":
        numero1 = parseFloat(prompt("Introduzca el primer numero"));
        numero2 = parseFloat(prompt("Introduzca el segundo numero"));
        resultado = numero1 * numero2;
        break;
    case "4":
        numero1 = parseFloat(prompt("Introduzca el primer numero"));
        numero2 = parseFloat(prompt("Introduzca el segundo numero"));
        resultado = numero1 / numero2;
        break;

    default:
        break;

}
document.writeln("El resultado es: " + resultado);