//creating a variable with a value of the sum of the cards
let sum = 0;
//creating an array with both cards
let cards = [];
//creating a variable with a boolean(true or false) type.
let hasBlackJack = false;
//creating a variable with a boolean(true or false) type.
let isAlive = false;
//creating an empty variable to fill out later
let message = "";
//putting the value of an ID into a variable
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let player = {
	name: "Nico",
	chips: 145,
};
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;
//Here we user a function to get a random card using Math.random(chooses a number between 0.00 and 0.99) and Math.floor (takes out decimals)
function getRandomCard() {
	let randomCard = Math.floor(Math.random() * 13) + 1;
	if (randomCard > 10) {
		return 10;
	} else if (randomCard === 1) {
		return 11;
	} else {
		return randomCard;
	}
}
//Here we create a function that will command the start button the ability to start the game. This function calls out another function.
function startGame() {
	isAlive = true;
	let firstCard = getRandomCard();
	let secondCard = getRandomCard();
	cards = [firstCard, secondCard];
	sum = firstCard + secondCard;

	renderGame();
}
//Here we created a function that renders once we press either button.
function renderGame() {
	//here we make the cardEL varaible show the following
	cardsEl.textContent = "Cards: ";
	//Here we create a for loop that allows us to count in JS. The array is counted starting at 0. But the length starts at 1.
	//    begins      ends   amount
	for (let i = 0; i < cards.length; i++) {
		cardsEl.textContent += cards[i] + " ";
	}
	sumEl.textContent = "Sum: " + sum;
	//Here we render different sentences according to the result of sum using if/else statement.
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
//Here we use another function so that if the sum above is less than 21 we can draw another card.
function newCard() {
	//AND operator &&(both need to be true/flase) OR operator ||(means one or the other need to be true/flase)
	if (isAlive === true && hasBlackJack === false) {
		let card = getRandomCard();
		sum += card;
		//.push adds to the end of the sentence.
		cards.push(card);
		console.log(cards);
		renderGame();
	}
}
//Math.randow() gives you a random number from 0.0000000 to 0.999999999999
//Math.random() * 6; Here the answers will multiply and become 0.0000 to 5.9999
//Math.floor(3.765456) removes the decimal numbers. the answer becomes 3
//let randomNumber = Math.floor(Math.random() * 6); Here the answers are  0 to 5

//All the .Math need remembering
