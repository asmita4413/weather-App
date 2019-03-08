
function getWeather()
{
if(navigator.geolocation)
{
    navigator.geolocation.getCurrentPosition(position)
    showWeather(lat,long)
}
  else{
     window.alert("your location could not find");
 } 
} 
 
function position(){
    var lat=position.coords.latitude;
    var long=position.coords.longitude;
}
function showWeather(lat,long)
{
    const apikey="https://api.darksky.net/forecast/19ae1db2a849a47c6a16b5632b1a83ad/${lat},${long}";
    //var script = document.createElement("script");
    //script.type = "text/javascript";
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
    displayWeather(obj);
}
var obj;
function displayWeather(obj)
{
weatherIcon.src=weatherImages[obj.currently.weatherIcon];
temperature.innerHTML = farenheitToCelsius(object.currently.temperature) + " C" + " / " + object.currently.temperature + " F";
//temperature-degree.src = "https://cdn4.iconfinder.com/data/icons/medicons-2/512/thermometer-512.png";

}

function farenheitToCelsius(k) {
    return Math.round((k - 32) * 0.5556 );

}
let searchButton = document.getElementById("search-btn");

searchButton.addEventListener("click", getWeather);


