import React from "react";
import "./About.css";
import img from "../../assets/aboutimg.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      id="about"
      className="2xl:container 2xl:mx-auto lg:py-10 lg:px-20 md:py-12 md:px-6 py-9 px-4 text-center"
    >
      <div className="lg:text-3xl md:text-5xl text-4xl font-black leading-10 text-center text-gray-800 dark:text-white">
        <h1
          className="pb-4 text-3xl font-bold "
          style={{
            color: "#212121",
            borderBottom: "5px solid #D9CAB3",
            borderRadius: "20px",
            margin: "auto",
            width: "10rem",
          }}
        >
          About Us
        </h1>
      </div>

      <br />

      <motion.div
        viewport={{ once: false }}
        initial={{ opacity: 0, x: -90 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "easeIn", duration: 1, delay: 0.15 }}
        className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12 justify-around"
      >
        <div className="w-full lg:w-6/12">
          <br />

          <h2
            style={{ color: "#212121" }}
            className=" text-center w-full font-bold lg:text-4xl text-3xl lg:leading-10 leading-9"
          >
            Pioneering Empowerment through Specialized Education and Therapeutic
            Expertise
          </h2>
          <p
            style={{ color: "#8E8D8D" }}
            className="text-center font-semibold leading-6  mt-6 text-lg"
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
        </div>
        <div className="w-full lg:w-2/5">
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
      </motion.div>
      <div style={{ marginLeft: "5vw" }} className="relative mt-4">
        <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
          <div className="z-20 w-12 h-12 bg-gray-800 rounded-full flex justify-center items-center">
            <span
              style={{ color: "white" }}
              className="material-symbols-outlined"
            >
              target
            </span>
          </div>

          <div
            style={{ marginLeft: "4vw" }}
            className="z-20 w-12 h-12 bg-gray-800 rounded-full flex justify-center items-center"
          >
            <span
              style={{ color: "white" }}
              className="material-symbols-outlined"
            >
              visibility
            </span>
          </div>
        </div>
        <hr className="z-10 absolute top-2/4 w-2/5 bg-gray-200 abthr" />
      </div>
      <div
        style={{ marginLeft: "5vw" }}
        className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4"
      >
        <div>
          <p className="font-semibold text-left lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">
            Our Mission
          </p>
          <p className="font-normal text-left text-base leading-6 text-gray-600 mt-6">
            Our core mission revolves around the enrichment and empowerment of
            those extraordinary individuals through the provision of
            cutting-edge therapeutic solutions. Tapenabler is not just a brand;
            it's a community of caregivers, educators and families united in the
            pursuit of enabling special abilities.
          </p>
        </div>
        <div style={{ marginLeft: "4vw", width: "30vw" }}>
          <p className="font-semibold text-left lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">
            Our Vision
          </p>
          <p className="font-normal text-left text-base leading-6 text-gray-600 mt-6">
            Tapenabler was born out of a deep commitment to improving the
            quality of lives for the individuals with special needs. We envision
            a world where every person, regardless of their abilities, has the
            opportunity to thrive, learn and achieve their full potential.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
