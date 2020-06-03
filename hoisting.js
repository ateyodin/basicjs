// Hoisting - Es cuando las variables y las funciones se procesan antes de que se ejecute cualquier parte del codigo

console.log(miNombre);

var miNombre = "Andres";

// Lo que sucede con el hoisting

var miNombre = undefined;

console.log(miNombre + "soy hoisting");

miNombre = "Andres";


// ===  Hoisting con funcionts  ===

hey();

function hey() {
    console.log('Hola ' + miNombre);
};

var miNombre = 'Andres';

// Lo que sucede con hoisting 

function hey() {  //La función se declara hasta arriba, y después se declaran las variables.
    console.log('Hola ' + miNombre);
};

var miNombre;

hey();

miNombre = 'Andres';