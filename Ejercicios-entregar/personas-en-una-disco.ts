let capacidadDisco: number[] = new Array(270);
let index: number;
let mayorIgual21: number=0;
let menor21: number=0;
let totalClientes: number=0;

function Azar(tope: number): number {
  //funcion para generar números aleatorios del 1 al 100.
  return Math.floor(Math.random() * tope);
}

for (index = 0; index < 270; index++) {//llamado de la función de números aleatorios.
  capacidadDisco[index] = Azar(270); //carga de array.
}
for (index = 0; index <= 270; index++) {
  //console.log(`La Edad del cliente en la posición ${index} es ${numeroAleatorio[index]}`);
  if ((capacidadDisco[index]>40) && (capacidadDisco[index]<18) {
    console.log ("Prohibido su Ingreso");
  } else if (capacidadDisco[index]>=21) {
    mayorIgual21++;
  } else {
    menor21++;
  } 
}

console.log("Hay",mayorIgual21,"personas entre 21 y 39 años.");
console.log("Hay", menor21,"personas menores de 21 años.");
totalClientes = mayorIgual21 + menor21;
console.log("En la Disco hay", totalClientes,"personas en total.");