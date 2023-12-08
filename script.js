const apikey ="31c96d3f924951f9aba3414a286715c5";
const apiurl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weatherIcon");



async function checkWeather(city){
    const response = await fetch (apiurl+ city + `&appid=${apikey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =Math.round(data.main.temp ) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity+ " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

   
}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})


