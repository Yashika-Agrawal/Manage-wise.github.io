import React from "react";
import connect from "../images/connect.webp";
const Integration = () => {
  return (
    <div className="bg-zinc-900 flex flex-col items-center px-96">
      <div className="text-center">
        <h1 className="w-fit text-sm border rounded-xl p-1 px-2 text-blue-700 font-semibold bg-white">
          🛠️ INTEGRATIONS
        </h1>
      </div>
      <div className="w-full px-20" data-aos="fade-up" data-aos-duration="2000">
        <h1 className="text-center text-white leading-tight text-5xl font-bold">
          Enable
          <span className=" text-red-400"> integration </span>with other popular
          tools and platforms
        </h1>
      </div>
      <div className=" mb-28 px-36 text-center mt-7 text-xl font-semibold text-gray-500">
        <h1>
          Seamlessly connect and amplify your workflow <br></br> by enabling
          integration with a diverse array of widely-used tools and platforms.
        </h1>
      </div>
      <div
        className=" mx-20   border-b-black"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <img src={connect} alt="connect-an-app-img"></img>
      </div>
    </div>
  );
};

export default Integration;
