import React from "react";
import bitmoji from "../images/bitmoji.webp";
import logo from "../images/logo.jpeg";
import instagram from "../images/instagram.png";
import twitter from "../images/twitter.png";
import linkedin from "../images/linkedin.png";
const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-white to-customColor">
      <div
        className="flex flex-row rounded-3xl border mx-40 px-40 pb-20 mb-20"
        data-aos="flip-up"
        data-aos-duration="1000"
      >
        <div className="w-1/2">
          <div className="text-center mt-24 mb-2">
            <h1 className="w-fit text-sm border rounded-xl p-1 px-2 text-blue-700 font-semibold bg-white">
              👋 DON'T MISS OUT
            </h1>
          </div>
          <div className="w-full">
            <h1 className="leading-tight text-5xl  font-semibold">
              Unleash your <br />
              <span className=" text-red-400">Potential </span>with us
            </h1>
          </div>
          <div className="mb-10 w-1/2  mt-8 text-xl font-semibold text-gray-500">
            <h1>
              Powerful management platform designed to streamline your business
              operations, boost productivity, and drive success
            </h1>
          </div>
          <div className="">
            <button className="font-bold mx-3 bg-violet-600 text-white text-xl rounded-2xl px-10 py-3">
              Try out now
            </button>
          </div>
        </div>
        <div className="w-1/2 self-center font-bold">
          <h1 className="text-center text-2xl border-2 mx-24 rounded-xl mb-7">
            <span className="text-violet-600">200+</span> Happy users
          </h1>
          <img src={bitmoji} alt="happy-users"></img>
        </div>
      </div>
      <div className="flex flex-row justify-between mx-40">
        <div className="w-1/6">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="font-semibold  ">
          <ul className="space-y-2">
            <li className="cursor-pointer hover:text-gray-400">Features</li>
            <li className="cursor-pointer hover:text-gray-400">FAQ</li>
            <li className="cursor-pointer hover:text-gray-400">Pricing</li>
            <li className="cursor-pointer hover:text-gray-400">Testimonials</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row justify-between mx-40 mt-40 pb-20">
        <div className="w-1/6">
          <h1>© 2022 ManageWise, Inc.</h1>
        </div>
        <div className=" space-x-5 font-semibold flex flex-row  ">
          <img
            src={instagram}
            alt="instagram-img"
            className="cursor-pointer w-5 h-5"
          ></img>
          <img
            src={twitter}
            alt="twitter-img"
            className="cursor-pointer w-5 h-5"
          ></img>
          <img
            src={linkedin}
            alt="linkedin-img"
            className="cursor-pointer w-5 h-5"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Footer;
