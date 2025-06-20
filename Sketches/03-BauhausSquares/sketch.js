const colors = ["#f8cb2f", "#e63023", "#2c459a"];

function setup() {
  let cnv = createCanvas(300, 400);
  cnv.mousePressed(() => generateBauhaus());
  noStroke();
  generateBauhaus();
}

function generateBauhaus() {
  background("#e7dbc3");

  for (let x = 50; x <= width - 25; x += 50) {
    for (let y = 50; y <= height - 55; y += 50) {
      fill(0);
      square(x - 25, y + 25, 25);

      beginShape();
      vertex(x - 25, y + 25);
      vertex(x, y);
      vertex(x + 25, y + 25);
      vertex(x - 25 + 25, y + 25 + 25);
      endShape(CLOSE);

      fill(random(colors));
      square(x, y, 25);
    }
  }
}
