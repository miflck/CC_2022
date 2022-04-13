let position;
let distance;
let positionBefore;
let bloomColors = [
  "#DA627D",
  "#9A348E",
  "#DB94D3",
  "#1C0D59",
  "#F9DBBD",
  "#FCA17D",
];

function setup() {
  angleMode(DEGREES);
  colorMode(HSB, 360, 100, 100);
  createCanvas(windowWidth, windowHeight);
  position = createVector(width / 2, height / 2);
  // create distance vector
  distance = createVector(20, 0);
  positionBefore = position.copy();
  frameRate(20);
}

function draw() {
  // background(220);
  distance.rotate(random(-200, 200));
  position.add(distance);

  noStroke();
  if (random() < 0.2) {
    fill(bloomColors[round(random(bloomColors.length - 1))] + "AA");
  } else {
    fill(random(60, 150), random(80, 100), random(50, 100));
  }
  ellipse(position.x, position.y, random(10, 20));
  positionBefore = position.copy();
}
