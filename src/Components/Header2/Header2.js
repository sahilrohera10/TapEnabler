import react, { useState } from "react";
import logo from "../../assets/logo.png";

import collage from "../../assets/collagenew.png";
import "./Header2.css";
import Quickform from "../Quickform/Quickform";
import Timings from "../Timings";

const Header2 = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div>
      <section>
        {" "}
        <Timings />
        <div className="w-full relative pb-10 px-6 xl:px-0">
          <img
            className="absolute w-full inset-0 h-full object-cover object-center"
            src="https://cdn.tuk.dev/assets/templates/weCare/hero2-bg.png"
            alt="we care family"
          />
          <nav className="lg:hidden relative z-40">
            <div className="flex py-6 justify-between items-center px-4">
              <div>
                <img src={logo} alt="logo" />
              </div>
              <div className="flex items-center">
                <ul
                  id="list"
                  className={`${
                    menu ? "" : "hidden"
                  } p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-16 md:mt-16`}
                >
                  <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                    <a href="javascript:void(0)">
                      <span className="ml-2 font-bold">Home</span>
                    </a>
                  </li>
                  <li
                    className="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center"
                    onclick="dropdownHandler(this)"
                  >
                    <a href="javascript:void(0)">
                      <span className="ml-2 font-bold">About Us</span>
                    </a>
                  </li>
                  <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                    <a href="javascript:void(0)">
                      <span className="ml-2 font-bold">Services</span>
                    </a>
                  </li>
                  <li
                    className="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center"
                    onclick="dropdownHandler(this)"
                  >
                    <a href="javascript:void(0)">
                      <span className="ml-2 font-bold">Contact Us</span>
                    </a>
                  </li>
                </ul>
                <div className="xl:hidden">
                  <img
                    id="open"
                    className={` ${menu ? "hidden" : ""} close-m-menu`}
                    onClick={() => setMenu(!menu)}
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/right_aligned_with_searchbar_Svg1.svg"
                    alt="menu"
                  />
                  <div
                    id="close"
                    className={` ${menu ? "" : "hidden"} close-m-menu`}
                    onClick={() => setMenu(!menu)}
                  >
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/right_aligned_with_searchbar_Svg2.svg"
                      alt="cross"
                    />
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <nav
            role="navigation"
            aria-label="Main"
            tabIndex="0"
            className="hidden relative z-10 w-full lg:flex justify-between items-center p-12"
          >
            <div className="w-96">
              <a
                tabIndex="0"
                aria-label="we care company logo"
                href="javascript:void(0)"
              >
                <img style={{ marginLeft: "100px" }} src={logo} alt="logo" />
              </a>
            </div>
            <div className="w-5/6">
              <div className="flex items-center justify-end">
                <ul className="text-gray-800 lg:space-x-8 flex items-center leading-none">
                  {/* <li className="font-semibold navlink ">
                    <a className="text-lg" href="#">
                      Home
                    </a>
                  </li> */}
                  <li className="ml-4 font-semibold  navlink">
                    <a className=" text-lg" href="#about">
                      About Us
                    </a>
                  </li>
                  <li className="ml-4 font-semibold navlink">
                    <a className="text-lg" href="#services">
                      Services
                    </a>
                  </li>
                  <li className="ml-4  font-semibold navlink">
                    <a
                      className="focus:text-#8E8D8D-500 text-lg"
                      href="#contactus"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
                <div className="pl-40"></div>
              </div>
            </div>
          </nav>
          <div className="pt-0 lg:flex items-center relative z-10 container mx-auto">
            <div className="w-full lg:w-1/2 h-full lg:pr-10 xl:pr-0">
              <img
                tabIndex="0"
                role="img"
                aria-label="people smiling"
                className="mx-auto"
                src={collage}
                alt="people smiling"
              />
            </div>
            <div role="contentinfo" className="w-full lg:w-1/2 h-full rightcon">
              <p
                style={{ color: "#8E8D8D" }}
                tabIndex="0"
                className="text-2xl mb-2 font-bold text-center"
              >
                TapEnabler -
              </p>
              <h1
                style={{ color: "#212121" }}
                tabIndex="0"
                className="text-4xl lg:text-4xl font-black mb-3 text-center"
              >
                Let's Facilitate!
              </h1>
              <hr style={{ marginLeft: "14vw" }} />
              <br />
              <p
                style={{ color: "#4e4e4e" }}
                tabIndex="0"
                className="font-regular mb-4 font-bold text-lg text-center"
              >
                Tapping to your Needs through our Enablers <br />
                <span style={{ color: "#8E8D8D" }}>
                  Let's Tap to Enable You!
                </span>
              </p>
              <div className="bg-white py-2 px-4 flex flex-col sm:flex-row justify-start sm:justify-evenly items-center sm:items-center shadow-lg rounded-lg headlast ">
                <div className="py-2">
                  <p
                    style={{ color: "#F6F6F6" }}
                    className="text-lg font-bold tracking-wider text-center"
                  >
                    Early Intervention | Special Education | Counselling &
                    Therapies
                    <br />
                    <span style={{ color: "rgb(255 220 167)" }}>
                      {" "}
                      Now Available Both Online & Offline
                    </span>
                  </p>
                </div>
              </div>{" "}
              {/* quick form */}
            </div>
          </div>{" "}
        </div>{" "}
      </section>
      <Quickform />

      <style>
        {`
            /* Top menu */
            .top-100 {
                animation: slideDown 0.5s ease-in-out;
            }
            @keyframes slideDown {
                0% {
                    top: -50%;
                }
                100% {
                    top: 0;
                }
            }
            * {
                outline: none !important;
                -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                -webkit-tap-highlight-color: transparent;
            }`}
      </style>
    </div>
  );
};
export default Header2;
