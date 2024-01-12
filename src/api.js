export async function getWeather(city) {
    const apiKey = '068d4d16efff463ca3111654241101';
    let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`)
    let response2 = await response.json();
    console.log(response2);
    displayWeather(response2);
}

export async function displayWeather(weatherData) {
    const condition = document.querySelector('#condition')
    const localTime = document.querySelector('#local-time')
    const humidity = document.querySelector('#humidity')
    
    //country
    localTime.textContent = weatherData.location.localtime;
    //temperature
    //feels like
    condition.textContent = weatherData.current.condition.text;
    humidity.textContent = weatherData.current.humidity;
}