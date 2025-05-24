const day1 = document.querySelector("#day1");
const day1Temp = document.querySelector("#day1Temp");
const day2 = document.querySelector("#day2");
const day2Temp = document.querySelector("#day2Temp");
const day3 = document.querySelector("#day3");
const day3Temp = document.querySelector("#day3Temp");

const forecastKey = "c90788d316edaf8d01d188e8a5cf389c"
const forecastLat = "57.14486007683242"
const forecastLon = "-4.680938064740463"

const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${forecastLat}&lon=${forecastLon}&appid=${forecastKey}&units=imperial`;

async function fetchForecast() {
    try {
        const response = await fetch(forecastURL);
        if (response.ok) {
            const data = await response.json();
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayForecast(data) {
    if (data.list && data.list.length > 0) {
        console.log("Forecast Data:", data.list); // Debugging step

        // Ensure all elements exist before updating them
        if (day1 && day1Temp && day2 && day2Temp && day3 && day3Temp) {
            day1.innerHTML = formatDate(data.list[0].dt);
            day1Temp.innerHTML = `${Math.round(data.list[0].main.temp)}°F`;
            day2.innerHTML = formatDate(data.list[8].dt);
            day2Temp.innerHTML = `${Math.round(data.list[8].main.temp)}°F`;
            day3.innerHTML = formatDate(data.list[16].dt);
            day3Temp.innerHTML = `${Math.round(data.list[16].main.temp)}°F`;
        } else {
            console.error("Forecast elements not found in the DOM.");
        }
    } else {
        console.error("No forecast data available", JSON.stringify(data, null, 2));
    }
}

function formatDate(timestamp) {
    return new Date(timestamp * 1000).toLocaleDateString("en-US", {
        weekday: "long"
    });
}

document.addEventListener("DOMContentLoaded", () => {
    fetchForecast();
});