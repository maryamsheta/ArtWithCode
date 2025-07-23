let flowers = [];

function setup() {
  let cnv = createCanvas(300, 400);
  cnv.mousePressed(drawNew);

  angleMode(DEGREES);
  colorMode(HSB);
  background(230, 30, 10);
  initFlowers();
}

function draw() {
  flowers.forEach((flower) => {
    drawFlower(
      flower.randomW,
      flower.randomH,
      flower.randomNum,
      flower.randomR,
      flower.randomC,
      flower.petalColor,
      flower.centerColor
    );
  });
}

function drawNew() {
  background(230, 30, 10);
  flowers = [];
  initFlowers();
}

function drawPetals(num, theta, r, petalColor) {
  fill(petalColor);
  noStroke();
  for (let i = 0; i < num; i++) {
    let x = cos(theta * i) * r;
    let y = sin(theta * i) * r;
    circle(x, y, r);
  }
}

function drawFlower(x, y, petals, r, circleSize, petalColor, centerColor) {
  push();
  translate(x, y);
  strokeWeight(3);
  stroke(100, 80, 45);
  line(0, 0, 0, height - y);
  drawPetals(petals, 360 / petals, r, petalColor);
  fill(centerColor);
  noStroke();
  circle(0, 0, circleSize);
  pop();
}

function initFlowers() {
  for (let i = 0; i < 5; i++) {
    let margin = 50;
    let randomW = i * 50 + margin;
    let randomH = random(margin, height - margin);
    let randomNum = floor(random(6, 10));
    let randomR = random(10, 25);
    let randomC = randomR + 10;

    let petalHue = random(0, 360);
    let petalColor = color(petalHue, 80, 100);
    let centerColor = color(petalHue, 90, 60);

    flowers.push({
      randomW,
      randomH,
      randomNum,
      randomR,
      randomC,
      petalColor,
      centerColor,
    });
  }
}