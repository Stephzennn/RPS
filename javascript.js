



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
            answer = winString + "Rock" + beats + "Scissors ";
        }
        else if (computerSelection == "R"){
            answer = tieString;
        }
        else {
            answer = loseString + "Paper" + beats + "Rock";
        }
    }
    else if (playerSelection == "S" ){
        if (computerSelection == "S"){
            answer = tieString;
        }
        else if (computerSelection == "R"){
            answer = loseString + "Rock" + beats + "Scissors";
        }
        else {
            answer = winString +  "Scissors " + beats + "Paper ";
        }

    }
    else  {
        if (computerSelection == "S"){
            answer = loseString + "Scissors" + beats + "Paper ";
            
        }
        else if (computerSelection =="R"){
            answer = winString +  "Paper " + beats + "Rock ";
            
        }
        else {
            answer = tieString;
        }
    }
    
    return answer;
}

function playGame() {
    let cpuScore1 = 0;
    let score2 = 0;
    let g;
    for(let x = 0; x < 5; x++){
        g = game((prompt("Enter Rock , Paper, Scissor")).toUpperCase(),getComputerChoice() );
        if (g[4] == "W" ){
            score2 ++;
            console.log(g);
        }
        else if (g[4] == "L" ){
            cpuScore1++;
            console.log(g);
        }
        else{
            console.log(g);
        }
    
    }
    if (cpuScore1 > score2) {
        console.log("The Total Winer Is " + "The Computer" );
    }
    else if (cpuScore1 < score2) {
        console.log("The Total Winer Is " + "You");
    }
    else {
        console.log("It Is A Tie");
    }
    

    
}

playGame()