var app = new Vue({
    el: "#app",
    data: {
        allInfo: [],
        search: '',
        temperature: 0,
        minTemp: 0,
        maxTemp: 0,
        windSpeed: 0,
        pressure: 0,
        city:'',
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
                    console.log(response)
                    app.updateSearch(response);
                    
//                    console.log(app.myResponse);
                })
                .catch(error => alert(error));
        },

        updateSearch: function (response) {
            let temperature = response.main.temp;
            let newTemperature = temperature-273.15;
            app.temperature = newTemperature.toFixed();
            let minimumTemp = response.main.temp_min;
            let newMinTemp = minimumTemp-273.15;
            app.minTemp = newMinTemp.toFixed();
            let maximumTemp = response.main.temp_max;
            let newMaxTemp = maximumTemp-273.15;
            app.maxTemp = newMaxTemp.toFixed();
            let pressure = response.main.pressure;
            let newPressure = pressure/1000;
            app.pressure = newPressure;
            app.myResponse = response; 
            app.city = response.name;
            app.allInfo= response.main;
            app.windSpeed= response.wind.speed;
            
        },
    }

});
