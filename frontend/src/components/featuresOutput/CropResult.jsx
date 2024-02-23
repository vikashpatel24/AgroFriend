import React from "react";
import { useLocation } from "react-router-dom";

const CropResult = () => {
  const location = useLocation();
  const recommendation = location.state?.recommendation || null;

  return (
    <>
      <div className="pt-16 md:pt-0">
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6 text-center lg:space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold pb-3 pr-1 tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-red-600 to-amber-600 bg-clip-text text-transparent">
                Crop Suggestion
              </h2>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <div className="flex flex-col font-bold sm:font-semibold  items-center gap-8">
                {recommendation ? (
                  <div className="flex flex-col items-center ring-1 ring-orange-500 shadow-xl px-4 rounded-lg gap-4 py-4">
                    <div>
                      <img
                        src="/assets/afwg-bg.png"
                        alt="img"
                        className="w-40 h-40"
                      />
                    </div>
                    <div>
                      <p className="text-lg">
                        Based on the analysis of your farm conditions, our recommendation is to grow:
                      </p>
                      <p className="text-green-600 text-xl uppercase font-semibold">
                        {recommendation.prediction}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="text-lg text-red-500 font-semibold">
                    No Recommendation Available!
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CropResult;


