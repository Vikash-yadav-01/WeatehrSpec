console.log("This is the Weather api application");


window.addEventListener('load', () => {


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position);
            let lat = position.coords.latitude;

            let lon = position.coords.longitude;
            let apikey = "6fa3f40cbdf4861710714b2a2638448e";

            let units = "metric";

            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=${units}`;


            fetch(api).then((response) => {
                return response.json();
            }).then((data) => {
                console.log(data);
                const clouds = data.clouds;
                const visibility = data.visibility;
                const wind = data.wind;
                const weather = data.weather[0];
                const main = data.main;
                const name = data.name;
                let dt = new Date(data.dt*1000); //timestamp *1000


                let html =
                    `<div class="current__weather__card">
                            <div class="name zindex">
                                <p class="area__name">${name}</p>
                            </div>
                            <div class="date zindex">
                                <p class="date_time">${dt.toDateString()}</p>
                            </div>
                        <div class="temperature__icon zindex">
                            <div class="icon">
                                <img id="weather__image" src="http://openweathermap.org/img/wn/${weather.icon}@2x.png" alt="Weather image">
                            </div>
                            <div class="temperature zindex">
                                <h1 class="temperature_number">${Math.round(main.temp)} </h1>
                                <span id="temperature_degree"><strong>℃</strong></span>
                            </div>
                        </div>
                        <div class="feels zindex">
                            <p id="feels__text">Feels Like</p>
                            <div class="feelslike">
                                <p id="feels__temp">${Math.round(main.feels_like)} °</p>
                            
                            </div>
                        </div>
                        <div class="summary zindex">
                            <p class="weather__description">${weather.description}</p>
                    
                        </div>
                        <div class="clouds zindex">
                            <p id="all_clouds">Clouds  ${clouds.all} %</p>
                    
                        </div>
                        
                    </div>
                    
                
                
                    <div class="temperature__details__card">
                
                
                        <div class="details__card">
                            <div class="deatails_card_content">
                                <p id="min__temperature">${Math.round(main.temp_min)} °</p>
                            
                            </div>
                            <p class="p-2_ofdatails">Minimum </p>
                        </div>
                
                
                        <div class="details__card">
                            <div class="deatails_card_content">
                                <p id="max__temperature">${Math.round(main.temp_max)} °</p>
                            
                            </div>
                            <p class="p-2_ofdatails">Maximum</p>
                        </div>
                
                        <div class="details__card">
                            <div class="deatails_card_content">
                                <p id="pressure">${main.pressure} hPa</p>
                            
                            </div>
                            <p class="p-2_ofdatails"> Pressure </p>
                        </div>
                
                        <div class="details__card">
                            <div class="deatails_card_content">
                                <p id="humidity__temperature">${Math.round(main.humidity)} %</p>
                            
                            </div>
                            <p class="p-2_ofdatails">Humidity</p>
                        </div>

                        <div class="details__card">
                        <div class="deatails_card_content">
                            <p id="humidity__temperature">${Math.round(visibility/1000)} km</p>
                        
                        </div>
                        <p class="p-2_ofdatails">Visibility</p>
                    </div>

                    <div class="details__card">
                    <div class="deatails_card_content">
                        <p id="humidity__temperature">${Math.round(wind.speed)} m/s</p>
                    
                    </div>
                    <p class="p-2_ofdatails">Wind Speed</p>
                </div>
                
                    </div>`;


                let weather_card = document.querySelector(".weather-card");
                weather_card.innerHTML += html;


                let main_body = document.querySelector('.main-body');
                let current__weather__card = document.querySelector('.current__weather__card');
                let temperature__details__card = document.querySelector('.temperature__details__card');
                const background_color = function () {
                    if (main.temp >= 45) {
                        main_body.style.background = "linear-gradient(0deg, #fcff9e 0%, #c67700 100%)";
                        current__weather__card.style.background = "url(image/bg.jpg) no-repeat center/cover";
                        temperature__details__card.style.background = "url(image/bg2.jpg) no-repeat center/cover ";

                    } else if (main.temp >= 35) {
                        main_body.style.background = "linear-gradient(0deg, #3F2B96 0%, #A8C0FF 100%)";
                        current__weather__card.style.background = "url(image/blue2.jpg) no-repeat center/cover";
                        temperature__details__card.style.background = "url(image/bg.jpg) no-repeat center/cover ";

                    } else if (main.temp >= 25) {
                        main_body.style.background = "linear-gradient(0deg, #00ff88 0%, #0700b8 100%)";
                        current__weather__card.style.background = "url(image/yellow.jpg) no-repeat center/cover";
                        temperature__details__card.style.background = " url(image/yellow2.jpg) no-repeat center/cover";

                    } else {
                        main_body.style.background = "linear-gradient(0deg, #00d2ff 0%, #3a47d5 100%)";
                        current__weather__card.style.background = "url(image/blue.jpg) no-repeat center/cover";
                        temperature__details__card.style.background = " url(image/blue2.jpg) no-repeat center/cover";
                    }
                }
                background_color();

            })

        })
    }
})










