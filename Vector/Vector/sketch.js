let rootPosition;
let endPosition;

function setup() {
  angleMode(DEGREES);
  createCanvas(400, 400);
  rootPosition = createVector(width / 2, height - 50);
  endPosition = createVector(width / 3, height / 3);
  let v = createVector(0, -1);
  v.mult(100);
  v.rotate(20);
  endPosition = p5.Vector.add(rootPosition, v);
}

function draw() {
  background(220);
  ellipse(rootPosition.x, rootPosition.y, 10);
  ellipse(endPosition.x, endPosition.y, 10);
  line(rootPosition.x, rootPosition.y, endPosition.x, endPosition.y);

  // get Point on Line:
  // first get Vector AB
  let vLine = p5.Vector.sub(endPosition, rootPosition);
  // scale Vector
  vLine.mult(0.5);
  // get endPoint of Vector and make new Startpoint
  let sP = p5.Vector.add(rootPosition, vLine);
  ellipse(sP.x, sP.y, 10);
  // rotate Vector
  vLine.rotate(-50);
  // get new Endpoint
  let eP = p5.Vector.add(sP, vLine.mult(0.5));
  line(sP.x, sP.y, eP.x, eP.y);
  ellipse(eP.x, eP.y, 10);

  // new Vector from sP, eP
  let d = p5.Vector.sub(eP, sP);
  d.mult(2);
  d.rotate(20);

  sP = eP;
  eP = p5.Vector.add(sP, d);

  line(sP.x, sP.y, eP.x, eP.y);
  ellipse(eP.x, eP.y, 10);
}
