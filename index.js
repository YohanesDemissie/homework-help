//populate array with 7 tiles
var tiles = []
for (let i =0; i < 7; i++) {
  tiles[i] = "tiles" + [i];
}

//random number generator
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//random number
let randomNum = getRandomInt(7);

//add ships into tiles array while keeping them together
let firstShipTile = tiles.splice(randomNum, 0, 'battleshipOne');
//make 2nd ship index of first battleship +1
let secondShipTile = tiles.splice((randomNum + 1), 0, 'battleshipTwo');
//make 3rd ship index of first battleship +2
let thirdShipTile = tiles.splice((randomNum + 2), 0, 'battleshipThree');
console.log(tiles, "All 10 tiles");


//Populate DOM with tiles and ships
var squares = tiles.length;
var element = "<div>";
for (let i = 0; i < squares; i++) {
  element += "<button class=" + "tiles" + " onClick=" + " this.style.backgroundColor='red'" + ">"
  + tiles[i] + "</button>";
}
element += "</div>";

document.getElementById("demo").innerHTML = element;



//turn tiles red on click
// document.querySelector().onclick = function () {
//   this.style.backgroundColor = "red";
// }