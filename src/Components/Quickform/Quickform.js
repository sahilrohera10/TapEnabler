import React, { useState } from "react";
import "./Quickform.css";
import emailjs from "@emailjs/browser";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Quickform() {
  const [name, setName] = useState("");
  const [phn, setPhn] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState();

  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [filled, setFilled] = useState(true);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handleClose2 = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen2(false);
  };

  const handleSubmitform = (e) => {
    e.preventDefault();

    if (
      name === "" ||
      email === "" ||
      phn === "" ||
      location === "" ||
      msg === ""
    ) {
      setFilled(false);
      return;
    }

    setFilled(true);
    setLoading(true);
    // emailjs.init("HuVhrxu1o9dlelnH");
    console.log("fine");
    emailjs
      .send(
        "service_l74qa2u", // Use your service ID here
        "template_4psvmrp", // Use your template ID here
        {
          from_name: name,
          from_email: email,
          message: `Email : ${email} ,Location : ${location} , ContactNo. : ${phn} , Query: ${msg}`,
        },
        "-HuVhrxu1o9dlelnH"
        // Use your user ID here
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        setOpen(true);
        setLoading(false);
        setEmail("");
        setName("");
        setLocation("");
        setPhn("");
        setMsg("");
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        setOpen2(true);
        setLoading(false);
      });
  };

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
    <>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Message Sent Successfully!
        </Alert>
      </Snackbar>

      <Snackbar open={open2} autoHideDuration={4000} onClose={handleClose2}>
        <Alert onClose={handleClose2} severity="error" sx={{ width: "100%" }}>
          Some Errored Occured!
        </Alert>
      </Snackbar>
      <div className="bg-gradient-to-br from-opacity-50 via-opacity-60 to-opacity-70 backdrop-blur-lg p-6 rounded-md w-2/5 mx-auto mt-10 formdiv">
        <form className="bg-white bg-opacity-40 backdrop-blur-lg rounded-lg shadow-lg p-8 subdiv">
          <h1 className="text-3xl font-semibold mb-6">Quick Contact</h1>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 md:pr-2 mb-2">
              <input
                required="true"
                className="bg-opacity-70 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline inpbox"
                id="fullName"
                type="text"
                placeholder="Full Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="md:w-1/2 md:pl-2 mb-2">
              <input
                required="true"
                className="bg-opacity-70 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline inpbox"
                id="phoneNumber"
                type="text"
                placeholder="Ph. Number"
                onChange={(e) => setPhn(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-2">
            <input
              required="true"
              className="bg-opacity-70 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline inpemail"
              id="email"
              type="text"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <input
              required="true"
              className="bg-opacity-70 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline inpemail"
              id="location"
              type="text"
              placeholder="Location"
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <textarea
            required="true"
            className="bg-opacity-70 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline txtar mb-4"
            name="message"
            cols="30"
            rows="5"
            placeholder="Message"
            onChange={(e) => setMsg(e.target.value)}
          ></textarea>
          <div className="text-center">
            {/* <button
              onClick={(e) => handleSubmitform(e)}
              className="bg-opacity-70 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
            >
              <span>Submit</span>
            </button> */}
            <LoadingButton
              onClick={(e) => handleSubmitform(e)}
              endIcon={<SendIcon />}
              loading={loading}
              loadingPosition="end"
              variant="contained"
            >
              <span>Submit</span>
            </LoadingButton>
          </div>
          {filled ? (
            ""
          ) : (
            <h6 style={{ color: "red", textAlign: "center" }}>
              Please fill all the details !!
            </h6>
          )}
        </form>
      </div>
    </>
  );
}
