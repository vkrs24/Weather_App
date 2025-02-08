const search_btn = document.querySelector(".horizontal_content_2");

function kelvinToCelsius(kelvin) {
  return kelvin - 273.15;
}

async function checkweather(cityname) {
  const api_key = "6a313d4d3a7492e4c6758db3bc0e74f5";

  const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metrics&`;

  const response = await fetch(api_url + `appid=${api_key}`);

  const rsp_msg = await response.json();

  console.log(rsp_msg);

  document.querySelector(".city").innerHTML = rsp_msg.name;

  let kelvinTemp = rsp_msg.main.temp;
  let celsiusTemp = kelvinToCelsius(kelvinTemp);

  document.querySelector(".city_temp").innerHTML = `${celsiusTemp.toFixed(
    2
  )}&#x2103`;

  document.querySelector(
    ".city_humidity"
  ).innerHTML = `${rsp_msg.main.humidity}%`;

  document.querySelector(".city_speed").innerHTML = `${rsp_msg.wind.speed}Km/h`;

  if (rsp_msg.weather[0].main == "Mist" || rsp_msg.weather[0].main == "Fog") {
    document.querySelector(".weather_img").src = "images/fog.png";
  } else if (rsp_msg.weather[0].main == "Clear") {
    document.querySelector(".weather_img").src = "images/sun.png";
  } else if (rsp_msg.weather[0].main == "Clouds") {
    document.querySelector(".weather_img").src = "images/clouds.png";
  } else if (rsp_msg.weather[0].main == "Rain") {
    document.querySelector(".weather_img").src = "images/heavy-rain.png";
  } else if (rsp_msg.weather[0].main == "Snow") {
    document.querySelector(".weather_img").src = "images/snow.png";
  } else if (rsp_msg.weather[0].main == "Haze") {
    document.querySelector(".weather_img").src = "images/haze.png";
  }
}

let cityname = "Chennai";
checkweather(cityname);

search_btn.addEventListener("click", () => {
  let cityname = document.querySelector(".input_text"); // Retrieve value inside the event listener
  checkweather(cityname.value);
  cityname.value = "";
});
