import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Disease = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const fileSizeLimitMB = 5;
      const allowedFileTypes = ["image/png", "image/jpeg", "image/jpg"];

      // File size validation
      if (file.size > fileSizeLimitMB * 1024 * 1024) {
        setError(`File size exceeds ${fileSizeLimitMB} MB limit.`);
        return;
      }

      // File type validation
      if (!allowedFileTypes.includes(file.type)) {
        setError("Only PNG, JPG, and JPEG file types are allowed.");
        return;
      }

      setError("");
      setSelectedFile(file);
    } else {
      setError("");
      setSelectedFile(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      setError("Please select an image.");
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      setLoading(true);
      const response = await axios.post(
        'http://127.0.0.1:5000/disease-detect',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      const recommendation = response.data;
      navigate("/disease-result", { state: { recommendation } });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="pt-16 md:pt-0">
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6 text-center lg:space-y-10">
            <div className="space-y-2">
              <h2 className="text-4xl font-bold pb-3 tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-red-600 to-amber-600 bg-clip-text text-transparent">
                Disease Detection
              </h2>

              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Detect & Protect
              </h2>

              <p className="max-w-[900px] text-gray-900 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Upload images of your plant leaves or fruits to detect diseases.
                We'll analyze the images and provide you with information about
                possible diseases affecting your plants.
              </p>
            </div>

            <div className="mx-auto w-full max-w-sm space-y-2">
              <form onSubmit={handleSubmit} className="flex flex-col font-bold sm:font-semibold  items-center gap-8">
                <div className="flex flex-col ring-1 ring-orange-500 hover:ring-green-500 shadow-xl px-4 rounded-lg gap-4 py-4">
                  <h2 className="text-xl tracking-tighter sm:text-2xl">
                    Find Disease Caught by your plants
                  </h2>
                  <div className="flex flex-col hover:ring-1 shadow-xl px-4 py-10 rounded-lg">
                    <input
                      className="w-full max-w-[400px]"
                      placeholder="Choose image"
                      type="file"
                      accept=".png, .jpg, .jpeg"
                      onChange={handleFileChange}
                    />
                    {error && <p className="text-red-500 mt-2">{error}</p>}
                    {selectedFile && (
                      <div className="mt-4">
                        <img
                          src={URL.createObjectURL(selectedFile)}
                          alt="Selected preview"
                          className="w-full  h-full object-cover rounded-lg"
                        />
                        <p className="mt-2 text-sm">
                          <span className="font-semibold">Name:</span>{" "}
                          {selectedFile.name} |{" "}
                          <span className="font-semibold">Size:</span>{" "}
                          {(selectedFile.size / 1024).toFixed(2)} KB
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className={`bg-green-500 text-gray-900 text-lg ring-1 ring-gray-900 shadow-xl px-4 rounded-lg hover:text-white py-2 ${
                    loading ? "cursor-not-allowed" : ""
                  }`}
                >
                  {loading ? "Detecting..." : "Detect"}
                </button>
              </form>
            </div>

            <div className="mx-auto w-full max-w-sm space-y-2"></div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Disease;
