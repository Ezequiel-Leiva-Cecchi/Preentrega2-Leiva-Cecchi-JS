alert("Binevenido profesor");
// Función para calcular el promedio de un conjunto de notas
function calcularPromedio(notas) {
    return notas.reduce((sum, nota) => sum + nota, 0) / notas.length;
}

const checkIfItNumber = (value) => {
    if (typeof value === "string" && typeof parseInt(value) === "NaN") {
        return true;
    } else {
        return false;
    }
}

// Función principal que solicita datos y calcula el promedio
function calcularPromedioAlumnos() {
    const cantidadAlumnos = parseInt(prompt("Ingrese la cantidad de alumnos:"));
    const alumnos = [];

    for (let i = 0; i < cantidadAlumnos; i++) {
        let nombreAlumno = prompt(`Ingrese el nombre del alumno ${i + 1}:`);
        let apellidoAlumno = prompt(`Ingrese el apellido del alumno ${i + 1}:`);
        while(!isNaN(parseInt(nombreAlumno)) || !isNaN(parseInt(apellidoAlumno))){
            // Verifica si el nombre o el apellido es un número. Si es así, muestra un error.
               alert("Ingreso un valor invalido");
               nombreAlumno=prompt(`Por favor reingrese nombre del alumno ${i + 1}: `);
               apellidoAlumno=prompt(`Por favor reingrese apellido del alumno ${i + 1}: `);
        }
        const persona = {
            nombre: nombreAlumno,
            apellido: apellidoAlumno
        }

        const notas = [];

        for (let i = 0; i < 3; i++) {
            let nota = parseFloat(prompt(`Ingrese la nota ${i + 1} de ${persona.nombre}:`));
            while (isNaN(parseInt(nota)) || nota > 10 || nota < 0) {
                // Verifica si la nota no es un número válido o está fuera del rango válido.
                alert("La nota ingresada no es válida.");
                nota = prompt("Reingrese la nota:");
            }
            notas.push(nota);
        };

        const promedio = calcularPromedio(notas);
        alumnos.push({ notas, promedio });
        // Mostrar resultados
        console.log("Promedio de Alumnos:");
        alumnos.forEach(alumno => {
            console.log(`Nombre: ${persona.nombre}`);
            console.log(`Apellido: ${persona.apellido}`);
            console.log(`Notas: ${alumno.notas.join(", ")}`);
            console.log(`Promedio: ${alumno.promedio.toFixed(2)}\n`);
        });
    }
}
// Llamar a la función principal
calcularPromedioAlumnos();