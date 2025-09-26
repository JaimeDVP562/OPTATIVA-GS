/**
 * 
 * 
 * 
 * // Ejercicio 01

// Declaramos las variables

  nombre1 = prompt("Introduce tu nombre");
  nombre2 = prompt("Introduce de quien te guste");
  
// Mostramos por pantalla el mensaje de alerta para que el ususario introduzca los datos 
 alert(nombre1 + " X " + nombre2 + "<3");

// Imprimimos por pantalla el resultado
 document.writeln(nombre1 + " y " + nombre2 + " son novios");
 */

 

/*

// Ejercicio 02
    numero1 = prompt("Introduce numero 1");
    numero2 = prompt("Introduce numero 2");

    suma = numero1 + numero2;
    resta = numero1 - numero2;
    multiplicacion = numero1 * numero2;
    division = numero1 / numero2;


    // Imprimimos por pantala el resultado
    document.writeln("La sumaa de " + numero1 + " y " + numero2 + " es " + suma + "<br>");
    document.writeln("La resta de " + numero1 + " y " + numero2 + " es " + resta + "<br>");
    document.writeln("La multiplicacion de " + numero1 + " y " + numero2 + " es " + multiplicacion + "<br>");
    document.writeln("La division de " + numero1 + " y " + numero2 + " es " + division + "<br>");

*/


    // Introduce la nota y di si está suspenso o no

    numero1 = prompt("Introduce la nota");
    
        if ((numero1 < 0)||(numero1 > 10)) {
          alert("Nota invalida");
          numero1 = prompt("Introduce la nota");

          }else if ((numero1 >= 5) && (numero1 <=10)) {

          console.log("Menos mal has aprovado");

        } else if ((numero1 >=0) && (numero1 < 5)) {
        
          console.log("Otro año a septiembre con los pokemon");
        } 






