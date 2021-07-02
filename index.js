var mathrandom1= Math.floor(Math.random()* 6 )+1 ;

var randomDiceImage="images/dice"+mathrandom1+".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImage);

var mathrandom2= Math.floor(Math.random()* 6 )+1 ;

var randomDiceImage="images/dice"+mathrandom2+".png";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImage);

if( mathrandom1>mathrandom2){
    document.querySelector("h1").innerHTML="🎌 player 1 wins" ;
}
else if( mathrandom1<mathrandom2){
    document.querySelector("h1").innerHTML="player 2 wins🎌" ;
}
else{
    document.querySelector("h1").innerHTML="Draw " ;
}