const diceImages = ['img/dice1.png', 'img/dice2.png', 'img/dice3.png', 'img/dice4.png', 'img/dice5.png', 'img/dice6.png'];

const dice1 = document.getElementById('dice1');
const dice2 = document.getElementById('dice2');
const rollButton = document.getElementById('rollButton');
const result = document.getElementById('result');
const Win = document.getElementById('Win');
const RollCounter = document.getElementById('RollCounter');


let i=0; //Счетчик
function rollDice() {
    i++;
    let RanNum1 = Math.floor(Math.random() * 6); //Рандомные числа
    let RanNum2 = Math.floor(Math.random() * 6); 
    dice1.src = diceImages[RanNum1];
    dice2.src = diceImages[RanNum2];
    let sum = RanNum1 + 1 + RanNum2 + 1; //Сумма 
    result.innerHTML = sum;
    if(RanNum1 === RanNum2){
        Win.innerHTML = 'You Win!';
        i=0;
    }
    else{
        Win.innerHTML = '';
    }
    RollCounter.innerHTML = i;
}

rollButton.addEventListener('click', rollDice);
