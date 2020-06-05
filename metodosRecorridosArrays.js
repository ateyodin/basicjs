var articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "Tv", costo: 2500},
    {nombre: "Libro", costo: 300},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700},
];



var articulosMapeados = articulos.map(function(articulo){  //Metodo para que me de una lista de elementos dentro de un objeto pertenecientes a un Array
    return articulo.nombre
});

console.log(articulosMapeados);


var articulosFiltrados = articulos.filter(function(articulo){  //Metodo para filtrar elementos dentro de un objeto pertenecientes a un Array
    return articulo.costo <= 500
});

console.log(articulosFiltrados);