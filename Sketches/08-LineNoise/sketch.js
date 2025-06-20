function setup() {
  let cnv = createCanvas(300, 400);
  cnv.mousePressed(generate);

  generate();
}

function draw() {
  
}

function generate() {
  background("#e7e7e9");
  noiseSeed(floor(random(10000)));

  for (let y = 5; y <= height; y += 15) {
    for (let x = 0; x <= width; x++) {
      let xoff = x * 0.01 + y / 100;
      let yOffset = noise(xoff);
      let offsetAmount = yOffset * 15;
      let deviation = abs(offsetAmount);
      let sw = map(deviation, 0, 15, 1, 10);
      stroke(40, 39, 218, map(y, 0, height, 100, 255));
      strokeWeight(sw);
      point(x, y - offsetAmount);
    }
  }
}
