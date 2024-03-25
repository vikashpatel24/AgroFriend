import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa6";
import { BsSunrise } from "react-icons/bs";
import { BsSunset } from "react-icons/bs";

const Weather = () => {
  const [searchCity, setSearchCity] = useState("Allahabad");
  const [weather, setWeather] = useState({
    city: "",
    date: "",
    icon: "",
    cloud: "",
    temperature: 0,
    humidity: 0,
    windspeed: "",
    sunrise: "",
    sunset: "",
  });

  const handleInputChange = (e) => {
    setSearchCity(e.target.value);
  };

  const handleSubmit = () => {};

  useEffect(() => {
    const fetchWeather = async () => {
      if (searchCity) {
        try {
          const OPENWEATHER_API_KEY = "557157be1f8fcdc381649e69ad6a9769";
          // const OPENWEATHER_API_KEY = "e450bc345a80a08ada69fd5c714d871d";
          const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${OPENWEATHER_API_KEY}`;

          const response = await axios.get(apiUrl);
          console.log(response.data);
          const { main } = response.data;
          const temperature = main.temp;
          const humidity = main.humidity;
          const city = response.data.name;
          const windspeed = response.data.wind.speed;
          const sunr = response.data.sys.sunrise;
          const suns = response.data.sys.sunset;
          const dt = response.data.dt;
          const cloud = response.data.weather[0].description;
          const ic = response.data.weather[0].icon;
          const icon = `https://openweathermap.org/img/wn/${ic}@2x.png`;
          const sunriseDate = new Date(sunr * 1000);
          const sunsetDate = new Date(suns * 1000);
          const dates = new Date(dt * 1000);
          const sunrise = sunriseDate
            .toLocaleString("en-IN", { timeZone: "Asia/Kolkata", hour12: true })
            .split(",")[1];
          const sunset = sunsetDate
            .toLocaleString("en-IN", { timeZone: "Asia/Kolkata", hour12: true })
            .split(",")[1];
          const date = dates.toLocaleString("en-IN", {
            timeZone: "Asia/Kolkata",
            // day: "numeric",
            // month: "long",
            // year: "numeric",
            weekday: "long",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true,
          });

          setWeather({
            city,
            date,
            icon,
            cloud,
            temperature,
            humidity,
            windspeed,
            sunrise,
            sunset,
          });
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchWeather();
  }, [searchCity]);

  return (
    <>
      <div className="flex pt-20 flex-col items-center justify-start min-h-[100dvh] ">
        <div className="flex flex-col pt-8 items-center justify-center">
          <h2 className="text-3xl font-bold pb-3 tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-red-600 to-amber-600 bg-clip-text text-transparent">
            Weather Finder
          </h2>
          <p className="max-w-[600px] text-gray-900 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
            Let us help you to know the weather of any place...
          </p>
        </div>
        <div className="p-4 flex flex-col items-center justify-center m-10  gap-4 bg-sky-300 rounded-lg ring-1 ring-orange-300 shadow-xl">
          <div className="items-center">
            <form onSubmit={handleSubmit} className="flex gap-4">
              <input
                className="ring-1 rounded-lg px-4 font-medium focus:outline-none"
                placeholder="Search for a city..."
                value={searchCity}
                onChange={handleInputChange}
              />
              <button
                type="submit"
                className="hover:scale-150 active:text-pink-600 transition-all active:duration-300"
                size="icon"
              >
                {/* <FaSearch className="w-4 h-4" /> */}
              </button>
            </form>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col justify-between">
              <h1 className="text-2xl font-semibold">{weather.city}</h1>
              <span className="font-medium">
                Last Updated:
                <p className=" text-gray-900 justify-self-end">
                  {weather.date}
                </p>
              </span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={weather.icon}
                alt="icon"
                className="w-12 h-12 scale-150"
              />
              <p className="font-semibold">{weather.cloud}</p>
              <p className="text-4xl font-semibold">
                {(weather.temperature - 273.15).toFixed(2)}°C
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-1">
              <WiHumidity className="w-12 h-12 scale-150" />
              <p className="text-2xl font-semibold">
                Humidity: {weather.humidity.toFixed(2)}%
              </p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <FaWind className="w-12 h-12" />
              <p className="text-2xl font-semibold">
                Wind: {weather.windspeed} m/s
              </p>
            </div>
          </div>
          <div className="grid max-w-sm grid-cols-2 items-center gap-4 text-center">
            <div className="flex flex-col items-center gap-1">
              <p className="text-lg font-medium">Sunrise</p>
              <BsSunrise className="w-12 h-12" />
              <p className="text-md font-medium">{weather.sunrise}</p>
            </div>
            <div className="flex flex-col items-center gap-1 ">
              <p className="text-lg font-medium">Sunset</p>
              <BsSunset className="w-12 h-12" />
              <p className="text-md font-medium">{weather.sunset}</p>
            </div>
          </div>
        </div>
        {/* <section className="w-full p-4 flex flex-col items-center justify-center gap-4">
          <h2 className="text-2xl font-semibold">5 Day Forecast</h2>
          <div className="grid max-w-sm grid-cols-3 items-start gap-4">
            <div className="flex flex-col items-center gap-1">
              <p className="text-sm font-medium">Tomorrow</p>
              <CloudSunIcon className="w-12 h-12" />
              <p className="text-sm font-medium">25/20°C</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="text-sm font-medium">Day after</p>
              <CloudSunIcon className="w-12 h-12" />
              <p className="text-sm font-medium">25/20°C</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="text-sm font-medium">In 2 days</p>
              <CloudSunIcon className="w-12 h-12" />
              <p className="text-sm font-medium">25/20°C</p>
            </div>
          </div>
        </section> */}
        <div>
          <h1>
            For any suggestion or improvements, please{" "}
            <Link
              to={"/contact"}
              className="text-blue-500 hover:text-green-600"
            >
              contact us
            </Link>{" "}
          </h1>
        </div>
      </div>
    </>
  );
};

export default Weather;
