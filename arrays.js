var player1 = prompt("Ingresa tu jugada Player 1");
var jugadas = ["piedra", "tijera", "papel"]

function numeroAleatorio()
{
  var x;
  x = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
  return x;
}

var machine = numeroAleatorio()

function janKenPo(player1, machine){

    switch(true){
        case player1 === "tijera" && jugadas[machine] === "piedra":
            alert("La maquina saco piedra - Perdiste");
            break;
        case player1 === "piedra" && jugadas[machine] === "piedra":
            alert("Los dos sacaron piedra - Empate");
            break;
        case player1 === "papel" && jugadas[machine] === "piedra":
            alert("La maquina saco piedra - Ganaste");
            break;
        case player1 === "tijera" && jugadas[machine] === "tijera":
            alert("Los dos sacaron tijera - Empate");
            break;
        case player1 === "piedra" && jugadas[machine] === "tijera":
            alert("La maquina saco tijera - Ganaste");
            break;
        case player1 === "papel" && jugadas[machine] === "tijera":
            alert("La maquina saco tijera - Perdiste");
            break;
        case player1 === "tijera" && jugadas[machine] === "papel":
            alert("La maquina saco papel - Ganaste");
            break;
        case player1 === "piedra" && jugadas[machine] === "papel":
            alert("La maquina saco papel - Perdiste");
            break;
        case player1 === "papel" && jugadas[machine] === "papel":
            alert("Los dos sacaron papel - Empate");
            break;
        default:
            alert("Ingresa los valores correctos");
    }

}

janKenPo(player1, machine)