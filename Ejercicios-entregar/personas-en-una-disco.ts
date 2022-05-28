let edadClientesDisco: number[] = new Array(269); //array de 270
//algunos nombres en tu code no son del todo claros, edadClientesDisco en este por ejemplo seria mejor algo como array_de_edades
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
  for (index = 0; index <= 269; index++) {
    v[index] = getRamdonArbitrary(15, 80); 
    //llamado de la función de números aleatorios.//el ejercicio no pide desde 15 a 80
    console.log(`Cliente Nº ${index}, edad: ${v[index]}`);
    //esta linea te puede servir a vos para verificar, pero no te lo pide el ejercicio
  }
}
ingresarClientes(edadClientesDisco);
for (index = 0; index <= 269; index++) {
  if (edadClientesDisco[index] >= 21 && edadClientesDisco[index] <= 40) {//arrastra error de consigna
    mayorIgual21++;
  } else if (edadClientesDisco[index] >= 18 && edadClientesDisco[index] < 21) {
    menor21++;
  } else {
    console.log(`Cliente ${index} "Prohibido su Ingreso"`);
  }
}

console.log("Hay", mayorIgual21, "personas entre 21 y 40 años.");
console.log("Hay", menor21, "personas entre 18 y 21 años.");
totalClientes = mayorIgual21 + menor21;
console.log(`En la Disco hay ${totalClientes} personas en total.`);
//salvo esos detalles el ejercicio esta bien
