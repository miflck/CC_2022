let breite = 50;
let hoehe = 50;
let initNum = 0300;
let angle = 0;

let positionsX = [];
let positionsY = [];
let angles = [];
let heights = [];
let widths = [];
let colors;

function setup() {
  // canvas erstellen
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  colorMode(HSB, 360, 100, 100);
  let num = initNum;
  colors = [];

  let a = 180;
  while (num > 0) {
    positionsX.push(random(width));
    positionsY.push(random(height));
    angles.push(a + random(-20, 20));
    //angles.push(-sin(a) * 10);

    //a++;

    heights.push(random(10, 100));
    widths.push(random(1, 20));
    let hue = random(86, 80);
    let saturation = random(80, 100);
    let brightness = random(50, 100);
    let col = color(hue, saturation, brightness);

    colors.push(col);
    //col = [color(255, 0, 0), color(255, 255, 0), color(0, 0, 255)];
    console.log("cols", colors);

    num--;
  }
}
/* stage 1
function draw() {
  // hintergrund löschen
  background(220);
  //variable definieren
  //let posX = 0;
  //let posY = 0;
  let num = initNum;
  //angle = 0;
  //while loop
  while (num > 0) {
    rect(posX, posY, breite, hoehe);
     posX += breite;
    if (posX >= width) {
      posX = 0;
      posY = posY + hoehe;
    }
    num -= 1;
  }
}*/

function draw() {
  noStroke();
  // hintergrund löschen
  background(220);
  //variable definieren
  //let posX = 0;
  //let posY = 0;
  let num = initNum;
  //angle = 0;
  //while loop
  while (num > 0) {
    push();
    translate(positionsX[num - 1], positionsY[num - 1]);
    rotate(angles[num - 1]);
    let hue = random(50, 80);
    let saturation = random(80, 100);
    let brightness = random(80, 100);
    let col = color(hue, saturation, brightness);
    let c = colors[num - 1];
    fill(c);
    rect(0, 0, widths[num - 1], heights[num - 1]);
    ellipse(widths[num - 1] / 2, heights[num - 1], widths[num - 1] * 1.5);
    pop();
    /* posX += breite;
    if (posX >= width) {
      posX = 0;
      posY = posY + hoehe;
    }*/
    num -= 1;
  }
}
