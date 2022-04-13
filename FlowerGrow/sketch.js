let flowers = [];
let blumen = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  console.log(flowers.length);
  for (let i = 0; i < flowers.length; i++) {
    flowers[i].render();
  }

  for (let i = 0; i < blumen.length; i++) {
    blumen[i].update();
    blumen[i].render();
    /* if (blumen[i].height == blumen[i].maxHeight) {
      let f = new Flower(blumen[i].x, blumen[i].y - blumen[i].maxHeight);
      flowers.push(f);
    }*/
  }
}

function keyPressed() {
  if (key == "b") {
    let b = new Blume(mouseX, mouseY);
    blumen.push(b);
  }
  if (key == "f") {
    let f = new Flower(mouseX, mouseY);
    flowers.push(f);
  }
}
