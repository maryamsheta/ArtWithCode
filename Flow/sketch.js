function setup() {
  let cnv = createCanvas(300, 400);
  angleMode(DEGREES);
}

function draw() {
  background("#221e21");
  stroke("#e0d5c9");

  let angle = 0;
  let strokeW = 1;
  let maxStroke = map(mouseY, 0, height, 0.5, 5);

  for (let i = 30; i <= width - 30; i += 30) {
    for (let j = 30; j <= height - 30; j += 30) {
      angle += 1;
      strokeW += 0.025;
      strokeWeight(constrain(strokeW % maxStroke, 0.5, 5));

      push();
      translate(i, j);
      rotate(angle);
      line(0, 0, 0, 10);
      pop();
    }
  }
}
