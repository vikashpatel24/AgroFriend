// const { predictCrop } = require('./yourMachineLearningModel'); // Import your machine learning model function
// const { PythonShell } = require('python-shell');

// // Load machine learning model
// const pyshell = new PythonShell('path/to/your/model_script.py');


module.exports.cropRecommendation = async (req, res) => {
  try {
    const {nitrogen, phosphorus, potassium,temperature, humidity, pH, rainfall } = req.body;
    console.log(req.body)
    console.log(nitrogen, phosphorus, potassium,temperature, humidity, pH, rainfall)

    res.json({ temperature, humidity });

    // Pass all the parameters to your machine learning model function for prediction
    // const cropRecommendation = predictCrop(nitrogen, phosphorus, potassium, temperature, humidity, pH, rainfall);

    // res.json({ cropRecommendation });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


// module.exports.cropRecommendation = async (req, res) => {
//   try {
//     // const {nitrogen, phosphorus, potassium,temperature, humidity, pH, rainfall } = req.body;
//     // console.log(req.body)
//     // console.log(nitrogen, phosphorus, potassium,temperature, humidity, pH, rainfall)

//     // res.json({ temperature, humidity });







//     const { nitrogen, phosphorus, potassium, temperature, humidity, pH, rainfall } = req.body;

//   // Pass input data to the Python script
//   pyshell.send({ nitrogen, phosphorus, potassium, temperature, humidity, pH, rainfall });

//   // Receive results from the Python script
//   pyshell.on('message', (message) => {
//     const recommendation = JSON.parse(message);
//     res.json(recommendation);
//   });

//   // End the input stream and wait for the Python script to finish
//   pyshell.end((err) => {
//     if (err) throw err;
//   });
// }









    // Pass all the parameters to your machine learning model function for prediction
    // const cropRecommendation = predictCrop(nitrogen, phosphorus, potassium, temperature, humidity, pH, rainfall);

    // res.json({ cropRecommendation });
//    catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };
