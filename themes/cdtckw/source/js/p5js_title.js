var detailX;

function setup() {
  let canvas = createCanvas(100, 100, WEBGL);
  canvas.parent('title');
  detailX = createSlider(2, 24, 12);
  detailX.position(10, height + 5);
  detailX.style('width', '80px');
}

function draw() {
  background(205, 105, 94);
  rotateY(millis() / 1000);
  ellipsoid(30, 40, 40, detailX.value(), 8);
}
