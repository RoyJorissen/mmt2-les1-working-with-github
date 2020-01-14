let kleur;

function setup() {

  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(240);

  kleur = mouseX;
  kleur = map(kleur, 0, width, 0, 255);

  // horizontale lines
  line(0,0, width, 0);
  line(0, height, width, height);
  line(0, height/3, width, height/3);
  // kleur = random(255);
  stroke(random(255), random(255),random(255));
  strokeWeight(10);
  line(0, height/3*2, width, height/3*2);
  stroke(0);
  strokeWeight(1);

  //verticale lines
  line(0,0,0, height);
  line(width, 0, width, height);
  line(width/4,0, width/4, height);
  strokeWeight(5);
  line(width/2, 0, width/2,height); //middelste lijn
  strokeWeight(1);
  line(3/4*width, 0, 3/4*width, height);

  fill(kleur,0,0);
  rect(width/2, 0, width/4, height/3);
  fill(0,255,0);
  rect(width/4, height/3, width/4, height/3);
  fill(kleur,mouseY,kleur);
  rect(3/4*width,height/3*2,width/4,height/3)
}