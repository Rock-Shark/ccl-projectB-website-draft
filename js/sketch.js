function setup() {
  let canvas = createCanvas(1100, 700);
  canvas.parent("p5-canvas-container");
  background(220);
}

function draw() {
  circle(mouseX, mouseY, 20)
}

function keyPressed() {
  background(220);
}