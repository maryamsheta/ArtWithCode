let squareS = 30;

function setup() {
  let cnv = createCanvas(300, 400);
  cnv.mousePressed(cubicDisarray);

  fill("#225ded");
  stroke("#ffffff");
  strokeWeight(1.5);

  angleMode(DEGREES);
  cubicDisarray();
}

function cubicDisarray() {
  background("#225ded");

  for (let i = squareS; i <= width - squareS; i += squareS) {
    for (let j = squareS; j <= height - squareS; j += squareS) {
      let addSub = random() > 0.5 ? 1 : -1;
      let displacement = (j / height) * addSub * random() * 10;
      let rotation = (j / height) * addSub * random() * 15;

      push();
      translate(i + displacement, j);
      rotate(rotation);
      square(-squareS / 2, -squareS / 2, squareS);
      pop();
    }
  }
}
