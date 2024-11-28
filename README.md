# Weather App

A React-based application that fetches and displays weather data from the OpenWeather API. Users can input a city name to view weather details, including temperature, humidity, and weather conditions. The application gracefully handles errors and provides a clean, user-friendly interface.
 It allows users to get weather information for a specified city, sort the data, and visualize it using charts.

## Features

🚀 Features
- API Integration: Fetches real-time weather data using the OpenWeather API.
- Interactive Input: Allows users to search weather data by city name.
- Error Handling: Manages invalid inputs, API failures, and rate limits.
- Clean UI: Displays data in a well-structured and readable format.


## Technologies Used
Frontend: React.js
Styling: CSS
API: OpenWeather API
HTTP Client: Axios

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/weather-app.git
   cd weather-app

2. Install the dependencies:
   ```sh
    npm install

## API Key Configuration
1. Create a .env file in the root of the project:

    ```sh
    touch .env

2. Add your API key and API URL to the .env file:

    ```sh
    VITE_API_URL=https://api.openweathermap.org/data/2.5/weather
    VITE_API_KEY=your_api_key_here

## Running the Application
1. Start the development server:
    ```sh
    npm run dev

2. Open your browser and navigate to http://localhost:3000 to see the application running.

## Building for Production
Build the application for production:
    ````sh
        npm run build

2. Preview the production build:
    ```sh
    npm run preview



### Explanation:

- **Setup Instructions**: Detailed steps to clone the repository, install dependencies, and run the application.
- **API Key Configuration**: Instructions to create a `.env` file and add the necessary API key and URL.
- **Running the Application**: Commands to start the development server and build the application for production.


