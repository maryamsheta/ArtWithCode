function setup() {
  createCanvas(300,400);
  frameRate(10);
}

function draw() {
  background(0);
  noFill();

  for (let x = 20; x <= width - 20; x += 30) {
    for (let y = 20; y <= height - 20; y += 30) {
      stroke(floor(random(255)));

      let xOffset = 10 * sin(frameCount * 0.01);
      line(20, 20, x + xOffset, y);
      line(width - 20, height - 20, x + xOffset, y);
    }
  }
}
