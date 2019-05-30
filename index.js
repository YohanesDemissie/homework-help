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
  document.getElementById("counter").innerHTML = count + "/6 tries left";
  console.log(count)
}
for (let i = 0; i < squares; i++) {
  if (tiles[i] === "tiles") {
    element += "<button class=" + "tiles" + " onClick=" + "counter();" + "this.style.backgroundColor='red';" + ">"
  + tiles[i] + "</button>";
    } else if(tiles[i] === 'battleship') {
      element += "<button class=" + "tiles" + " onClick=" + " this.style.backgroundColor='green'" + ">"
      + tiles[i] + "</button>";
  }
  element += "</div>";
}
document.getElementById("counter").innerHTML = count
document.getElementById("demo").innerHTML = element;


// var button = document.getElementsByClassName("tiles");
// console.log(button, "BUTTON")
// let  count = 0;
// element.onclick = function () {
//   count += 1;
//   console.log(count)
// };

// THIS COUNTER WORKS. TRY TO IMPLEMENT
// let count = 0;
// function counter() {
//   document.getElementById("demo").style.color = "red"; count += 1;
//   console.log(count)
// }
