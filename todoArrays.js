var articulos = [
    {nombre: "arduino",costo: 1000},
    {nombre: "raspberrypi",costo: 1500},
    {nombre: "nodemcu",costo: 500},
    {nombre: "pic",costo: 200},
    {nombre: "plc",costo: 3000},
    {nombre: "daq",costo: 5000}  
];
var articulo = articulos.push("tarjeta personalizada"); //agrega elemento al final del arreglo
var articulo = articulos.pop("tarjeta personalizada"); //elimina elemento del final del arreglo
var articulo = articulos.shift("tarjeta personalizada"); //agrega elemento al inicio del arreglo
var articulo = articulos.unshift("tarjeta personalizada"); //elimina elemento al inicio del arreglo
var articulo = articulos.indexOf("arduino"); //Regresa el index del elemento dentro del arreglo
var filtrado = articulos.filter(function(articulo){
    return articulo.costo <= 1000});    //filtra un elemento con base a una condición
var mapeo = articulos.map(function(articulo){
          return articulo.nombre});     //regresa un arreglo con la información de los elementos solicitados
var encuentra = articulos.find(function(articulo){
    return articulo.nombre==="pic"});   //Encuentra el elemento del arreglo con la característica solicitada
articulos.forEach(function(articulo){
    console.log(articulo.nombre);       //itera todo el arreglo y regresa la información solicitada
});
var filtrado = articulos.some(function(articulo){
    return articulo.costo >= 1000});    //regresa un valor booleano si el arreglo cuenta con elementos que coincidan con la descripción