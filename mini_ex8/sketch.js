var minval = -0.5;
var maxval = 0.5;

var minSlider;
var maxSlider;

function setup() {

createCanvas(500,500);

pixelDensity(1); //massefylde

minSlider = createSlider(-2.5, 0, -2.5, 0.01);
maxSlider = createSlider(0, 2.5, 2.5, 0.01);

minSlider.position(10, 515);
maxSlider.position(355, 515);

}

function draw() {

var max_iterations = 100;

loadPixels();
	for (var x = 0; x < width; x++) {
	for (var y = 0; y < height; y++) {
	
//looking for all the complex munbers there is between -2 - 2i all the way to 2 + 2i
var a = map(x, 0, width, minSlider.value(), maxSlider.value());
var b = map(y, 0, height, minSlider.value(), maxSlider.value());

var ca = a;
var cb = b;
//these numbers must iterate and to control this is used the var n. 

var n = 0;
	
//controls that it does not iterate more times than described in max_iterations.	
      while (n < max_iterations) { 
        var aa = a * a - b * b;
        var bb = 2 * a * b;
        a = aa + ca;
        b = bb + cb;
        if (a * a + b * b > 16) {
          break;
        }
        n++;
      }

var bright = map(n, 0, max_iterations, 0, 1);
    bright = map(sin(bright), 0, 1, 0, 200);


      if (n == max_iterations) {
        bright = 0;
      }


      var pix = (x + y * width) * 4;
      pixels[pix + 0] = bright;
      pixels[pix + 1] = bright;
      pixels[pix + 2] = bright;
      pixels[pix + 3] = 255;
    }
  }
updatePixels();
}