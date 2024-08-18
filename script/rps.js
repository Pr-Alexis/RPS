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



function playerInput(){
    let playerPrompt=prompt("Choose R/P/S: ");
    return translateToNumber(playerPrompt.toLowerCase());
}


/*ROUND FUNCTION*/
function round(playerInput){
    let computerSelection= generateCompuer();
    console.log("Comp "+computerSelection);

    if( (playerInput+1)%3== computerSelection)
        return -1;
    else if( playerInput==computerSelection)
        return 0;
    else 
        return 1;
    


}


/*GAME FUNCTION*/
function game(){
    let gameResult=0;
    for(let i = 0; i < 5; i++) {
        let result=round(playerInput());
        gameResult+=result;
        if(result==-1) console.log("macth lost");
        else if(result==0) console.log("macth tied");
             else console.log("macth won");
    }

    if(gameResult<0) console.log("game lost");
    else if(gameResult==0) console.log("game tied");
         else console.log("game won");


}