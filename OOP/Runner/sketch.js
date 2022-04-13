let runners = [];

const makeRunner = (x, y, colorAngle) => {
  runners.push(new Runner(x, y, colorAngle));
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  colorMode(HSB, 360, 100, 100);
}

function draw() {
  //background(220);
  for (let i = 0; i < runners.length; i++) {
    runners[i].update();
    runners[i].render();
    if (runners[i].kill) {
      runners.splice(i, 1);
    }
  }
}

class Runner {
  constructor(x, y, colorAngle) {
    this.speed = createVector(5, 0);
    this.speed.rotate(random(-360));

    this.position = createVector(x, y);
    this.oldposition = createVector(x, y);

    this.color = color(random(100, 140), random(50, 100), random(50, 100));
    this.lifeTime = 1000;
    this.startLife = millis();
    this.kill = false;
    this.flowers = [];
    this.colorAngle = round((colorAngle + random(10)) % 360);
  }
  update() {
    this.position.add(this.speed);
    this.speed.mult(random(0.8, 1.2));
    this.speed.rotate(random(-10, 10));
    if (this.position.x > width) this.oldposition.x = this.position.x = 0;
    if (this.position.x < 0) this.oldposition.x = this.position.x = width;
    if (this.position.y > height) this.oldposition.y = this.position.y = 0;
    if (this.position.y < 0) this.oldposition.y = this.position.y = height;

    if (this.startLife + this.lifeTime < millis()) {
      this.kill = true;
    }

    if (random() < 0.03) {
      this.flowers.push(
        new Flower(this.position.x, this.position.y, this.colorAngle)
      );
    }

    if (random() < 0.02) {
      this.flowers.push(
        new Flower(this.position.x, this.position.y, this.colorAngle)
      );
      makeRunner(this.position.x, this.position.y, this.colorAngle);
    }
  }

  render() {
    push();
    //translate(this.position.x, this.position.y);
    fill(this.color);
    //noStroke();
    ellipse(0, 0, 5);
    stroke(this.color);
    line(
      this.oldposition.x,
      this.oldposition.y,
      this.position.x,
      this.position.y
    );
    pop();

    this.oldposition = this.position.copy();

    for (let i = 0; i < this.flowers.length; i++) {
      this.flowers[i].render();
    }
  }

  getKill() {
    return this.kill;
  }
  getPosition() {
    return this.position.copy();
  }
}

class Flower {
  constructor(x, y, colorAngle) {
    this.x = x || random(100, width - 100);
    this.y = y || random(100, height - 100);
    this.radius = random(10, 30);
    this.leaveRadius = this.radius / 2;
    this.numberOfLeaves = round(random(4, 10));
    this.colors = [];
    this.colorAngle = round(random(colorAngle - 10, colorAngle + 10));

    //this.colorAngle = map(this.x, 0, width, 0, 360);
    for (let i = 0; i < this.numberOfLeaves; i++) {
      this.colors.push(
        color(
          random(this.colorAngle - 20, this.colorAngle + 20),
          random(50, 100),
          random(50, 100)
        )
      );
    }
  }

  render() {
    push();
    noStroke();

    translate(this.x, this.y);
    fill(this.colorAngle, 80, 60);
    ellipse(0, 0, this.radius);
    for (let i = 0; i < this.numberOfLeaves; i++) {
      fill(this.colors[i]);
      rotate(360 / this.numberOfLeaves);
      ellipse(
        this.radius / 2 + this.leaveRadius / 3,
        0,
        this.leaveRadius,
        this.leaveRadius
      );
    }
    ellipse(0, 0, this.radius * 0.3);

    pop();
  }
}

function mouseClicked() {
  runners.push(new Runner(mouseX, mouseY, round(random(360))));
}
