import React, { useState } from "react";
import "./ContactUs.css";
import map from "../../assets/map.png";
import emailjs from "@emailjs/browser";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ContactUs() {
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
    console.log("inside");
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
      <div
        id="contactus"
        // style={{ width: "90%", margin: "auto" }}
        className="py-4 lg:py-8  relative"
      >
        <img
          src="https://cdn.tuk.dev/assets/templates/radian/Back_Image.png"
          className="h-2/5 lg:h-full w-full lg:w-1/2 absolute inset-0 object-cover object-center xl:block hidden"
          alt="map"
        />
        <div className="xl:mx-auto xl:container  relative ">
          <div className="flex flex-wrap xl:mx-auto xl:container">
            <div className="w-full relative lg:w-1/2 xl:mt-10 mb-10 2xl:pr-24 2xl:pl-0 xl:pl-12 pl-0 ">
              <img
                src="https://cdn.tuk.dev/assets/templates/radian/Back_Image.png"
                className="h-full w-full xl:w-1/2 absolute inset-0 bg-cover bg-center xl:hidden"
                alt="map"
              />
              <div className="w-full flex flex-col items-start  xl:justify-start  relative z-20 xl:px-0 px-4 xl:py-0 py-4">
                <div className="w-full 2xl:pl-48 xl:pt-1">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider text-gray-800">
                    We’re Here
                  </h1>
                  <div className="w-full md:w-11/12 mt-3">
                    {/* <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider">
                      We believe digital innovation is at the heart of every
                      business success
                    </h2> */}
                    <div className="mt-4 md:mt-8">
                      <h2
                        style={{ color: "#6D9886" }}
                        className="text-sm md:text-base text-indigo-700 font-semibold"
                      >
                        Address
                      </h2>
                      <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">
                        AD Office Spaces, SCO 2, Chaura Bazar 2, Cabin No. 102,
                        1st Floor, next to Old Pal Dhaba, near Best Price by
                        Flipkart and Opposite Cosmo Mall, Ambala Chandigarh
                        Expressway, Zirakpur, Punjab 140603, India
                      </h2>
                    </div>
                    <div className="mt-4 md:mt-8">
                      <h2
                        style={{ color: "#6D9886" }}
                        className="text-sm md:text-base text-indigo-700 font-semibold"
                      >
                        Contact
                      </h2>
                      <div style={{ display: "flex" }}>
                        <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">
                          +91 78144 72221
                        </h2>
                        <div
                          style={{ display: "flex", alignItems: "baseline" }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="33"
                            height="33"
                            viewBox="0 0 48 48"
                          >
                            <path
                              fill="#fff"
                              d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
                            ></path>
                            <path
                              fill="#fff"
                              d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
                            ></path>
                            <path
                              fill="#cfd8dc"
                              d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
                            ></path>
                            <path
                              fill="#40c351"
                              d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
                            ></path>
                            <path
                              fill="#fff"
                              fill-rule="evenodd"
                              d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="28"
                            height="28"
                            viewBox="0 0 48 48"
                          >
                            <path
                              fill="#03a9f4"
                              d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"
                            ></path>
                            <path
                              fill="#03a9f4"
                              d="M33.5 22A11.5 11.5 0 1 0 33.5 45 11.5 11.5 0 1 0 33.5 22zM14.5 3A11.5 11.5 0 1 0 14.5 26 11.5 11.5 0 1 0 14.5 3z"
                            ></path>
                            <path
                              fill="#fff"
                              d="M24.602,36C18,36,15,32.699,15,30.199C15,28.898,15.898,28,17.199,28c2.801,0,2.102,4.102,7.402,4.102c2.699,0,4.199-1.5,4.199-3c0-0.902-0.402-1.902-2.199-2.402l-5.902-1.5C16,24,15.102,21.398,15.102,18.898c0-5.098,4.699-6.898,9.098-6.898C28.301,12,33,14.199,33,17.199c0,1.301-1,2.102-2.301,2.102c-2.398,0-2-3.402-6.801-3.402c-2.398,0-3.797,1.102-3.797,2.703c0,1.598,1.898,2.098,3.598,2.5l4.402,1C32.898,23.199,34,26,34,28.699C33.898,32.898,30.898,36,24.602,36z"
                            ></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="30"
                            height="30"
                            viewBox="0 0 48 48"
                          >
                            <path
                              fill="#29b6f6"
                              d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"
                            ></path>
                            <path
                              fill="#fff"
                              d="M33.95,15l-3.746,19.126c0,0-0.161,0.874-1.245,0.874c-0.576,0-0.873-0.274-0.873-0.274l-8.114-6.733 l-3.97-2.001l-5.095-1.355c0,0-0.907-0.262-0.907-1.012c0-0.625,0.933-0.923,0.933-0.923l21.316-8.468 c-0.001-0.001,0.651-0.235,1.126-0.234C33.667,14,34,14.125,34,14.5C34,14.75,33.95,15,33.95,15z"
                            ></path>
                            <path
                              fill="#b0bec5"
                              d="M23,30.505l-3.426,3.374c0,0-0.149,0.115-0.348,0.12c-0.069,0.002-0.143-0.009-0.219-0.043 l0.964-5.965L23,30.505z"
                            ></path>
                            <path
                              fill="#cfd8dc"
                              d="M29.897,18.196c-0.169-0.22-0.481-0.26-0.701-0.093L16,26c0,0,2.106,5.892,2.427,6.912 c0.322,1.021,0.58,1.045,0.58,1.045l0.964-5.965l9.832-9.096C30.023,18.729,30.064,18.416,29.897,18.196z"
                            ></path>
                          </svg>
                        </div>
                      </div>

                      <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2"></h2>
                    </div>
                    <div className="mt-4 md:mt-8">
                      <h2
                        style={{ color: "#6D9886" }}
                        className="text-sm md:text-base text-indigo-700 font-semibold"
                      >
                        Email
                      </h2>
                      <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">
                        tapenabler@gmail.com
                      </h2>
                    </div>
                    <img className="mapimg" src={map} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2   xl:pt-10 lg:pl-24">
              <div className="flex flex-col items-start xl:justify-start 2xl:justify-end xl:px-0 px-4">
                <h1
                  style={{ color: "#6D9886" }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider text-indigo-700"
                >
                  Let’s Talk
                </h1>
                <div className="w-full 2xl:w-11/12 mt-3">
                  <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider">
                    For enquiries, please email us using the form below
                  </h2>
                  <div className="mt-1 md:mt-4">
                    <p className="text-gray-800 text-base font-medium">Name</p>
                    <input
                      className="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black py-5 pl-4 text-gray-800"
                      type="text"
                      placeholder="your name.."
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mt-4 md:mt-4">
                    <p className="text-gray-800 text-base font-medium">
                      Email Address
                    </p>
                    <input
                      className="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black py-5 pl-4 text-gray-800"
                      type="email"
                      placeholder="example@mail.com"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mt-4 md:mt-4">
                    <p className="text-gray-800 text-base font-medium">
                      Contact Number
                    </p>
                    <input
                      className="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black py-5 pl-4 text-gray-800"
                      type="phoneNumber"
                      placeholder="9999999999"
                      onChange={(e) => setPhn(e.target.value)}
                    />
                  </div>
                  <div className="mt-4 md:mt-4">
                    <p className="text-gray-800 text-base font-medium">
                      Location
                    </p>
                    <input
                      className="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black py-5 pl-4 text-gray-800"
                      type="Address"
                      placeholder="City, State"
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                  <div className="mt-4 md:mt-4">
                    <p className="text-gray-800 text-base font-medium">
                      Message
                    </p>
                    <textarea
                      className="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 resize-none hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black xl:h-40 py-5 pl-4 text-gray-800"
                      type="text"
                      placeholder="Write us something..."
                      defaultValue={""}
                      onChange={(e) => setMsg(e.target.value)}
                    />
                  </div>
                  <div className="py-5">
                    {/* <button className="py-3 md:py-5 px-5 md:px-10 bg-gray-900 text-white hover:opacity-90 ease-in duration-150 text-sm md:text-lg tracking-wider font-semibold">
                      Send
                    </button> */}
                    <LoadingButton
                      sx={{ backgroundColor: "#414141" }}
                      onClick={(e) => handleSubmitform(e)}
                      endIcon={<SendIcon />}
                      loading={loading}
                      loadingPosition="end"
                      variant="contained"
                    >
                      <span>Submit</span>
                    </LoadingButton>
                    {filled ? (
                      ""
                    ) : (
                      <h6 style={{ color: "red", textAlign: "center" }}>
                        Please fill all the details !!
                      </h6>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
