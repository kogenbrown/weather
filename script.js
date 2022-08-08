let weather = {
  apiKey: "32dbb8c57b5af33043736e461bf6a7d4",
  fetchWeather: function(city) {
    fetch (
      "http://api.openweathermap.org/data/2.5/weather?q=" 
      + city 
      + "&units=imperial&appid=" 
      + this.apiKey
    ).then((response) => response.json())
    .then((data) => this.displayWeather(data));
  },
  displayWeather: function(data) {
    const {name} = data;
    const {icon, description} = data.weather[0];
    const {temp, humidity} = data.main;
    const {speed, deg} = data.wind;
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".temp").innerText = temp + "°F";
    document.querySelector(".description").innerText = description;
    document.querySelector(".humidity").innerText = humidity + "% Humidity";
    document.querySelector(".wind").innerText = "Wind: " + speed + " mph";
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
  },

}

