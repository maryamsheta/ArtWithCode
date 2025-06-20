function setup() {
  createCanvas(300,400);
}

function draw() {
  background(0);
  noFill();
  stroke(255);

  let inc = 50 * sin(frameCount * 0.01);

  for (let x = 50; x <= width - 50; x += 25) {
    for (let y = 50; y <= height - 50; y += 25) {
      circle(x, y, inc);
    }
  }
}
