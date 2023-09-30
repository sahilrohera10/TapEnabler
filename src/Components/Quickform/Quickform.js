import React from "react";
import "./Quickform.css";

export default function Quickform() {
  return (
    // <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto p-6 formdiv ">
    //   <div className="bg-white rounded-lg shadow-lg p-8 subdiv">
    //     <h1 className="text-3xl font-semibold mb-6">Quick Connect</h1>
    //     <div className="mb-4">
    //       <input
    //         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
    //         id="firstName"
    //         type="text"
    //         placeholder="First Name"
    //       />
    //     </div>
    //     <div className="mb-4">
    //       <input
    //         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
    //         id="lastName"
    //         type="text"
    //         placeholder="Last Name"
    //       />
    //     </div>
    //     <div className="mb-4">
    //       <input
    //         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
    //         id="email"
    //         type="text"
    //         placeholder="Email Address"
    //       />
    //     </div>
    //     <textarea
    //       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline txtar mb-4"
    //       name="message"
    //       cols="30"
    //       rows="5"
    //       placeholder="Message"
    //     ></textarea>
    //     <div className="text-center">
    //       <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
    //         <span>Submit</span>
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <div className="bg-gradient-to-br from-opacity-50 via-opacity-60 to-opacity-70 backdrop-blur-lg p-6 rounded-md w-2/5 mx-auto mt-10 formdiv">
      <div className="bg-white bg-opacity-40 backdrop-blur-lg rounded-lg shadow-lg p-8 subdiv">
        <h1 className="text-3xl font-semibold mb-6">Quick Contact</h1>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 md:pr-2 mb-2">
            <input
              className="bg-opacity-70 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline inpbox"
              id="firstName"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="md:w-1/2 md:pl-2 mb-2">
            <input
              className="bg-opacity-70 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline inpbox"
              id="phoneNumber"
              type="text"
              placeholder="Ph. Number"
            />
          </div>
        </div>
        <div className="mb-2">
          <input
            className="bg-opacity-70 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline inpemail"
            id="email"
            type="text"
            placeholder="Email Address"
          />
        </div>
        <div className="mb-2">
          <input
            className="bg-opacity-70 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline inpemail"
            id="location"
            type="text"
            placeholder="Location"
          />
        </div>
        <textarea
          className="bg-opacity-70 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline txtar mb-4"
          name="message"
          cols="30"
          rows="5"
          placeholder="Message"
        ></textarea>
        <div className="text-center">
          <button className="bg-opacity-70 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <span>Submit</span>
          </button>
        </div>
      </div>
    </div>
    // <div className="bg-opacity-80 backdrop-blur-md p-6 rounded-md w-2/5 mx-auto mt-10 formdiv">
    //   <div className="bg-white backdrop-blur-md rounded-lg shadow-lg p-8 subdiv">
    //     <h1 className="text-3xl font-semibold mb-6">Quick Connect</h1>
    //     <div className="flex flex-col md:flex-row">
    //       <div className="md:w-1/2 md:pr-2 mb-4">
    //         <input
    //           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline inpbox"
    //           id="firstName"
    //           type="text"
    //           placeholder="First Name"
    //         />
    //       </div>
    //       <div className="md:w-1/2 md:pl-2 mb-4">
    //         <input
    //           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline inpbox"
    //           id="lastName"
    //           type="text"
    //           placeholder="Last Name"
    //         />
    //       </div>
    //     </div>
    //     <div className="mb-4">
    //       <input
    //         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline inpemail"
    //         id="email"
    //         type="text"
    //         placeholder="Email Address"
    //       />
    //     </div>
    //     <textarea
    //       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline txtar mb-4"
    //       name="message"
    //       cols="30"
    //       rows="5"
    //       placeholder="Message"
    //     ></textarea>
    //     <div className="text-center">
    //       <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
    //         <span>Submit</span>
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
}
