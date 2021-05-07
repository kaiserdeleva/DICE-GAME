var randomPicture1 = Math.floor(Math.random() * 6) + 1;
var randomImage1 = "d" + randomPicture1 + ".png"; 
var randomImageSource1 = "images/" + randomImage1; 
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);
//--------------------------------------------------------------------------------
var randomPicture2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "d" + randomPicture2 + ".png"; 
var randomImageSource2 = "images/" + randomImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);
//--------------------------------------------------------------------------------
var one = "d1.png";
var two = "d2.png";
var three = "d3.png";
var four = "d4.png";
var five = "d5.png";
var six = "d6.png";
//--------------------------------------------------------------------------------
//one
if (randomImage1 == one && randomImage2 == two) {
  document.querySelector("h1").innerHTML = "TWO WINS!!";
  document.querySelector('.p1').innerHTML = "🤬 <strike>PLAYER 1</strike>";
  document.querySelector('.p2').innerHTML = "😛 <strong>PLAYER 2 WINS!</strong>";
 }
else if (randomImage1 == one && randomImage2 == three) {
  document.querySelector("h1").innerHTML = "THREE WINS!";
  document.querySelector('.p1').innerHTML = "🤬 <strike>PLAYER 1</strike>";
  document.querySelector('.p2').innerHTML = "😛 <strong>PLAYER 2 WINS!</strong>";
 }
 else if (randomImage1 == one && randomImage2 == four) {
  document.querySelector("h1").innerHTML = "FOUR WINS!";
  document.querySelector('.p1').innerHTML = "🤬 <strike>PLAYER 1</strike>";
  document.querySelector('.p2').innerHTML = "😛 <strong>PLAYER 2 WINS!</strong>";
 }
 else if (randomImage1 == one && randomImage2 == five) {
  document.querySelector("h1").innerHTML = "FIVE WINS!";
  document.querySelector('.p1').innerHTML = "🤬 <strike>PLAYER 1</strike>";
  document.querySelector('.p2').innerHTML = "😛 <strong>PLAYER 2 WINS!</strong>";
 }
  else if (randomImage1 == one && randomImage2 == six) {
    document.querySelector("h1").innerHTML = "SIX WINS!";
    document.querySelector('.p1').innerHTML = "🤬 <strike>PLAYER 1</strike>";
    document.querySelector('.p2').innerHTML = "😛 <strong>PLAYER 2 WINS!</strong>";
}
else if (randomImage1 == two && randomImage2 == one) {
    document.querySelector("h1").innerHTML = "TWO WINS!";
    document.querySelector('.p1').innerHTML = "😛 <strong>PLAYER 1 WINS!</strong>";
    document.querySelector('.p2').innerHTML = "🤬 <strike>PLAYER 2</strike>";
}
else if (randomImage1 == two && randomImage2 == three) {
    document.querySelector("h1").innerHTML = "THREE WINS!";
    document.querySelector('.p1').innerHTML = "🤬 <strike>PLAYER 1</strike>";
    document.querySelector('.p2').innerHTML = "😛 <strong>PLAYER 2 WINS!</strong>";
}
else if (randomImage1 == two && randomImage2 == four) {
    document.querySelector("h1").innerHTML = "FOUR WINS!";
    document.querySelector('.p1').innerHTML = "🤬 <strike>PLAYER 1</strike>";
    document.querySelector('.p2').innerHTML = "😛 <strong>PLAYER 2 WINS!</strong>";
}
else if (randomImage1 == two && randomImage2 == five) {
    document.querySelector("h1").innerHTML = "FIVE WINS!";
    document.querySelector('.p1').innerHTML = "🤬 <strike>PLAYER 1</strike>";
    document.querySelector('.p2').innerHTML = "😛 <strong>PLAYER 2 WINS!</strong>";
}
else if (randomImage1 == two && randomImage2 == six) {
    document.querySelector("h1").innerHTML = "SIX WINS!";
    document.querySelector('.p1').innerHTML = "🤬 <strike>PLAYER 1</strike>";
    document.querySelector('.p2').innerHTML = "😛 <strong>PLAYER 2 WINS!</strong>";
}
else if (randomImage1 == three && randomImage2 == one) {
    document.querySelector("h1").innerHTML = "THREE WINS!";
    document.querySelector('.p1').innerHTML = "😛 <strong>PLAYER 1 WINS!</strong>";
    document.querySelector('.p2').innerHTML = "🤬 <strike>PLAYER 2</strike>";
}
else if (randomImage1 == three && randomImage2 == two) {
    document.querySelector("h1").innerHTML = "TWO WINS!";
    document.querySelector('.p1').innerHTML = "😛 <strong>PLAYER 1 WINS!</strong>";
    document.querySelector('.p2').innerHTML = "🤬 <strike>PLAYER 2</strike>";
}
else if (randomImage1 == three && randomImage2 == four) {
    document.querySelector("h1").innerHTML = "FOUR WINS!";
    document.querySelector('.p1').innerHTML = "🤬 <strike>PLAYER 1</strike>";
    document.querySelector('.p2').innerHTML = "😛 <strong>PLAYER 2 WINS!</strong>";
}
else if (randomImage1 == three && randomImage2 == five) {
    document.querySelector("h1").innerHTML = "FIVE WINS!";
    document.querySelector('.p1').innerHTML = "🤬 <strike>PLAYER 1</strike>";
    document.querySelector('.p2').innerHTML = "😛 <strong>PLAYER 2 WINS!</strong>";
}
else if (randomImage1 == three && randomImage2 == six) {
    document.querySelector("h1").innerHTML = "SIX WINS!";
    document.querySelector('.p1').innerHTML = "🤬 <strike>PLAYER 1</strike>";
    document.querySelector('.p2').innerHTML = "😛 <strong>PLAYER 2 WINS!</strong>";
}
else if (randomImage1 == four && randomImage2 == one) {
    document.querySelector("h1").innerHTML = "FOUR WINS!";
    document.querySelector('.p1').innerHTML = "😛 <strong>PLAYER 1 WINS!</strong>";
    document.querySelector('.p2').innerHTML = "🤬 <strike>PLAYER 2</strike>";
}
else if (randomImage1 == four && randomImage2 == two) {
    document.querySelector("h1").innerHTML = "FOUR WINS!";
    document.querySelector('.p1').innerHTML = "😛 <strong>PLAYER 1 WINS!</strong>";
    document.querySelector('.p2').innerHTML = "🤬 <strike>PLAYER 2</strike>";
}
else if (randomImage1 == four && randomImage2 == three) {
    document.querySelector("h1").innerHTML = "FOUR WINS!";
    document.querySelector('.p1').innerHTML = "😛 <strong>PLAYER 1 WINS!</strong>";
    document.querySelector('.p2').innerHTML = "🤬 <strike>PLAYER 2</strike>";
}
else if (randomImage1 == four && randomImage2 == five) {
    document.querySelector("h1").innerHTML = "FIVE WINS!";
    document.querySelector('.p1').innerHTML = "🤬 <strike>PLAYER 1</strike>";
    document.querySelector('.p2').innerHTML = "😛 <strong>PLAYER 2 WINS!</strong>";
}
else if (randomImage1 == four && randomImage2 == six) {
    document.querySelector("h1").innerHTML = "SIX WINS!";
    document.querySelector('.p1').innerHTML = "🤬 <strike>PLAYER 1</strike>";
    document.querySelector('.p2').innerHTML = "😛 <strong>PLAYER 2 WINS!</strong>";
}
else if (randomImage1 == five && randomImage2 == one) {
    document.querySelector("h1").innerHTML = "FIVE WINS!";
    document.querySelector('.p1').innerHTML = "😛 <strong>PLAYER 1 WINS!</strong>";
    document.querySelector('.p2').innerHTML = "🤬 <strike>PLAYER 2</strike>";
}
else if (randomImage1 == five && randomImage2 == two) {
    document.querySelector("h1").innerHTML = "FIVE WINS!";
    document.querySelector('.p1').innerHTML = "😛 <strong>PLAYER 1 WINS!</strong>";
    document.querySelector('.p2').innerHTML = "🤬 <strike>PLAYER 2</strike>";
}
else if (randomImage1 == five && randomImage2 == three) {
    document.querySelector("h1").innerHTML = "FIVE WINS!";
    document.querySelector('.p1').innerHTML = "😛 <strong>PLAYER 1 WINS!</strong>";
    document.querySelector('.p2').innerHTML = "🤬 <strike>PLAYER 2</strike>";
}
else if (randomImage1 == five && randomImage2 == four) {
    document.querySelector("h1").innerHTML = "FIVE WINS!";
    document.querySelector('.p1').innerHTML = "😛 <strong>PLAYER 1 WINS!</strong>";
    document.querySelector('.p2').innerHTML = "🤬 <strike>PLAYER 2</strike>";
}
else if (randomImage1 == five && randomImage2 == six) {
    document.querySelector("h1").innerHTML = "SIX WINS!";
    document.querySelector('.p1').innerHTML = "🤬 <strike>PLAYER 1</strike>";
    document.querySelector('.p2').innerHTML = "😛 <strong>PLAYER 2 WINS!</strong>";
}
else if (randomImage1 == six && randomImage2 == one) {
    document.querySelector("h1").innerHTML = "SIX WINS!";
    document.querySelector('.p1').innerHTML = "😛 <strong>PLAYER 1 WINS!</strong>";
    document.querySelector('.p2').innerHTML = "🤬 <strike>PLAYER 2</strike>";
}
else if (randomImage1 == six && randomImage2 == two) {
    document.querySelector("h1").innerHTML = "SIX WINS!";
    document.querySelector('.p1').innerHTML = "😛 <strong>PLAYER 1 WINS!</strong>";
    document.querySelector('.p2').innerHTML = "🤬 <strike>PLAYER 2</strike>";
}
else if (randomImage1 == six && randomImage2 == three) {
    document.querySelector("h1").innerHTML = "SIX WINS!";
    document.querySelector('.p1').innerHTML = "😛 <strong>PLAYER 1 WINS!</strong>";
    document.querySelector('.p2').innerHTML = "🤬 <strike>PLAYER 2</strike>";
}
else if (randomImage1 == six && randomImage2 == four) {
    document.querySelector("h1").innerHTML = "SIX WINS!";
    document.querySelector('.p1').innerHTML = "😛 <strong>PLAYER 1 WINS!</strong>";
    document.querySelector('.p2').innerHTML = "🤬 <strike>PLAYER 2</strike>";
}
else if (randomImage1 == six && randomImage2 == five) {
    document.querySelector("h1").innerHTML = "SIX WINS!";
    document.querySelector('.p1').innerHTML = "😛 <strong>PLAYER 1 WINS!</strong>";
    document.querySelector('.p2').innerHTML = "🤬 <strike>PLAYER 2</strike>";
}
//--------------------------------------------------------------------------------
//DRAW
 else {
  document.querySelector('h1').innerHTML = "DRAW!!"
  document.querySelector('.p1').innerHTML = "🧑 <strong>PLAYER 1</strong>";
  document.querySelector('.p2').innerHTML = "🧒 <strong>PLAYER 2</strong>";
}; 
// else if (randomImage1 == scissor && randomImage2 == paper) {
//     document.querySelector("h1").innerHTML = "SCISSOR WINS!";
//     document.querySelector('.p1').innerHTML = "😛 <strong>PLAYER 1 WINS!</strong>";
//     document.querySelector('.p2').innerHTML = "🤬 <strike>PLAYER 2</strike>";