// Example 1-2: Bouncing Ball, with p5.Vector!
var weather;
var api = 'https://api.openweathermap.org/data/2.5/weather?q=';
var city;
var apikey = '&appid=48991ee7950de65f30929222afe5e14b'; 
var units = '&units=metric';
//var url = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=48991ee7950de65f30929222afe5e14b&units=metric';

function setup() {
  createCanvas(400, 200);

  var btn = select ('#submit');
  btn.mousePressed(weatherAsk);
  city = select('#city');
}
function weatherAsk(){
  var url = api + city.value() + apikey+units;
  loadJSON(url, gotData);
}

function gotData(data){
  weather = data;

}
function draw() {
  background(0);
  if(weather){
    var temp = weather.main.temp;
    var humidity = weather.main.humidity;
    ellipse(100,100, temp, temp);
    ellipse(300, 100, humidity,humidity);
  }
}
