import React from "react";
import check from "../images/checkmark.png";
const Pricing = () => {
  return (
    <div className=" mx-40 text-center mb-40">
      <div className=" flex flex-col items-center text-center mt-24 mb-2">
        <h1 className=" w-fit text-sm border rounded-xl p-1 px-2 text-blue-700 font-semibold bg-white">
          💲 PRICING
        </h1>
      </div>
      <div className="w-full" data-aos="fade-up" data-aos-duration="2000">
        <h1 className="leading-tight text-5xl text-center font-bold">
          Select your ideal
          <span className=" text-red-400"> Pricing </span>plan
        </h1>
      </div>
      <div className="w-full mb-10  text-center mt-8 text-xl font-semibold text-gray-500">
        <h1 className="  px-32 mx-56 text-center">
          At Manage Wise, we believe in providing you with pricing plans that
          adapt to your unique needs.
        </h1>
      </div>

      <div className="flex flex-row space-x-4">
        <div
          className="bg-gray-200 w-1/3 rounded-3xl px-10"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className=" flex flex-col  text-center mt-14 mb-2">
            <h1 className=" w-fit text-sm border rounded-xl p-1 px-2 text-red-400 font-semibold bg-white">
              FREE
            </h1>
          </div>
          <div className="text-left mt-5">
            <h1>
              <span className="text-5xl font-bold">$0</span> /month
            </h1>
          </div>
          <div className="mt-10 ">
            <ul className="font-semibold text-gray-500 text-lg space-y-1">
              <li style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={check}
                  alt="checkmark-img"
                  style={{ marginRight: "8px" }}
                />
                <h1>Access to all basic features</h1>
              </li>
              <li style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={check}
                  alt="checkmark-img"
                  style={{ marginRight: "8px" }}
                />
                <h1>Reporting and analytics</h1>
              </li>
              <li style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={check}
                  alt="checkmark-img"
                  style={{ marginRight: "8px" }}
                />
                <h1>Up to 5 individual users</h1>
              </li>
              <li style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={check}
                  alt="checkmark-img"
                  style={{ marginRight: "8px" }}
                />
                <h1>Chat and email support</h1>
              </li>
            </ul>
          </div>
          <div className="mt-24 text-lg font-bold bg-white w-fit rounded-xl py-3 px-5">
            <button className="">Get started</button>
          </div>
        </div>
        <div className="bg-neutral-900 w-1/3 rounded-3xl px-10" data-aos="fade-up" data-aos-duration="2000">
          <div className=" flex flex-col  text-center mt-14 mb-2">
            <h1 className=" w-fit text-sm border rounded-xl p-1 px-2 text-red-400 font-semibold bg-white">
              STANDARD
            </h1>
          </div>
          <div className="text-left mt-5">
            <h1 className="text-white">
              <span className="text-5xl font-bold">$25</span> /month
            </h1>
          </div>
          <div className="mt-10 ">
            <ul className="font-semibold text-gray-500 text-lg space-y-1">
              <li style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={check}
                  alt="checkmark-img"
                  style={{ marginRight: "8px" }}
                />
                <h1>Access to all basic features</h1>
              </li>
              <li style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={check}
                  alt="checkmark-img"
                  style={{ marginRight: "8px" }}
                />
                <h1>Reporting and analytics</h1>
              </li>
              <li style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={check}
                  alt="checkmark-img"
                  style={{ marginRight: "8px" }}
                />
                <h1>Up to 5 individual users</h1>
              </li>
              <li style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={check}
                  alt="checkmark-img"
                  style={{ marginRight: "8px" }}
                />
                <h1>Chat and email support</h1>
              </li>
              <li style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={check}
                  alt="checkmark-img"
                  style={{ marginRight: "8px" }}
                />
                <h1>3+ integrations</h1>
              </li>
              <li style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={check}
                  alt="checkmark-img"
                  style={{ marginRight: "8px" }}
                />
                <h1>Account performance reporting</h1>
              </li>
            </ul>
          </div>
          <div className="mb-10 text-white mt-5 text-lg font-bold bg-violet-600 w-fit rounded-xl py-3 px-5">
            <button className="">Get started</button>
          </div>
        </div>
        <div className="bg-gray-200 w-1/3 rounded-3xl px-10" data-aos="fade-up" data-aos-duration="2000">
          <div className=" flex flex-col  text-center mt-14 mb-2">
            <h1 className=" w-fit text-sm border rounded-xl p-1 px-2 text-red-400 font-semibold bg-white">
              BUISNESS
            </h1>
          </div>
          <div className="text-left mt-5">
            <h1>
              <span className="text-5xl font-bold">$42</span> /month
            </h1>
          </div>
          <div className="mt-10 mb-10">
            <ul className="font-semibold text-gray-500 text-lg space-y-1">
              <li style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={check}
                  alt="checkmark-img"
                  style={{ marginRight: "8px" }}
                />
                <h1>Access to all basic features</h1>
              </li>
              <li style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={check}
                  alt="checkmark-img"
                  style={{ marginRight: "8px" }}
                />
                <h1>Reporting and analytics</h1>
              </li>
              <li style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={check}
                  alt="checkmark-img"
                  style={{ marginRight: "8px" }}
                />
                <h1>Up to 5 individual users</h1>
              </li>
              <li style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={check}
                  alt="checkmark-img"
                  style={{ marginRight: "8px" }}
                />
                <h1>Chat and email support</h1>
              </li>
              <li style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={check}
                  alt="checkmark-img"
                  style={{ marginRight: "8px" }}
                />
                <h1>3+ integrations</h1>
              </li>
            </ul>
          </div>
          <div className=" mt-14 text-white  text-lg font-bold bg-violet-600 w-fit rounded-xl py-3 px-5">
            <button className="">Get started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
