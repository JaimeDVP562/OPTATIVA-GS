// Introduce dos notas y calcula la media
let nota;
//nota = prompt("Introduce un numero");

while (!(nota > 0 && nota < 10)) {
  console.log("Estas dentro del bucle while");
  alert("Nota invalida");
}
nota = prompt("Introduce un numero");
console.log("La nota es correcta y has salido del bucle");

