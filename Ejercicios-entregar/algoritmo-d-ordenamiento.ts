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
  // declaro variables donde guardar para no perder los valores
  let nombreAux: string;
  let edadAux, alturaAux: number;
  // Paso 1 : Guardo en las variables lo que tengo en la pos 1 de los arreglos

  nombreAux = arrayNombre[posicion1];
  edadAux = arrayEdad[posicion1];
  alturaAux = arrayAltura[posicion1];
  // paso 2: guardo en la posicion 1 lo que tengo en la pos 2
  arrayNombre[posicion1] = arrayNombre[posicion2];
  arrayEdad[posicion1] = arrayEdad[posicion2];
  arrayAltura[posicion1] = arrayAltura[posicion2];
  //paso 3: guardo lo que tengo en la variable en la pos 2
  arrayNombre[posicion2] = nombreAux;
  arrayEdad[posicion2] = edadAux;
  arrayAltura[posicion2] = alturaAux;
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
intercambiarDatos(arregloNombre, arregloEdad, arregloAltura, 1, 2);
//intercambiarDatos(arregloNombre,arregloEdad,arregloAltura,3,4);
mostrar(arregloNombre, arregloEdad, arregloAltura, dimensionArreglos);
