const csv = require("csv-parser");
const fs = require("fs");
const fertilizerData = require("../utils/fertilizerData");

module.exports.fertilizerRecommendation = async (req, res) => {
  const cropName = req.body.cropname;
  const nitrogen = parseInt(req.body.nitrogen);
  const phosphorous = parseInt(req.body.phosphorous);
  const potassium = parseInt(req.body.potassium);
  // console.log("Input Data: ", cropName, nitrogen, phosphorous, potassium);

  // Reading the CSV data
  const data = [];
  fs.createReadStream("./utils/fertilizers.csv")
    .pipe(csv())
    .on("data", (row) => {
      data.push(row);
    })
    .on("end", () => {
      const cropData = data.find((row) => row.Crop === cropName);
      // console.log("Finded crop:", cropData);

      if (cropData) {
        const n = cropData.N - nitrogen;
        const p = cropData.P - phosphorous;
        const k = cropData.K - potassium;
        // console.log("Calculations:", n, p, k);

        const temp = {
          abs_n: Math.abs(n),
          abs_p: Math.abs(p),
          abs_k: Math.abs(k),
        };
        const maxValue = Object.keys(temp).reduce((a, b) =>
          temp[a] > temp[b] ? a : b
        );

        let key;
        if (maxValue === "abs_n") {
          key = n < 0 ? "NHigh" : "NLow";
        } else if (maxValue === "abs_p") {
          key = p < 0 ? "PHigh" : "PLow";
        } else {
          key = k < 0 ? "KHigh" : "KLow";
        }

        // console.log("key:", key);
        // console.log(typeof key);

        // Finding the object in fertilizerData with the specified key
        const fertilizerObject = fertilizerData.find((obj) =>
          obj.hasOwnProperty(key)
        );

        if (fertilizerObject) {
          const recommendation = fertilizerObject[key];
          res.json({ recommendation });
        } else {
          res.status(404).json({ success: false, error: "Crop not found" });
        }
      }
    });
};
