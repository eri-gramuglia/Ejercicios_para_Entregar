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
function ordenarArreglos(
  arrayNombre: string[],
  arrayEdad: number[],
  arrayAltura: number[],
  dimension: number
) {
  for (let indice: number = 0; indice < dimension - 1; indice++) {
    console.log(arrayNombre[indice], arrayEdad[indice], arrayEdad[indice]);
  }
}
//---------------
ingresarDatos(arregloNombre, arregloEdad, arregloAltura, dimensionArreglos);
mostrar(arregloNombre, arregloEdad, arregloAltura, dimensionArreglos);
//ordenarArreglos(arregloNombre, arregloEdad, arregloAltura, dimensionArreglos);
//mostrar(arregloNombre, arregloEdad, arregloAltura, dimensionArreglos);
