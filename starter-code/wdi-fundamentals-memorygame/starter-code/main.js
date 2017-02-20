console.log("JS file is connected to HTML! Woo!")

// var cards = ['queen','queen','king','king'];
// var cardsInPlay = [];
//   for (var i = 0; i < cards.length; i++) {
// var board = document.getElementById('board');
// var cardElement = document.createElement('div');
// cardElement.classname = 'card';
// }

var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];

var board = document.getElementById('board');

function createBoard() {
  for (var i=0; i<cards.length; i++) {
    var gameCard = document.createElement('div');
    gameCard.className = 'card';
    gameCard.setAttribute('data-card', cards[i]);
    gameCard.addEventListener('click', isTwoCards);
    board.appendChild(gameCard);
    board.appendChild(gameCard);
  }
}

function isTwoCards() {
  cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='images/king.png'>";
	} else {
		this.innerHTML = "<img src='images/queen.png'>";
	}

  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];
  }
}

function isMatch(cards) {
  if (cards[0] === cards[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
}

function myFunction() {
    document.getElementById("myForm").reset();
}

createBoard();
