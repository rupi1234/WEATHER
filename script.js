
document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'cdb58d6a5911a26b79e2267292147bd8'; // Replace with your actual API key
    const searchButton = document.getElementById('searchButton');
    const locationInput = document.getElementById('locationInput');
    const weatherInfo = document.getElementById('weatherInfo');

    searchButton.addEventListener('click', function() {
        const location = locationInput.value;
        if (location) {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`)
                .then(response => response.json())
                .then(data => {
                    const weatherDescription = data.weather[0].description;
                    const temperature = (data.main.temp - 273.15).toFixed(2); // Convert to Celsius
                    const cityName = data.name;

                    weatherInfo.style.display = 'block';
                    weatherInfo.querySelector('.city-name').textContent = cityName;
                    weatherInfo.querySelector('.weather-description').textContent = weatherDescription;
                    weatherInfo.querySelector('.temperature').textContent = `${temperature}°C`;
                })
                .catch(error => {
                    console.error('Error fetching weather data:', error)
                    





                    
                });
        }
    });
});