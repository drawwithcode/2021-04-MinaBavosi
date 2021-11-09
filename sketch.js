//var for canva-box
var canvas;
//var for element making transformations
var changeCanvasColor;
//var for the paragraphs
var p0;
var p1;
//var for buttons
var p2;
var myInput1;
var myInput2;
var part1;
var part2;
//arrays
var monthList = [
  "",
  "Lady",
  "Ginger",
  "Nova",
  "Lola",
  "Dutchess",
  "Mrs.",
  "Naida",
  "Madame",
  "Eve",
  "Miss",
  "Queen",
  "Magic",
];

var numList = [
  "Nice Ice",
  "Foxy Noxy",
  "Cinnamon Rolls",
  "Nasty Fantastic",
  "LaGanja Extranja",
  "Hot Noodles",
  "Milky Milan",
  "Inferno Nero",
  "Spicy Tentacion",
  "Sweet Potato",
];

function preload() {}

function setup() {
  canvas = createCanvas(490, 280);
  canvas.position(75, 470);
  canvasColor = background("black");
  //Par in which put the type
  p0 = createP("Month Of Birth (digit)");
  p0.position(88, 260);
  myInput1 = createInput("");
  myInput1.position(70, 300);

  p1 = createP("Last Phone Number (digit)");
  p1.position(400, 260);
  myInput2 = createInput("");
  myInput2.position(400, 300);

  //Button changing canvas color
  p2 = createElement("Button", "Click To Get Your Color");
  p2.style("position: absolute; font-family: Noto Serif; font-style: Italic");
  p2.position(70, 820);
  p2.style("width: 200px; height: 50px");
  p2.mouseClicked(changeCanvasColor);
}

function draw() {
  //Function to make appear elemets
  push();
  fill(255, 0, 183);
  noStroke();
  textFont("Helvetica");
  textAlign(CENTER);
  textSize(60);
  text(part1, 250, 120);
  var x = myInput1.value();
  part1 = monthList[x];
  pop();

  push();
  noFill();
  stroke(255, 0, 183);
  textFont("Noto Serif");
  textStyle("italic");
  textAlign(CENTER);
  textSize(40);
  text(part2, 250, 180);
  var y = myInput2.value();
  part2 = numList[y];
  pop();
}
//Function changing the canvas color
function changeCanvasColor() {
  canvasColor = background(random(255), random(255), random(255));
}
