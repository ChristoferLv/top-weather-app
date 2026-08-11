# Weather App

Weather forecast application developed as part of the JavaScript path of [The Odin Project](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript), with a focus on **API integration**, **DOM manipulation**, and **Webpack bundling**.

## Project Objective

The main objective was to practice:
- Consuming external APIs (HTTP requests)
- Handling asynchronous responses with Promises and async/await
- Processing and displaying dynamic data in the DOM
- Advanced data-driven styling
- Dynamic module import
- Bundling and configuration with Webpack
- Error handling and loading states

## What is it?

A fully functional weather forecast application containing:
- Search field for cities worldwide
- 15-day forecast with a detailed table
- Temperature conversion between Celsius and Fahrenheit
- Weather icons and condition display
- Weather-related images for today via Giphy
- Dynamic visual themes (snow, rain, cloud, sun)
- Loader and search error handling

## How to use

1. Run `npm install` to install the dependencies
2. Run `npx webpack serve` to start the development server (the app will open automatically at `http://localhost:8080/`)
3. Type a city name into the search field
4. Click "Search" to fetch the weather forecast
5. View the table with the next 15 days of forecast data
6. Use the °C/°F toggle to switch between Celsius and Fahrenheit
7. The image and theme change according to the weather conditions

## Features

- **City Search**: Input field that fetches forecasts for any city in the world
- **15-Day Forecast**: Full table with date, condition, min/max temperature, and icons
- **Temperature Conversion**: Toggle to switch between Celsius and Fahrenheit
- **Dynamic Icons**: Descriptive SVG icons for each weather condition type
- **Condition Themes**: Colors and styles change for snow, rain, cloud, or sun
- **Thematic Images**: Automatically fetches images related to the current conditions via Giphy
- **Loader and Feedback**: Shows loading while fetching and displays errors appropriately

## Code Patterns

- **Promises and `.then()`**: Asynchronous API requests with `.then()` chaining for response handling
- **Async/Await**: Modern syntax for readable asynchronous code that is easier to debug
- **Dynamic DOM Manipulation**: Creating and updating elements based on data
- **Dynamic Import**: Loading modules/icons as needed
- **Webpack Bundling**: As required by the project, files are compiled and optimized

## Technologies Used

- HTML5
- CSS3
- JavaScript (Promises, async/await, modules)
- Webpack (bundling and asset management)
- APIs externas:
  - Visual Crossing Weather API
  - Giphy API

## Visualization

<img width="1920" height="919" alt="image" src="https://github.com/user-attachments/assets/812114fd-6b55-46d8-a987-e172b8831b40" />

---

Project developed following: [The Odin Project - Weather App](https://www.theodinproject.com/lessons/node-path-javascript-weather-app)

📍 **Main repository with all projects**: [ChristoferLv/TheOdinProject](https://github.com/ChristoferLv/TheOdinProject)
