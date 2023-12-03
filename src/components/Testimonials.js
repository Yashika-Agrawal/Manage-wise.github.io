import React from "react";
import img1 from "../images/emily.webp";
import img2 from "../images/Sarah.webp";
import img3 from "../images/david.webp";
import img4 from "../images/alex.webp";
import "../index.css";
const Testimonials = () => {
  return (
    <div className="mt-20 mx-40">
      <div className=" mt-24 mb-2">
        <h1 className="w-fit text-sm border rounded-xl p-1 px-2 text-blue-700 font-semibold bg-white">
          🧡 TESTIMONIALS
        </h1>
      </div>
      <div className="w-full">
        <h1 className="leading-tight text-5xl  font-bold">
          Hear from our
          <span className=" text-red-400"> Satisfied </span>clients
        </h1>
      </div>
      <div className="mb-20 w-1/2  mt-5  text-xl font-semibold text-gray-500">
        <h1>
          Discover why our clients love working with us. Read their testimonials
          and learn how we has helped businesses.
        </h1>
      </div>
      <div className=" flex flex-row space-x-5 mb-40">
        <div className=" px-10  border-2 rounded-xl pt-10 flex flex-col w-1/4 ">
          <div className="mb-10">
            <h1 className="font-semibold text-lg">
              "The customer support team behind this product is exceptional.
              They have been incredibly responsive and helpful, addressing any
              questions or concerns promptly.
            </h1>
          </div>
          <div className="flex flex-row space-x-3">
            <div className="w-1/3 rounded-full overflow-hidden">
              <img
                src={img1}
                alt="img1"
                className="w-3/4 rounded-full object-cover h-full"
              />
            </div>
            <div className="">
              <div className="text-lg font-semibold">Emily</div>
              <div className="text-gray-400 text-lg">Art director</div>
            </div>
          </div>
        </div>
        <div className=" px-10  border-2 rounded-xl pt-10 flex flex-col w-1/4 ">
          <div className="mb-10">
            <h1 className="font-semibold text-lg">
              "The customer support team behind this product is exceptional.
              They have been incredibly responsive and helpful, addressing any
              questions or concerns promptly.
            </h1>
          </div>
          <div className="flex flex-row space-x-3">
            <div className="w-1/3 rounded-full overflow-hidden">
              <img
                src={img2}
                alt="img4"
                className="w-3/4 rounded-full object-cover h-full"
              />
            </div>
            <div className="">
              <div className="text-lg font-semibold">Sarah</div>
              <div className="text-gray-400 text-lg">IT Manager </div>
            </div>
          </div>
        </div>
        <div className=" px-10  border-2 rounded-xl pt-10 flex flex-col w-1/4 ">
          <div className="mb-10">
            <h1 className="font-semibold text-lg">
              "The customer support team behind this product is exceptional.
              They have been incredibly responsive and helpful, addressing any
              questions or concerns promptly.
            </h1>
          </div>
          <div className="flex flex-row space-x-3">
            <div className="w-1/3 rounded-full overflow-hidden">
              <img
                src={img3}
                alt="img2"
                className="w-3/4 rounded-full object-cover h-full"
              />
            </div>
            <div className="">
              <div className="text-lg font-semibold">David</div>
              <div className="text-gray-400 text-lg">Freelancer</div>
            </div>
          </div>
        </div>
        <div className=" px-10  border-2 rounded-xl pt-10 flex flex-col  w-1/4">
          <div className="mb-10">
            <h1 className="font-semibold text-lg">
              "The customer support team behind this product is exceptional.
              They have been incredibly responsive and helpful, addressing any
              questions or concerns promptly.
            </h1>
          </div>
          <div className="flex flex-row space-x-3">
            <div className="w-1/3 rounded-full overflow-hidden">
              <img
                src={img4}
                alt="img4"
                className="w-3/4 rounded-full object-cover h-full"
              />
            </div>
            <div className="">
              <div className="text-lg font-semibold">Alex</div>
              <div className="text-gray-400 text-lg">IT Manager</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
