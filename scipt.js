alert("Sistema de calificacion para alumnos")

let nombreIngresado = prompt("Cual es tu nombre??")
let nota1 = Number(prompt("Ingrese la nota numero 1"))
let nota2 = Number(prompt("Ingrese la nota numero 2"))
let nota3 = Number(prompt("Ingrese la nota numero 3"))
let nota4 = Number(prompt("Ingrese la nota numero 4"))
let nota5 = Number(prompt("Ingrese la nota numero 5"))


let resultadoNota = ((nota1 + nota2 + nota3 + nota4 + nota5) / 5)

function notaFinal(nombre,nota) {
    
    if(nota >= 3) {
        return "El estudiante " + nombre + " aprovo con: " + nota
    }
    else {
        return "el estudiante " + nombre + " desprovó con: " + nota
    }
}



alert(notaFinal(nombreIngresado,resultadoNota))




