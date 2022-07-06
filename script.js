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
    var pSelectionAdjust = playerSelection;
    if (pSelectionAdjust == 'rock' && computerSelection == 'scissors') {
        return 'win';
    } else if (pSelectionAdjust == 'scissors' && computerSelection === 'paper') {
        return 'win';
    } else if (pSelectionAdjust == 'paper' && computerSelection === 'rock') {
        return 'win';
    } else if (pSelectionAdjust == computerSelection) {
        return 'tie';
    } else {
        return 'loss';
    }
}

function reset() {
    win = 0;
    loss = 0;
    finalScore.textContent = "";
    score.textContent = `CURRENT ROUND : Computer: ${loss}, Player: ${win}`;
    button.forEach(function(item) {item.disabled = false});
}

let win = 0;
let loss = 0;
let roundWin = 0;
let roundLoss = 0;
let finalResult = "";

let btn1 = document.createElement("button");
btn1.textContent = "Rock";
btn1.classList.add('rock');

let btn2 = document.createElement("button");
btn2.textContent = "Paper";
btn2.classList.add('paper');

let btn3 = document.createElement("button");
btn3.textContent = "Scissors";
btn3.classList.add('scissors');

let score = document.createElement("div");
score.textContent = `CURRENT ROUND : Computer: ${loss}, Player: ${win}`;

let roundWins = document.createElement("div");
roundWins.textContent = `TOTAL ROUNDS : Computer : ${roundLoss}, Player ${roundWin}`;

let btn4 = document.createElement("button")
btn4.textContent = "Play again?";
btn4.classList.add('replay');

const scores  = document.querySelector('.scores');
const buttons = document.querySelector('.choices');
const result = document.querySelector('.result');
const mResult = document.querySelector('.m-result');

let finalScore = document.createElement('div');
finalScore.textContent = `${finalResult}`;

buttons.appendChild(btn1);
buttons.appendChild(btn2);
buttons.appendChild(btn3);
scores.appendChild(score);
result.appendChild(finalScore);
mResult.appendChild(roundWins);


const button = buttons.querySelectorAll('button')


btn1.addEventListener('click', function(e) {
    let result = null;
    result = playGame(e.target.classList, computerPlay());
    if(result === 'win') {
        win += 1;
        if(win === 5) {
            roundWin += 1;
            roundWins.textContent = `TOTAL ROUNDS : Computer : ${roundLoss}, Player ${roundWin}`;
            finalScore.textContent = "You win!"
            button.forEach(function(item) {item.disabled = true});
            mResult.appendChild(btn4);
        }
    } else if(result === 'loss') {
        loss += 1;
        if(loss === 5) {
            roundLoss += 1;
            roundWins.textContent = `TOTAL ROUNDS : Computer : ${roundLoss}, Player ${roundWin}`;
            finalScore.textContent = "You lose!"
            button.forEach(function(item) {item.disabled = true});
            mResult.appendChild(btn4);
        }
    }
    score.textContent = `CURRENT ROUND : Computer : ${loss}, Player: ${win}`;
});

btn2.addEventListener('click', function(e) {
    let result = null;
    result = playGame(e.target.classList, computerPlay());
    if(result === 'win') {
        win += 1;
        if(win === 5) {
            roundWin += 1;
            roundWins.textContent = `TOTAL ROUNDS : Computer : ${roundLoss}, Player ${roundWin}`;
            finalScore.textContent = "You win!"
            button.forEach(function(item) {item.disabled = true});
            mResult.appendChild(btn4);


        }
    } else if(result === 'loss') {
        loss += 1;
        if(loss === 5) {
            roundLoss += 1;
            roundWins.textContent = `TOTAL ROUNDS : Computer : ${roundLoss}, Player ${roundWin}`;
            finalScore.textContent = "You lose!"
            button.forEach(function(item) {item.disabled = true});
            mResult.appendChild(btn4);

        }
    }
    score.textContent = `CURRENT ROUND : Computer : ${loss}, Player: ${win}`;
});

btn3.addEventListener('click', function(e) {
    let result = null;
    result = playGame(e.target.classList, computerPlay());
    if(result === 'win') {
        win += 1;
        if(win === 5) {
            roundWin += 1;
            roundWins.textContent = `TOTAL ROUNDS : Computer : ${roundLoss}, Player ${roundWin}`;
            finalScore.textContent = "You win!"
            button.forEach(function(item) {item.disabled = true});
            mResult.appendChild(btn4);

        }
    } else if(result === 'loss') {
        loss += 1;
        if(loss === 5) {
            roundLoss += 1;
            roundWins.textContent = `TOTAL ROUNDS : Computer : ${roundLoss}, Player ${roundWin}`;
            finalScore.textContent = "You lose!"
            button.forEach(function(item) {item.disabled = true});
            mResult.appendChild(btn4);
        }
    }
    score.textContent = `CURRENT ROUND : Computer : ${loss}, Player: ${win}`;
});

btn4.addEventListener('click', function(e) {
    reset();
    mResult.removeChild(mResult.lastChild);
})
