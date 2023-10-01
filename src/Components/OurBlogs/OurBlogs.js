import React from "react";
import pic1 from "../../assets/studentpic2.jpg";
import pic2 from "../../assets/Studentspic1.jpg";
import pic3 from "../../assets/fampic.webp";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
/* Install pure-react-carousel using -> npm i pure-react-carousel */
export default function OurBlogs() {
  return (
    <div>
      <div className="flex items-center justify-between h-full w-full absolute z-0">
        <div className="w-1/3 bg-white h-full" />
        <div className="w-4/6 ml-16 bg-gray-100 h-full" />
      </div>
      <div className="xl:px-20 px-8 py-20 2xl:mx-auto 2xl:container relative z-40">
        <CarouselProvider
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={3}
        >
          <h1 className="text-center text-5xl font-bold  leading-tight text-gray-800">
            Our Blogs
          </h1>

          <Slider>
            <Slide index={0} tabIndex="null">
              <div className="flex">
                <div className="mt-14 md:flex">
                  <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                    <img
                      src={pic1}
                      alt="image of profile"
                      className="w-full h-full flex-shrink-0 object-fit object-contain shadow-lg rounded"
                    />
                    <div className="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-indigo-100 rounded-full">
                      <img
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg"
                        alt="commas"
                      />
                    </div>
                  </div>
                  <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                    <div>
                      <h1 className="text-2xl font-semibold  text-gray-800">
                        Unlocking Potential: The Imperative of Special Education
                        in India
                      </h1>
                      <p className="text-base font-medium leading-6 mt-4 text-gray-600">
                        India, a country celebrated for its vast diversity, is a
                        mosaic of talents, abilities, and unique potentials. In
                        this rich tapestry of individuality, an increasingly
                        urgent need emerges – the imperative of special
                        education. In the Indian context, the significance of
                        special education cannot be overstressed; it stands as a
                        gateway to inclusivity, empowerment, and a more
                        promising future for numerous individuals. India's
                        kaleidoscope of languages, cultures, and traditions
                        extends to encompass a spectrum of abilities and needs
                        among its populace. Special education becomes the
                        bedrock of inclusiveness, ensuring equitable access to
                        quality education for every person, irrespective of
                        their physical, cognitive, or emotional differences. It
                        celebrates this diversity and extends tailored support
                        to enable each child, adolescent, or adult to realize
                        their full potential.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Slide>
            <Slide index={1}>
              <div
                className="flex relative"
                style={{ transform: "translateX(0%)" }}
              >
                <div className="mt-14 md:flex">
                  <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                    <img
                      src={pic2}
                      alt="image of profile"
                      className="w-full h-full flex-shrink-0 object-fit object-contain shadow-lg rounded"
                    />
                    <div className="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-indigo-100 rounded-full">
                      <img
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg"
                        alt="commas"
                      />
                    </div>
                  </div>
                  <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                    <div>
                      <h1 className="text-2xl font-semibold  text-gray-800">
                        Bridging the Gap: How Special Education Connects
                        Students to Learning
                      </h1>
                      <p className="text-base font-medium leading-6 mt-4 text-gray-600">
                        Education is often described as the great equalizer, a
                        key to unlocking opportunities and fulfilling potential.
                        However, for students with diverse abilities and unique
                        needs, there can be a significant gap between their
                        potential and the traditional educational system.
                        Special education steps in as the bridge that spans this
                        gap, ensuring that every student, regardless of their
                        challenges, has access to quality learning experiences.
                        One of the primary ways special education bridges the
                        gap is through individualization. It recognizes that
                        each student is unique, with their own strengths and
                        challenges. Special educators assess and tailor
                        instructional strategies to meet the specific needs of
                        each student. Whether it's adapting teaching methods,
                        providing assistive technologies, or creating
                        personalized learning plans, special education ensures
                        that no student is left behind.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Slide>
            <Slide index={2}>
              <div
                className="flex relative"
                style={{ transform: "translateX(0%)" }}
              >
                <div className="mt-14 md:flex">
                  <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                    <img
                      src={pic3}
                      alt="image of profile"
                      className="w-full h-full flex-shrink-0 object-fit object-contain shadow-lg rounded "
                    />
                    <div className="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-indigo-100 rounded-full">
                      <img
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg"
                        alt="commas"
                      />
                    </div>
                  </div>
                  <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                    <div>
                      <h1 className="text-2xl font-semibold  text-gray-800">
                        Empowerment and Lifelong Learning:
                      </h1>
                      <p className="text-base font-medium leading-6 mt-4 text-gray-600">
                        Special education is not just about academics; it equips
                        students with life skills, communication abilities, and
                        self-confidence. It prepares them for a future of
                        lifelong learning and adaptation. By closing the gap in
                        education, special education empowers students to pursue
                        higher education, gain meaningful employment, and lead
                        fulfilling lives. In conclusion, special education is
                        the vital link that connects students with diverse
                        abilities to the world of learning. It bridges the gap
                        by recognizing individuality, promoting inclusivity,
                        intervening early, and empowering students to become
                        lifelong learners. In doing so, it ensures that every
                        student has the opportunity to unlock their full
                        potential and contribute meaningfully to society
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Slide>
          </Slider>
          <div className="flex items-center mt-8">
            <ButtonBack
              className="cursor-pointer "
              role="button"
              aria-label="previous slide"
            >
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonal-svg2.svg"
                alt="previous"
              />
            </ButtonBack>

            <ButtonNext
              role="button"
              aria-label="next slide"
              className="cursor-pointer ml-2"
            >
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg3.svg"
                alt="next"
              />
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
}
