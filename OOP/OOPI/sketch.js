let branches = [];

function setup() {
  createCanvas(400, 400);
  branches.push(new Branch(width / 2, height));
  angleMode(DEGREES);
  colorMode(HSB, 360, 100, 100);
}

function draw() {
  background(220);
  //drawFlower(mouseX, mouseY);
  branches.map((branch) => {
    branch.render();
  });
}

/*
function drawFlower(x, y) {
  push();
  noStroke();
  translate(x, y);
  fill(80, 80, 60);
  ellipse(0, 0, 20);
  for (let i = 0; i < 10; i++) {
    fill(60, 80, 50);
    rotate(360 / 10);
    ellipse(15, 0, 5, 5);
  }
  pop();
}
*/
class Branch {
  // constructor = setup, kann aber daten haben…
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.length = random(50, 100);
    this.angle = random(-60, 60);
    this.color = color(random(10, 40), random(20, 60), random(20, 60));
  }

  render() {
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    strokeWeight(5);
    stroke(this.color);
    line(0, 0, 0, -this.length);
    pop();
  }
}

function mousePressed() {
  branches.push(new Branch(mouseX, mouseY));
}
