import React, { useState } from "react";
import "./ContactUs.css";
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
                        AD Office Spaces, SCO 2, Chaura Bazar 2, Next to Best
                        Price and Opposite Cosmo Mall, Ambala Chandigarh
                        Expressway, Opposite Bristol Hotel, Zirakpur, Punjab
                        140603, India
                      </h2>
                    </div>
                    <div className="mt-4 md:mt-8">
                      <h2
                        style={{ color: "#6D9886" }}
                        className="text-sm md:text-base text-indigo-700 font-semibold"
                      >
                        Contact
                      </h2>
                      {/* <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">
                        +91 99994 33409 (Garima Walia Rai)
                      </h2> */}
                      <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">
                        +91 80766 17064 (Farha Baig)
                      </h2>
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
                    <img
                      className="mapimg"
                      src="https://developers.google.com/static/maps/images/landing/hero_maps_static_api.png"
                      alt=""
                    />
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
