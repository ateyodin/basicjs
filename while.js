//Mientras se cumplan nuestras condiciones el ciclo no se va a detener

var estudiantes = ["Andres", "David", "Ivan", "Viviana"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

while(estudiantes.length > 0 ){
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}


