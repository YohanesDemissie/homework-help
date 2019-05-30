//populate array with 7 tiles
var tiles = []
for (let i =0; i < 17; i++) {
  tiles[i] = "tiles";
}


//random number generator
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//random number
let randomNum = getRandomInt(17);
console.log(tiles, "All 17 tiles");

//add ships into tiles array while keeping them together
let firstShipTile = tiles.splice(randomNum, 0, 'battleship');
//make 2nd ship index of first battleship +1
let secondShipTile = tiles.splice((randomNum + 1), 0, 'battleship');
//make 3rd ship index of first battleship +2
let thirdShipTile = tiles.splice((randomNum + 2), 0, 'battleship');

console.log(tiles, "ALL 20 TILES?")

//Populate DOM with tiles and ships
var squares = tiles.length;
var element = "<div>";
for (let i = 0; i < squares; i++) {
  if (tiles[i] === "tiles") {
   element += "<button class=" + "tiles" + " onClick=" + " this.style.backgroundColor='red'" + ">"
  + tiles[i] + "</button>";
} else if(tiles[i] === 'battleship') {
    element += "<button class=" + "tiles" + " onClick=" + " this.style.backgroundColor='green'" + ">"
      + tiles[i] + "</button>";
}
element += "</div>";
}


document.getElementById("demo").innerHTML = element;

// for (let i = 0; i = randomNum && i == randomNum + 1 && i == randomNum +2; i++){
//   element += "<button class=" + "tiles" + " onClick=" + " this.style.backgroundColor='green'" + ">"
//     + tiles[i] + "</button>";
// }
// element += "</div>";




//turn tiles red on click
// document.querySelector().onclick = function () {
//   this.style.backgroundColor = "red";
// }