var arcX = 450; //start X koordinat
var fr = 4; //start FPS
var clr;

function setup() {
	createCanvas(1000,700);
	background(255, 240, 245);
  	frameRate(fr); // Attempt to refresh at starting FPS
  	clr = color(100, 140, 35); //lysegrøn
}

function draw() {
  background(255, 240, 245);
  
  noStroke();
	fill(230, 184, 135);
	arc(500, 325, 120, 95, PI, PI+PI, PIE); //øverste 
	arc(500, 365, 120, 45, 0, TWO_PI, PIE); //nederste
	
	
	fill(247, 234, 205)
	ellipse(447, 315, 3, 5);
	ellipse(462, 315, 3, 5);
	ellipse(477, 315, 3, 5);
	ellipse(492, 315, 3, 5);
	ellipse(507, 315, 3, 5);
	ellipse(522, 315, 3, 5);
	ellipse(537, 315, 3, 5);
	ellipse(552, 315, 3, 5);
	
	ellipse(454.5, 305, 3, 5);
	ellipse(469.5, 305, 3, 5);
	ellipse(484.5, 305, 3, 5);
	ellipse(499.5, 305, 3, 5);
	ellipse(514.5, 305, 3, 5);
	ellipse(529.5, 305, 3, 5);
	ellipse(544.5, 305, 3, 5);
	
	ellipse(462, 295, 3, 5);
	ellipse(477, 295, 3, 5);
	ellipse(492, 295, 3, 5);
	ellipse(507, 295, 3, 5);
	ellipse(522, 295, 3, 5);
	ellipse(537, 295, 3, 5);
	
	ellipse(470.5, 287, 3, 5);
	ellipse(484.5, 284, 3, 5);
	ellipse(499.5, 284, 3, 5);
	ellipse(514.5, 284, 3, 5);
	ellipse(528.5, 287, 3, 5);
	
	
	fill(99, 69, 43);
	rect(438, 350, 125, 15, 10); //bøf

	fill(255, 232, 63);
	rect(440, 335, 120, 15, 3); //ost

	fill(89, 196, 51);
	rect(440, 335, 120, 5, 3); //salat

	fill(214, 64, 64);
	rect(440, 325, 120, 10); //tomat

  

arcX = arcX += 20; //flyt agurk

  if (arcX >= 570) { //slut X koordinat
    if (fr == 4) {
      clr = color(46, 132, 57); //mørkere grøn
      fr = 3;
      frameRate(fr); // make frameRate 3 FPS
    } else {
      clr = color(100, 140, 35); //lysegrøn
      fr = 4;
      frameRate(fr); // make frameRate 4 FPS
    }
    arcX = 450;
  }
  fill(clr);
  arc(arcX, 340, 20, 20, 0, PI, TWO_PI, PIE); //lille agurk der bevæger sig
}