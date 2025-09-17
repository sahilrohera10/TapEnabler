import React, { useState } from "react";
import ServiceModal from "../ServiceModal";
import { motion } from "framer-motion";

const CandT = ["Counsellings", "Therapies"];
const ECI = [
  "Aggressive Behaviour",
  "Articulation/Voice Concerns",
  "Attachment Concerns",
  "Attention/Focus",
  "Depression",
  "Eating Concerns",
  "Elimination Concerns",
  "Expressive Language Delay",
  "Generalized Anxiety",
  "Hearing Deficits",
  "Mild Cognitive Delays",
  "Moderate/Severe Cognitive Impairment",
  "Oppositional Behaviour",
  "Physical Impairment",
  "Receptive Language Delay",
  "School Entry Readiness",
  "Sensory Integration Needs",
  "Separation Anxiety",
  "Shyness/Social Phobia",
  "Sleep Issues",
  "Social Skills Delay",
  "Vision Deficits/Blindness",
  "Et cetera",
];

const AAT = [];
const ESN = [
  "Attention Deficit ",
  "Hyperactivity Disorder",
  "Autism Spectrum Disorder",
  "Brittle Bones",
  "Challenging Behaviors",
  "Down's Syndrome",
  "Eating Disorder",
  "Expressive Language Difficulties",
  "Specific Learning Disabilities",
  "Speech and Language Disability",
  "Personality Disorders",
  "Multiple Disabilities",
  "Blood Disorder (Haemophilia, Thalassemia, Sickle Cell Disease, etc.)",
  "Tourette's Syndrome",
  "Intellectual Disability",
  "Mental Disorder / Behavior / Illness",
  "Moderate Learning Difficulties",
  "Mood Disorder (Depression, etc.)",
  "Receptive Language Difficulties",
  "Semantic Pragmatic Disorder",
  "Visual Impairment (Blindness, Low Vision, etc.)",
  "Post Traumatic Stress Disorder",
  "Physical Disability (Locomotor Disability: Leprosy Cured Person, Cerebral Palsy, Dwarfism, Muscular Dystrophy,Acid Attack Victims, etc.)",
  "Anxiety Disorders (Obsessive Compulsive Disorder, etc.)",
  "Psychotic Disorders (Schizophrenia, etc.)",
  "Hearing Impairment (Deaf, Hard of Hearing, etc.)",
  "Disability caused due to Chronic Neurological Conditions such as Multiple Sclerosis, Parkinson’s Disease, etc.",
  "Et cetera",
];

const TILM = ["Learning Material", "Below 18", "Above 18"];
const ADA = ["Counsellings", "Therapies"];

