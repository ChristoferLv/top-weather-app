console.log("script");
import "./style.css";

const GIPHY_API_KEY = "bb2006d9d3454578be1a99cfad65913d";
const WEATHER_API_KEY = "XVLFKAYTP2KW8WEYVYKTGBFG7";

const form = document.querySelector("form");
const table = document.querySelector("table");
const body = document.querySelector("body");
const toggle = document.querySelector(".toggle");
const loader = document.getElementById("loader");
const error = document.querySelector(".error");
const img = document.querySelector("img");
const message = document.querySelector(".message");
const tbody = document.querySelector("tbody");

let forecastData_ = null;
let tempToF = false;

toggle.addEventListener("click", (e) => {
    tempToF = e.currentTarget.firstElementChild.checked;
    buildForecastTable(forecastData_);
})


form.addEventListener("submit", (e) => {
    e.preventDefault();
    resetDisplay();

    const formData = new FormData(e.target);

    fetchWeather(formData.get("city")).then((forecastData) => {
        forecastData_ = forecastData;
        if (!forecastData) return;
        buildForecastTable(forecastData);
        adjustStyle(forecastData.days[0]["conditions"], forecastData.days[0]["description"]);
    });
});

function convertToF(t, convert) {
    if (convert)
        return (t * (9 / 5) + 32).toFixed(1) + "°F";
    return t + "°C";
}

async function adjustStyle(condition, description) {
    const gif = await buscarGif(condition);
    img.src = gif;
    message.innerText = "Today conditions are: " + description;
    condition = condition.toLowerCase();
    if (condition.includes("snow")) {
        table.classList.add("snow");
        body.classList.add("snow");
    } else if (condition.includes("rain")) {
        table.classList.add("rain");
        body.classList.add("rain");
    }else if (condition.includes("cloud")) {
        table.classList.add("cloudy");
        body.classList.add("cloudy");
    }else if (condition.includes("clear")) {
        table.classList.add("sunny");
        body.classList.add("sunny");
    }

}

function resetDisplay() {
    message.innerText = '';
    img.src = '';
    table.className = 'hidden';
    body.className = '';
    loader.classList.remove("hidden");
    error.classList.add("hidden");
}

async function buildForecastTable(forecastData) {
    console.log("data", forecastData)
    if (!forecastData) return;
    table.classList.remove("hidden");
    tbody.innerText = '';
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

function fetchWeather(cityName) {
    return fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?unitGroup=metric&key=${WEATHER_API_KEY}&contentType=json`, {
        method: 'GET',
        headers: {
        }
    })
        .then((response) => {
            if (!response.ok) {
                throw response; // Check if the response is not ok and throw the response
            }
            return response.json(); // Parse the response as JSON
        })
        .then((data) => {
            return data;
        })
        .catch((errorResponse) => {
            if (errorResponse.text) { // additional error information
                errorResponse.text().then((errorMessage) => {
                    console.error("Error Message:", errorMessage);
                    error.classList.remove("hidden");
                    error.innerText = errorMessage;
                })
            } else {
                console.error("Unexpected error occurred.");
            }
        }).finally(() => {
            loader.classList.add("hidden");
        })
}

async function buscarGif(searchTerm) {
    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${GIPHY_API_KEY}&s=${searchTerm} weather`)
        const gifData = await response.json();
        return gifData.data.images.original.url;
    } catch (error) {
        console.error(error);
    }
}
