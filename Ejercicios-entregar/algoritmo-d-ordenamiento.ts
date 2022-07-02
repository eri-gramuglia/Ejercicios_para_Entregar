let dimensionArreglos: number = Number(
  prompt("Ingrese la dimensión de los arreglos")
);
let arregloNombre: string[] = new Array(dimensionArreglos);
let arregloEdad: number[] = new Array(dimensionArreglos);
let arregloAltura: number[] = new Array(dimensionArreglos);

function ingresarDatos(
  arrayNombre: string[],
  arrayEdad: number[],
  arrayAltura: number[],
  dimension: number
) {
  for (let indice: number = 0; indice <= dimension - 1; indice++) {
    arrayNombre[indice] = prompt("Ingresar nombre");
    arrayEdad[indice] = Number(prompt("Ingresar la edad"));
    arrayAltura[indice] = Number(prompt("Ingresar la altura"));
  }
}
function mostrar(
  arrayNombre: string[],
  arrayEdad: number[],
  arrayAltura: number[],
  dimension: number
) {
  for (let indice: number = 0; indice < dimension; indice++) {
    console.log(
      `Nombre: ${arrayNombre[indice]}, Edad: ${arrayEdad[indice]}, Altura: ${arrayAltura[indice]} cm`
    );
  }
}

function intercambiarDatos(
  arrayNombre: string[],
  arrayEdad: number[],
  arrayAltura: number[],
  posicion1: number,
  posicion2: number
) {
  let nombreAux: string;
  let edadAux, alturaAux: number;
  nombreAux = arrayNombre[posicion1];
  edadAux = arrayEdad[posicion1];
  alturaAux = arrayAltura[posicion1];
}

function ordenarArreglos(
  arrayNombre: string[],
  arrayEdad: number[],
  arrayAltura: number[],
  dimension: number
) {
  let indice1, indice2: number;
  for (indice1 = 0; indice1 < dimension - 1; indice1++) {
    //for (indice2=0; indice2 {
  }
  console.log(arrayNombre[indice], arrayEdad[indice], arrayEdad[indice]);
}
//---------------
ingresarDatos(arregloNombre, arregloEdad, arregloAltura, dimensionArreglos);
mostrar(arregloNombre, arregloEdad, arregloAltura, dimensionArreglos);
//ordenarArreglos(arregloNombre, arregloEdad, arregloAltura, dimensionArreglos);
//mostrar(arregloNombre, arregloEdad, arregloAltura, dimensionArreglos);
