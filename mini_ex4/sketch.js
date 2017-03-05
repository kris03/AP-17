var song;

var welcome;

var load_death;
var load_life;

function preload() {

song = loadSound('assets/Armenianduduksolo.mp3');

}

function setup() {

console.log("Hello World");
	
	song.play();
	song.setVolume(1);
	
	createCanvas(1100,650);
	background(48);
	
	welcome = createImg("assets/welcome.bl.png"); //frontpage
	welcome.size(300,190);
	welcome.position(width/3,height/3);
}

function mousePressed () { 
	if (mouseX > 366 && mouseX < 666 && mouseY > 200 && mouseY < 390) { //the coordinates for the text
		load_death = createImg("assets/Death.gif");
		load_death.position(50,50);
		
		welcome = createImg("assets/welcome.bl.png"); // so the text also will be at the first gif.
		welcome.size(150,90);
		welcome.position(width/1.17, height/1.17)
		
		}
}

function keyPressed () {

	if (keyCode === LEFT_ARROW) {
		load_death = createImg("assets/Death.gif");
		load_death.position(50,50);
		
		welcome = createImg("assets/welcome.bl.png");
		welcome.size(150,90);
		welcome.position(width/1.17, height/1.17);
		
	} else if (keyCode === RIGHT_ARROW) {
		load_life = createImg("assets/Life.gif");
		load_life.position(50,50);
		
		welcome = createImg("assets/welcome.bl.png");
		welcome.size(150,90);
		welcome.position(width/1.17, height/1.17);
	}

}
		