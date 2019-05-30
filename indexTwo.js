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

//populate dom with each index of array
let populateDom = function() {
  let element = document.getElementById("oceanOne"); // Create a <li> node
  let newElement = document.createElement("button");
   tiles = [];


  for(let i = 0; i > tiles.length; i++) {
    element.appendChild(newElement);
    document.getElementById("oceanOne").appendChild(newElement);

  }
}



populateDom(tiles);

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

//random number
let randomNum = getRandomInt(7);
// console.log(randomNum, "0-7");

//add ships into tiles array while keeping them together
let firstShipTile = tiles.splice(randomNum, 0, battleshipOne);
//make 2nd ship index of first battleship +1
let secondShipTile = tiles.splice((randomNum +1), 0, battleshipTwo);
//make 3rd ship index of first battleship +2
let thirdShipTile = tiles.splice((randomNum +2), 0, battleshipThree);
console.log(tiles, "All 10 tiles");

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var fLen = fruits.length;

var text = "<div>";
for (let i = 0; i < fLen; i++) {
  text += "<button class=" + "tiles" + " >" + fruits[i] + "</button>";
}
text += "</div>";

document.getElementById("demo").innerHTML = text;