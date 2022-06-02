let dimensionArray: number = 5; //el ejercicio no especifica la cantidad de butacas.
let vectorButacas: boolean[] = new Array(dimensionArray);

function cargarButacas(vector: boolean[], largo: number) {
  for (let indice: number = 0; indice < largo; indice++)
    vector[indice] = Math.floor(Math.random() * 2);
}
function verificarDisponibilidad(vector: boolean[], largo: number) {
  let butacaVacia: number = 0;
  for (let indice: number = 0; indice <= largo; indice++) {
    if (vector[indice] == 0) butacaVacia++;
  }
  console.log("La cantidad de butacas vacias es:", butacaVacia);
}

cargarButacas(vectorButacas, dimensionArray);
console.log(vectorButacas); //sólo es para verificar la carga del vector
verificarDisponibilidad(vectorButacas, dimensionArray);
