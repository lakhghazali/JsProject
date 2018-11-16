/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


//the first declare a varaible
var  scores,roundScore,activePlayer,dice;


//Array store the score of the two player in the game
scores=[0,0];
roundScore=0;
activePlayer=0;

dice = Math.floor(Math.random() * 6) +1;
console.log(dice)


document.querySelector('#current-'+activePlayer).textContent = dice;
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

var x = document.querySelector("#current-0").textContent;
//console.log(x);


document.querySelector('.btn-roll').addEventListener('click',function () {

    //Random Number
    dice = Math.floor(Math.random() * 6) +1;
    // document.querySelector('#current-0').textContent = dice;

    //display another image
    var imgDom=document.querySelector('.dice');
    imgDom.style.display = 'block';
    imgDom.src = 'dice-' + dice + '.png';

    //Update the round Score if the rooled Numebr is not 1
     if(dice !== 1 ){
         //Add Score
         roundScore += dice;

         document.querySelector('#current-' + activePlayer).textContent = roundScore;
     }
     //Next Player
    else{
         var playerDescactive=document.getElementById('player-' + activePlayer);
         playerDescactive.classList.remove('active');

         document.getElementById('current-'+activePlayer).textContent = '0';

         activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

         var playerActive=document.getElementById('player-' + activePlayer);
         playerActive.className += " active";

         roundScore = 0;

     }



})







//the second fuction for hold button



document.querySelector('.btn-hold').addEventListener('click',function () {

    //add Cuurent Score t global score
    scores[activePlayer] += roundScore;
    //Update the UI
    document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];

    //Check if player won the game
    
})




