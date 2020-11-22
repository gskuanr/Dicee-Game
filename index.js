var randomNumber1 = Math.floor(Math.random() * 6 ) + 1 ; //generate random number between 1-6

var randomImageSource = "images/dice" + randomNumber1 + ".png" ; // random Image 1 source 

var image1 = document.querySelector(".img1") ; // Selected image 1

image1.setAttribute("src", randomImageSource) ; // change src attribute of image 1

var randomNumber2 = Math.floor(Math.random() * 6 ) + 1 ; // generate random number between 1-6

var randomImageSource2 = "images/dice" + randomNumber2 + ".png" ; // random Image 2 source

var image2 = document.querySelectorAll("img")[1] ; //selected image 2

image2.setAttribute("src", randomImageSource2) ; //change src attribute of image 2

// if player 1 wins
if (randomNumber1 > randomNumber2) {

    document.querySelector("h1").innerHTML = "🚩Player 1 wins!" ;

}

//if player 2 wins
else if (randomNumber1 < randomNumber2) {

    document.querySelector("h1").innerHTML = "Player 2 wins!🚩" ;

}
// if draw
else {

    document.querySelector("h1").innerHTML = "Draw!" ;

}