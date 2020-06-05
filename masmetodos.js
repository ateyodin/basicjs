var articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "Tv", costo: 2500},
    {nombre: "Libro", costo: 300},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700},
];



var articulosBaratos = articulos.some(function(articulo){ // va a validar si lo que pedimos existe del array y devuelve un boolean
    return articulo.costo <= 700;
});



articulos.forEach(function(articulo){ // otro metodo de filtrado para buscar una lista de elementos especificos
    console.log(articulo.nombre)
});


var encuentraArticulo = articulos.find(function(articulo){  // para encontrar elementos dentro de un objeto y llamar sus valores
    return articulo.nombre === "Laptop"
});

console.log(encuentraArticulo);