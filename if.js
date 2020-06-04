var edad = 18;

if (edad === 18){
    console.log("Puedes votar por primera vez!");
} else if(edad > 18){
    console.log("Sigue ejerciendo tu derecho al voto");
} else {
    console.log("Aun no puedes votar");
}

//condition ? true : false

var numero = 1;

var resultado = numero === 1 ? "Si soy!" : "No soy!";

console.log(resultado);

---------------

function janKenPon(Player, Machine){
    if (Player === "tijera" && Machine === "piedra"){
        console.log("Perdiste");
    } else if (Player === "piedra" && Machine === "piedra"){
        console.log("Empate");
    } else if (Player === "papel" && Machine === "piedra"){
        console.log("Ganaste");
    } else if (Player === "tijera" && Machine === "tijera"){
        console.log("Empate");
    } else if (Player === "piedra" && Machine === "tijera"){
        console.log("Ganaste");
    } else if (Player === "papel" && Machine === "tijera"){
        console.log("perdiste");
    } else if (Player === "tijera" && Machine === "papel"){
        console.log("Ganaste");
    } else if (Player === "piedra" && Machine === "papel"){
        console.log("Perdiste");
    } else if (Player === "papel" && Machine === "papel"){
        console.log("Empate");
    } else {
        console.log("No has elegido correctamente");
    }
}

janKenPon ("tijera", "piedra")