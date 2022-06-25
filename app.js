const API_key = "e3a3567f9576cf5025a1ffb3b3944062";

const form = document.querySelector("form");
const search = document.querySelector(".city-search");
const weather = document.querySelector(".temp");

const getWeather = async function (city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  weather.innerHTML = `${Math.floor(data.main.temp)} &#8451`;
};
form.addEventListener("submit", function (e) {
  getWeather(search.value);

  e.preventDefault();
});
