let x = '';
let c = '';
let res = '';


let score = JSON.parse(localStorage.getItem('score')) || {Wins: 0, losses: 0, Tie: 0};

function computerclick(){
    let r = Math.floor(Math.random() * 3) + 1;
    if (r === 1) {
        x = 'Rock';
    } else if (r === 2) {
        x = 'Paper';
    } else if (r === 3) {
        x = 'Scissor';
    }
    userclick(document.querySelector('.Rock').innerHTML);
    result();
    ress();
}

function userclick(button){
    if (button === 'Rock') {
        c = 'Rock';
    } else if (button === 'Paper') {
        c = 'Paper';
    } else if (button === 'Scissor') {
        c = 'Scissor';
    }
}

function result() {
    if (x === c) {
        res = 'TIE';
    } else if (
        (x === 'Rock' && c === 'Scissor') ||
        (x === 'Paper' && c === 'Rock') ||
        (x === 'Scissor' && c === 'Paper')
    ) {
        res = 'you lose';
    } else {
        res = 'you Win';
    }
}

function ress() {
    if (res === 'you lose') {
        score.losses++;
    } else if (res === 'you Win') {
        score.Wins++;
    } else if (res === 'TIE') {
        score.Tie++;
    }
   
    console.log(score);
    document.querySelector('.nk').innerHTML =res;
    document.querySelector('.rk').innerHTML ='You'+c+'--'+x+'  Computer';

    
    localStorage.setItem('score', JSON.stringify(score));

    
    document.querySelector('.para').innerHTML = `Wins: ${score.Wins}, Losses: ${score.losses}, Ties: ${score.Tie}`;;
}

function resetscore(){
    score.Wins = 0;
    score.losses = 0;
    score.Tie = 0;
    console.log("Your score is reset: " + JSON.stringify(score));

   
    localStorage.removeItem('score');

    
    document.querySelector('.para').innerHTML = `Wins: ${score.Wins}, Losses: ${score.losses}, Ties: ${score.Tie}`;;
}