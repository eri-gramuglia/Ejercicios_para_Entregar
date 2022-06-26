let dimensionArreglos: number;
let arregloNombre: string[] = new Array[dimensionArreglos]();
let arregloEdad: number[] = new Array[dimensionArreglos]();
let arregloAltura: number[] = new Array[dimensionArreglos]();

function ingresarDatos(
  arrayNombre: string[],
  arrayEdad: number[],
  arrayAltura: number[],
  dimension: number
) {
  for (let indice: number = 0; indice < dimension; indice++) {
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
    console.log(arrayNombre[indice]);
    console.log(arrayEdad[indice]);
    console.log(arrayAltura[indice]);
  }
}
dimensionArreglos = Number(prompt("Ingrese la dimensión del los arreglos"));
ingresarDatos(arregloNombre, arregloEdad, arregloAltura, dimensionArreglos);
mostrar(arregloNombre, arregloEdad, arregloAltura, dimensionArreglos);
