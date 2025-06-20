const colors = ["#f8cb2f", "#e63023", "#2c459a", "#000000"];

function setup() {
  let cnv = createCanvas(300, 400);
  cnv.mousePressed(() => generateBauhaus());
  rectMode(CENTER);
  noStroke();
  generateBauhaus();
}

function generateBauhaus() {
  background("#e7dbc3");

  for (let x = 50; x <= width - 50; x += 50) {
    for (let y = 50; y <= height - 50; y += 50) {
      fill(random(colors));
      drawRandomShape(x, y);
    }
  }
}

function drawRandomShape(x, y) {
  let shapeType = floor(random(3));

  switch (shapeType) {
    case 0:
      if (random() > 0.5) {
        triangle(x - 25, y - 25, x - 25, y + 25, x + 25, y + 25);
      } else {
        triangle(x + 25, y - 25, x - 25, y + 25, x + 25, y + 25);
      }
      break;
    case 1:
      square(x, y, 50);
      break;
    case 2:
      circle(x, y, 50);
      break;
  }
}
