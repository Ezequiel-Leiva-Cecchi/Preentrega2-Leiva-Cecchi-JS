alert("Bienvenido profesor!!!, Esta función le permite calcular el promedio máximo de 5 alumnos");

// Función para calcular el promedio de un conjunto de notas
function calcularPromedio(notas) {
    const sumaNotas = notas.reduce((total, nota) => total + nota, 0);
    const promedio = sumaNotas / notas.length;
    return promedio;
}

// Función principal que solicita datos y calcula el promedio
function calcularPromedioAlumnos() {
    let cantidadAlumnos = parseInt(prompt("Ingrese la cantidad de alumnos:"));

    while (isNaN(cantidadAlumnos) || cantidadAlumnos < 1 || cantidadAlumnos > 5) {
        alert("Ingrese una cantidad de alumnos válida (entre 1 y 5).");
        cantidadAlumnos = parseInt(prompt("Reingrese la cantidad de alumnos:"));
    }

    const alumnos = [];

    for (let i = 0; i < cantidadAlumnos; i++) {
        let nombreAlumno = prompt(`Ingrese el nombre del alumno ${i + 1}:`);
        let apellidoAlumno = prompt(`Ingrese el apellido del alumno ${i + 1}:`);

        while (!isNaN(parseInt(nombreAlumno)) || !isNaN(parseInt(apellidoAlumno))) {
            // Verifica si el nombre o el apellido es un número. Si es así, muestra un error.
            alert("Ingreso un valor inválido");
            nombreAlumno = prompt(`Por favor reingrese nombre del alumno ${i + 1}: `);
            apellidoAlumno = prompt(`Por favor reingrese apellido del alumno ${i + 1}: `);
        }

        const notas = [];
        for (let j = 0; j < 3; j++) {
            let nota = parseInt(prompt(`Ingrese la nota ${j + 1} de ${nombreAlumno}:`));

            while (isNaN(nota) || nota > 10 || nota < 0) {
                // Verifica si la nota no es un número válido o está fuera del rango válido.
                alert("La nota ingresada no es válida.");
                nota = parseInt(prompt("Reingrese la nota:"));
            }

            notas.push(nota);
        }

        const promedio = calcularPromedio(notas);
        const persona = {
            nombre: nombreAlumno,
            apellido: apellidoAlumno,
            notas: notas,
            promedio: promedio,
        };

        alumnos.push(persona);
    }

    // Mostrar resultados
    console.log("Promedio de Alumnos:");
    alumnos.forEach((alumno) => {
        console.log(`Nombre: ${alumno.nombre}`);
        console.log(`Apellido: ${alumno.apellido}`);
        console.log(`Notas: ${alumno.notas.join(", ")}`);
        console.log(`Promedio: ${alumno.promedio.toFixed(2)}\n`);
    });
}

// Llamar a la función principal
calcularPromedioAlumnos();