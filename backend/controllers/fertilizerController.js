const csv = require("csv-parser");
const fs = require("fs");
// const fertilizerData = require("../utils/fertilizerData.js");
const fertilizerData = [
  {
    NHigh:
      "<div class='text-center mb-4'><p class='font-bold text-lg text-red-600'>The Nitrogen content of soil is <span class='text-green-600'>High!</span></p><i class='block mb-4'>Please consider the following suggestions:</i></div><ol class='list-decimal list-inside'><li class='mb-2'><span class='font-bold'>Add sawdust or fine woodchips to your soil:</span> The carbon in the sawdust/woodchips loves nitrogen and will help absorb and soak up any excess nitrogen.</li><li class='mb-2'><span class='font-bold'>Water your soil:</span> Soaking your soil with water will help leach the nitrogen deeper into your soil, effectively leaving less for your plants to use.</li><li class='mb-2'><span class='font-bold'>Add Sugar:</span> In limited studies, it was shown that adding sugar to your soil can potentially reduce the amount of nitrogen in your soil. Sugar is partially composed of carbon, an element that attracts and soaks up nitrogen in the soil. This is a similar concept to adding sawdust/woodchips, which are high in carbon content.</li><li class='mb-2'><span class='font-bold'>Plant heavy nitrogen feeding plants:</span> Tomatoes, corn, broccoli, cabbage, and spinach are examples of plants that thrive off nitrogen and will absorb the nitrogen in the soil.</li></ol>",
    NLow: "<div class='text-center mb-4'><p class='font-bold text-lg text-green-600'>The Nitrogen content of soil is <span class='text-red-600'>Low!</span></p><i class='block mb-4'>Please consider the following suggestions:</i></div><ol class='list-decimal list-inside'><li class='mb-2'><span class='font-bold'>Add Composted Manure:</span> The most commonly used fertilizer is cow or poultry manure, but horse, goat, sheep, and rabbit manure also work very well. Just make sure to compost the manure first or it can burn your plants.</li><li class='mb-2'><span class='font-bold'>Crab meal:</span> Along with the 6% nitrogen levels, crab meal contains a high portion of lime, so you can use it if you need to make your soil more alkaline. Avoid if you have soils that already have a high pH.</li><li class='mb-2'><span class='font-bold'>Rich Compost:</span> The holy grail of garden amendments—it does it all! While compost has a low level of available nitrogen, it works well as a source of slow-release nitrogen, especially when combined with fast-acting nitrogen fertilizers like fish emulsion.</li><li class='mb-2'><span class='font-bold'>Corn Gluten:</span> Corn gluten works as both a nitrogen-rich soil amendment and a weed preventer. However, it keeps all plants from setting roots, so only use this around established plants.</li></ol>",
    PHigh:
      "<div class='text-center mb-4'><p class='font-bold text-lg text-red-600'>The Phosphorus content of soil is <span class='text-green-600'>High!</span></p><i class='block mb-4'>Please consider the following suggestions:</i></div><ol class='list-decimal list-inside'><li class='mb-2'><span class='font-bold'>Avoid adding manure as fertilizer:</span> Manure is typically high in phosphorous and can quickly lead to a spike in phosphorous levels.</li><li class='mb-2'><span class='font-bold'>Nitrogen-fixing vegetables:</span> Plant nitrogen-fixing vegetables to increase nitrogen without increasing phosphorous. Examples of such vegetables include beans and peas. If nitrogen levels are extremely low, planting nitrogen-fixing vegetables alone will not fix your problem.</li></ol>",
    PLow: "<div class='text-center mb-4'><p class='font-bold text-lg text-green-600'>The Phosphorus content of soil is <span class='text-red-600'>Low!</span></p><i class='block mb-4'>Please consider the following suggestions:</i></div><ol class='list-decimal list-inside'><li class='mb-2'><span class='font-bold'>Bone meal:</span> A fast-acting source that is made from ground animal bones which is rich in phosphorous.</li><li class='mb-2'><span class='font-bold'>Organic compost:</span> Adding quality organic compost to your soil will help increase phosphorus content.</li><li class='mb-2'><span class='font-bold'>Manure:</span> As with compost, manure can be an excellent source of phosphorous for your plants.</li><li class='mb-2'><span class='font-bold'>Ensure proper soil pH:</span> Having a pH in the 6.0 to 7.0 range has been scientifically proven to have the optimal phosphorus uptake in plants.</li></ol>",
    KHigh:
      "<div class='text-center mb-4'><p class='font-bold text-lg text-red-600'>The Potassium content of soil is <span class='text-green-600'>High!</span></p><i class='block mb-4'>Please consider the following suggestions:</i></div><ol class='list-decimal list-inside'><li class='mb-2'><span class='font-bold'>Sifting the soil:</span> Sift the soil and remove as many rocks as possible. This will prevent minerals in rocks, such as feldspar and mica, from releasing potassium into the soil.</li><li class='mb-2'><span class='font-bold'>Loosen the Soil:</span> Loosen the soil with a garden fork or shovel, then water deeply to dissolve and flush out the surplus in potassium-rich soil. Allow the soil to dry completely, then repeat two or three more times.</li><li class='mb-2'><span class='font-bold'>Digging :</span> If the area is small, digging in crushed seashells or eggshells may help balance soil nutrients.</li></ol>",
    KLow: "<div class='text-center mb-4'><p class='font-bold text-lg text-green-600'>The Potassium content of soil is <span class='text-red-600'>Low!</span></p><i class='block mb-4'>Please consider the following suggestions:</i></div><ol class='list-decimal list-inside'><li class='mb-2'><span class='font-bold'>Add Kelp Or Seaweed To Your Soil:</span> If you live near the ocean or have access to a natural source of seaweed, you can add this to your soil to raise its potassium level. For garden beds, you can use natural seaweed as a mulch as it will break down over time and nourish your soil.</li><li class='mb-2'><span class='font-bold'>Using Wood Ash:</span> If you have an open fireplace or a wood heater, don’t throw the ash into the trash. The ashes from your fire are high in potassium and can be spread thinly over your soil or lawn area. Take note though, that the wood ash will raise your soil’s pH level.</li><li class='mb-2'><span class='font-bold'>Add Compost To Your Soil:</span> Compost made from lots of vegetable scraps and green material along with some wood ash is ideal for adding nutrients to your soil, including potassium.</li></ol>",
  },
];


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
