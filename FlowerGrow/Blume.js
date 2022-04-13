class Blume {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.height = 0;
    this.maxHeight = round(random(50, 200));
    this.hasFlower = false;
    this.flower = null;
  }

  update() {
    if (this.height <= this.maxHeight) {
      this.height = this.height + 1;
    } else {
      if (this.hasFlower == false) {
        this.flower = new Flower(this.x, this.y - this.height);
        this.hasFlower = true;
      }
    }
  }

  render() {
    push();
    fill(0, 200, 100);
    noStroke();
    translate(this.x, this.y);
    rect(0, 0, 5, -this.height);

    pop();
    if (this.hasFlower) {
      this.flower.render();
    }
  }
}
