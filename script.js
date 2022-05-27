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

let win = 0;
let loss = 0;
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
score.textContent = `Computer: ${loss}, Player: ${win}`;

const scores  = document.querySelector('.scores');
const buttons = document.querySelector('.choices');
const result = document.querySelector('.result')

let finalScore = document.createElement('div');
finalScore.textContent = `${finalResult}`;

buttons.appendChild(btn1);
buttons.appendChild(btn2);
buttons.appendChild(btn3);
scores.appendChild(score);
result.appendChild(finalScore);

const button = buttons.querySelectorAll('button')


btn1.addEventListener('click', function(e) {
    let result = null;
    result = playGame(e.target.classList, computerPlay());
    if(result === 'win') {
        win += 1;
        if(win === 5) {
            finalScore.textContent = "You win!"
            button.forEach(function(item) {item.disabled = true});
        }
    } else if(result === 'loss') {
        loss += 1;
        if(loss === 5) {
            finalScore.textContent = "You lose!"
            button.forEach(function(item) {item.disabled = true});

        }
    }
    score.textContent = `Computer: ${loss}, Player: ${win}`;
});

btn2.addEventListener('click', function(e) {
    let result = null;
    result = playGame(e.target.classList, computerPlay());
    if(result === 'win') {
        win += 1;
        if(win === 5) {
            finalScore.textContent = "You win!"
            button.forEach(function(item) {item.disabled = true});

        }
    } else if(result === 'loss') {
        loss += 1;
        if(loss === 5) {
            finalScore.textContent = "You lose!"
            button.forEach(function(item) {item.disabled = true});
        }
    }
    score.textContent = `Computer: ${loss}, Player: ${win}`;
});

btn3.addEventListener('click', function(e) {
    let result = null;
    result = playGame(e.target.classList, computerPlay());
    if(result === 'win') {
        win += 1;
        if(win === 5) {
            finalScore.textContent = "You win!"
            button.forEach(function(item) {item.disabled = true});
        }
    } else if(result === 'loss') {
        loss += 1;
        if(loss === 5) {
            finalScore.textContent = "You lose!"
            button.forEach(function(item) {item.disabled = true});
        }
    }
    score.textContent = `Computer: ${loss}, Player: ${win}`;
});