



function getComputerChoice() {
    let x = parseInt(Math.random() * 100) % 3;
    let card = "";
    if (x == 0) {
        card = "R";
    }
    else if (x==1){
        card = "P";
    }
    else {
        card = "S";
    }
    return card;
}


function game(playerSelection, computerSelection){
    playerSelection = playerSelection[0];
    let answer = "";
    let loseString = "You Lose! ";
    let beats = " beats";
    let winString = "You Win! ";
    let tieString = "It is a Tie";
    if (playerSelection == "R" ){
        if (computerSelection == "S"){
            answer = winString + "Rock" + beats + " Scissors ";
        }
        else if (computerSelection == "R"){
            answer = tieString;
        }
        else {
            answer = loseString + "Paper" + beats +  " Rock";
        }
    }
    else if (playerSelection == "S" ){
        if (computerSelection == "S"){
            answer = tieString;
        }
        else if (computerSelection == "R"){
            answer = loseString + "Rock" + beats + " Scissors";
        }
        else {
            answer = winString +  "Scissors " + beats + " Paper ";
        }

    }
    else  {
        if (computerSelection == "S"){
            answer = loseString + "Scissors" + beats + " Paper ";
            
        }
        else if (computerSelection =="R"){
            answer = winString +  "Paper " + beats + " Rock ";
            
        }
        else {
            answer = tieString;
        }
    }
    
    return answer;
}


const cont = document.querySelector("#Cont");
let After = document.querySelector("#After");
let After0 = document.querySelector("#After0");
let prompted = "";
let scorePlayer= 0;
let scoreComputer = 0;
let computerScore = document.querySelector("#computerScore")
let playerScore = document.querySelector("#playerScore")
let winner = document.querySelector("#winner")
cont.addEventListener('click', (Event) => {
    let target = Event.target;
    switch(target.id){
        case "R": 
            console.log("R")
            prompted = "R";
            break;
        case "P":
            prompted = "P";
            console.log("P")
            break;
        case "S":
            prompted = "S";
            console.log("s")
            break;
        default:
            break;
     
    }
    After.textContent = "";
    playGame()
    prompted = ""
    if (scoreComputer >= 5 && scorePlayer <5){
        winner.textContent = "THE FINAL WINNER IS THE COMPUTER! " 
    }
    else if (scoreComputer < 5 && scorePlayer >=5) {
        winner.textContent = "THE FINAL WINNER IS THE PLAYER! " 
    }
    else if (scoreComputer == 5 && scorePlayer ==5) {
        winner.textContent = "IT IS A TIE" 
    }
    else {
        
    }
    
})


function playGame() {
    let cpuScore1 = 0;
    let score2 = 0;
    let g;
    let number = 1;
    for(let x = 0; x < number; x++){

        g = game(prompted,getComputerChoice() );
        if (g[4] == "W" ){
            score2 ++;
            After0.textContent = g;
            
        }
        else if (g[4] == "L" ){
            cpuScore1++;
            After0.textContent = g;
            
        }
        else{
            After0.textContent = g;
            
        }
    
    }
    if (cpuScore1 > score2) {
        After.textContent = "The Total Winer Is " + "The Computer";
        scoreComputer += 1;
        computerScore.textContent = scoreComputer;
        
    }
    else if (cpuScore1 < score2) {
        After.textContent = "The Total Winer Is " + "You";
        scorePlayer += 1;
        playerScore.textContent = scorePlayer;
       
    }
    else {
        After.textContent = "It Is A Tie";
        
    }
    

    
}
