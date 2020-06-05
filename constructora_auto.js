var marca2 = prompt("Ingresa marca de tu vehiculo");
var annio2 = prompt("Ingresa annio de tu vehiculo");
var modelo2 = prompt("Ingresa modelo de tu vehiculo");

function auto(marca, modelo, annio){
    this.marca = marca;
    this.annio = annio;
    this.modelo = modelo;
}


var autoNuevo = new auto(marca2, modelo2, annio2);
console.log(autoNuevo);


--------------------------------------------------------------------------------------

var vehiculos = [];
var numeroVehiculos = 0;
var vehiculosRegistrados = 0;

numeroVehiculos = prompt("Cuantos vehiculos vamos a registrar");

function auto(marca, modelo, annio){
    this.marca = marca;
    this.annio = annio;
    this.modelo = modelo;
}

while( vehiculosRegistrados < numeroVehiculos){
    var marca = prompt("Ingresa marca de tu vehiculo");
    var annio = prompt("Ingresa annio de tu vehiculo");
    var modelo = prompt("Ingresa modelo de tu vehiculo");

    var vehiculoNuevo = new auto(marca, modelo, annio);

    vehiculos.unshift(vehiculoNuevo)

    vehiculosRegistrados++

}