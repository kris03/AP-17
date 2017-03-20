var cols, rows; //creates a grid
var scl = 20; // scale
var inc = 0.1;


var zoff = 0; //3rd axis


var particles = [];

var flowfield;



function setup() {

	createCanvas(700,500);
	
	cols = floor(width / scl);
	rows = floor(height / scl);

	flowfield = new Array(cols * rows)

		for (var i = 0; i < 1000; i++) { //adding particles
		particles[i] = new Particle();
		}
	
	background(173, 170, 175);
}



function draw() {


	var yoff = 0;
		for (var y = 0; y < rows; y ++) {

	var xoff = 0;
		for(var x =0; x < cols; x++) {

	var index = x + y * cols;

	var an = noise(xoff, yoff, zoff) * TWO_PI; //adding noise value to the angle
	var v = p5.Vector.fromAngle(an); //vectors to create the flow stream
	v.setMag(1);// magnitude to control how exactly the particles will follow the stream

flowfield[index] = v; //the calculated vectors are stored in this array

xoff += inc; 
	
}
yoff += inc;

zoff += 0.0004; //makes a moving flow field, the low value makes it change slow
}

for (var i=0; i < particles.length; i++) {
particles[i].follow(flowfield); //makes the particles follow the flowfield
particles[i].update();
particles[i].edges();
particles[i].show();

	}
}