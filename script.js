var hihat = new Audio("hihat.wav") ;

function hihatPlay() {
  hihat.play();
}

var kick = new Audio("kick.wav") ;

function kickPlay() {
  kick.play();
}

var ride = new Audio("ride.wav") ;

function ridePlay() {
  ride.play();
}

document.getElementById("hihat").addEventListener("click", hihatPlay);
document.getElementById("kick").addEventListener("click", kickPlay);
document.getElementById("ride").addEventListener("click", ridePlay);

document.getElementById("hihat").addEventListener("mouseenter", hihatPlay);
document.getElementById("kick").addEventListener("mouseenter", kickPlay);
document.getElementById("ride").addEventListener("mouseenter", ridePlay);
