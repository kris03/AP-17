var api = "http://api.giphy.com/v1/gifs/search?";
var apiKey = "&api_key=dc6zaTOxFJmzC";
var query = "&q=";

var input;
var i = 0;
var giphy;

function setup() {
  createCanvas(500, 500);

var button = select('#submit');
	button.mousePressed(gifAsk);
	
    input = select('#search');
    
    button.position(60, 410);
    
    
var button2 = select('#next');
    button2.mousePressed(Next);
    
    input = select('#search');
    
    button2.position(375, 410);
    input.position(175, 410);
}



function gifAsk() {
  removeElements();
  var url = api + apiKey + query + input.value();
  loadJSON(url, gotData);
    i=0;
    
    
}
function gotData(giphy) {

    removeElements();
    gifs = createImg(giphy.data[i].images.original.url);
    gifs.position(59, 91);
    
    gifs.style("max-width", "375px");
    gifs.style("max-height", "273px");
    
    gifs.style("min-height", "273px");
    gifs.style("min-width", "375px");
   
}

function Next() {
    removeElements();
    var url = api + apiKey + query + input.value();
  loadJSON(url, gotData);
    i+=1;
}