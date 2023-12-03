import React from "react";
import iphone from "../images/iphone.png";
import bell from "../images/bell.png";
import flame from "../images/flame.png";
const About = () => {
  return (
    <div
      className="bg-zinc-900 h-max mt-28 flex flex-col px-40 pb-40"
      data-aos="zoom-in"
    >
      <div className="text-center mt-24 mb-2">
        <h1 className="w-fit text-sm border rounded-xl p-1 px-2 text-blue-700 font-semibold bg-white">
          🤩 AND MORE...
        </h1>
      </div>
      <div className="w-full" data-aos="fade-up">
        <h1 className=" text-white leading-tight text-5xl font-bold">
          Explore an array of features that elevate your{" "}
          <span className=" text-red-400">Productivity </span>to new heights
        </h1>
      </div>
      <div className="w-1/2 mt-7 text-xl font-semibold text-gray-500">
        <h1>
          Discover the tools that will revolutionize the way you manage and
          optimize your operations
        </h1>
      </div>
      <div className="flex flex-row space-x-4 items-center">
        <div className=" p-10  rounded-xl flex flex-col items-center bg-neutral-800 mt-10">
          <div className="rounded-2xl bg-violet-600 p-3">
            <img className=" " src={iphone} alt="Iphone-img"></img>
          </div>
          <div className="flex flex-col items-center mt-4" data-aos="fade-up">
            <h1 className="text-center text-pink-100 font-bold text-2xl ">
              Cross-Platform Compatibility
            </h1>
            <p className="text-center text-gray-400 mt-4 ">
              Enjoy the flexibility of cross-platform compatibility. Our product
              works seamlessly across desktop, web, and mobile devices, allowing
              you to work from your preferred device.
            </p>
          </div>
        </div>

        <div
          className=" p-10  rounded-xl flex flex-col items-center bg-neutral-800 mt-10"
          data-aos="fade-up"
        >
          <div className="rounded-2xl bg-violet-600 p-3">
            <img className=" " src={bell} alt="Iphone-img"></img>
          </div>
          <div className="flex flex-col items-center mt-4">
            <h1 className="text-center text-pink-100 font-bold text-2xl ">
              Stay Informed with Essential Notifications
            </h1>
            <p className="text-center text-gray-400 mt-4 ">
              Automate support from first customer contact to closing the
              ticket. Drastically improve time to resolution.Automate support
              from first customer contact to closing the ticket.
            </p>
          </div>
        </div>

        <div
          className=" p-10 rounded-xl flex flex-col items-center bg-neutral-800 mt-10"
          data-aos="fade-up"
        >
          <div className="rounded-2xl bg-violet-600 p-3">
            <img className=" " src={flame} alt="Iphone-img"></img>
          </div>
          <div className="flex flex-col items-center mt-4">
            <h1 className="text-center text-pink-100 font-bold text-2xl ">
              Secure Data Encryption at all times
            </h1>
            <p className="text-center text-gray-400 mt-4">
              Trust in our robust data encryption to keep your sensitive
              information safe and secure. Rest easy knowing your data is
              protected at all times.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
