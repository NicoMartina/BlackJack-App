let firstCard = 9;
let secondCard = 10;
let sum = firstCard + secondCard + 5;
let hasBlackJack = false;
let isAlive = true;
let message = "";

if (sum <= 20) {
  message = "Do you want to draw another card?";
} else if (sum === 21) {
  message = "You got blackjack!";
  hasBlackJack = true;
} else if (sum > 21) {
  message = "sorry buddy";
  isAlive = false;
}

console.log(message);
