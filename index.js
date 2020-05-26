var randomNumber1 = Math.round((Math.random() * 5 + 1));
var randomNumber2 = Math.round((Math.random() * 5 + 1));
var randomNumber3 = Math.round((Math.random() * 5 + 1));
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");
document.querySelector(".img3").setAttribute("src", "images/dice" + randomNumber3 + ".png");

var diceSum = randomNumber1 + randomNumber2 + randomNumber3;
var diceArray = [randomNumber1, randomNumber2, randomNumber3].sort();

function arraycheck(diceArray) {

  var flag = [];

  for (var i = 0; i < 2; i++) {
    if (diceArray[i] == diceArray[i + 1]) {
      flag.push(i);
    }
  }
  if (flag.length > 1) {
    var message = "triple";
  } else if (flag.length === 1) {
    var message = "double";
  } else {
    var message = "single";
  }
  return message;
}

var judge = arraycheck(diceArray);


if (judge === "triple") {
  document.querySelector("h1").innerHTML = "Triple!!";
} else {
  if (diceSum >= 11 && diceSum <= 17) {
    if (judge === "double") {
      document.querySelector("h1").innerHTML = "Big/Doubles!!";
    } else {
      document.querySelector("h1").innerHTML = "Big!!";
    }
  }
  if (diceSum >= 4 && diceSum <= 10) {
    if (judge === "double") {
      document.querySelector("h1").innerHTML = "Small/Doubles!!";
    } else {
      document.querySelector("h1").innerHTML = "Small!!";
    }
  }
}
