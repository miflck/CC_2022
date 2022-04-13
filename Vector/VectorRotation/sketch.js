let position;
let distance;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  colorMode(HSB, 360, 100, 100);

  position = createVector(width / 2, height / 2);
  // create distance vector
  distance = createVector(50, 0);
}

function draw() {
  background(220);
  ellipse(position.x, position.y, 50);
  distance = createVector(50, 0);

  // make a temp Vector from Position to distance to get a new Position for the leaf
  let posB = p5.Vector.add(position, distance);
  // draw leaf
  ellipse(posB.x, posB.y, 30);
  //distance.rotate(10);

  let num = 10;
  let angle = 360 / num;
  let d = createVector(50, 0);

  while (num > 0) {
    // make a temp Vector from Position to distance to get a new Position for the leaf
    let pos = p5.Vector.add(position, d);
    fill((360 / 10) * num, 60, 100);
    ellipse(pos.x, pos.y, 30);
    d.rotate(angle);
    num -= 1;
  }
}
