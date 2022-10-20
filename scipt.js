alert("Sistema de calificacion para alumnos (5 Notas)")

let nombre = prompt("Cual es tu nombre?")
let cantidadDeNotas = 5
let notas = []

for (let i = 0; i < cantidadDeNotas; i++) {
    notas[i] = Number(prompt("Ingrese la nota " + (i + 1)));
    notas.push
}

function calculo() {
    
    let resultado = ((notas[0] + notas[1] + notas[2] + notas[3] + notas[4]) / cantidadDeNotas)
    resultado = resultado.toFixed(2)
    return resultado
}

function mensaje() {
    if(calculo() >= 3){
        return "El estudiante " + nombre + " aprovó con: " + calculo()
    }
    else {
        return "El estudiante " + nombre + " desaprovó con: " + calculo()
    }
}

alert(mensaje())




