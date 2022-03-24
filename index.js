let firstCard = 11;
let secondCard = 10;
let sum = firstCard + secondCard;

console.log(sum);

if (sum <= 20) {
  console.log("Do you want to draw another card?");
} else if (sum === 21) {
  console.log("You got blackjack!");
} else if (sum > 21) {
  console.log("sorry buddy");
}
