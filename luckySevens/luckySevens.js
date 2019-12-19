function rollDice(){
    var roll1 = Math.floor(Math.random ()*6)+1;
    var roll2 = Math.floor(Math.random ()*6)+1;
    var sum = roll1 + roll2;
    return sum;
}

function playGame (){

    let startingBet = Number(document.getElementById("bet").value);

    if (startingBet < 1){
        alert()
    }
}

