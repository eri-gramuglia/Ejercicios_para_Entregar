let nombreAlumno: string = prompt("ingrese el nombre del alumno");
let notaPractica: number = Number(prompt("ingrese la nota práctica"));
let notaProblema: number = Number(prompt("ingrese la nota de los problemas"));
let notaTeorica: number = Number(prompt("ingrese la nota teórica"));
let sumaNotas: number = 0;

while (nombreAlumno!=="") {
  if ((notaPractica<=10 && notaPractica>=0)&&(notaProblema<=10 && notaProblema>=0)&&(notaTeorica<=10 && notaTeorica>=0))
    sumaNotas= notaPractica*0,1+notaProblema*0,5+notaTeorica*0,4;
    console.log ("La nota final de", nombreAlumno, "es:", sumaNotas); 
    }
  else 
    console.log ("Error en el ingreso de las notas");
}