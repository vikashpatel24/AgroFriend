const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const getWeather = require("./utils/getWeather");

const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello, AgroFriend!");
});

app.get("/api/get-weather", async (req, res) => {
  const { city } = req.query;

  try {
    const response = await getWeather(city);
    const { main } = response.data;
    const temperature = main.temp;
    const humidity = main.humidity;

    res.json({ temperature, humidity });
  } catch (error) {
    console.log("first");
    console.error(error);
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});

// Defining the API routes
const recommendationRoutes = require("./routes/recommendationRoutes");
app.use("/api", recommendationRoutes);

const emailRoute = require("./routes/emailRoute");
app.use("/api", emailRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Exposed on network
// app.listen(port, "0.0.0.0", () => {
//   console.log(`Server is running at http://0.0.0.0:${port}`);
// });
