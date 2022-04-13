class Flower {
  constructor(x, y) {
    this.x = x || random(100, width - 100);
    this.y = y || random(100, height - 100);
    this.radius = random(50, 150);
    this.leaveRadius = this.radius / 2;
    this.numberOfLeaves = round(random(4, 10));
    this.colors = [];
    this.colorAngle = round(random(360));
    this.colorAngle = map(this.x, 0, width, 0, 360);
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
