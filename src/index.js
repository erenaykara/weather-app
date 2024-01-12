import { getWeather, toggleMeasure } from "./api.js";
import "./styles.css";

document.addEventListener("DOMContentLoaded", () => {
  const citySearch = document.querySelector("#city");

  citySearch.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      getWeather(citySearch.value);
    }
  });

  const toggleMeasureBtn = document.querySelector("#toggle-measure");
  toggleMeasureBtn.addEventListener("click", (e) =>
    toggleMeasure(e)
  );
});