export default function Services() {
  const [open, setOpen] = useState();
  const [data, setData] = useState();
  const [name, setName] = useState();

  const handleOpen = (d, name) => {
    setOpen(true);
    if (d === "ECI") setData(ECI);
    if (d === "CandT") setData(CandT);
    if (d === "ESN") setData(ESN);
    if (d === "TILM") setData(TILM);
    if (d === "ADA") setData(ADA);
    setName(name);
  };

  return (
    <>
      <div id="services" className="dark:bg-gray-900">
        <section className="mx-auto container py-20 ">
          <div className="flex justify-center items-center flex-col">
            <div className="lg:text-3xl md:text-5xl text-4xl font-black leading-10 text-center text-gray-800 dark:text-white">
              <h1
                className="pb-4 text-3xl font-bold "
                style={{
                  color: "#212121",
                  borderBottom: "5px solid #D9CAB3",
                  borderRadius: "20px",
                }}
              >
                Our Services
              </h1>
              {/* <hr style={{ width: "10vw", marginLeft: "1vw" }} /> */}
            </div>
            <motion.div
              viewport={{ once: false }}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: "easeIn", duration: 1, delay: 0.15 }}
              className="pt-14 grid lg:grid-cols-3 md:grid-cols-2 justify-center items-center xl:gap-y-16 gap-y-20 gap-x-16 lg:gap-x-20 xl:gap-x-0 lg:px-10 xl:px-0"
            >
              <div
                onClick={() =>
                  handleOpen(
                    "CandT",
                    "Guidance + Support - Counselling & Therapies (C&T)"
                  )
                }
                className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col"
              >
                <div className="mb-6">
                  <span
                    style={{ fontSize: "35px", color: "#6D9886" }}
                    class="material-symbols-outlined"
                  >
                    volunteer_activism
                  </span>
                </div>
                <div className="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                  <h2>Guidance + Support - Counselling & Therapies (C&T)</h2>
                </div>
                <div className="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center ">
                  <p style={{ textAlign: "center" }}>
                    We bring about the process of giving fruitful direction or
                    helpful suggestion regarding a decision or any future course
                    of action in order for the person to discover and develop
                    his/her individual, educational, occupational, psychological
                    and other such potentialities to be able to achieve an
                    optimal level of personal happiness and social usefulness
                    through various facilities being provided by us.
                  </p>
                  <br />
                  <button
                    style={{ background: "#6D9886" }}
                    type="button"
                    class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  >
                    Learn More
                  </button>
                </div>
              </div>
              <div
                onClick={() =>
                  handleOpen(
                    "ECI",
                    "Early Childhood Intervention, Development & Education (ECIDE)"
                  )
                }
                className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col"
              >
                <div className="mb-6">
                  <span
                    style={{ fontSize: "35px", color: "#6D9886" }}
                    class="material-symbols-outlined"
                  >
                    child_care
                  </span>
                </div>
                <div className="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                  <h2>
                    Early Childhood Intervention, Development & Education
                    (ECIDE)
                  </h2>
                </div>
                <div className="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center">
                  <p style={{ textAlign: "center" }}>
                    We offer the education and care of young children by
                    identifying and providing effective early support to those
                    who are at risk of poor outcomes before the problems get any
                    worse by working on a multitude of presenting issues, some
                    common and relatively minor but others very serious in
                    nature, potentially altering or significantly interfering
                    with the normal growth and development of the young child.
                  </p>
                  <br />
                  <button
                    style={{ background: "#6D9886" }}
                    type="button"
                    class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  >
                    Learn More
                  </button>
                </div>
              </div>
              {/* <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
                <div className="mb-6">
                  <span
                    style={{ fontSize: "35px", color: "#6D9886" }}
                    class="material-symbols-outlined"
                  >
                    pets
                  </span>
                </div>
                <a href="https://forms.gle/EGWWX5QHB3sPa4Mi7" target="_blank">
                  <div className="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                    <h2>
                      Animal-Assisted Therapy, Activities & Education (AATAE)
                    </h2>
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center">
                    <p style={{ textAlign: "center" }}>
                      Here, a student gets to engage as a participant by
                      spending time with an animal during a specific
                      goal-oriented therapy session which can be either
                      physical, emotional, educational and/or psychological
                      among others. It is further a health intervention, meant
                      to improve physical, social, emotional and/or cognitive
                      functioning of the participant with animals as an integral
                      part of the therapy.
                    </p>
                    <br />
                    <button
                      style={{ background: "#6D9886" }}
                      type="button"
                      class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                    >
                      Learn More
                    </button>
                  </div>
                </a>
              </div> */}
              <div
                onClick={() =>
                  handleOpen("ESN", "Enabling Special Needs (ESN)")
                }
                className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col"
              >
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
                  <p style={{ textAlign: "center" }}>
                    Formally known as Special Education and Special Needs
                    Education, we bring about a variety of education for the
                    students who differ socially, mentally and/or physically
                    from the others to such an extent that they may require
                    modifications/accommodations of commonly used practices by
                    catering the unique needs of a student with a disability
                    and/or disorder, through our various and flexible teaching
                    holistic approaches.
                  </p>
                  <br />
                  <button
                    style={{ background: "#6D9886" }}
                    type="button"
                    class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  >
                    Learn More
                  </button>
                </div>
              </div>
              <div
                onClick={() =>
                  handleOpen(
                    "TILM",
                    "Tailor-Made Instructional Learning Material (T-ILM)"
                  )
                }
                className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col"
              >
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
                  <p style={{ textAlign: "center" }}>
                    Here, we customize the Teaching Learning Materials (TLM),
                    whether animate and inanimate objects in relation to human
                    and non-human resources that a professional may use in
                    teaching and learning situations to help achieve desired
                    learning objectives for the students. These include the
                    readings, textbooks, worksheets, multimedia components and
                    other related resources in a given course of study.
                  </p>
                  <br />
                  <button
                    style={{ background: "#6D9886" }}
                    type="button"
                    class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  >
                    Learn More
                  </button>
                </div>
              </div>
              <div
                onClick={() =>
                  handleOpen("ADA", "Alcohol & Drug Addiction (ADA)")
                }
                className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col"
              >
                <div className="mb-6">
                  <span
                    style={{ fontSize: "35px", color: "#6D9886" }}
                    class="material-symbols-outlined"
                  >
                    liquor
                  </span>
                </div>
                <div className="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                  <h2>Alcohol & Drug Addiction (ADA)</h2>
                </div>
                <div className="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center">
                  <p style={{ textAlign: "center" }}>
                    This is for the individuals, along with their family and
                    friends, who are looking for options to address alcohol and
                    drug related problems as our therapy is intended as a
                    resource to offer various behavioural treatments that are
                    aimed at changing a specific behaviour through counselling
                    which are further led by professionals and supported by
                    studies showing they can be beneficial.
                  </p>
                  <br />
                  <button
                    style={{ background: "#6D9886" }}
                    type="button"
                    class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <ServiceModal open={open} data={data} name={name} setOpen={setOpen} />
    </>
  );
}
