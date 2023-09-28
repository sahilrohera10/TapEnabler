import React from "react";
import baby from "../../assets/babyimg.png";
import fam from "../../assets/fampic.webp";
import stpic1 from "../../assets/Studentspic1.jpg";
import stpic2 from "../../assets/studentpic2.jpg";
function Blogs() {
  return (
    <>
      <div style={{ width: "90%" }} className="container mx-auto px-4">
        <h1
          style={{ color: "#212121" }}
          className="text-3xl text-center f-m-w text-indigo-700 font-bold pb-4"
        >
          Our Latest Blogs
        </h1>
        <hr style={{ width: "13vw", marginLeft: "37vw" }} />
        <div className="pt-14 xl:px-0 px-4">
          <div className="w-full lg:flex">
            <div className="lg:w-1/2">
              <img src={stpic2} className="w-full" />
              <div className="mt-8 lg:mb-0 mb-8">
                <h1 className="f-m-m text-2xl font-semibold leading-7">
                  Unlocking Potential: The Imperative of Special Education in
                  India
                </h1>
                <p className="text-left f-m-m leading-loose mt-2">
                  India, a country celebrated for its vast diversity, is a
                  mosaic of talents, abilities, and unique potentials. In this
                  rich tapestry of individuality, an increasingly urgent need
                  emerges – the imperative of special education. In the Indian
                  context, the significance of special education cannot be
                  overstressed; it stands as a gateway to inclusivity,
                  empowerment, and a more promising future for numerous
                  individuals.
                </p>
                <div className="mt-6">
                  <a href>
                    <p className="text-indigo-700 underline text-base font-semibold f-m-m">
                      Read More
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 lg:ml-8">
              <div className="lg:flex items-start mb-8">
                <img src={baby} className="w-72 h-52" />
                <div className="lg:ml-6">
                  <h1 className="f-m-m text-2xl font-semibold leading-7 lg:mt-0 mt-8">
                    Early Intervention and Comprehensive Growth
                  </h1>
                  <p className="text-left f-m-m leading-loose mt-2">
                    A fundamental facet of special education is its focus on
                    early intervention. Identifying and addressing learning
                    challenges or developmental gaps in the early stages can
                    profoundly enhance outcomes.
                  </p>
                  <div className="mt-4">
                    <a href>
                      <p className="text-indigo-700 underline text-base font-semibold f-m-m">
                        Read More
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="lg:flex items-start mb-8">
                <img src={fam} className="w-72" />
                <div className="lg:ml-6">
                  <h1 className="f-m-m text-2xl font-semibold leading-7 lg:mt-0 mt-8">
                    Empowering Individuals and Families
                  </h1>
                  <p className="text-left f-m-m leading-loose mt-2">
                    Special education doesn't only empower students; it extends
                    its empowering embrace to families and caregivers as well.
                    It equips them with knowledge and tools to provide effective
                    support to their loved ones.
                  </p>
                  <div className="mt-4">
                    <a href>
                      <p className="text-indigo-700 underline text-base font-semibold f-m-m">
                        Read More
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="lg:flex items-start mb-8">
                <img src={stpic1} className="w-72 h-52" />
                <div className="lg:ml-6">
                  <h1 className="f-m-m text-2xl font-semibold leading-7 lg:mt-0 mt-8">
                    Bridging the Gap: How Special Education Connects Students to
                    Learning
                  </h1>
                  <p className="text-left f-m-m leading-loose mt-2">
                    Education is often described as the great equalizer, a key
                    to unlocking opportunities and fulfilling potential.
                    However, for students with diverse abilities and unique
                    needs, there can be a significant gap between their
                    potential and the traditional educational system.
                  </p>
                  <div className="mt-4">
                    <a href>
                      <p className="text-indigo-700 underline text-base font-semibold f-m-m">
                        Read More
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex items-center justify-center my-16 w-full">
          <button className=" hover:bg-gray-200 border border-indigo-700 border-2 lg:text-2xl md:text-lg text-sm rounded f-m-m font-semibold text-indigo-700 focus:outline-none lg:px-12 px-6 lg:py-6 py-3 xl:leading-4">
            Browse More
          </button>
        </div> */}
        <div />
      </div>
    </>
  );
}

export default Blogs;
