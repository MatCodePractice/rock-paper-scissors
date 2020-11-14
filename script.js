let playerScore = 0;
    let computerScore = 0;
    let round = 0;
    function playRound(playerSelection, computerSelection) {
        playerSelection = playerSelection.toLowerCase();
        switch(playerSelection) {
            case "rock":{
                if (computerSelection === "rock") {
                    score = "draw";
                } else if (computerSelection === "paper") {
                      score =  "loose";
                } else if (computerSelection === "scissors") {
                    score = "win";
                }
                break;
                }
                case "paper":{
                if (computerSelection === "rock") {
                    score = "win";
                } else if (computerSelection === "paper") {
                    score = "draw";
                } else if (computerSelection === "scissors") {
                    score = "loose";
                }
                break;
                }
                case "scissors":{
                if (computerSelection === "rock") {
                    score = "loose";
                } else if (computerSelection === "paper") {
                    score = "win";
                } else if (computerSelection === "scissors") {
                    score = "draw"
                }
                break;
                }
    }
    game(score);
    }
    function computerPlay() {
        let randomize = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
        if (randomize === 1) {
            return "rock"
        } else if (randomize === 2) {
            return "paper"
        } else if (randomize === 3) {
            return "scissors"
        }
        }
      
    function playerPlay() {
        playerSelection = prompt("Rock, Paper or Scissors?");
        return playerSelection;
    }
    function game() {
        if (score === "win") {
            alert("You Win");
            playerScore++;
            round++;
            document.getElementById("playerTracker").innerHTML = playerScore;
            document.getElementById("round").innerHTML = round;
        } else if (score === "loose") {
            alert("You Loose");
            computerScore++;
            round++;
            document.getElementById("computerTracker").innerHTML = computerScore;
            document.getElementById("round").innerHTML = round;
        } else if (score === "draw") {
            alert("It's a Draw");
            round++;
            document.getElementById("round").innerHTML = round;
        }
        if (playerScore === 5) {
            alert("Victory! Press OK to play again!");
            document.location.reload()
        } else if (computerScore === 5) {
            alert("Defeat! Press OK to play again!");
            document.location.reload()
        }  
    }
