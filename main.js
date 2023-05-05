let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

// select images according to random numbers
let randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
let randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

// add the new images when pages refresh
let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImage1);

let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImage2);

// check the winner and let the user know who wom
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 wins!";
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 wins!";
}
else { 
  document.querySelector("h1").innerHTML = "Draw!";
}





