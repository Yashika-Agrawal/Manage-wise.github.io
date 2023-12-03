import React, { useEffect } from "react";
import play from "../images/play.png";
import dashboard from "../images/Dashboard.webp";
import arrow from "../images/arrow-right.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-gradient-to-b from-customColor to-white overflow-hidden px-14  flex flex-col items-center">
      <div
        className="text-center mt-24 mb-2"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <h1 className=" text-sm border rounded-xl p-1 px-2 text-blue-700 font-semibold bg-white">
          👋WELCOME TO MANAGE WISE!
        </h1>
      </div>
      <div className="w-full" data-aos="fade-up" data-aos-duration="3000">
        <h1 className="leading-tight text-7xl text-center font-bold">
          Empower your buisness with <br />{" "}
          <span className=" text-red-400">Strategic </span>insights
        </h1>
      </div>
      <div
        className="mb-10 w-1/2 text-center mt-8 text-xl font-semibold text-gray-500"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <h1>
          Powerful management platform designed to streamline your business
          operations, boost productivity, and drive success
        </h1>
      </div>
      <div
        className="flex flex-row "
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <button class="group hover:border-8 font-bold mx-3 bg-violet-600 text-white text-xl rounded-2xl px-10 py-3 relative">
          Get Started
          <span class="hidden group-hover:inline-block ">
            <img src={arrow} alt="right-arrow" class="w-6 h-6 ml-2 " />
          </span>
        </button>
        <button className=" hover:border-black border flex flex-row  font-bold mx-3 bg-white text-xl rounded-2xl px-10 py-3 relative">
          Watch Demo
          <span>
            <img src={play} alt="play" className="max-h-5 mt-1 px-2" />
          </span>
        </button>
      </div>
      <div
        className="m-16 shadow-2xl"
        data-aos="flip-up"
        data-aos-duration="1000"
      >
        <img src={dashboard} alt="dashboard-img"></img>
      </div>
    </div>
  );
};

export default Home;
