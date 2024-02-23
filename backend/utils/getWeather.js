const axios = require('axios');

const getWeather = async (city) => {
  try {
    const OPENWEATHER_API_KEY ="557157be1f8fcdc381649e69ad6a9769";
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPENWEATHER_API_KEY}`;

    const response = await axios.get(apiUrl);

    if (response.status === 200) {
    //   const weatherData = response.data;
    //   const temperature = weatherData.main.temp;
    //   const humidity = weatherData.main.humidity;

      return response;
    } else {
      throw new Error(`Failed to fetch weather data. Status code: ${response.status}`);
    }
  } catch (error) {
    throw new Error(`Error getting weather data: ${error.message}`);
  }
};

module.exports = getWeather;
