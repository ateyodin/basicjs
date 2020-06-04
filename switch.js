var player1 = prompt("Ingresa tu jugada Player 1");
var player2 = prompt("Ingresa tu jugada Player 2");

function janKenPo(player1, player2){

    switch(true){
        case player1 === "tijera" && player2 === "piedra":
            console.log("Ganaste Player 2");
            break;
        case player1 === "piedra" && player2 === "piedra":
            console.log("Empate");
            break;
        case player1 === "papel" && player2 === "piedra":
            console.log("Ganaste Player 1");
            break;
        case player1 === "tijera" && player2 === "tijera":
            console.log("Empate");
            break;
        case player1 === "piedra" && player2 === "tijera":
            console.log("Ganaste Player 1");
            break;
        case player1 === "papel" && player2 === "tijera":
            console.log("Ganaste Player 2");
            break;
        case player1 === "tijera" && player2 === "papel":
            console.log("Ganaste Player 1");
            break;
        case player1 === "piedra" && player2 === "papel":
            console.log("Ganaste Player 2");
            break;
        case player1 === "papel" && player2 === "papel":
            console.log("Empate");
            break;
        default:
            console.log("Ingresa los valores correctos");
    }

}

janKenPo(player1, player2)