async function fetchWeather() {
    try {
        const apiKey = "c90788d316edaf8d01d188e8a5cf389c";
        const city = "Scotland";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error("Error fetching weather:", error);
        document.querySelector("#weather-info").innerHTML = "<p>Weather data unavailable.</p>";
    }
}

function displayWeather(data) {
    const weatherContainer = document.querySelector("#weather-info");
    const temp = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;

    weatherContainer.innerHTML = `
        <img src="https://openweathermap.org/img/wn/${icon}.png" alt="${description}">
        <p><strong>Temperature:</strong> ${temp}°C</p>
        <p><strong>Condition:</strong> ${description}</p>
    `;
}

document.addEventListener("DOMContentLoaded", fetchWeather);