let lineX = 0;
let lineY = 0;
let lineW = 40;
let lineH = 40;

let step = 40;
let currentY = 0;

let ltr = true;
let drawing = true;

function setup() {
  let cnv = createCanvas(300,400);
  cnv.mousePressed(drawNew);

  frameRate(10);

  stroke("#ffffff");
  strokeWeight(1.5);
  background("#225ded");
}

function draw() {
  if (currentY * step <= height && drawing) {
    drawRow(currentY++ * step);
  } else {
    drawing = false;
  }
}

function drawRow(y) {
  for (let x = -lineW; x <= width; x += step) {
    ltr = random([true, false]);
    if (ltr) {
      line(lineX + x, lineY + y, lineX + lineW + x, lineY + lineH + y);
    } else {
      line(lineX + lineW + x, lineY + y, lineX + x, lineY + lineH + y);
    }
  }
}

let decreasing = true;

function drawNew() {
  if (!drawing) {
    background("#225ded");

    if (decreasing) {
      step = max(10, step - 5);
      lineW = max(10, lineW - 5);
      lineH = max(10, lineH - 5);

      if (step == 10) {
        decreasing = false;
      }
    } else {
      step += 5;
      lineW += 5;
      lineH += 5;

      if (step >= 40) {
        decreasing = true;
      }
    }
    currentY = 0;
    drawing = true;
  }
}
