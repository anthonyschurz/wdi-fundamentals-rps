'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}


function getPlayerMove(move) {
if (move == null) {
  return getInput();} else {
    return move;
  }
}

function getComputerMove(move) {
  if (move == null) {
    return randomPlay();} else {
      return move;
    }
  }


  function getWinner(playerMove,computerMove) {
      var winner;
      var moveOptions = ["rock", "paper", "scissors"];

      console.log('player selects ' + playerMove + 'and computer selects ' + computerMove);

      if ((playerMove == moveOptions[0] && computerMove == moveOptions[2]) || (playerMove == y moveOptions[1] && computerMove == moveOptions[0]) || (playerMove == moveOptions[2] && computerMove == moveOptions[1])) {
          winner = 'player';
      } else if((computerMove == moveOptions[0] && playerMove == moveOptions[2]) || (computerMove == moveOptions[1] && playerMove == moveOptions[0]) || (computerMove == moveOptions[2] && playerMove == moveOptions[1])) {
          winner = 'computer';
      } else if(playerMove === computerMove) {
          winner = 'tie';
      }
      return winner;
  }

  function playToFive() {
      console.log("Let's play Rock, Paper, Scissors");
      var playerWins = 0;
      var computerWins = 0;
      do {
           console.log('player wins = ' + playerWins + '; computer wins = ' + computerWins);

          var userInput = getInput();
          var playerMove = getPlayerMove(userInput);
          var computerMove = getComputerMove(randomPlay());
          var winner = getWinner(playerMove, computerMove);

          if(winner === 'player') {
              playerWins++;
          } else if(winner === 'computer') {
              computerWins++;
          }

      } while(playerWins < 5 && computerWins < 5);

      if(playerWins > computerWins) {
          console.log('You have won!');
      } else {
          console.log('You have lost :()');
      }
      return [playerWins, computerWins];
  }
  getInput();
























function getPlayerMove(move) {

    var getMove;

    while(move === null) {
        getInput();
    }
    if(move !== '') {
        getMove = move;
    }
    return getMove;
}

function getComputerMove(move) {


    var compMove;

    if(move !== '') {
        compMove = move;
    } else {
        randomPlay();
    }
    return compMove;

}

function getWinner(playerMove,computerMove) {
    var winner;
    var moveOptions = ["rock", "paper", "scissors"]


    console.log('player move = ' + playerMove + '; computer move = ' + computerMove);

    if ((playerMove == moveOptions[0] && computerMove == moveOptions[2]) || (playerMove == y moveOptions[1] && computerMove == moveOptions[0]) || (playerMove == moveOptions[2] && computerMove == moveOptions[1])) {
        winner = 'player';
    } else if((computerMove == moveOptions[0] && playerMove == moveOptions[2]) || (computerMove == moveOptions[1] && playerMove == moveOptions[0]) || (computerMove == moveOptions[2] && playerMove == moveOptions[1])) {
        winner = 'computer';
    } else if(playerMove === computerMove) {
        winner = 'tie';
    }
    return winner;
}

function startGame() {
    console.log('How many Wins to finish?');
    playto(prompt());
}

function playto(numtimes) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    do {
         console.log('player wins = ' + playerWins + '; computer wins = ' + computerWins);

        var userInput = getInput();
        var playerMove = getPlayerMove(userInput);
        var computerMove = getComputerMove(randomPlay());
        var winner = getWinner(playerMove, computerMove);

        if(winner === 'player') {
            playerWins++;
        } else if(winner === 'computer') {
            computerWins++;
        }

    } while(playerWins < numtimes && computerWins < numtimes);

    console.log('Game Finished!!!');

    if(playerWins > computerWins) {
        console.log('You have won!!');
    } else {
        console.log('You have lost!!');
    }
    return [playerWins, computerWins];
}
startGame();
