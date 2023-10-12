import React from "react";
import { Modal, TextField, Button } from "@mui/material";
const ModalBatting = ({
  openModal,
  handleCloseModal,
  newBatsmanName,
  handleNewBatsman,
  undoWicket,
  addNewBatsman
}) => {
  return (
    <Modal
      open={openModal}
      onClose={handleCloseModal}
      BackdropProps={{
        onClick: null
      }}
      style={{
        backgroundColor: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
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
        <TextField
          label="Enter New Batsman Name"
          value={newBatsmanName}
          onChange={handleNewBatsman}
          InputLabelProps={{
            style: { color: "white" }
          }}
          InputProps={{
            style: {
              color: "white",
              border: "1px solid white"
            }
          }}
        />
        <div className="btnModal newBatsman">
          <Button variant="contained" onClick={addNewBatsman}>
            Save
          </Button>
          <Button
            variant="contained"
            onClick={undoWicket}
            className="undoWicket"
            style={{ marginTop: "10px" }}
          >
            Undo Wicket
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalBatting;
