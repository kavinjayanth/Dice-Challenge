var randomnumber1 = Math.floor(Math.random()*6)+1 ;//1-6

var randomdiceImage1 = "dice" + randomnumber1 +".png";//dice1.png - dice6.png

var randomdimageSource = "images/" + randomdiceImage1;//images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomdimageSource);

var randomnumber2 = Math.floor(Math.random()*6)+1;

var randomdimageSource2 = "images/dice" + randomnumber2 +".png";

document.querySelectorAll("img")[1].setAttribute("src", randomdimageSource2);

if(randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML ="* Play 1 wins";
}
else if(randomnumber2 > randomnumber1){
    document.querySelector("h1").innerHTML = "player 2 wins *";

}else{
    document.querySelector("h1").innerHTML = "Draw";
}