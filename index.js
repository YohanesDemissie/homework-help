//create empty array
var tiles = [];
//populate array with 17 tiles
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

//add ship into tiles array while keeping them together
let firstShipTile = tiles.splice(randomNum, 0, 'battleship');
//make 2nd ship index of first battleship +1
let secondShipTile = tiles.splice((randomNum + 1), 0, 'battleship');
//make 3rd ship index of first battleship +2
let thirdShipTile = tiles.splice((randomNum + 2), 0, 'battleship');

//double check '3 added ships' are pushed to array
console.log(tiles, "ALL 20 TILES?")

//Populate DOM with tiles and ships
var squares = tiles.length;
var element = "<div>";
let count = 0;
function counter() {
  count += 1;
  document.getElementById("counter").innerHTML = count + "/6 tries used";
  if(count === 6) {
    alert("sorry you ran out of tries. Try again!");
    //RELOADS entire page
    location.reload();
  }
  console.log(count)
}

let hitters = 0
function countHits() {
  hitters += 1;
  document.getElementById("hits").innerHTML = hitters + "/3 boats hit!";
  if (hitters === 3) {
    alert("CONGRATULATIONS YOU WON A FREE BATTLESHIP! CLAIM YOUR REWARD HERE AT 1-800-555-5555");
    //RELOADS entire page
    location.reload();
  }
  console.log(hitters)
}


for (let i = 0; i < squares; i++) {
  if (tiles[i] === "tiles") {
    element += "<button class=" + "tiles" + " onClick=" + "counter();" + "this.style.backgroundColor='red';" + ">"
  + tiles[i] + "</button>";
    } else if (tiles[i] === "battleship") {
    element += "<button class=" + "tilesHit" + " onClick=" + "countHits();" + "this.style.backgroundColor='green';" + ">"
      + tiles[i] + "</button>";
  }
  element += "</div>";
}

document.getElementById("counter").innerHTML = count;
document.getElementById("hits").innerHTML = hitters;
document.getElementById("demo").innerHTML = element;