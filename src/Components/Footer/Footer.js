import React from "react";
import logo from "../../assets/logo.png";
import { FaInstagram } from "react-icons/fa";

import "./Footer.css";
function Footer() {
  return (
    <div className="pt-16">
      <div className="w-full border-gray-300 border-t lg:w-11/12 md:w-11/12 lg:mx-auto md:mx-auto">
        <div className="container mx-auto py-12">
          <div className="xl:flex lg:flex md:flex pt-6">
            <div className="w-11/12 xl:w-3/6 lg:w-2/5 mx-auto lg:mx-0 xl:mx-0">
              <div className="flex items-center mb-6 xl:mb-0 lg:mb-0">
                <img className="footerimg" src={logo} alt="" />
              </div>
              <div className="flex">
                <p>Let's connect : </p>{" "}
                <a
                  href="https://www.instagram.com/tapenabler_zirakpur?igsh=MXdzeTJmank0OGp0eQ=="
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <FaInstagram
                    size={20}
                    className="ml-2 mt-1"
                    color="red"
                  />{" "}
                </a>
              </div>
            </div>
            <div className="w-11/12 xl:w-1/6 lg:w-2/5 mx-auto lg:mx-0 xl:mx-0 pt-3 xl:flex  pl-3 sm:pl-0">
              <ul>
                <li className="text-gray-800 font-bold text-xl mb-6">
                  Important links
                </li>
                <li className="text-base text-gray-600 hover:text-gray-700 mb-5">
                  <a href="#about">About Us</a>
                </li>
                <li className="text-base text-gray-600 hover:text-gray-700 mb-5">
                  <a href="#services">Services</a>
                </li>
                <li className="text-base text-gray-600 hover:text-gray-700 mb-5">
                  <a href="#contactus">Contact Us</a>
                </li>
                <li className="text-base text-gray-600 hover:text-gray-700 mb-5">
                  <a
                    href="https://forms.gle/oKtsZ5oPKhE3NF169"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-11/12 xl:w-1/6 lg:w-2/5 mx-auto lg:mx-0 xl:mx-0 pt-3 xl:flex  pl-3 sm:pl-0">
              <ul>
                <li className="text-gray-800 font-bold text-xl mb-6">
                  Services
                </li>
                <li className="text-base text-gray-600 hover:text-gray-700 mb-5">
                  <a href="#services">
                    Guidance + Support - Counselling & Therapies <br /> (C&T)
                  </a>
                </li>
                <li className="text-base text-gray-600 hover:text-gray-700 mb-5">
                  <a href="#services">
                    Early Childhood Intervention, Development & Education
                    (ECIDE)
                  </a>
                </li>
                <li className="text-base text-gray-600 hover:text-gray-700 mb-5">
                  <a href="#services">
                    Animal-Assisted Therapy, Activities & Education <br />{" "}
                    (AATAE)
                  </a>
                </li>
                <li className="text-base text-gray-600 hover:text-gray-700 mb-5">
                  <a href="#services">
                    Enabling Special Needs <br /> (ESN)
                  </a>
                </li>
                <li className="text-base text-gray-600 hover:text-gray-700 mb-5">
                  <a href="#services">
                    Tailor-Made Instructional Learning Material (T-ILM){" "}
                  </a>
                </li>
                <li className="text-base text-gray-600 hover:text-gray-700 mb-5">
                  <a href="#services">
                    Alcohol & Drug Addiction <br /> (ADA)
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-11/12 xl:w-1/6 lg:w-2/5 mx-auto lg:mx-0 xl:mx-0 pt-3 xl:flex  pl-3 sm:pl-0">
              <ul>
                <li className="text-gray-800 font-bold text-xl mb-6">
                  Working Hours
                </li>
                <li className="text-base text-gray-600 hover:text-gray-700 mb-5">
                  <p>
                    <b>ONLINE</b> : 24x7 (Services Available Globally as per
                    Appointment Only)
                    <br />
                    <br />
                    <b>OFFLINE</b> : 10:00 AM - 06:00 PM (IST) <br />{" "}
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="xl:flex flex-wrap justify-between xl:mt-8 mt-6 pb-6 pl-3 sm:pl-0">
            <div className="w-11/12 xl:w-2/6 mx-auto lg:mx-0 xl:mx-0 mb-6 xl:mb-0">
              <p className="text-gray-800 text-base">
                2023 TapEnabler. All Rights Reserved
              </p>
            </div>

            <div className="w-11/12 xl:w-1/6 lg:w-1/6 sm:w-11/12 mx-auto lg:mx-0 xl:mx-0 mb-6 lg:mb-0 xl:mb-0 mt-8 lg:mt-8 xl:mt-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
