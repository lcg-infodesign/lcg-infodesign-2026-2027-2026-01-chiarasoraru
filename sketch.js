let xMax = 400; 
let yMax = 550;
let acceso = false; //deve partire da spento!!
let yScrivania =410;

// per lampada
let xTesta = 180;
let yTesta = 315;

//per Luna
let xLuna =150;
let velocitaLuna = 0.5;

function setup() {
  createCanvas(xMax, yMax); 
  frameRate(30);
  angleMode(DEGREES);
}

// faccio le stelle
function drawStarsInWindow(n =20) {
  push();
  noStroke();

for(let i=0; i < n; i++) {
    let starX = 60 + ((i * 53) % 300);
    let starY = 60 + ((i * 97) % 230);

let randomTransparency = random(150, 255);
let randomSize = random(2.5, 5.0);

// ora faccio i tipi di stelle
fill(255, 255, 170, randomTransparency);
ellipse(starX, starY, randomSize);
}
  pop();
}

//luna
function drawMoon() {
  push();
  noStroke();

  if(velocitaLuna >0) {
    xLuna = xLuna + 0.5;
  } else {
    xLuna = xLuna - 0.5;
  }
 if (xLuna > 180) {
    velocitaLuna = - 0.5; 
  }
  if (xLuna < 80) {
    velocitaLuna = 0.5;  
  }

  // Cerchio luna perche altrimenti non vieneeee
  fill(250, 245, 200);
  ellipse(xLuna, 100, 45, 45);

  // Ombra per mezza luna DAJE
  fill(8, 15, 45);
  ellipse(xLuna + 10, 95, 40, 40);

  pop();
}

// faccio il cono di luce
 function drawLightCone() { 
  if(acceso) {
   push();
   noStroke();
   fill(255, 240, 150, 90);
   triangle(xTesta, yTesta, xTesta - 80, yScrivania, xTesta + 80, yScrivania);
   pop();
  }
 }

function draw() {
  if (frameCount % 90 == 0) {
    acceso = !acceso;
  }

// sfondo stanza
  if(acceso) {
   background(40, 45, 75);
  } else {
    background(12, 14, 25);
  }

//  faccio la finestra
push();
fill(147, 96, 55);
stroke(147, 96, 55);
strokeWeight(2);
  rect(50, 50, 300, 250);
  pop();

// cielo scuro
push();
fill(8, 15, 45);
stroke(147, 96, 55);
strokeWeight(8);
rect(50, 50, 300, 250);
pop();

  drawStarsInWindow(20);
  drawMoon();

  // triangolo per la luce
drawLightCone();
push();
fill(148, 148, 148);
stroke(148, 148, 148);
strokeWeight(4);
  triangle (180, 262, 140, 310, 220, 310);
pop();

// disegno la scrivania
push() // salva le impostazioni
fill(177, 127, 74);
stroke(177, 127, 74);
strokeWeight(2);
rect(40, yScrivania, 320, 50);

// ora disegno le gambe 
rect(60, 460, 25, 90) // gamba sinistra
rect(318, 460, 25, 90) // gamba destra
pop(); 

// faccio il cerchio per tenere ferma lampada
push() 
noStroke();
fill(198,198,198);
stroke (198,198,198);
strokeWeight(2); 
ellipse(75, 410, 50, 8);
  pop();
  
//rettangolo verticale
push() 
  fill(198,198,198);
stroke (198,198,198);
strokeWeight(2);
rect(70, yScrivania, 8, -120); 
pop(); 

// faccio il braccio in diagonale
push();
translate(60, yScrivania - 90);
rotate(-35);
fill(148, 148, 148);
stroke(148, 148, 148);
strokeWeight(2);
rect(0, 0, 100, 6);
  pop();

// ora braccio in orizzontale
  push();
  fill(198, 198, 198);
  stroke(198, 198, 198);
  strokeWeight(2);
  rect(110, 260, 70, 8);
  pop();

// cerchio tra i due rettangoli
push();
noStroke();
fill(90);
ellipse(72, 315, 16, 16);
pop();

//ora la lampadina che si accende e spegne
push();
noStroke();
  if (acceso) {
    fill(255, 240, 120);
  } else {
    fill(90);
}
ellipse(180, 315, 35, 16);
pop();

}