console.log("script");
import "./style.css";

// document.getElementById("pesquisar").addEventListener("click", buscarGif);
const form = document.querySelector("form");
const resultContainer = document.querySelector(".result");
const toggle = document.querySelector(".toggle");
let forecastData_ = null;
let tempToF = false;

toggle.addEventListener("click", (e) => {
    tempToF = e.currentTarget.firstElementChild.checked;
    buildForecastTable(forecastData_);
})


form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetchWeather().then((forecastData) => {
        forecastData_ = forecastData;
        buildForecastTable(forecastData);
    });
});

function convertToF(t, convert) {
    if (convert)
        return (t * (9 / 5) + 32).toFixed(1) + "°F";
    return t + "°C";
}

async function buildForecastTable(forecastData) {
    if (!forecastData) return;
    const tbody = document.querySelector("tbody");
    tbody.innerText = '';
    console.log(forecastData);
    for (const day of forecastData["days"]) {
        const newRow = document.createElement("tr");
        const condition = document.createElement("td");
        const conditionImg = document.createElement("img");
        const date = document.createElement("td");
        const forecast = document.createElement("td");
        const tMin = document.createElement("td");
        const tMax = document.createElement("td");
        //Forma usando link externo -> conditionImg.src = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/58c79610addf3d4d91471abbb95b05e96fb43019/SVG/2nd%20Set%20-%20Color/${day["icon"]}.svg`;
        conditionImg.src = (await import(`./icons/${day["icon"]}.svg`)).default;
        condition.append(conditionImg);
        date.innerText = day["datetime"];
        forecast.innerText = day["conditions"];
        tMin.innerText = convertToF(day["tempmin"], tempToF);
        tMax.innerText = convertToF(day["tempmax"], tempToF);
        newRow.append(condition);
        newRow.append(date);
        newRow.append(forecast);
        newRow.append(tMin);
        newRow.append(tMax);
        tbody.append(newRow);
    }
}

function fetchWeather() {
    return fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/S%C3%A3o%20Paulo?unitGroup=metric&key=XVLFKAYTP2KW8WEYVYKTGBFG7&contentType=json", {
        method: 'GET',
        headers: {
        }
    })
        .then(response => {
            if (!response.ok) {
                throw response; // Check if the response is not ok and throw the response
            }
            return response.json(); // Parse the response as JSON
        })
        .then(data => {
            console.log("Weather data for São Paulo:", data);
            return data;
        })
        .catch(errorResponse => {
            if (errorResponse.text) { // additional error information
                errorResponse.text().then(errorMessage => {
                    console.error("Error Message:", errorMessage);
                })
            } else {
                console.error("Unexpected error occurred.");
            }
        });
}

function buscarGif() {
    const searchTerm = document.getElementById("title").value;
    const errorSpace = document.getElementById("error");
    if (!searchTerm) return;
    const img = document.querySelector('img');
    let response_ = "";

    async function getCats() {
        try {
            const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=bb2006d9d3454578be1a99cfad65913d&s=' + searchTerm)
            const catData = await response.json();
            img.src = catData.data.images.original.url;
        } catch (error) {
            console.error(error);
        }
    }
    getCats();
}