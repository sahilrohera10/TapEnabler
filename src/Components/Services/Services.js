import React from "react";

export default function Services() {
  return (
    <div className="dark:bg-gray-900">
      <section className="mx-auto container py-20 ">
        <div className="flex justify-center items-center flex-col">
          <div className="lg:text-3xl md:text-5xl text-4xl font-black leading-10 text-center text-gray-800 dark:text-white">
            <h1 className="pb-4" style={{ color: "#212121" }}>
              Our Services
            </h1>
            <hr style={{ width: "10vw", marginLeft: "1vw" }} />
          </div>
          <div className="pt-24 grid lg:grid-cols-3 md:grid-cols-2 justify-center items-center xl:gap-y-16 gap-y-20 gap-x-16 lg:gap-x-20 xl:gap-x-0 lg:px-10 xl:px-0">
            <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              <div className="mb-6">
                <span
                  style={{ fontSize: "35px", color: "#6D9886" }}
                  class="material-symbols-outlined"
                >
                  volunteer_activism
                </span>
              </div>
              <div className="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                <h2>Guidance & Support (C&T)</h2>
              </div>
              <div className="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center ">
                <p>
                  we bring about the process of giving fruitful direction or
                  helpful suggestion regarding a decision or any future course
                  of action.
                </p>
              </div>
            </div>
            <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              <div className="mb-6">
                <span
                  style={{ fontSize: "35px", color: "#6D9886" }}
                  class="material-symbols-outlined"
                >
                  child_care
                </span>
              </div>
              <div className="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                <h2>Early Child Intervention & Development (ECID)</h2>
              </div>
              <div className="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center">
                <p>
                  we offer the education and care of young children by
                  identifying and providing effective early support to those who
                  are at risk of poor outcomes before the problems get any
                  worse.
                </p>
              </div>
            </div>
            <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              <div className="mb-6">
                <span
                  style={{ fontSize: "35px", color: "#6D9886" }}
                  class="material-symbols-outlined"
                >
                  pets
                </span>
              </div>
              <div className="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                <h2>Animal-Assisted Therapy, Activities & Education (AATAE)</h2>
              </div>
              <div className="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center">
                <p>
                  we offer animal-facilitated counselling, pet therapy, pet
                  psychotherapy, pet-facilitated therapy, pet-facilitated
                  psychotherapy, pet-mediated therapy, pet-oriented therapy,
                  etc.
                </p>
              </div>
            </div>
            <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              <div className="mb-6">
                <span
                  style={{ fontSize: "35px", color: "#6D9886" }}
                  class="material-symbols-outlined"
                >
                  school
                </span>
              </div>
              <div className="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                <h2>Enabling Special Needs (ESN)</h2>
              </div>
              <div className="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center">
                <p>
                  we bring about a variety of education for the students who
                  differ socially, mentally and/or physically from the others to
                  such an extent that they may require
                  modifications/accommodations of commonly used practices.
                </p>
              </div>
            </div>
            <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              <div className="mb-6">
                <span
                  style={{ fontSize: "35px", color: "#6D9886" }}
                  class="material-symbols-outlined"
                >
                  library_books
                </span>
              </div>
              <div className="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                <h2>Tailor-Made Instructional Learning Material (T-ILM)</h2>
              </div>
              <div className="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center">
                <p>
                  whether animate and inanimate objects in relation to human and
                  non-human resources that a professional may use in teaching
                  and learning situations to help achieve desired learning
                  objectives for the students.
                </p>
              </div>
            </div>
            <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              <div className="mb-6">
                <span
                  style={{ fontSize: "35px", color: "#6D9886" }}
                  class="material-symbols-outlined"
                >
                  liquor
                </span>
              </div>
              <div className="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                <h2>Drug & Alcohol Addiction</h2>
              </div>
              <div className="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center">
                <p>
                  No more running around looking for things.When you write
                  things and plan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
