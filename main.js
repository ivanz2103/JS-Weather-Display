// JavaScript for the weather application
let weather = {
    apiKey: "647ad5315733c046d591a0913998be9b",
    fetchWeather: function (city) {
        fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=standard&appid=" + this.apiKey)
        .then((response) => response.json())
        .then((data) => this.showWeather(data));
    },

    convertKtoF: function (kelvin) {
        return kelvin * 9/5 - 459.67;
    },

    showWeather: function(data) {
        const{ name } = data;
        const tempMaxK = data.main.temp_max;
        const tempMinK = data.main.temp_min;
        const{ description } = data.weather[0];
        const{ humidity } = data.main;

        const tempMaxF = this.convertKtoF(tempMaxK);
        const tempMinF = this.convertKtoF(tempMinK);

        console.log(tempMaxF,tempMinF,humidity);
        document.querySelector(".city").innerText =  "The Weather in " + name;
        document.querySelector(".temp_max").innerText = tempMaxF + "°F";
        document.querySelector(".temp_min").innerText = tempMinF + "°F";
        document.querySelector(".description").innerHTML = description.toUpperCase();
        document.querySelector(".humidity").innerText = humidity + "%";    
    },
    search: function () {
        this.fetchWeather(document.querySelector(".searching").value);
    },
};

document.querySelector(".search button").addEventListener("click", function() {
    weather.search();
 });

 document.querySelector(".searching").addEventListener("keyup", function(event) {
    if(event.key == "Enter") {
        weather.search();
            }
 });

