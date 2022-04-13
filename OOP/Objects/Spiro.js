class Spiro {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.innerAngle = 0;
    this.outerAngle = 0;
    this.colorAngle = round(random(360));
  }
  render() {
    push();
    translate(this.x, this.y);
    rotate(this.innerAngle);
    noStroke();
    fill(0, 100, 100, 0.5);
    ellipse(0, 0, 200);

    push();
    translate(50, 0);
    rotate(this.outerAngle);
    translate(50, 0);

    fill(this.colorAngle, 100, 100);
    noStroke();
    ellipse(0, 0, 5);
    stroke(this.colorAngle, 80, 80);
    line(0, 0, 10, 0);

    pop();
    pop();
    this.innerAngle += 1;
    this.outerAngle += 10;
  }
}
