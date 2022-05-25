function computerPlay() {
    let choice = Math.floor((Math.random() * 3) + 1);
    switch(choice) {
        case 1:
            return "rock";
        case 2: 
            return "paper";
        case 3:
            return "scissors";
        default:
            return "how did u get here"
    }
}

function playGame(playerSelection, computerSelection) {
    while(playerSelection.toLowerCase() != 'rock' && playerSelection.toLowerCase() != 'paper' && playerSelection.toLowerCase() != 'scissors') {
        playerSelection = window.prompt("Invalid input. Enter rock, paper, or scissors: ");
    }
    var pSelectionAdjust = playerSelection.toLowerCase();
    console.log(pSelectionAdjust);
    if (pSelectionAdjust === 'rock' && computerSelection == 'scissors') {
        console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
        return 'win';
    } else if (pSelectionAdjust === 'scissors' && computerSelection === 'paper') {
        console.log(`You win! ${playerSelection} beats ${computerSelection}!`)
        return 'win';
    } else if (pSelectionAdjust === 'paper' && computerSelection === 'rock') {
        console.log(`You win! ${playerSelection} beats ${computerSelection}!`)
        return 'win';
    } else if (pSelectionAdjust === computerSelection) {
        console.log(`Tie! No winners this time.`)
        return 'tie';
    } else {
        console.log(`You lose! ${computerSelection} beats ${pSelectionAdjust}!`)
        return 'loss';
    }
}

function game() {
    let win = 0;
    let loss = 0;
    for(let i = 0; i < 5; i++) {
        let result = playGame(window.prompt("Enter rock, paper, or scissors: "), computerPlay());
        if(result === 'win') {
            win += 1;
        } else if(result === 'loss'){
            loss += 1;
        }
    }
    console.log(`Total wins: ${win}`)
    console.log(`Total losses: ${loss}`)
}

game();