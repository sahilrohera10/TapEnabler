import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { tSExternalModuleReference } from "@babel/types";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  maxHeight: "90vh",
  overflow: "auto",
  bgcolor: "background.paper",
  //   border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ServiceModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => props.setOpen(false);
  const [newdata, setNewdata] = React.useState();
  const [name, setName] = React.useState();

  const link = "https://forms.gle/EGWWX5QHB3sPa4Mi7";

  const Counselling = [
    "Individual & Personal ",
    "Family & Relatives ",
    "Family & Relatives ",
    "Special Needs",
    "Educational",
    "Others",
  ];

  const therapies = [
    "Academical / Educational",
    "Academical / Educational",
    "Life Skills",
    "Physiological",
    "Functional / Practica",
    "Mental / Psychological",
    "Emotional",
    "Spiritual",
    "Therapeutical",
    "Guidance / Counselling",
  ];

  console.log("data=>", props.data);
  const data = props.data;

  if (props.name !== "Guidance + Support - Counselling & Therapies (C&T)")
    return (
      <div>
        {/* <Button onClick={handleOpen}>Open modal</Button> */}
        <Modal
          open={props.open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              style={{ fontWeight: "600", fontSize: "25px" }}
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              {props.name}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <div class="grid-container">
                {data &&
                  data.map((d) => (
                    <div class="grid-item">
                      {" "}
                      <a href={link} target="_blank">
                        {" "}
                        {d}
                      </a>{" "}
                    </div>
                  ))}
              </div>
            </Typography>
          </Box>
        </Modal>
      </div>
    );
  else {
    const handleOpenAgain = (name) => {
      handleOpen(true);
      if (name === "Counsellings") setNewdata(Counselling);
      if (name === "Therapies") setNewdata(therapies);
      setName(name);
    };
    return (
      <>
        <div>
          {/* <Button onClick={handleOpen}>Open modal</Button> */}
          <Modal
            open={props.open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography
                style={{ fontWeight: "600", fontSize: "25px" }}
                id="modal-modal-title"
                variant="h6"
                component="h2"
              >
                {props.name} new
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <div class="grid-container">
                  <div
                    onClick={() => handleOpenAgain(data[0])}
                    class="grid-item"
                  >
                    {" "}
                    {data[0]}{" "}
                  </div>
                  <div
                    onClick={() => handleOpenAgain(data[1])}
                    class="grid-item"
                  >
                    {" "}
                    {data[1]}{" "}
                  </div>
                </div>
              </Typography>
            </Box>
          </Modal>
        </div>
        <ServiceModal
          open={open}
          data={newdata}
          name={name}
          setOpen={setOpen}
        />
      </>
    );
  }
}
