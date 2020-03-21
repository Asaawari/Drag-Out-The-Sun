

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("black");
  textSize(18);
  textAlign("CENTER");
  fill("yellow");
  text('Drag the orange Sun out between the RED and',10,30);
  textAlign("CENTER");
  fill("yellow");
  text('BLUE planets WITHOUT touching the planets',10, 375);
  fill("white");
  ellipse(195,195,200);
  fill("orange");
  ellipse(mouseX,mouseY,50);
  fill("green");
  ellipse(99,185,40);
  debug = true;
  fill("red");
  ellipse(203,99,40);
  fill("purple");
  ellipse(203,290,40);
  fill("blue");
  ellipse(285,159,40);
}