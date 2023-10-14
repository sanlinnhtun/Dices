// first random number

let randomNumber1= Math.floor(Math.random() * 6 + 1);
console.log("First random number is", randomNumber1);

// second random number

let randomNumber2= Math.floor(Math.random() * 6 + 1);
console.log("Second random number is" , randomNumber2);

// first random image

const imageKey1="/images/dice"+ randomNumber1 + ".png";
const firstImageTag = document.getElementsByClassName("img1")[0];
firstImageTag.src=imageKey1;

// second random image

const imageKey2="/images/dice"+ randomNumber2 + ".png";
const secondImageTag= document.getElementsByClassName("img2")[0];
secondImageTag.src=imageKey2

// click me
function showAlert() {
    location.reload()
}

const refreshTag= document.getElementById("refresh");

refreshTag.addEventListener("click",showAlert);


//Decision statement

const headElementTag=document.getElementById("headElement");

if(randomNumber1>randomNumber2){
    headElementTag.innerHTML="Player 1 win🎲🏅"
}else if(randomNumber2>randomNumber1){
    headElementTag.innerHTML="Player 2 win🎲🏅"
}else {
    headElementTag.innerHTML="Draw⛳"
}