const myTown = document.querySelector("#town");
const myDescription = document.querySelector("#description");
const myTemperature = document.querySelector("#temperature");
const myGraphic = document.querySelector("#graphic");

const myKey = "c90788d316edaf8d01d188e8a5cf389c"
const myLat = "57.14486007683242"
const myLon = "-4.680938064740463"

const myURL = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&appid=${myKey}&units=imperial`;

async function apiFetch() {
    const cachedWeather = localStorage.getItem("weatherData");
    const lastFetchTime = localStorage.getItem("weatherFetchTime");

    if (cachedWeather && lastFetchTime && (Date.now() - lastFetchTime < 600000)) {
        displayResults(JSON.parse(cachedWeather));
        console.log("Using cached weather data.");
        return;
    }
    try {
        const response = await fetch(myURL);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
            console.log("Fetching current weather data...");

        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    console.log("Current Weather Data:", data);
    myTown.innerHTML = data.name;
    myDescription.innerHTML = data.weather[0].description;
    myTemperature.innerHTML = Math.round(data.main.temp) + "°F";
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    myGraphic.setAttribute("src", iconsrc);
    myGraphic.setAttribute("alt", data.weather[0].description);
    myGraphic.setAttribute("loading", "lazy");
}

document.addEventListener("DOMContentLoaded", () => {
    apiFetch();
});

