// BookAppointmentButton.js

import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Selector from "./Selector";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  textAlign: "center",
  transform: "translate(-50%, -50%)",
  width: "auto",
  maxHeight: "90vh",
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

const slots = ["10am - 11am", "12pm - 1pm"];

function BookAppoinbtn() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <button
        style={{ zIndex: "1000000000000" }}
        className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={handleOpen}
      >
        Book an Appointment
      </button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form action="">
            <Typography
              style={{ textAlign: "center" }}
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              Book an Appointment with Us
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <TextField
                style={{ marginBottom: "10px", width: "16rem" }}
                required
                id="outlined-basic"
                label="Full Name"
                variant="outlined"
              />
              <br />

              <TextField
                style={{ marginBottom: "10px", width: "16rem" }}
                required
                id="outlined-basic"
                label="Email Id"
                variant="outlined"
              />
              <br />
              <TextField
                style={{ marginBottom: "10px", width: "16rem" }}
                required
                id="outlined-basic"
                label="Ph.Number"
                variant="outlined"
              />
              <br />
              <TextField
                style={{ marginBottom: "10px", width: "16rem" }}
                required
                id="outlined-basic"
                label="Locattion"
                variant="outlined"
              />
              <br />
              <Selector title="Select a Service" options={service} />
              <br />
              <Selector title="Select Time slot" options={slots} />
              <br />
              <Selector title="Select Mode" options={mode} />
            </Typography>
            <br />
            <Button variant="contained">Book Now</Button>
          </form>
        </Box>
      </Modal>
    </>
  );
}

export default BookAppoinbtn;
