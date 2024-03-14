document.addEventListener('DOMContentLoaded', function() {
  const choices = ['rock', 'paper', 'scissors'];
  const compDiv = document.getElementById('computerChoice');
  const resultDiv = document.getElementById('result');

  document.getElementById('rock').addEventListener('click', function() {
    playRound('rock');
  });
  document.getElementById('paper').addEventListener('click', function() {
    playRound('paper');
  });
  document.getElementById('scissors').addEventListener('click', function() {
    playRound('scissors');
  });

  function playRound(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    document.getElementById('computerChoice').innerHTML=computerChoice.toUpperCase();  
    document.getElementById('playerChoice').innerHTML=playerChoice.toUpperCase();

    if (playerChoice === computerChoice) {
        resultDiv.textContent = "It's a tie!";
        document.getElementById("resultSec").style.backgroundColor='black';
        // document.getElementById("result").style.color='yellow';
    } else if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
               (playerChoice === 'paper' && computerChoice === 'rock') ||
               (playerChoice === 'scissors' && computerChoice === 'paper')) {
      resultDiv.textContent = `You win!`;
        document.getElementById("resultSec").style.backgroundColor='green';
        // document.getElementById("result").style.color='yellow';
    } else {
      resultDiv.textContent = `You lose!`;
        document.getElementById("resultSec").style.backgroundColor='red';
        // document.getElementById("result").style.color='yellow';
    }
  }  
});
