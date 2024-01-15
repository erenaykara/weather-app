const toggleMeasureBtn = document.querySelector("#toggle-measure");
const toggleMeasureBtnFeelsLike = document.querySelector(
  "#toggle-measure-feelslike"
);
const temperature = document.querySelector("#temperature");
const feelsLikeTemperature = document.querySelector('#feels-like');
let currentTemperatureInF;
let currentTemperatureInC;
let currentFeelsLikeTempInF;
let currentFeelsLikeTempInC;

export async function getWeather(city) {
  const apiKey = "068d4d16efff463ca3111654241101";
  let response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`,
    { mode: "cors" }
  );
  let data = await response.json();
  console.log(data);
  displayWeather(data);
  resetTemperatureButton();
  return data;
}

export async function displayWeather(weatherData) {
  const h2 = document.querySelector("#country");
  h2.textContent = `${weatherData.location.name}, ${weatherData.location.country}`;
  const condition = document.querySelector("#condition");
  const localTime = document.querySelector("#local-time");
  const humidity = document.querySelector("#humidity");

  temperature.textContent = weatherData.current.temp_c + "ºC";
  feelsLikeTemperature.textContent = weatherData.current.feelslike_c + "ºC";
  localTime.textContent = weatherData.location.localtime;
  //add a feels like
  condition.textContent = weatherData.current.condition.text;
  humidity.textContent = weatherData.current.humidity;

  currentTemperatureInC = weatherData.current.temp_c + "ºC";
  currentTemperatureInF = weatherData.current.temp_f + "ºF";
  currentFeelsLikeTempInC = weatherData.current.feelslike_c;
  currentFeelsLikeTempInF = weatherData.current.feelslike_f;
}

export async function toggleMeasure(event) {
  let clickedButton = event.target;
  if (clickedButton === toggleMeasureBtn) {
    if (currentTemperatureInC) {
      if (event.target.textContent === "Celsius") {
        temperature.textContent = currentTemperatureInF;
        event.target.textContent = "Fahrenheit";
      } else if (event.target.textContent === "Fahrenheit") {
        temperature.textContent = currentTemperatureInC;
        event.target.textContent = "Celsius";
      }
    }
  }
  if (clickedButton === toggleMeasureBtnFeelsLike) {
    if (currentTemperatureInC) {
      if (event.target.textContent === "Celsius") {
        feelsLikeTemperature.textContent = currentFeelsLikeTempInF + 'ºF';
        event.target.textContent = "Fahrenheit";
      } else if (event.target.textContent === "Fahrenheit") {
        feelsLikeTemperature.textContent = currentFeelsLikeTempInC + 'ºC';
        event.target.textContent = "Celsius";
      }
    }
  }
}

function resetTemperatureButton() {
  toggleMeasureBtn.textContent = "Celsius";
}
