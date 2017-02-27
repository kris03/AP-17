function setup() {
createCanvas(1000, 700);
background(255, 240, 245);
}

function draw() {
noStroke();
fill(230, 184, 135);
arc(500, 325, 120, 95, PI, PI+PI, PIE); //øverste 
arc(500, 370, 120, 45, 0, TWO_PI, PIE); //nederste

fill(99, 69, 43);
rect(438, 355, 125, 15, 10); //bøf

fill(255, 232, 63);
rect(440, 340, 120, 15, 3); //ost

fill(89, 196, 51);
rect(440, 335, 120, 5, 3); //salat

fill(214, 64, 64);
rect(440, 325, 120, 10); //tomat

//fill(255, 240, 245);
//rect(440, 340, 120, 15);

push();
fill(46, 132, 57);
arc(450, 340, 20, 20, 0, PI, TWO_PI, PIE); //agurk 1
arc(470, 340, 20, 20, 0, PI, TWO_PI, PIE); //agurk 2
arc(490, 340, 20, 20, 0, PI, TWO_PI, PIE); //agurk 3
arc(510, 340, 20, 20, 0, PI, TWO_PI, PIE); //agurk 4
arc(530, 340, 20, 20, 0, PI, TWO_PI, PIE); //agurk 5
arc(550, 340, 20, 20, 0, PI, TWO_PI, PIE); //agurk 6
pop();

}

