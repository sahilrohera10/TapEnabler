import React, { useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import ks from "../../assets/ks.jpg";
import am from "../../assets/am.jpg";
import at from "../../assets/at.jpg";
import sb from "../../assets/sb.jpg";
import hs from "../../assets/hs.jpg";

/* Install pure-react-carousel using -> npm i pure-react-carousel */

export default function Testimonials() {
  return (
    <div style={{ width: "90%" }} className="container mx-auto">
      <h1 className="text-center text-5xl font-bold  leading-tight text-gray-800">
        What our customers saying !
      </h1>

      <div className="m-auto flex items-center justify-center w-11/12 h-full py-24 sm:py-8 px-4">
        {/* Carousel for desktop and large size devices */}
        <CarouselProvider
          className="lg:block hidden"
          naturalSlideWidth={90}
          isIntrinsicHeight={true}
          totalSlides={5}
          visibleSlides={3}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
              id="prev"
            >
              <svg
                width={10}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div
                  id="slider"
                  className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                >
                  <Slide index={0}>
                    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4">
                      <img
                        className="w-full h-56 object-cover object-center"
                        src={ks}
                        alt="avatar"
                      />
                      {/*   */}
                      <div className="py-4 px-6">
                        <h1 className="text-2xl font-semibold text-gray-800">
                          Komal Sharma
                        </h1>
                        <p className="py-2 text-lg text-gray-700">
                          TapEnabler's counselling and therapies have been a
                          lifeline for me. Their compassionate and skilled
                          therapists helped me navigate through difficult times.
                          I feel more resilient and empowered thanks to their
                          support.
                        </p>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={1}>
                    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4">
                      <img
                        className="w-full h-56 object-cover object-center"
                        src={am}
                        alt="avatar"
                      />

                      <div className="py-4 px-6">
                        <h1 className="text-2xl font-semibold text-gray-800">
                          Abhishek Mishra
                        </h1>
                        <p className="py-2 text-lg text-gray-700">
                          As a parent, TapEnabler's ECIDE program has been a
                          game-changer. They've equipped my child with essential
                          life skills and fostered their development in a
                          nurturing environment. I couldn't be happier with the
                          progress we've seen.
                        </p>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={2}>
                    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4">
                      <img
                        className="w-full h-56 object-cover object-center"
                        src={at}
                        alt="avatar"
                      />

                      <div className="py-4 px-6">
                        <h1 className="text-2xl font-semibold text-gray-800">
                          Anshuman Tyagi
                        </h1>
                        <p className="py-2 text-lg text-gray-700">
                          TapEnabler's ESN services have made a world of
                          difference for my loved one with special needs.
                          They've created an inclusive and supportive
                          environment that celebrates unique abilities. It's
                          truly life-changing.
                        </p>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={3}>
                    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4">
                      <img
                        className="w-full h-56 object-cover object-center"
                        src={sb}
                        alt="avatar"
                      />

                      <div className="py-4 px-6">
                        <h1 className="text-2xl font-semibold text-gray-800">
                          Savita Bajaj
                        </h1>
                        <p className="py-2 text-lg text-gray-700">
                          TapEnabler's T-ILM resources are exceptional. They've
                          tailored learning materials to match my learning
                          style, making education accessible and enjoyable.
                          Learning has never been this personalized and
                          effective.
                        </p>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={4}>
                    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4">
                      <img
                        className="w-full h-56 object-cover object-center"
                        src={hs}
                        alt="avatar"
                      />

                      <div className="py-4 px-6">
                        <h1 className="text-2xl font-semibold text-gray-800">
                          Harish Singh
                        </h1>
                        <p className="py-2 text-lg text-gray-700">
                          She is a kind of teacher who really knows how to deal
                          with children be it a regular or special needs. I am
                          happy to see the way she treated both of my kids.
                          Thank you, dear. I surely recommend to go with
                          TapEnabler.
                        </p>
                      </div>
                    </div>
                  </Slide>
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              id="next"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>

        {/* Carousel for tablet and medium size devices */}

        <CarouselProvider
          className="lg:hidden md:block hidden"
          naturalSlideWidth={90}
          isIntrinsicHeight={true}
          totalSlides={4}
          visibleSlides={2}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
              id="prev"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div
                  id="slider"
                  className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                >
                  <Slide index={1}>
                    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4">
                      <img
                        className="w-full h-56 object-cover object-center"
                        src={ks}
                        alt="avatar"
                      />
                      {/*   */}
                      <div className="py-4 px-6">
                        <h1 className="text-2xl font-semibold text-gray-800">
                          Komal Sharma
                        </h1>
                        <p className="py-2 text-lg text-gray-700">
                          TapEnabler's counselling and therapies have been a
                          lifeline for me. Their compassionate and skilled
                          therapists helped me navigate through difficult times.
                          I feel more resilient and empowered thanks to their
                          support.
                        </p>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={2}>
                    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4">
                      <img
                        className="w-full h-56 object-cover object-center"
                        src={am}
                        alt="avatar"
                      />
                      {/*   */}
                      <div className="py-4 px-6">
                        <h1 className="text-2xl font-semibold text-gray-800">
                          Abhishek Mishra
                        </h1>
                        <p className="py-2 text-lg text-gray-700">
                          As a parent, TapEnabler's ECIDE program has been a
                          game-changer. They've equipped my child with essential
                          life skills and fostered their development in a
                          nurturing environment. I couldn't be happier with the
                          progress we've seen.
                        </p>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={3}>
                    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4">
                      <img
                        className="w-full h-56 object-cover object-center"
                        src={at}
                        alt="avatar"
                      />
                      {/*   */}
                      <div className="py-4 px-6">
                        <h1 className="text-2xl font-semibold text-gray-800">
                          Anshuman Tyagi
                        </h1>
                        <p className="py-2 text-lg text-gray-700">
                          TapEnabler's ESN services have made a world of
                          difference for my loved one with special needs.
                          They've created an inclusive and supportive
                          environment that celebrates unique abilities. It's
                          truly life-changing.
                        </p>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={4}>
                    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4">
                      <img
                        className="w-full h-56 object-cover object-center"
                        src={sb}
                        alt="avatar"
                      />
                      {/*   */}
                      <div className="py-4 px-6">
                        <h1 className="text-2xl font-semibold text-gray-800">
                          Savita Bajaj
                        </h1>
                        <p className="py-2 text-lg text-gray-700">
                          TapEnabler's T-ILM resources are exceptional. They've
                          tailored learning materials to match my learning
                          style, making education accessible and enjoyable.
                          Learning has never been this personalized and
                          effective.
                        </p>
                      </div>
                    </div>
                  </Slide>
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              id="next"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>

        {/* Carousel for mobile and Small size Devices */}
        <CarouselProvider
          className="block md:hidden "
          naturalSlideWidth={90}
          isIntrinsicHeight={true}
          totalSlides={2}
          visibleSlides={1}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center">
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div
                  id="slider"
                  className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700"
                >
                  <Slide index={0}>
                    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4">
                      <img
                        className="w-full h-56 object-cover object-center"
                        src={ks}
                        alt="avatar"
                      />
                      {/*   */}
                      <div className="py-4 px-6">
                        <h1 className="text-2xl font-semibold text-gray-800">
                          Komal Sharma
                        </h1>
                        <p className="py-2 text-lg text-gray-700">
                          TapEnabler's counselling and therapies have been a
                          lifeline for me. Their compassionate and skilled
                          therapists helped me navigate through difficult times.
                          I feel more resilient and empowered thanks to their
                          support.
                        </p>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={1}>
                    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4">
                      <img
                        className="w-full h-56 object-cover object-center"
                        src={am}
                        alt="avatar"
                      />
                      {/*   */}
                      <div className="py-4 px-6">
                        <h1 className="text-2xl font-semibold text-gray-800">
                          Abhishek Mishra
                        </h1>
                        <p className="py-2 text-lg text-gray-700">
                          As a parent, TapEnabler's ECIDE program has been a
                          game-changer. They've equipped my child with essential
                          life skills and fostered their development in a
                          nurturing environment. I couldn't be happier with the
                          progress we've seen.
                        </p>
                      </div>
                    </div>
                  </Slide>
                </div>
              </Slider>
            </div>
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
}
