import React from "react";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <>
      <div className="pt-24 mx-auto w-full max-w-screen-xl px-6  lg:px-20">
        {/* First  */}

        <div>
          <section className="py-12.5 lg:py-20 xl:py-24.5">
            <div className="container px-4 md:px-6">
              <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="flex flex-col justify-center space-y-3">
                  <h1 className="text-3xl font-bold text-center lg:text-left tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-red-600 to-amber-600 bg-clip-text text-transparent">
                    Features
                  </h1>

                  <p className="max-w-[500px] text-center lg:text-left  md:text-xl dark:text-gray-900">
                    Your trusted companion for modern farming. Accessible crop
                    recommendations, personalized fertilizer advice, and quick
                    disease detection.
                  </p>
                </div>
                <img
                  alt="Hero"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-video"
                  height="360"
                  src="/assets/10.jpg"
                  width="720"
                />
              </div>
            </div>
          </section>

          <section className="py-12 lg:py-20 xl:py-24">
            <div className="container grid-in-container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Crop Recommendation
                  </h2>
                  <p className="max-w-[600px] text-gray-900 md:text-xl dark:text-gray-400">
                    Get personalized crop recommendations based on your soil
                    type, climate, and preferences.
                  </p>
                </div>
                <div className="grid gap-12 min-[400px]:grid-cols-2">
                  <div className="inline-flex flex-col items-center gap-1.5">
                    <img
                      alt="Icon"
                      className="fill-current text-gray-500 aspect-[1/1] rounded-full overflow-hidden dark:text-gray-400"
                      height="200"
                      src="/assets/12.jpg"
                      width="200"
                    />
                    <Link
                      className="inline-flex items-center underline transition-colors hover:text-gray-900 dark:hover:text-gray-50"
                      to={"/ud"}
                    >
                      Read More
                    </Link>
                  </div>
                  <div className="inline-flex flex-col items-center gap-1.5">
                    <img
                      alt="Icon"
                      className="fill-current text-gray-500 aspect-[1/1] rounded-full overflow-hidden dark:text-gray-400"
                      height="200"
                      src="/assets/13.jpg"
                      width="200"
                    />
                    <Link
                      className="inline-flex items-center underline transition-colors hover:text-gray-900 dark:hover:text-gray-50"
                      to={"/ud"}
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className=" py-12 lg:py-20 xl:py-24 ">
            <div className="container grid-in-container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Fertilizer Advice
                  </h2>
                  <p className="max-w-[600px] text-gray-900 md:text-xl dark:text-gray-400">
                    Learn about the best fertilizers for your crops and receive
                    personalized advice.
                  </p>
                </div>
                <div className="grid gap-12 min-[400px]:grid-cols-2">
                  <div className="inline-flex flex-col items-center gap-1.5">
                    <img
                      alt="Icon"
                      className="fill-current text-gray-500 aspect-[1/1] rounded-full overflow-hidden dark:text-gray-400"
                      height="200"
                      src="/assets/14.jpg"
                      width="200"
                    />
                    <Link
                      className="inline-flex items-center underline transition-colors hover:text-gray-900 dark:hover:text-gray-50"
                      to={"/ud"}
                    >
                      Read More
                    </Link>
                  </div>
                  <div className="inline-flex flex-col items-center gap-1.5">
                    <img
                      alt="Icon"
                      className="fill-current text-gray-500 aspect-[1/1] rounded-full overflow-hidden dark:text-gray-400"
                      height="200"
                      src="/assets/15.jpg"
                      width="200"
                    />
                    <Link
                      className="inline-flex items-center underline transition-colors hover:text-gray-900 dark:hover:text-gray-50"
                      to={"/ud"}
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 lg:py-20 xl:py-24">
            <div className="container grid-in-container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Disease Detection
                  </h2>
                  <p className="max-w-[600px] text-gray-900 md:text-xl dark:text-gray-400">
                    Early detection of diseases in crops. Identify the issue and
                    get solutions.
                  </p>
                </div>
                <div className="grid gap-12 min-[400px]:grid-cols-2">
                  <div className="inline-flex flex-col items-center gap-1.5">
                    <img
                      alt="Icon"
                      className="fill-current text-gray-500 aspect-[1/1] rounded-full overflow-hidden dark:text-gray-400"
                      height="200"
                      src="/assets/20.jpg"
                      width="200"
                    />
                    <Link
                      className="inline-flex items-center underline transition-colors hover:text-gray-900 dark:hover:text-gray-50"
                      to={"/ud"}
                    >
                      Read More
                    </Link>
                  </div>
                  <div className="inline-flex flex-col items-center gap-1.5">
                    <img
                      alt="Icon"
                      className="fill-current text-gray-500 aspect-[1/1] rounded-full overflow-hidden dark:text-gray-400"
                      height="200"
                      src="/assets/21.jpg"
                      width="200"
                    />
                    <Link
                      className="inline-flex items-center underline transition-colors hover:text-gray-900 dark:hover:text-gray-50"
                      to={"/ud"}
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="border-t"></div>
        </div>

        {/* Second */}

        <div>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container flex flex-col max-w-5xl items-center gap-4 px-4 text-center md:gap-10 md:px-6 lg:gap-16 xl:max-w-6xl">
              <div className="space-y-3 text-center">
                <h2 className="text-3xl font-bold text-center tracking-tighter sm:text-4xl">
                  Crop Recommendations
                </h2>
                <p className="text-gray-900 text-center dark:text-gray-400">
                  Personalized advice for your farm. We help you choose the
                  right crops based on your soil and climate.
                </p>
              </div>
              <div className="mx-auto flex flex-col lg:flex md:flex-row max-w-sm items-center justify-center gap-4 rounded-xl border border-gray-200 w-full p-4 md:max-w-md md:grid-cols-2 lg:max-w-sm lg:gap-6 lg:p-6">
                <img
                  alt="Crop Recommendations"
                  className="aspect-[4/3] overflow-hidden rounded-lg object-contain object-center"
                  height="120"
                  src="/assets/11.jpg"
                  width="160"
                />
                <div className="space-y-3">
                  <h3 className="text-xl font-bold">Personalized Advice</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Our AI analyzes your farm and provides crop recommendations.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container flex flex-col max-w-5xl items-center gap-4 px-4 text-center md:gap-10 md:px-6 lg:gap-16 xl:max-w-6xl">
              <div className="space-y-3 text-center">
                <h2 className="text-3xl font-bold text-center tracking-tighter sm:text-4xl">
                  Fertilizer Advice
                </h2>
                <p className="text-gray-900 text-center dark:text-gray-400">
                  Optimize your fertilizer usage. Our app tells you the right
                  type and amount of fertilizer to use.
                </p>
              </div>
              <div className="mx-auto flex flex-col lg:flex md:flex-row max-w-sm items-center justify-center gap-4 rounded-xl border border-gray-200 w-full p-4 md:max-w-md md:grid-cols-2 lg:max-w-sm lg:gap-6 lg:p-6">
                <img
                  alt="Crop Recommendations"
                  className="aspect-[4/3] overflow-hidden rounded-lg object-contain object-center"
                  height="120"
                  src="/assets/10.jpg"
                  width="160"
                />
                <div className="space-y-3">
                  <h3 className="text-xl font-bold">Optimize Usage</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Our system provides real-time fertilizer recommendations
                    based on your crop and soil.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container flex flex-col max-w-5xl items-center gap-4 px-4 text-center md:gap-10 md:px-6 lg:gap-16 xl:max-w-6xl">
              <div className="space-y-3 text-center">
                <h2 className="text-3xl font-bold text-center tracking-tighter sm:text-4xl">
                  Disease Detection
                </h2>
                <p className="text-gray-900 text-center dark:text-gray-400">
                  Early detection of diseases. Take a photo of your crops, and
                  our AI will identify any issues.
                </p>
              </div>
              <div className="mx-auto flex flex-col lg:flex md:flex-row max-w-sm items-center justify-center gap-4 rounded-xl border border-gray-200 w-full p-4 md:max-w-md md:grid-cols-2 lg:max-w-sm lg:gap-6 lg:p-6">
                <img
                  alt="Crop Recommendations"
                  className="aspect-[4/3] overflow-hidden rounded-lg object-contain object-center"
                  height="120"
                  src="/assets/12.jpg"
                  width="160"
                />
                <div className="space-y-3">
                  <h3 className="text-xl font-bold">Identify Issues</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Our app uses machine learning to spot diseases and provides
                    recommendations.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div className="border-t"></div>
        </div>

        {/* Third */}
        <div className="flex flex-col min-h-[100dvh]">
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Crop Recommendation
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Let's find the best crop for your soil and climate. Our
                  AI-powered platform analyzes your conditions to provide
                  personalized recommendations.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl items-start gap-6 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-3">
                <div className="flex flex-col items-center space-y-2">
                  <img
                    alt="img"
                    className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                    height="225"
                    src="/assets/12.jpg"
                    width="400"
                  />
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold">Rice</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Optimal conditions: Warm climate, well-drained soil
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <img
                    alt="img"
                    className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                    height="225"
                    src="/assets/14.jpg"
                    width="400"
                  />
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold">Wheat</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Optimal conditions: Cool climate, loamy soil
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <img
                    alt="img"
                    className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                    height="225"
                    src="/assets/13.jpg"
                    width="400"
                  />
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold">Maize</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Optimal conditions: Warm climate, well-drained soil
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 ">
            <div className="container grid items-center gap-4 px-4 text-center md:px-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Fertilizer Advice
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  The right nutrients for your crops. Our platform helps you
                  make informed decisions about fertilizers, ensuring healthy
                  growth and better yields.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl items-start gap-6 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-3">
                <div className="flex flex-col items-start space-y-2">
                  <img
                    alt="Rice"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                    height="310"
                    src="/assets/12.jpg"
                    width="550"
                  />
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold">Rice</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Optimal conditions: Warm climate, well-drained soil
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start space-y-2">
                  <img
                    alt="Wheat"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                    height="310"
                    src="/assets/13.jpg"
                    width="550"
                  />
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold">Wheat</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Optimal conditions: Cool climate, loamy soil
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start space-y-2">
                  <img
                    alt="Maize"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                    height="310"
                    src="/assets/14.jpg"
                    width="550"
                  />
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold">Maize</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Optimal conditions: Warm climate, well-drained soil
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container grid items-center gap-4 px-4 text-center md:px-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Disease Detection
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Early identification of diseases is crucial. Our AI-powered
                  system helps you spot issues, protecting your crops and
                  maximizing yields.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl items-start gap-6 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-3">
                <div className="flex flex-col items-start space-y-2">
                  <img
                    alt="Rice"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                    height="310"
                    src="/assets/12.jpg"
                    width="550"
                  />
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold">Rice</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Optimal conditions: Warm climate, well-drained soil
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start space-y-2">
                  <img
                    alt="Wheat"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                    height="310"
                    src="/assets/13.jpg"
                    width="550"
                  />
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold">Wheat</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Optimal conditions: Cool climate, loamy soil
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start space-y-2">
                  <img
                    alt="Maize"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                    height="310"
                    src="/assets/14.jpg"
                    width="550"
                  />
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold">Maize</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Optimal conditions: Warm climate, well-drained soil
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="flex flex-col min-h-[100dvh]">
          <section className="w-full py-12 md:py-24 lg:py-32 border-t">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                      Recommended Crops
                    </h2>
                    <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                      Best crops for your farm. We help you choose the right
                      crops for your soil.
                    </p>
                  </div>
                </div>
                <div className="grid gap-6 lg:gap-12">
                  <div className="flex flex-col gap-1">
                    <img
                      alt="Rice"
                      className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                      height="310"
                      src="/assets/12.jpg"
                      width="550"
                    />
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Rice</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Rice is a staple food for most of the world's
                        population.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <img
                      alt="Wheat"
                      className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                      height="310"
                      src="/assets/11.jpg"
                      width="550"
                    />
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Wheat</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Wheat is the most important cereal crop in the world and
                        ubiquitous in our diet.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <img
                      alt="Maize"
                      className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                      height="310"
                      src="/assets/13.jpg"
                      width="550"
                    />
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Maize</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Maize is a staple food in many parts of the world, with
                        total production surpassing that of wheat or rice.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 border-t">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                      Recommended Fertilizers
                    </h2>
                    <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                      Best fertilizers for your crops. We help you choose the
                      right fertilizers for your soil.
                    </p>
                  </div>
                </div>
                <div className="grid gap-6 lg:gap-12">
                  <div className="flex flex-col gap-1">
                    <img
                      alt="NPK 20:20:20"
                      className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                      height="310"
                      src="/assets/12.jpg"
                      width="550"
                    />
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">NPK 20:20:20</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        NPK 20:20:20 is a balanced fertilizer that contains 20%
                        nitrogen, 20% phosphorus, and 20% potassium.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <img
                      alt="Urea"
                      className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                      height="310"
                      src="/assets/12.jpg"
                      width="550"
                    />
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Urea</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Urea is a high-nitrogen fertilizer that contains 46%
                        nitrogen.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <img
                      alt="DAP"
                      className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                      height="310"
                      src="/assets/12.jpg"
                      width="550"
                    />
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">DAP</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        DAP is a high-phosphorus fertilizer that contains 18%
                        nitrogen and 46% phosphorus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="flex flex-col min-h-[100dvh]">
          <main className="flex-1">
            <section className="w-full py-12 md:py-24 lg:py-32 border-t">
              <div className="container grid items-center gap-6 px-4 text-center md:px-6">
                <div className="space-y-3">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Discover Different Crops
                  </h2>
                  <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Learn about the various crops and their requirements. Click
                    on each crop to get detailed information.
                  </p>
                </div>
                <div className="mx-auto w-full max-w-6xl grid gap-6 md:grid-cols-2 lg:gap-10">
                  <div className="flex flex-col gap-2">
                    <Link
                      className="flex h-[100px] items-center overflow-hidden rounded-lg hover:opacity-80"
                      href="#"
                    >
                      <img
                        alt="Rice"
                        className="aspect-[1/1] object-cover rounded-t-lg object-center"
                        height="100"
                        src="/assets/12.jpg"
                        width="100"
                      />
                      <span className="sr-only">Rice</span>
                    </Link>
                    <p className="text-sm">
                      Rice is a staple food for a large part of the world's
                      population. It is the most consumed staple food in Asia.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Link
                      className="flex h-[100px] items-center overflow-hidden rounded-lg hover:opacity-80"
                      href="#"
                    >
                      <img
                        alt="Wheat"
                        className="aspect-[1/1] object-cover rounded-t-lg object-center"
                        height="100"
                        src="/assets/12.jpg"
                        width="100"
                      />
                      <span className="sr-only">Wheat</span>
                    </Link>
                    <p className="text-sm">
                      Wheat is one of the oldest and most important crops. It is
                      the primary ingredient in bread, pasta, and many other
                      foodstuffs.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Link
                      className="flex h-[100px] items-center overflow-hidden rounded-lg hover:opacity-80"
                      href="#"
                    >
                      <img
                        alt="Maize"
                        className="aspect-[1/1] object-cover rounded-t-lg object-center"
                        height="100"
                        src="/assets/12.jpg"
                        width="100"
                      />
                      <span className="sr-only">Maize</span>
                    </Link>
                    <p className="text-sm">
                      Maize, also known as corn, is a cereal grain first
                      domesticated by indigenous peoples in southern Mexico.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Link
                      className="flex h-[100px] items-center overflow-hidden rounded-lg hover:opacity-80"
                      href="#"
                    >
                      <img
                        alt="Barley"
                        className="aspect-[1/1] object-cover rounded-t-lg object-center"
                        height="100"
                        src="/assets/12.jpg"
                        width="100"
                      />
                      <span className="sr-only">Barley</span>
                    </Link>
                    <p className="text-sm">
                      Barley is a versatile and widely used cereal grain that
                      has been cultivated for thousands of years.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32 ">
              <div className="container grid items-center gap-6 px-4 text-center md:px-6">
                <div className="space-y-3">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Fertilizer Recommendations
                  </h2>
                  <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    We recommend the following fertilizers for each crop. Click
                    on the product to learn more.
                  </p>
                </div>
                <div className="mx-auto w-full max-w-5xl grid gap-6 sm:grid-cols-2 md:gap-10">
                  <div className="flex flex-col gap-2">
                    <Link
                      className="flex h-[150px] items-center overflow-hidden rounded-lg hover:opacity-80"
                      href="#"
                    >
                      <img
                        alt="Rice"
                        className="aspect-[1/1] object-cover rounded-t-lg object-center"
                        height="150"
                        src="/assets/12.jpg"
                        width="150"
                      />
                      <span className="sr-only">Rice</span>
                    </Link>
                    <p className="text-sm">
                      <Link
                        className="font-medium underline underline-offset-2"
                        href="#"
                      >
                        SuperGrow 10-10-10
                      </Link>
                      - Balanced fertilizer for all stages of growth.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Link
                      className="flex h-[150px] items-center overflow-hidden rounded-lg hover:opacity-80"
                      href="#"
                    >
                      <img
                        alt="Wheat"
                        className="aspect-[1/1] object-cover rounded-t-lg object-center"
                        height="150"
                        src="/assets/12.jpg"
                        width="150"
                      />
                      <span className="sr-only">Wheat</span>
                    </Link>
                    <p className="text-sm">
                      <Link
                        className="font-medium underline underline-offset-2"
                        href="#"
                      >
                        CropBoost 20-10-10
                      </Link>
                      - High nitrogen fertilizer for rapid growth.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Link
                      className="flex h-[150px] items-center overflow-hidden rounded-lg hover:opacity-80"
                      href="#"
                    >
                      <img
                        alt="Maize"
                        className="aspect-[1/1] object-cover rounded-t-lg object-center"
                        height="150"
                        src="/assets/12.jpg"
                        width="150"
                      />
                      <span className="sr-only">Maize</span>
                    </Link>
                    <p className="text-sm">
                      <Link
                        className="font-medium underline underline-offset-2"
                        href="#"
                      >
                        CornPlus 15-15-15
                      </Link>
                      - Balanced fertilizer for all stages of growth.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Link
                      className="flex h-[150px] items-center overflow-hidden rounded-lg hover:opacity-80"
                      href="#"
                    >
                      <img
                        alt="Barley"
                        className="aspect-[1/1] object-cover rounded-t-lg object-center"
                        height="150"
                        src="/assets/12.jpg"
                        width="150"
                      />
                      <span className="sr-only">Barley</span>
                    </Link>
                    <p className="text-sm">
                      <Link
                        className="font-medium underline underline-offset-2"
                        href="#"
                      >
                        GrainMaster 10-20-10
                      </Link>
                      - High phosphorus fertilizer for flowering stage.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <div className="border-t"></div>
        </div>

        <div className="flex flex-col min-h-[100dvh]">
          <main className="flex-1">
            <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
              <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                      Personalized Crop & Fertilizer Recommendations
                    </h1>
                    <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                      Access personalized recommendations for your crops and
                      fertilizers. Enter your details and get the best advice
                      for your farm.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32">
              <div className="container px-4 md:px-6">
                <div className="grid gap-6 md:gap-12 lg:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                      Crop Recommendations
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400">
                      Here are the best crops for your farm. We have selected
                      these based on your location, soil type, and weather
                      conditions.
                    </p>
                    <ul className="grid gap-4 md:gap-8 list-disc pl-6 md:pl-10">
                      <li>
                        Wheat - Wheat is a versatile crop that can grow in a
                        variety of soil types and weather conditions.
                      </li>
                      <li>
                        Rice - Rice requires a lot of water and is best grown in
                        areas with high rainfall or access to irrigation.
                      </li>
                      <li>
                        Maize - Maize is a hardy crop that can tolerate drought
                        conditions and poor soil quality.
                      </li>
                      <li>
                        Cotton - Cotton is a cash crop that requires
                        well-drained soil and a warm climate to thrive.
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                      Fertilizer Recommendations
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400">
                      Here are the best fertilizers for your crops. We have
                      selected these based on the nutrient requirements of the
                      crops you are growing.
                    </p>
                    <ul className="grid gap-4 md:gap-8 list-disc pl-6 md:pl-10">
                      <li>
                        Nitrogen - Nitrogen is an essential nutrient for plant
                        growth and is often deficient in the soil.
                      </li>
                      <li>
                        Phosphorus - Phosphorus is important for root
                        development and flowering in plants.
                      </li>
                      <li>
                        Potassium - Potassium helps plants regulate water uptake
                        and is important for fruit development.
                      </li>
                      <li>
                        Micronutrients - Micronutrients such as iron, zinc, and
                        copper are required in small amounts but are essential
                        for plant health.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default Features;

