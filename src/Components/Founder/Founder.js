import React from "react";
import frahdi from "../../assets/frahadiimg.jpg";
import garimadi from "../../assets/garimadiimg.jpg";
import { motion } from "framer-motion";

function Founder() {
  return (
    <div>
      <div className="container flex justify-center mx-auto pt-16">
        <div>
          <h1
            style={{
              color: "#212121",
              borderBottom: "5px solid #D9CAB3",
              borderRadius: "20px",
            }}
            className="xl:text-4xl text-3xl text-center text-gray-800 font-bold pb-4 sm:w-full w-5/6 mx-auto"
          >
            Meet the Founding Catalysts
          </h1>
          {/* <hr style={{ marginLeft: "2.5rem", width: "25vw" }} /> */}
          <br />
          <br />
        </div>
      </div>
      <motion.div
        viewport={{ once: false }}
        initial={{ opacity: 0, x: -90 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "easeIn", duration: 1, delay: 0.15 }}
        className="w-full bg-gray-100 px-10 pt-10"
      >
        <div className="container mx-auto">
          <div className="lg:flex md:flex sm:flex items-center xl:justify-evenly flex-wrap md:justify-around sm:justify-around lg:justify-around">
            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <img
                      src={garimadi}
                      alt=""
                      className="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16 pb-8">
                  <div className="font-bold text-3xl text-center pb-1">
                    Garima Rai Garg
                  </div>
                  <p className="text-gray-800 text-lg text-center">Founder</p>
                  <p className="text-center text-gray-600 text-base pt-3 font-normal">
                    Mrs. Garima, the founder of TapEnabler, is a dedicated
                    educator with a visionary spirit. Her journey began in the
                    classroom, where she passionately nurtured young minds.
                    However, it was during her tenure as a teacher that she
                    keenly observed a critical gap in our education system – the
                    inadequate provision for special education and early
                    intervention. Interactions with students, parents, and
                    caregivers exposed Mrs. Garima to the growing disparity in
                    educational opportunities.
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <img
                      src={frahdi}
                      alt=""
                      className="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16 pb-12">
                  <div className="font-bold text-3xl text-center pb-1">
                    Farha Baig
                  </div>
                  <p className="text-gray-800 text-lg text-center">
                    Co-Founder
                  </p>
                  <p className="text-center text-gray-600 text-base pt-3 font-normal">
                    Ms. Farha Baig, the distinguished co-founder of TapEnabler,
                    epitomizes a luminary in the realm of special education. Her
                    illustrious career, steeped in erudition and expertise,
                    serves as the bedrock upon which Tapenabler stands.
                    Possessing an extensive and multifaceted background in the
                    specialized education milieu, Ms. Baig has cultivated an
                    acute acumen for the nuanced needs of individuals graced
                    with unique abilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Founder;
