class Flower {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.numberOfLeaves = round(random(5, 20));
  }

  render() {
    console.log(this.x, this.y);
    push();
    translate(this.x, this.y);
    ellipse(0, 0, 20, 20);
    for (let i = 0; i < this.numberOfLeaves; i++) {
      rotate(360 / this.numberOfLeaves);
      rect(10, 0, 30, 10);
    }
    pop();
  }
}
