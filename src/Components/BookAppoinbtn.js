// BookAppointmentButton.js

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Selector from "./Selector";
import emailjs from "@emailjs/browser";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  textAlign: "center",
  transform: "translate(-50%, -50%)",
  width: "auto",
  maxHeight: "96vh",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  overflow: "auto",
  p: 4,
};

const service = [
  "Guidance + Support - Counselling & Therapies (C&T)",
  "Early Childhood Intervention, Development & Education (ECIDE)",
  "Animal-Assisted Therapy, Activities & Education (AATAE)",
  "Enabling Special Needs (ESN)",
  "Tailor-Made Instructional Learning Material (T-ILM)",
  "Alcohol & Drug Addiction (ADA)",
];
const mode = ["Online", "Offline"];

const slots = [
  "10:00am - 10:30am",
  "10:30am - 11:00am",
  "11:00am - 11:30am",
  "11:30am - 12:00pm",
  "12:00pm - 12:30pm",
  "12:30pm - 1:00pm",
  "1:00pm - 1:30pm",
  "1:30pm - 2:00pm",
  "2:00pm - 2:30pm",
  "2:30pm - 3:00pm",
  "3:00pm - 3:30pm",
  "3:30pm - 4:00pm",
  "4:00pm - 4:30pm",
  "4:30pm - 5:00pm",
];

function BookAppoinbtn() {
  const [openapp, setOpenapp] = React.useState(false);

  const [name, setName] = useState("");
  const [phn, setPhn] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [service, setService] = useState("");
  const [time, setTime] = useState("");
  const [mode, setMode] = useState("");
  const [loading, setLoading] = useState();

  const [opennew, setOpennew] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [filled, setFilled] = useState(true);

  const handleClosenew = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpennew(false);
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
      service === "" ||
      time === "" ||
      mode === ""
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
          message: `An appointment has been booked!! - Details:- Email : ${email} ,Location : ${location} , ContactNo. : ${phn} , Service: ${service}, Time Slot : ${time}, Mode : ${mode}`,
        },
        "-HuVhrxu1o9dlelnH"
        // Use your user ID here
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        setOpennew(true);
        setLoading(false);
        setEmail("");
        setName("");
        setLocation("");
        setPhn("");
        setService("");
        setTime("");
        setMode("");
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        setOpen2(true);
        setLoading(false);
      });
  };

  const handleOpenapp = () => setOpenapp(true);
  const handleClose = () => setOpenapp(false);
  return (
    <>
      <Snackbar open={opennew} autoHideDuration={4000} onClose={handleClosenew}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Message Sent Successfully!
        </Alert>
      </Snackbar>

      <Snackbar open={open2} autoHideDuration={4000} onClose={handleClose2}>
        <Alert onClose={handleClose2} severity="error" sx={{ width: "100%" }}>
          Some Errored Occured!
        </Alert>
      </Snackbar>
      <button
        style={{ zIndex: "1000000000000" }}
        className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={handleOpenapp}
      >
        Book an Appointment
      </button>

      <Modal
        open={openapp}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form action="">
            <Typography
              style={{ textAlign: "center", fontSize: "17px" }}
              id="modal-modal-title"
              variant="h6"
              component="h3"
            >
              Book an Appointment with Us <br />
              Or <br />
              Just give a call at <br /> +91 78144 72221
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <TextField
                style={{ marginBottom: "10px", width: "16rem" }}
                required={true}
                id="outlined-basic"
                label="Full Name"
                variant="outlined"
                onChange={(e) => setName(e.target.value)}
              />
              <br />

              <TextField
                style={{ marginBottom: "10px", width: "16rem" }}
                required={true}
                id="outlined-basic"
                label="Email Id"
                variant="outlined"
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <TextField
                style={{ marginBottom: "10px", width: "16rem" }}
                required={true}
                id="outlined-basic"
                label="Ph.Number"
                variant="outlined"
                onChange={(e) => setPhn(e.target.value)}
              />
              <br />
              <TextField
                style={{ marginBottom: "10px", width: "16rem" }}
                required={true}
                id="outlined-basic"
                label="Location"
                variant="outlined"
                onChange={(e) => setLocation(e.target.value)}
              />
              <br />
              <Selector
                title="Select a Service"
                options={service}
                setThis={setService()}
                this={service}
              />
              <br />
              <Selector
                title="Select Time Slot"
                options={slots}
                setThis={setTime()}
                this={time}
              />
              <br />
              <Selector
                title="Select Mode"
                options={mode}
                setThis={setMode}
                this={mode}
              />
            </Typography>
            <br />
            <LoadingButton
              onClick={(e) => handleSubmitform(e)}
              endIcon={<SendIcon />}
              loading={loading}
              loadingPosition="end"
              variant="contained"
            >
              <span>Book Now</span>
            </LoadingButton>
            {filled ? (
              ""
            ) : (
              <h6 style={{ color: "red", textAlign: "center" }}>
                Please fill all the details !!
              </h6>
            )}
          </form>
        </Box>
      </Modal>
    </>
  );
}

export default BookAppoinbtn;
