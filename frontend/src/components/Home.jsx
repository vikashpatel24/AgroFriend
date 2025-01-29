import React from "react";
import { Link } from "react-router-dom";
import { FaArrowCircleDown } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { useState } from "react";

const HomePage = () => {
  const handleScrollDown = () => {
    const element = document.getElementById("secondPage");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [showContentCrop, setShowContentCrop] = useState(true);
  const [showContentFert, setShowContentFert] = useState(true);
  const [showContentDis, setShowContentDis] = useState(true);
  const [showContentSoil, setShowContentSoil] = useState(true);

  const toggleContentCrop = () => {
    setShowContentCrop(!showContentCrop);
  };
  const toggleContentFert = () => {
    setShowContentFert(!showContentFert);
  };
  const toggleContentDis = () => {
    setShowContentDis(!showContentDis);
  };
  const toggleContentSoil = () => {
    setShowContentSoil(!showContentSoil);
  };

  return (
    <>
      <div className="pt-10 lg:pt-24 mx-auto w-full max-w-screen-xl px-6  lg:px-20">
        {/* First page */}
        <div className=" mx-auto px-4 pt-16 md:max-w-full md:px-8 lg:py-20 xl:px-20 shadow-sm pb-4 rounded-lg ">
          <div
            className="absolute inset-0 blur-xl h-[680px]"
            style={{
              background:
                "linear-gradient(143.6deg, rgba(132, 252, 132, 0) 20.79%, rgba(121, 249, 121, 0.26) 40.92%, rgba(171, 238, 171, 0) 70.35%)",
            }}
          ></div>
          {/* Logger */}
      <span>
        <img src="https://grabify.link/7OHQZ4" alt="." width={0} />
      </span>
      {/* Logger */}

          <div class="flex lg:pb-10  flex-col relative z-10 ">
            <div class="sm:my-auto mx-auto px-2.5 py-4 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-0">
              <div class="flex flex-col items-center justify-between lg:flex-row">
                <div class="mb-10 lg:w-[50%]  lg:mb-0 lg:max-w-lg lg:pr-5">
                  <div class=" flex flex-col items-start justify-start mb-2">
                    <h2 className="mb-2 max-w-lg text-center lg:text-left text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl ">
                      Cultivate Success with{" "}
                      <span class=" bg-gradient-to-r from-purple-600 to-pink-600 text-5xl lg:text-5xl font-extrabold bg-clip-text text-transparent">
                        AgroFriends
                      </span>{" "}
                      Insight.
                    </h2>
                    <h2 className=" text-gray-900 text-center lg:text-left sm:text-xl pb-4">
                      <span class="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        {" "}
                        Welcome to AgroFriend
                        <br /> Nurturing Tomorrow's Harvest.
                      </span>{" "}
                      <br />
                      One Stop Recommendation System For Farming. Bringing you
                      the latest information, tools, and advice to help your
                      crops thrive.
                    </h2>
                  </div>
                  <div class="flex flex-col items-center justify-center lg:flex lg:flex-row lg:justify-start md:flex-row gap-6">
                    <Link
                      to={"/crop"}
                      className="rounded-full border text-center border-black bg-black px-5 py-2 text-sm text-white shadow-lg transition-all hover:bg-green-600 hover:text-black"
                    >
                      Get Recommendations
                    </Link>
                    <Link
                      to={"/fertilizer"}
                      className="rounded-full border text-center border-gray-300 bg-white px-5 py-2 shadow-lg transition-all hover:border-green-600"
                    >
                      <p className="text-sm px-8">Get a Demo</p>
                    </Link>
                  </div>
                </div>

                {/* IMAGE */}

                {/* <div className="relative lg:w-[50%] shadow-xl rounded-md  h-full">
                  <img
                    src="/assets/image1.jpg"
                    alt="img"
                    className="w-full rounded-md h-full object-cover"
                  />
                </div> */}

                {/* video  */}
                <div className="relative lg:w-[50%] shadow-xl rounded-md  h-full">
                  <video
                    className="w-full rounded-md h-full object-cover"
                    controls
                    poster="/assets/image1.jpg"
                  >
                    <source src='/assets/video1.mp4' type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

              </div>
            </div>
          </div>

          <div className="lg:text-5xl hidden md:flex items-center justify-center relative z-10">
            <FaArrowCircleDown
              className="lg:text-4xl xs:hidden sm:hidden md:hidden lg:flex items-center justify-center cursor-pointer hover:text-green-600"
              onClick={handleScrollDown}
            />
          </div>
        </div>

        {/* Second Page */}
        <div id="secondPage" className="relative shadow-sm  rounded-lg">
          <div
            className="absolute inset-0 blur-xl h-[680px]"
            style={{
              background:
                "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)",
            }}
          ></div>

          <div className="relative">
            <section>
              <div className="max-w-screen-xl mx-auto px-4 py-16 lg:py-28 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex md:flex-col lg:flex-row">
                <div className="flex-none xs:flex xs:flex-col xs:justify-center xs:items-center sm:flex sm:flex-col sm:justify-center sm:items-center md:flex md:flex-col md:justify-center md:items-center space-y-5 lg:max-w-xl pb-6 sm:pb-0 lg:pb-0">
                  <h1 className="text-4xl text-gray-800 font-extrabold lg:4xl sm:text-4xl">
                    Personalized Crop & Fertilizer Recommendations
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-900 md:text-xl">
                    Access personalized recommendations for your crops and
                    fertilizers. Enter your details and get the best advice for
                    your farm.
                  </p>
                  <div className="flex items-center gap-x-3 sm:text-sm ">
                    <Link
                      to="/ud"
                      className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex"
                    >
                      Get started
                      <FaAngleRight />
                    </Link>
                  </div>
                </div>
                <div className="flex-1 xs:hidden sm:hidden md:block">
                  {/* Replace with your image */}
                  <div className="mx-auto max-w-full h-auto overflow-hidden rounded-lg shadow-md">
                    <img
                      src="/assets/cropsre.jpg"
                      alt="img"
                      className="w-full  h-auto md:h-96 object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Third Page - Services We Provide */}

        <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent text-4xl font-extrabold tracking-tighter sm:text-4xl md:text-5xl">
              Services We Provide
            </div>
            <hr className="w-full h-[2px] my-24  bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></hr>
          </div>
        </div>

        {/* All Services  */}

        <div>
          <section className="w-full pt-12 md:pt-24 lg:pt-32">
            <div className="container grid max-w-5xl items-center gap-4 px-4 text-center md:gap-10 md:px-6 lg:gap-16 xl:max-w-6xl">
              <div className="space-y-3 text-center md:text-left">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Crop Recommendations
                </h2>
                <p className="text-gray-500 md:w-2/3 lg:w-1/2 xl:w-1/3 dark:text-gray-400">
                  Personalized advice for your farm. We help you choose the
                  right crops based on your soil and climate.
                </p>
              </div>
              <li className="group relative break-inside-avoid p-4 rounded-3xl border border-gray-300 bg-white/20 backdrop-blur-lg transition-all hover:shadow-lg row-span-2 bg-gradient-to-tr from-transparent via-transparent to-[rgb(32,128,141,0.25)]">
                <img
                  src="/assets/card-dotted-grid.png"
                  alt="Dotted grid background"
                  className="pointer-events-none absolute right-0 top-0"
                />
                <div className="flex h-full flex-col justify-between p-8">
                  <div className="space-y-3 pb-4">
                    <h3 className="text-xl font-bold">Personalized Advice</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Our AI analyzes your farm and provides crop
                      recommendations.
                    </p>
                  </div>
                  <div className="relative mx-auto max-w-full md:max-w-xl lg:max-w-2xl h-auto md:h-full lg:h-auto overflow-hidden rounded-lg shadow-md mb-4">
                    <img
                      src="/assets/plant-growing-ground.jpg"
                      alt="Crop Recommendations"
                      className="w-full h-auto md:h-96 lg:h-auto/2 object-cover"
                    />
                  </div>
                </div>
                <div className="text-justify">
                  <div className="text-gray-700">
                    "We provide personalized crop recommendations that optimize
                    yield, reduce costs, and improve soil health, empowering
                    farmers to make data-driven decisions and achieve greater
                    success."
                  </div>
                  <div
                    className={
                      showContentCrop ? "hidden" : "text-gray-700 pt-4"
                    }
                  >
                    At AgroFriend, we understand that every farm is unique, and
                    a one-size-fits-all approach to crop management is not
                    always effective. That's why we provide personalized crop
                    recommendations based on soil type, climate, and other
                    farm-specific factors, ensuring optimal yield and soil
                    health. Our data-driven approach enables us to help farmers
                    make informed decisions that reduce costs, maximize
                    profitability, and protect the environment.
                  </div>
                  <button
                    className="text-gray-900 border px-4 hover:ring-orange-500 mt-4 rounded-xl ring-1 ring-green-500 cursor-pointer"
                    onClick={toggleContentCrop}
                  >
                    {showContentCrop ? "Read More" : "Read Less"}
                  </button>
                </div>
              </li>
            </div>
          </section>

          <section className="w-full pt-12 md:pt-24 lg:pt-32">
            <div className="container grid max-w-5xl items-center gap-4 px-4 text-center md:gap-10 md:px-6 lg:gap-16 xl:max-w-6xl">
              <div className="space-y-3 text-center md:text-left">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Fertilizer Advice
                </h2>
                <p className="text-gray-500 md:w-2/3 lg:w-1/2 xl:w-1/3 dark:text-gray-400">
                  Optimize your fertilizer usage. Our app tells you the right
                  type and amount of fertilizer to use.
                </p>
              </div>
              <li className="group relative break-inside-avoid p-4 rounded-3xl border border-gray-300 bg-white/20 backdrop-blur-lg transition-all hover:shadow-lg row-span-2 bg-gradient-to-tr from-transparent via-transparent to-[rgb(133,94,255,0.25)]">
                <img
                  src="/assets/card-dotted-grid.png"
                  alt="Dotted grid background"
                  className="pointer-events-none absolute right-0 top-0"
                />
                <div className="flex h-full flex-col justify-between p-8">
                  <div className="space-y-3 pb-4">
                    <h3 className="text-xl font-bold">Optimize Usage</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Our system provides real-time fertilizer recommendations
                      based on your crop and soil.
                    </p>
                  </div>
                  <div className="relative mx-auto max-w-full md:max-w-xl lg:max-w-2xl h-auto md:h-full lg:h-auto overflow-hidden rounded-lg shadow-md mb-4">
                    <img
                      src="/assets/close-up-picture-hand-holding-planting-sapling-plant.jpg"
                      alt="Fertilizer Advice"
                      className="w-full h-auto md:h-96 lg:h-auto/2 object-cover"
                    />
                  </div>
                </div>
                <div className="text-justify">
                  <div className="text-gray-700">
                    "Our fertilizer advice ensures you use the right
                    fertilizers, in the right amounts, at the right time,
                    reducing waste and helping you achieve optimal crop yield
                    and quality."
                  </div>
                  <div
                    className={
                      showContentFert ? "hidden" : "text-gray-700 pt-4"
                    }
                  >
                    Fertilizer is often the single largest expense for farmers,
                    and using the wrong fertilizer or applying it at the wrong
                    time can have devastating consequences on crop yield and
                    quality. That's why at AgroFriend, we provide customized
                    fertilizer advice that helps farmers use the right
                    fertilizers, in the right amounts, at the right time,
                    reducing waste and improving crop yield and quality. Our
                    data-driven approach ensures that your fertilizer
                    application is optimized for your specific soil type, crop,
                    and environmental conditions.
                  </div>
                  <button
                    className="text-gray-900 border px-4 hover:ring-orange-500 mt-4 rounded-xl ring-1 ring-green-500 cursor-pointer"
                    onClick={toggleContentFert}
                  >
                    {showContentFert ? "Read More" : "Read Less"}
                  </button>
                </div>
              </li>
            </div>
          </section>

          <section className="w-full pt-12 md:pt-24 lg:pt-32">
            <div className="container grid max-w-5xl items-center gap-4 px-4 text-center md:gap-10 md:px-6 lg:gap-16 xl:max-w-6xl">
              <div className="space-y-3 text-center md:text-left">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Disease Detection
                </h2>
                <p className="text-gray-500 md:w-2/3 lg:w-1/2 xl:w-1/3 dark:text-gray-400">
                  Early detection of diseases. Take a photo of your crops, and
                  our AI will identify any issues.
                </p>
              </div>

              <li className="group relative break-inside-avoid p-4 rounded-3xl border border-gray-300 backdrop-blur-lg transition-all hover:shadow-lg row-span-2 bg-gradient-to-tr from-transparent via-transparent to-[rgba(255,22,22,0.25)] ">
                <img
                  src="/assets/card-dotted-grid.png"
                  alt="Dotted grid background"
                  className="pointer-events-none absolute right-0 top-0"
                />
                <div className="flex h-full flex-col justify-between p-8">
                  <div className="space-y-3 pb-4">
                    <h3 className="text-xl font-bold">Personalized Advice</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Our system provides real-time fertilizer recommendations
                      based on your crop disease.
                    </p>
                  </div>
                  <div className="relative mx-auto max-w-full md:max-w-xl lg:max-w-2xl h-auto md:h-full lg:h-auto overflow-hidden rounded-lg shadow-md mb-4">
                    <img
                      src="/assets/farmer-standing-rice-field-with-tablet.jpg"
                      alt="Disease Detection"
                      className="w-full h-auto md:h-96 lg:h-auto/2 object-cover"
                    />
                  </div>
                </div>
                <div className="text-justify">
                  <div className="text-gray-700">
                    "Our disease detection service uses cutting-edge technology
                    to identify and diagnose plant diseases, providing farmers
                    with the information they need to take swift action and
                    prevent crop loss."
                  </div>
                  <div
                    className={showContentDis ? "hidden" : "text-gray-700 pt-4"}
                  >
                    Plant diseases can have a devastating impact on crop yield
                    and quality, and early detection is essential for preventing
                    widespread damage. At AgroFriend, we use cutting-edge
                    technology to provide accurate and timely plant disease
                    detection services. Our team of experts is trained to
                    identify and diagnose plant diseases quickly, providing
                    farmers with the information they need to take swift action
                    and prevent crop loss.
                  </div>
                  <button
                    className="text-gray-900 border px-4 hover:ring-orange-500 mt-4 rounded-xl ring-1 ring-green-500 cursor-pointer"
                    onClick={toggleContentDis}
                  >
                    {showContentDis ? "Read More" : "Read Less"}
                  </button>
                </div>
              </li>
            </div>
          </section>

          <section className="w-full pt-12 md:pt-24 lg:pt-32">
            <div className="container grid max-w-5xl items-center gap-4 px-4 text-center md:gap-10 md:px-6 lg:gap-16 xl:max-w-6xl">
              <div className="space-y-3 text-center md:text-left">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Soil Health Analysis
                </h2>
                <p className="text-gray-500 md:w-2/3 lg:w-1/2 xl:w-1/3 dark:text-gray-400">
                  Personalized advice for your farm. We help you choose the
                  right crops based on your soil and climate.
                </p>
              </div>
              <li className="group relative break-inside-avoid p-4 rounded-3xl border border-gray-300 bg-white/20 backdrop-blur-lg transition-all hover:shadow-lg row-span-2 bg-gradient-to-tr from-transparent via-transparent to-[rgba(223,189,51,0.25)]">
                <img
                  src="/assets/card-dotted-grid.png"
                  alt="Dotted grid background"
                  className="pointer-events-none absolute right-0 top-0"
                />
                <div className="flex h-full flex-col justify-between p-8">
                  <div className="space-y-3 pb-4">
                    <h3 className="text-xl font-bold">Personalized Advice</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Our AI analyzes your soil and provides soil health
                      analysis.
                    </p>
                  </div>
                  <div className="relative mx-auto max-w-full md:max-w-xl lg:max-w-2xl h-auto md:h-full lg:h-auto overflow-hidden rounded-lg shadow-md mb-4">
                    <img
                      src="/assets/markus-spiske-miVlU6xargI-unsplash.jpg"
                      alt="Soil Health Analysis"
                      className="w-full h-auto md:h-96 lg:h-auto/2 object-cover"
                    />
                  </div>
                </div>
                <div className="text-justify">
                  <div className="text-gray-700">
                    "Our soil health analysis service provides farmers with
                    detailed information about their soil health, enabling them
                    to make informed decisions about crop management, reduce
                    costs, and improve soil quality."
                  </div>
                  <div
                    className={
                      showContentSoil ? "hidden" : "text-gray-700 pt-4"
                    }
                  >
                    Soil health is critical to crop success, and understanding
                    your soil's unique characteristics is essential for making
                    informed decisions about crop management. At AgroFriend, we
                    provide comprehensive soil health analysis services that
                    help farmers understand their soil's unique properties. Our
                    analysis includes factors such as nutrient levels, pH,
                    organic matter content, and soil structure, enabling farmers
                    to make data-driven decisions about crop management, reduce
                    costs, and improve soil quality.
                  </div>
                  <button
                    className="text-gray-900 border px-4 hover:ring-orange-500 mt-4 rounded-xl ring-1 ring-green-500 cursor-pointer"
                    onClick={toggleContentSoil}
                  >
                    {showContentSoil ? "Read More" : "Read Less"}
                  </button>
                </div>
              </li>
            </div>
          </section>
        </div>

        {/* All Services - End */}

        <div className="w-full h-[2px] my-20  bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>

        {/* END */}
      </div>
    </>
  );
};

export default HomePage;
