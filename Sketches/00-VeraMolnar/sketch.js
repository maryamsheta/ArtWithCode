const squareS = 30;

function setup() {
  let cnv = createCanvas(300, 400);
  cnv.mousePressed(generate);
  generate();
}

function generate() {
  background(0);
  for (let i = squareS; i <= width - squareS; i += squareS) {
    for (let j = squareS; j <= height - squareS; j += squareS) {
      drawSquare(i, j);
    }
  }
}

function drawSquare(x, y) {
  for (let i = 0; i <= 30; i++) {
    rectMode(CENTER);
    fill(random(128,255),128);
    strokeWeight(random(squareS * 0.1));
    square(x, y, random(squareS));
  }
}
