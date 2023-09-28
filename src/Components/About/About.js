import React from "react";
import "./About.css";
import img from "../../assets/aboutimg.jpg";

const About = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <p
        style={{ color: "#212121" }}
        className="font-bold text-3xl leading-3 text-indigo-700 hover:text-indigo-800 cursor-pointer pb-4"
      >
        About Us
      </p>
      <hr style={{ width: "7vw", marginLeft: "40.5vw" }} />
      <br />

      <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
        <div className="w-full lg:w-6/12">
          <br />

          <h2
            style={{ color: "#212121" }}
            className="w-full font-bold lg:text-4xl text-3xl lg:leading-10 leading-9"
          >
            Pioneering Empowerment through Specialized Education and Therapeutic
            Expertise
          </h2>
          <p
            style={{ color: "#8E8D8D" }}
            className="font-semibold leading-6  mt-6 text-lg"
          >
            At Tapenabler, we believe in the boundless potential of every
            individual, especially those with unique abilities and/or special
            needs.
            <br />
            <br />
            We provide a Customized Curriculum Framework (CCF):
          </p>

          <ul className="aboutlist">
            <li className="list">Learner-Centred</li>
            <li className="list">Subject-Centred</li>
            <li className="list">Problem-Centred</li>
          </ul>
          <br />
          <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <span>Learn More</span>
          </button>
        </div>
        <div className="w-full lg:w-6/12">
          <img
            className="lg:block hidden w-full abtimg"
            src={img}
            alt="people discussing on board"
          />
          <img
            className="lg:hidden sm:block hidden w-full abtimg"
            src={img}
            alt="people discussing on board"
          />
          <img
            className="sm:hidden block w-full abtimg"
            src={img}
            alt="people discussing on board"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
