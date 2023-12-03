import React from "react";
import smart from "../images/smart.webp";
import flexible from "../images/flexible.webp";
import easy from "../images/easy.webp";
import analytics from "../images/analytics.webp";
const Product = () => {
  return (
    <div className=" mt-20 flex flex-col justify-center items-center ">
      <div className="text-center mt-18 mb-2">
        <h1 className=" text-sm border rounded-xl p-1 px-2 text-blue-700 font-semibold bg-white">
          🔥 PREMIER FEATURES
        </h1>
      </div>
      <div className="w-full" data-aos="fade-up" data-aos-direction="1000">
        <h1 className="leading-tight text-5xl text-center font-bold">
          Discover our product's&nbsp;
          <span className=" text-red-400">Capabilities </span>
        </h1>
      </div>
      <div className="mb-10 w-1/2 text-center mt-5 text-xl font-semibold text-gray-500">
        <h1>
          Don't settle for mediocrity - embrace the future of management{" "}
          <br></br> with Manage Wise.
        </h1>
      </div>
      <div className="flex flex-row mx-40">
        <div
          className="flex-col leading-snug px-12 font-semibold text-4xl flex items-start bg-gray-200 w-1/2 mr-10 rounded-2xl"
          data-aos="fade-up"
          data-aos-direction="1000"
        >
          <div className="p-1 bg-white rounded-2xl mt-20">⭐️</div>
          <div className="text-4xl leading-normal mr-10">
            Boost productivity and streamline workflow with us. Enjoy our
            intuitive interface and robust features.
          </div>
        </div>

        <div
          className="w-1/2 rounded-2xl border flex flex-col"
          data-aos="fade-up"
          data-aos-direction="1000"
        >
          <img src={smart} alt="Smart Task Management img"></img>
          <div className="ml-10">
            <h1 className="font-bold text-2xl mt-10 mb-1">
              Smart Task Management
            </h1>
            <p className=" mb-10 font-semibold text-gray-500">
              Say goodbye to chaos with our smart task management system
            </p>
          </div>
        </div>
      </div>
      {/* Features */}
      <div className="flex flex-row mx-40 mt-12 ">
        <div
          className="border rounded-2xl mr-10"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img src={flexible} alt="flexible scheduling img"></img>
          <div className="ml-10">
            <h1 className="font-bold text-2xl mt-10 mb-1">
              Flexible Scheduling
            </h1>
            <p className=" mb-10 font-semibold text-gray-500">
              Stay productive with our flexible scheduling system
            </p>
          </div>
        </div>
        <div
          className="border rounded-2xl mr-10"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img src={easy} alt="Easy Communication img"></img>
          <div className="ml-10">
            <h1 className="font-bold text-2xl mt-10 mb-1">
              Easy Communication
            </h1>
            <p className=" mb-10 font-semibold text-gray-500">
              Collaborate seamlessly with your team in real-time
            </p>
          </div>
        </div>
        <div
          className="border rounded-2xl"
          data-aos="fade-up"
          data-aos-duration="5000"
        >
          <img src={analytics} alt="Analytics img"></img>
          <div className="ml-10">
            <h1 className="font-bold text-2xl mt-10 mb-1">Analytics</h1>
            <p className=" mb-10 font-semibold text-gray-500">
              Gain valuable insights with our advanced analytics feature
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
