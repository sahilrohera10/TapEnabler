import React, { useState } from "react";
import logo from "../../assets/logo.png";
import "./Header.css";
function Header() {
  const [show, setShow] = useState(false);
  return (
    <div
      className="pb-12 overflow-y-hidden"
      style={{
        minHeight: 700,
        backgroundColor: "rgb(190 223 255 / 65%)",
        // backgroundImage: "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)",
      }}
    >
      {/* Code block starts */}
      <dh-component>
        <nav className="w-full border-b">
          <div className="py-5 md:py-0 container mx-auto px-6 flex items-center justify-around navbardiv ">
            <div aria-label="Home. logo" role="img">
              <img className="w-7 md:w-auto logo" src={logo} alt="logo" />
            </div>
            <div>
              <button
                onClick={() => setShow(!show)}
                className={`${
                  show ? "hidden" : ""
                } sm:block md:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500`}
              >
                <svg
                  aria-haspopup="true"
                  aria-label="open Main Menu"
                  xmlns="http://www.w3.org/2000/svg"
                  className="md:hidden icon icon-tabler icon-tabler-menu"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  strokeLinecap="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1={4} y1={8} x2={20} y2={8} />
                  <line x1={4} y1={16} x2={20} y2={16} />
                </svg>
              </button>
              <div
                id="menu"
                className={` ${show ? "" : "hidden"} md:block lg:block `}
              >
                <button
                  onClick={() => setShow(!show)}
                  className={`block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 fixed focus:outline-none focus:ring-2 focus:ring-gray-500 z-30 top-0 mt-6`}
                >
                  <svg
                    aria-label="close main menu"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1={18} y1={6} x2={6} y2={18} />
                    <line x1={6} y1={6} x2={18} y2={18} />
                  </svg>
                </button>
                <ul className="flex text-3xl md:text-base items-center py-10 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-white md:bg-transparent z-20  navlist">
                  <li className="text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0">
                    <a href="javascript: void(0)">Home</a>
                  </li>
                  <li className="text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                    <a href="javascript: void(0)">About Us</a>
                  </li>
                  <li className="text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                    <a href="javascript: void(0)">Our Services</a>
                  </li>

                  <li className="text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                    <a href="javascript: void(0)">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <div className="">
          <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
            <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10">
                TapEnabler - Let's Facilitate!
              </h1>
              <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-500 font-normal text-center text-sm sm:text-2xl">
                "Tapping to your Needs through our Enablers"
              </p>
              <img className="headlogo" src={logo} alt="" />
            </div>
            <div className="flex justify-center items-center">
              {/* <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm">
                Get Started
              </button> */}
              <button className="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-transparent transition duration-150 ease-in-out hover:border-indigo-600 lg:text-xl lg:font-bold  hover:text-indigo-600 rounded border border-indigo-700 text-indigo-700 px-4 sm:px-10 py-2 sm:py-4 text-sm">
                Book an Appointment <sup>(Free)</sup>
              </button>
            </div>
            <p>Let's Tap to Enable You</p>
          </div>
        </div>
      </dh-component>
      {/* Code block ends */}
    </div>
  );
}

export default Header;
