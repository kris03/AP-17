var api = "http://api.giphy.com/v1/gifs/trending?";
var apiKey = "&api_key=dc6zaTOxFJmzC";
var query = "&q=";

var giphy;
var i = 0;

var myFont



function preload() {
  myFont = loadFont("assets/Supersonic.ttf");
}



function setup() {

  createCanvas(500, 500);
  background(15);
  
  
  
  	textFont(myFont);
 	textSize(17);
	fill(255);
  	text("You would like to see some trending gifs, right?", 60, 250);
 
  

  button = createButton('Of course');
  button.mousePressed(Next);
  button.position(width/2.4,height/1.12);
  
}



function gotData(giphy) {

	gifs = createImg(giphy.data[i].images.original.url)

	gifs.position(50,50);
	gifs.style("max-height", "350px");
	gifs.style("min-height", "350px");
	gifs.style("max-width", "400px");
	gifs.style("min-width", "400px");

}



function Next() {
    var url = api + apiKey + query;
  	loadJSON(url, gotData);
    i+=1;
    	
    button = createButton('One more');
  	button.mousePressed(Next);
 	button.position(width/2.4,height/1.12);
 	 	
}

