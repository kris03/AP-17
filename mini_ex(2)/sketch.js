var a = 130;
var b = 145;
var c = 550;
var d = 580;
var e = 190;
var f = 180;
var g = 198;
var h = 240;
var i = 610;
var j = 635;
var k = 646;
function setup() {
createCanvas(1450,850);
console.log("Hello World");
background(248,248,255);
noLoop();
}

function draw() {
stroke(30,144,255); 
strokeWeight(1.5); //stroke width
fill(135,206,250);
rect(a,212,550,300,10); //blue rect with round corners

stroke(1);
strokeWeight(1); 
fill(255);
rect(b,270,520,230); //white smaller rect within the one with round corners

fill(245);
rect(b,420,520,80); // grey rect

stroke(0,191,255);
strokeWeight(1.5);
fill(230);
rect(c,445,80,30,3);// OK box

textFont("Helvetica");
textSize(16);
strokeWeight(0);
fill(1);
text("OK",d,465);

ellipseMode(RADIUS);
stroke(1);
strokeWeight(0.5);
fill(255);
ellipse(e,320,25,25); //white ellipse
ellipseMode(CENTER);
fill(178,34,34);
ellipse(e,320,44,44); //red ellipse

stroke(255);
strokeWeight(7);
line(f,310,g,328);
line(g,310,f,328); //cross inside ellipse


textSize(22);
strokeWeight(0);
fill(1)
text("Unknown error",h,330);

stroke(1)
strokeWeight(0.4)
fill(220,34,34);
rect(i,213,55,30,3); //close box

stroke(255);
strokeWeight(2.5);
line(j,220,k,236);
line(k,220,j,236); //cross inside close box

strokeWeight(0);
fill(1);
textSize(18);
text("Everyday life",b,250);

}
function mousePressed() {
   a += 10;
   b += 10;
   c += 10;
   d += 10;
   e += 10;
   f += 10;
   g += 10;
   h += 10;
   i += 10;
   j += 10;
   k += 10;

   redraw();
 }
