import React from "react";
import { useState } from "react";

const Answers = () => {
  const [questionStates, setQuestionStates] = useState({
    question1: false,
    question2: false,
    question3: false,
    question4: false,
    question5: false,
  });
  const toggleQuestion = (question) => {
    setQuestionStates((prevState) => ({
      ...prevState,
      [question]: !prevState[question],
    }));
  };
  return (
    <div className="bg-white">
      <div className="flex flex-row">
        <div className=" ml-36 w-1/5">
          <div className="text-center mt-24 mb-2 w-fit">
            <h1 className=" text-sm border rounded-xl p-1 px-2 text-blue-700 font-semibold bg-white">
              🙋‍♀️ FAQ
            </h1>
          </div>
          <div data-aos="fade-up" data-aos-duration="2000">
            <h1 className=" text-5xl text-left font-bold">
              Need <br /> <span className=" text-red-400">Answers? </span>
            </h1>
          </div>
          <div className=" mt-3 text-xl font-semibold text-gray-500">
            <h1>
              Check out our most commonly asked questions below to find the
              information you need.
            </h1>
          </div>
        </div>
        {/*Question answers*/}
        <div
          className="flex flex-col  space-y-5  w-1/2 ml-40 mr-40 mt-24 mb-40"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          {/* div for question*/}
          <div
            className="bg-slate-50 rounded-2xl py-3 cursor-pointer"
            onClick={() => toggleQuestion("question1")}
          >
            {/*question title*/}
            <div className="flex flex-row items-center justify-between px-10">
              <h1
                className={`font-bold text-2xl ${
                  questionStates.question1 ? "text-violet-600" : ""
                }`}
              >
                What is Manage Wise and what does it offer?
              </h1>
              <h2 className="font-semibold text-5xl mb-2 text-violet-600">
                {questionStates.question1 ? "×" : "+"}
              </h2>
            </div>
            {/*Answer block */}
            {questionStates.question1 && (
              <p className="text-gray-500 text-lg font-semibold px-10">
                Manage Wise is a comprehensive management platform designed to
                streamline your business operations, enhance productivity, and
                drive success. It offers a range of features including task
                management, scheduling, communication tools, analytics, and
                more.
              </p>
            )}
          </div>
          {/*question 2*/}

          <div
            className="bg-slate-50 rounded-2xl py-3 cursor-pointer"
            onClick={() => toggleQuestion("question2")}
          >
            {/*question title*/}
            <div className="flex flex-row items-center justify-between px-10">
              <h1
                className={`font-bold text-2xl ${
                  questionStates.question2 ? "text-violet-600" : ""
                }`}
              >
                Is Manage Wise suitable for small businesses and larger
                enterprises alike?
              </h1>
              <h2 className="font-semibold text-5xl mb-2 text-violet-600">
                {questionStates.question2 ? "×" : "+"}
              </h2>
            </div>
            {/*Answer block */}
            {questionStates.question2 && (
              <p className="text-gray-500 text-lg font-semibold px-10">
                Yes, Manage Wise is designed to cater to the needs of both small
                businesses and larger enterprises. Its scalable features and
                customizable options make it versatile for various business
                sizes.
              </p>
            )}
          </div>
          {/*question 3*/}
          <div
            className="bg-slate-50 rounded-2xl py-3 cursor-pointer"
            onClick={() => toggleQuestion("question3")}
          >
            {/*question title*/}
            <div className="flex flex-row items-center justify-between px-10">
              <h1
                className={`font-bold text-2xl ${
                  questionStates.question3 ? "text-violet-600" : ""
                }`}
              >
                Can I access Manage Wise from different devices and platforms?
              </h1>
              <h2 className="font-semibold text-5xl mb-2 text-violet-600">
                {questionStates.question3 ? "×" : "+"}
              </h2>
            </div>
            {/*Answer block */}
            {questionStates.question3 && (
              <p className="text-gray-500 text-lg font-semibold px-10">
                Yes, Manage Wise offers cross-platform compatibility, allowing
                you to access and use the platform seamlessly on desktops, web
                browsers, and mobile devices.
              </p>
            )}
          </div>
          {/*question 4*/}
          <div
            className="bg-slate-50 rounded-2xl py-3 cursor-pointer"
            onClick={() => toggleQuestion("question4")}
          >
            {/*question title*/}
            <div className="flex flex-row items-center justify-between px-10">
              <h1
                className={`font-bold text-2xl ${
                  questionStates.question4 ? "text-violet-600" : ""
                }`}
              >
                What kind of support options do you offer to users?
              </h1>
              <h2 className="font-semibold text-5xl mb-2 text-violet-600">
                {questionStates.question4 ? "×" : "+"}
              </h2>
            </div>
            {/*Answer block */}
            {questionStates.question4 && (
              <p className="text-gray-500 text-lg font-semibold px-10">
                We provide responsive customer support via chat and email to
                assist you with any inquiries, issues, or guidance you may need
                while using Manage Wise.
              </p>
            )}
          </div>
          {/*question 5*/}
          <div
            className="bg-slate-50 rounded-2xl py-3 cursor-pointer"
            onClick={() => toggleQuestion("question5")}
          >
            {/*question title*/}
            <div className="flex flex-row items-center justify-between px-10">
              <h1
                className={`font-bold text-2xl ${
                  questionStates.question5 ? "text-violet-600" : ""
                }`}
              >
                How secure is the data stored within Manage Wise
              </h1>
              <h2 className="font-semibold text-5xl mb-2 text-violet-600">
                {questionStates.question5 ? "×" : "+"}
              </h2>
            </div>
            {/*Answer block */}
            {questionStates.question5 && (
              <p className="text-gray-500 text-lg font-semibold px-10">
                Your data's security is a top priority. Manage Wise employs
                robust data encryption and follows industry best practices to
                ensure your sensitive information is safe and protected.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Answers;
