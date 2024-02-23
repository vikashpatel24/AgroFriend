import React from "react";
import { Link } from "react-router-dom";

const Integrations = () => {
  return (
    <>
      <div className=" pt-20 px-24">
        <div className="flex flex-col text-center text-4xl my-12 gap-24">
          <div className="">
            <Link to={'/weather'} className="hover:text-emerald-500">
              Weather Integration<br/>
            </Link>
          AgroFriend seamlessly integrates with local weather data, providing real-time information on temperature, humidity, and precipitation. Stay informed about weather conditions to make timely decisions for your farming activities.
          </div>
          <div >
            <Link to={'/weather'} className="hover:text-emerald-500">
            
            Soil Testing Services:<br/>
            </Link>
Integrate with soil testing services to streamline the process of analyzing your soil's nutrient levels. Receive accurate data for personalized crop and fertilizer recommendations.
          </div>
          <div >
            <Link to={'/weather'} className="hover:text-emerald-500">
            
            IoT Devices:<br/>
            </Link>
Connect AgroFriend with IoT devices for smart farming. Monitor and control irrigation, temperature, and other environmental factors to optimize crop growth and resource usage.
          </div>
          <div>
            This page is UnderDevelopment
          </div>
        </div>
      </div>
    </>
  );
};

export default Integrations;
