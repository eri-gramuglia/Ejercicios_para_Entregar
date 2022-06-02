let dimensionArray: number = Number(
  prompt("Ingresar la cantidad de butacas del cine")
); //el ejercicio no especifica la cantidad de butacas.
let vectorButacas: boolean | number[] = new Array(dimensionArray);

function butacaBooleana() {
  return Math.floor(Math.random() * 2);
}
function cargarButacas(vector: boolean | number[], largo: number) {
  for (let indice: number = 0; indice < largo; indice++)
    vector[indice] = butacaBooleana();
}
function verificarDisponibilidad(vector: boolean | number[], largo: number) {
  let butacaVacia: number = 0;
  for (let indice: number = 0; indice <= largo; indice++) {
    if (vector[indice] === 0) butacaVacia++;
  }
  console.log("La cantidad de butacas vacias es:", butacaVacia);
}
cargarButacas(vectorButacas, dimensionArray);
console.log(vectorButacas); //sólo es para verificar la carga del vector
verificarDisponibilidad(vectorButacas, dimensionArray);
