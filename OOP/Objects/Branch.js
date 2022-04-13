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
