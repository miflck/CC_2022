let flower;

let flowers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  colorMode(HSB, 360, 100, 100, 100);
  flower = new Flower();
}

function draw() {
  // background(220);

  let radius = 50;
  let numberOfLeaves = 10;
  /*push();
  translate(width / 2, height / 2);
  ellipse(0, 0, radius);
  for (let i = 0; i < numberOfLeaves; i++) {
    rotate(360 / numberOfLeaves);
    ellipse(radius, 0, 20, 20);
  }
  pop();*/

  flower.render();
  for (let i = 0; i < flowers.length; i++) {
    flowers[i].render();
  }
}

function mouseClicked() {
  let f = new Branch(mouseX, mouseY);
  flowers.push(f);
}

function keyPressed() {
  if (key == "f") {
    let f = new Flower(mouseX, mouseY);
    flowers.push(f);
  }
  if (key == "s") {
    let f = new Spiro(mouseX, mouseY);
    flowers.push(f);
  }
}
