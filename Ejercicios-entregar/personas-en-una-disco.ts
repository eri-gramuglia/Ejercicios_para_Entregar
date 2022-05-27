let edadClientesDisco: number[] = new Array(5); //array de 270-prueba de escritorio con 5 posiciones
let index: number;
let mayorIgual21: number = 0;
let menor21: number = 0;
let totalClientes: number = 0;

function getRamdonArbitrary(min, max: number) {
  //funcion para generar números aleatorios.
  return Math.floor(Math.random() * (max - min)) + min;
}
function ingresarClientes(v: number[]) {
  //carga de array con edades desde 15 hasta 80.
  for (index = 0; index <= 4; index++) {
    v[index] = getRamdonArbitrary(15, 80); //llamado de la función de números aleatorios.
    console.log(`Cliente Nº ${index}, edad: ${v[index]}`);
  }
}
ingresarClientes(edadClientesDisco);
for (index = 0; index <= 4; index++) {
  if (edadClientesDisco[index] >= 21 && edadClientesDisco[index] <= 40) {
    mayorIgual21++;
  } else if (edadClientesDisco[index] >= 18 && edadClientesDisco[index] <= 21) {
    menor21++;
  } else {
    console.log(`Cliente ${index} "Prohibido su Ingreso"`);
  }
}

console.log("Hay", mayorIgual21, "personas entre 21 y 40 años.");
console.log("Hay", menor21, "personas menores de 21 años.");
totalClientes = mayorIgual21 + menor21;
console.log(`En la Disco hay ${totalClientes} personas en total.`);
