let firstCard = 9;
let secondCard = 10;
let sum = firstCard + secondCard;
let cards = [firstCard, secondCard];
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function startGame() {
  renderGame();
}
function renderGame() {
  cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw another card?";
  } else if (sum === 21) {
    message = "You got blackjack!";
    hasBlackJack = true;
  } else if (sum > 21) {
    message = "You're out of the game";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  let card = 7;
  sum += card;
  cards.push(card);
  console.log(cards);
  renderGame();
}
