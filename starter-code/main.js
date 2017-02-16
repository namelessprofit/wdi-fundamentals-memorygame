console.log("JS file is connected to HTML! Woo!")

cardOne ="king";
cardTwo ="king";
cardThree ="queen";
cardFour ="queen";

/*if (cardTwo===cardFour) {alert('Sorry try again.')
}
else if (cardOne===cardThree) {alert('Sorry try again.')
}
else if (cardTwo===cardOne) {alert('You found match!')
}
else if (cardThree===cardFour) {alert('You found a match!')
}*/
var board = document.getElementById('board');

for (var i = 0; i < 4; i++) {
  var div = document.createElement('DIV');
  div.className += 'card';
  board.appendChild(div);
  console.log(board);
}
