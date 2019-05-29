var battleshipOne = document.getElementById("battleshipOne");
var battleshipTwo = document.getElementById("battleshipTwo");
var battleshipThree = document.getElementById("battleshipThree");


//BATTLESHIP TILES
document.querySelector("#battleshipOne").onclick = function() {
  this.style.backgroundColor = "green";
};

document.querySelector("#battleshipTwo").onclick = function() {
  this.style.backgroundColor = "green";
};

document.querySelector("#battleshipThree").onclick = function() {
  this.style.backgroundColor = "green";
};

//MISSED TILES

document.querySelector("#oceanOne").onclick = function () {
  this.style.backgroundColor = "red";
}

document.querySelector("#oceanTwo").onclick = function () {
  this.style.backgroundColor = "red";
}

document.querySelector("#oceanThree").onclick = function () {
  this.style.backgroundColor = "red";
}

document.querySelector("#oceanFour").onclick = function () {
  this.style.backgroundColor = "red";
}

document.querySelector("#oceanFive").onclick = function () {
  this.style.backgroundColor = "red";
}

document.querySelector("#oceanSix").onclick = function () {
  this.style.backgroundColor = "red";
}

document.querySelector("#oceanSeven").onclick = function () {
  this.style.backgroundColor = "red";
}

//Create the arrays
var tiles = []
var ships = []

//populate ships array
let hits = ships.push(battleshipOne, battleshipTwo, battleshipThree);
console.log(ships, "SHIPS");

//populate tiles array
let misses = tiles.push(oceanOne, oceanTwo, oceanThree, oceanFour, oceanFive, oceanSix, oceanSeven);
console.log(misses, "MISSES");

//random number generator
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


let randomNum = getRandomInt(7);
// console.log(randomNum, "0-7");
//combine arrays at random index 0-7

let firstShipTile = tiles.splice(randomNum, 0, battleshipOne);
let secondShipTile = tiles.splice((randomNum +1), 0, battleshipTwo);
let thirdShipTile = tiles.splice((randomNum +2), 0, battleshipThree);
console.log(tiles, "10 random tiles");



//start index of first battle ship anywhere between [0] and [17]
//make 2nd ship index of first battleship +1
//make 3rd ship index of first battleship +2

