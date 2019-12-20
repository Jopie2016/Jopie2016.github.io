

function playGame (){

    let startingBet = Number(document.getElementById("bet").value);
    let rollCount = 0;
    let rollAmountWon = 0;
    let highest = startingBet;
    
    let money = startingBet;
    while (money > 0) {
    let num = rollDice();
    if (num == 7) {
      money += 4;
      rollCount += 1;
        if (money >= highest) {
          rollAmountWon = rollCount;
          highest = money;
        }
    }else {
      money -= 1;
      rollCount += 1;
    }
  }
    
    if (money < 1){
        alert("You have lost all your money. The house always wins. Muhuhuhahahaha!!!!")
    }
    console.log(startingBet)
    console.log(rollCount)
    console.log(rollAmountWon)
    console.log(highest)
    
    document.getElementById("start").innerText = startingBet
    document.getElementById("trolls").innerText = rollCount
    document.getElementById("highestAmount").innerText = rollAmountWon
    document.getElementById("highestRoll").innerText =highest
}

function rollDice(){
    let roll1 = Math.floor(Math.random ()*6)+1;
    let roll2 = Math.floor(Math.random ()*6)+1;
    let sum = roll1 + roll2;
    return sum;
}

