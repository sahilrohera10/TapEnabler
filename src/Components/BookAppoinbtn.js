// BookAppointmentButton.js

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Selector from "./Selector";
import emailjs from "@emailjs/browser";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

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

const services = [
  "Guidance + Support - Counselling & Therapies (C&T)",
  "Early Childhood Intervention, Development & Education (ECIDE)",
  "Animal-Assisted Therapy, Activities & Education (AATAE)",
  "Enabling Special Needs (ESN)",
  "Tailor-Made Instructional Learning Material (T-ILM)",
  "Alcohol & Drug Addiction (ADA)",
];
const mode = ["Online", "Offline"];

const slots = [
  "10:00AM- 10:30AM",
  "10:30AM- 11:00AM",
  "11:00AM- 11:30AM",
  "11:30AM- 12:00PM",
  "12:00PM- 12:30PM",
  "12:30PM- 1:00PM",
  "1:00PM- 1:30PM",
  "1:30PM- 2:00PM",
  "2:00PM- 2:30PM",
  "2:30PM- 3:00PM",
  "3:00PM- 3:30PM",
  "3:30PM- 4:00PM",
  "4:00PM- 4:30PM",
  "4:30PM- 5:00PM",
  "5:00PM- 5:30PM",
  "5:30PM- 6:00PM",
];

function BookAppoinbtn() {
  const [openm, setOpenm] = React.useState(false);
  const handleOpen = () => setOpenm(true);
  const handleClosem = () => setOpenm(false);

  const [name, setName] = useState("");
  const [phn, setPhn] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [service, setService] = useState("");
  const [slot, setSlot] = useState("");
  const [smode, setSmode] = useState("");

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
      slot === "" ||
      service === "" ||
      smode === ""
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
          message: `Hey you got an Appointment with ${name}, personal-details:- Email : ${email} ,Location : ${location} , ContactNo. : ${phn} and service details:- service-name : ${service}, slot : ${slot}, mode : ${smode} `,
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
        setService("");
        setSlot("");
        setSmode("");
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
          An appointment has been confirmed Successfully!
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
        onClick={handleOpen}
      >
        Book an Appointment
      </button>

      <Modal
        open={openm}
        onClose={handleClosem}
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
                required
                id="outlined-basic"
                label="Full Name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <br />

              <TextField
                style={{ marginBottom: "10px", width: "16rem" }}
                required
                id="outlined-basic"
                label="Email Id"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <TextField
                style={{ marginBottom: "10px", width: "16rem" }}
                required
                id="outlined-basic"
                label="Ph.Number"
                variant="outlined"
                value={phn}
                onChange={(e) => setPhn(e.target.value)}
              />
              <br />
              <TextField
                style={{ marginBottom: "10px", width: "16rem" }}
                required
                id="outlined-basic"
                label="Location"
                variant="outlined"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <br />
              <Selector
                title="Select a Service"
                options={services}
                thisState={service}
                setState={setService}
              />
              <br />
              <Selector
                title="Select Time Slot"
                options={slots}
                thisState={slot}
                setState={setSlot}
              />
              <br />
              <Selector
                title="Select Mode"
                options={mode}
                thisState={smode}
                setState={setSmode}
              />
            </Typography>
            <br />
            {/* <Button variant="contained">Book Now</Button> */}
            <LoadingButton
              onClick={(e) => handleSubmitform(e)}
              endIcon={<SendIcon />}
              loading={loading}
              loadingPosition="end"
              variant="contained"
            >
              <span>Book Now</span>
            </LoadingButton>
          </form>
        </Box>
      </Modal>
    </>
  );
}

export default BookAppoinbtn;
