let flowers = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(225);
  linearGradientFill(
    -0,
    -0,
    width / 2,
    height,
    color("#6e70fa"),
    color("#03021b")
  );

  rect(0, 0, width, height);

  flowers.map((flower) => {
    flower.update();
    flower.render();
  });
}

function mouseClicked() {
  flowers.push(new Flower(mouseX, mouseY));
}

class Flower {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(20, 100);
  }

  update() {}

  render() {
    push();
    translate(this.x, this.y);
    /*noStroke();
    linearGradientFill(-200, -200, 300, 300, "yellow", "red");

    ellipse(0, 0, 200, 200);
    rect(0, 0, 100, 100);
    translate(200, 0);
    rotate(90);

    ellipse(0, 0, 200, 200);
    rect(0, 0, 100, 100);
    translate(200, 200);

    rotate(90);

    ellipse(0, 0, 200, 200);
    rect(0, 0, 100, 100);
*/
    let theta = 0;
    let num = 5;
    noStroke();
    for (let i = 0; i < num; i++) {
      push();
      rotate(theta);
      translate(-this.size / 2, -this.size / 2);
      linearGradientFill(
        -this.size / 2,
        -this.size,
        this.size * 2,
        this.size * 2,
        "white",
        "red"
      );
      ellipse(0, 0, this.size, this.size);
      rect(0, 0, this.size / 2, this.size / 2);
      fill(255, 200, 200, 150);
      ellipse(this.size * 0.3, this.size * 0.3, 20, 20);
      fill(255, 230, 230, 80);
      ellipse(this.size / 2, this.size / 2, 20, 20);
      pop();
      theta += 360 / num;
    }

    pop();
  }
}

function linearGradientFill(x1, y1, x2, y2, color1, color2) {
  const ctx = canvas.getContext("2d");
  const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
  gradient.addColorStop(0, color1);
  gradient.addColorStop(1, color2);
  ctx.fillStyle = gradient;
}

function shadow(xoff, yoff, blur, col) {
  drawingContext.shadowOffsetX = xoff;
  drawingContext.shadowOffsetY = yoff;
  drawingContext.shadowBlur = blur;
  drawingContext.shadowColor = col;
}
