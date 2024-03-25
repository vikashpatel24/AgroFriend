import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import crops from "../../utils/crops";

const Fertilizer = () => {
  const navigate = useNavigate();
  const [cropName, setCropName] = useState("");
  const [nitrogen, setNitrogen] = useState("");
  const [phosphorous, setPhosphorous] = useState("");
  const [potassium, setPotassium] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(cropName, nitrogen, phosphorous, potassium);

    try {
      setLoading(true);
      const response = await axios.post(
        "https://agro-friend.vercel.app/api/fertilizer-recommendation",
        {
          cropname: cropName,
          nitrogen: nitrogen,
          phosphorous: phosphorous,
          potassium: potassium,
        }
      );

      const recommendation = response.data.recommendation;
      // console.log(recommendation)
      navigate("/fertilizer-result", { state: { recommendation } });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); // Set loading to false whether the request succeeds or fails
    }
  };

  return (
    <>
      <div className="pt-16 md:pt-0">
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6 text-center lg:space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold pb-3 tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-red-600 to-amber-600 bg-clip-text text-transparent">
                Fertilizer Advice
              </h2>
              <p className="max-w-[600px] text-gray-900 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Learn about the best fertilizers for your soil type and get
                personalized advice based on your NPK levels.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col font-bold sm:font-semibold  items-center gap-8"
              >
                <div className="flex flex-col items-start ring-1 ring-orange-500 hover:ring-green-500 shadow-xl px-4 rounded-lg gap-4 py-4">
                  <div className="space-x-2 space-y-2">
                    <label className="text-sm">Nitrogen:</label>
                    <input
                      type="number"
                      placeholder="Enter the value of N"
                      value={nitrogen}
                      onChange={(e) => setNitrogen(e.target.value)}
                      required
                      className="font-light sm:font-normal rounded-md pl-2  border border-gray-400  focus:outline-none focus:border-blue-500 "
                    />
                  </div>
                  <div className=" space-x-2 space-y-2">
                    <label className="text-sm">Phosphorus:</label>
                    <input
                      type="number"
                      placeholder="Enter the value of P"
                      value={phosphorous}
                      onChange={(e) => setPhosphorous(e.target.value)}
                      required
                      className="font-light sm:font-normal rounded-md pl-2 border border-gray-400 focus:outline-none focus:border-blue-500 "
                    />
                  </div>
                  <div className=" space-x-2 space-y-2">
                    <label className="text-sm">Potassium:</label>
                    <input
                      type="number"
                      placeholder="Enter the value of K"
                      value={potassium}
                      onChange={(e) => setPotassium(e.target.value)}
                      required
                      className="font-light sm:font-normal rounded-md pl-2 border border-gray-400 focus:outline-none focus:border-blue-500 "
                    />
                  </div>

                  <div className="space-x-2 space-y-2">
                    <label className="text-sm" htmlFor="soil">
                      Crop you want to grow:
                    </label>
                    <select
                      id="soil"
                      value={cropName}
                      onChange={(e) => setCropName(e.target.value)}
                      className="font-light sm:font-normal rounded-md pl-2 bg-white border border-gray-400 focus:outline-none focus:border-blue-500 "
                      required
                    >
                      {crops.map((crop) => (
                        <option key={crop} value={crop}>
                          {crop}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                {/* <button
                  type="submit"
                  className="bg-green-500 text-gray-900 text-lg ring-1 ring-gray-900 shadow-xl px-4 rounded-lg hover:text-white py-2"
                >
                  Get Advice
                </button> */}
                <button
                  type="submit"
                  className="bg-green-500 text-gray-900 text-lg ring-1 ring-gray-900 shadow-xl px-4 rounded-lg hover:text-white py-2"
                  disabled={loading} // Disable the button when loading
                >
                  {loading ? "Fetching..." : "Get Advice"}
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Fertilizer;
