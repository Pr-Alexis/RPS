/*UTILITIES*/
/*Function to generate a rng for computer */
function rnGen(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateCompuer(){
    let choice= rnGen(0,2);
    return choice;   
}


/*Translate a number into the equivalent choice 0->Rock 1->Paper 2->Scissors */
function translateToSymbol(choice){
    let itemChoice;
    switch(choice){
        case 0:
            itemChoice="rock";
        break;
        case 1:
            itemChoice="paper";
        break;
        case 2:
            itemChoice="scissors";
        break;
    }
    return itemChoice;
}


/*Translate a choice into the equivalent number 0->Rock 1->Paper 2->Scissors */
function translateToNumber(choice){
    let itemChoice;
    switch(choice){
        case "rock":
            itemChoice=0;
        break;
        case "paper":
            itemChoice=1;
        break;
        case "scissors":
            itemChoice=2;
        break;

    }
    return itemChoice;
}




/*GAME*/
/*Game variables */
let gameScore=matchesWon=matchesLost=0;


/*Match funcion*/

function roundCalculator(playerChoice){
    let computerSelection= generateCompuer();
    
    if( (playerChoice+1)%3== computerSelection)
        return -1;
    else if( playerChoice==computerSelection)
        return 0;
    else 
        return 1;
}

function round(playerChoice){

    let playerScore= document.getElementById('playerScore');
    let computerScore= document.getElementById('computerScore');

    let roundCalc=roundCalculator(playerChoice);

    if(roundCalc==-1){
        matchesLost++;
        computerScore.innerHTML="Computer score: "+matchesLost;
    }
    else if(roundCalc==1){
        matchesWon++;
        playerScore.innerHTML="Player score: "+matchesWon;
    }

    gameScore+= roundCalc;
}



/*Reset function */
function reset(){
    gameWon=matchesWon=matchesLost=0;
    computerScore.innerHTML="Computer score: 0";
    playerScore.innerHTML="Player score: 0";
}