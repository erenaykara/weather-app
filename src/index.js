import { getWeather } from './api.js'
import './styles.css'

document.addEventListener("DOMContentLoaded", () => {
  const content = document.querySelector("#content");
  const citySearch = document.querySelector('#city');

  citySearch.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        getWeather(citySearch.value);
    }
  })

});
