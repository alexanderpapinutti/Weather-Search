var app = new Vue({
    el: "#app",
    data: {
        allInfo: [],
        humidity: 0,
        available: true,
        search: '',
        temperature: 0,
        minTemp: 0,
        maxTemp: 0,
        clear: "clear_sky.jpg",
        windSpeed: 0,
        pressure: 0,
        mainWeather: '',
        weather: '',
        city: '',
        myResponse: [],
    },

    methods: {

        dataTable: function () {
            var fetchConfig =
                fetch("https://api.openweathermap.org/data/2.5/weather?q=" + this.search + "&APPID=9f028a252c9482c30904dbda5c75f15b", {
                    method: "GET",

                })
                .then(function (response) {
                    return response.json();

                })
                .then(function (response) {
                    console.log(response);
                    app.updateSearch(response);
                })
                .catch(error => alert("Sorry, couldn't find your city"));
        },

        updateSearch: function (response) {
            let allInfo = response.main;
            let temperature = allInfo.temp;
            let newTemperature = temperature - 273.15;
            app.temperature = newTemperature.toFixed();
            let minimumTemp = allInfo.temp_min;
            let newMinTemp = minimumTemp - 273.15;
            app.minTemp = newMinTemp.toFixed();
            let maximumTemp = allInfo.temp_max;
            let newMaxTemp = maximumTemp - 273.15;
            app.maxTemp = newMaxTemp.toFixed();
            let pressure = allInfo.pressure;
            let newPressure = pressure / 1000;
            let weather = response.weather[0].description;
            let mainWeather = response.weather[0].main;
            app.mainWeather = mainWeather;
            app.weather = weather;
            app.pressure = newPressure;
            app.myResponse = response;
            app.city = response.name;
            app.humidity = allInfo.humidity;
            app.windSpeed = response.wind.speed;

        },
    }

});
