let strips = [];
let y = 0;
let direction = 1;

let start;
function setup() {
  createCanvas(300, 400);
  background("#221e21");
  stroke("#e0d5c9");

  saveButton = createButton("Save").mouseClicked(() =>
    saveCanvas("Wave", "png")
  );
}

function draw() {
  drawShape(width / 2);
}

function drawShape(xStart) {
  let x = 20 * cos(frameCount * 0.1) + xStart;

  if (y >= height || y < 0) {
    direction *= -1;
  }

  y += direction;

  strokeWeight(2.5);
  point(x, y);
}