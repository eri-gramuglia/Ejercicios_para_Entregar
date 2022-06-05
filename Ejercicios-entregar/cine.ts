let dimensionArray: number = Number(
  prompt("Ingresar la cantidad de butacas del cine")
); //el ejercicio no especifica la cantidad de butacas

let vectorButacas: number[] = new Array(dimensionArray);

function generadorBooleano() {
  return Math.floor(Math.random() * 2);
}
function cargarButacas(vector: number[], largo: number) {
  for (let indice: number = 0; indice < largo; indice++)
    vector[indice] = generadorBooleano();
}
function verificarDisponibilidad(vector: number[], largo: number) {
  let butacaVacia: number = 0;
  for (let indice: number = 0; indice <= largo; indice++) {
    if (vector[indice] === 0) butacaVacia++;
  }
  console.log("La cantidad de butacas vacias es:", butacaVacia);
}
cargarButacas(vectorButacas, dimensionArray);
console.log(vectorButacas); //sólo es para verificar la carga del vector
verificarDisponibilidad(vectorButacas, dimensionArray);
