var r = 200;
var total = 0;
var circle_dots = 0;
var inp;

function setup() {
  createCanvas(720, 600);
  background(0);
  translate(width / 2, height / 2);
  stroke(255);
  strokeWeight(2);
  noFill();
  ellipse(0, 0, 400, 400);
  rectMode(CENTER);
  rect(0, 0, 400, 400);
  inp = createInput("");
  inp.position(48, 10);
  button = createButton("PI = ");
  button.position(10, 10);
}

function draw() {
  translate(width / 2, height / 2);
  for (var i = 0; i < 100; i++) {
    var x = random(-r, r);
    var y = random(-r, r);
    var dis = x * x + y * y;
    total += 1;
    if (dis < r * r) {
      circle_dots += 1;
      stroke(100, 255, 0);
    } else {
      stroke(0, 100, 255);
    }
    point(x, y);
    var pie = 4 * (circle_dots / total);
  }
  inp.value(pie);
}
