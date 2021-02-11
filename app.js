const game = new Game();
// AND FROM THE THIRD POINT ON, DRAW GETS CALLED 60 TIMES A SECOND
function draw() {
  game.draw();
}

// PRELOAD IS THE FIRST
function preload() {
  pictureVariable = loadImage("./Profile-Andre.png");
}

// SETUP IS THE SECOND
function setup() {
  createCanvas(WIDTH, HEIGHT);
  score.innerText = game.score;
}

console.log("HELLO");

function keyPressed() {
  game.keyPressed();
}
