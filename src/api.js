export async function getWeather(city) {
    const apiKey = '068d4d16efff463ca3111654241101';
    let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`)
    let response2 = await response.json();
    console.log(response2);
    displayWeather(response2);
}

export async function displayWeather(weatherData) {
    const container = document.querySelector('.container')
    const h2 = document.createElement('h2');
    h2.id = 'country';
    h2.textContent = weatherData.location.country;
    container.before(h2);
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