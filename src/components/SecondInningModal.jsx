import React from "react";
import { Modal, TextField, Button } from "@mui/material";
const SecondInningModal = ({
  secondInningModal,
  handleSecondInningModal,
  secondInningsFirstBatsmanName,
  setSecondInningsFirstBatsmanName,
  secondInningsSecondBatsmanName,
  setSecondInningsSecondBatsmanName,
  secondInningsBowlerName,
  setSecondInningsBowlerName,
  handleSecondInningStart
}) => {
  return (
    <Modal
      open={secondInningModal}
      onClose={handleSecondInningModal}
      style={{
        backgroundColor: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
      BackdropProps={{
        onClick: null
      }}
    >
      <div
        style={{
          backgroundColor: "#222",
          padding: "20px",
          borderRadius: "8px",
          maxWidth: "100vw",
          maxHeight: "100vh",
          overflow: "auto"
        }}
      >
        <div className="btnModal">
          <h2 style={{ color: "#307ecc", margin: "10px 0" }}>
            Enter Details for Second Inning
          </h2>
        </div>

        <div className="scnd">
          <TextField
            label="New First Batsman Name"
            value={secondInningsFirstBatsmanName}
            onChange={(e) => setSecondInningsFirstBatsmanName(e.target.value)}
            InputLabelProps={{
              style: { color: "white" }
            }}
            InputProps={{
              style: {
                color: "white",
                border: "1px solid white"
              }
            }}
            className="scndInp"
          />
          <TextField
            label="New Second Batsman Name"
            value={secondInningsSecondBatsmanName}
            onChange={(e) => setSecondInningsSecondBatsmanName(e.target.value)}
            InputLabelProps={{
              style: { color: "white" }
            }}
            InputProps={{
              style: {
                color: "white",
                border: "1px solid white"
              }
            }}
            className="scndInp"
          />
          <TextField
            label="New Bowler Name"
            value={secondInningsBowlerName}
            onChange={(e) => setSecondInningsBowlerName(e.target.value)}
            InputLabelProps={{
              style: { color: "white" }
            }}
            InputProps={{
              style: {
                color: "white",
                border: "1px solid white"
              }
            }}
            className="scndInp"
          />
          <div className="btnModal">
            <Button
              variant="contained"
              onClick={handleSecondInningStart}
              className="btnModal"
            >
              Start Second Innings
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SecondInningModal;
