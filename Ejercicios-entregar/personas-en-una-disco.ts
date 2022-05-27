let edadClientesDisco: number[] = new Array(5); //array de 270-prueba de escritorio con 5 posiciones
let index: number;
let mayorIgual21: number=0;
let menor21: number=0;
let totalClientes: number=0;

function getRamdonArbitrary (min,max){//funcion para generar números aleatorios.
  return Math.floor(Math.random() * (max-min))+min;
}
function ingresoClientes (v:number[]){
for (index = 0; index < 5; index++) {//llamado de la función de números aleatorios.
  v[index]=getRamdonArbitrary (15,80); //carga de array con edades desde 15 hasta 80.
  console.log(`Cliente Nº:edad ${index}, edad: ${ingresoClientes[index]}`);
}
for (index = 0; index < 5; index++) {
  ingresoClientes (edadClientesDisco);
  if ((edadClientesDisco[index]<=18) && (edadClientesDisco[index]>=40)) {
    console.log ("Prohibido su Ingreso");
  } else if (edadClientesDisco[index]>=21) {
    mayorIgual21++;
  } else {
    menor21++;
  } 
}

console.log("Hay",mayorIgual21,"personas entre 21 y 39 años.");
console.log("Hay", menor21,"personas menores de 21 años.");
totalClientes = mayorIgual21 + menor21;
console.log("En la Disco hay", totalClientes,"personas en total.");