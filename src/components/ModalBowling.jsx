import React from "react";
import {
  Modal,
  TextField,
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from "@mui/material";

const BowlerModal = ({
  open,
  onClose,
  newBowlerName,
  handleNewBowlerName,
  bowlerData,
  bowlerContinue,
  addNewBowler
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      style={{
        backgroundColor: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
      BackdropProps={{
        onClick: null // Disable click event for the backdrop
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
          <TextField
            label="Enter Bowler Name"
            value={newBowlerName}
            onChange={handleNewBowlerName}
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
        </div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="batsmanTable hbt">Bowler Name</TableCell>
              <TableCell className="batsmanTable hbt">Runs</TableCell>
              <TableCell className="batsmanTable hbt">Overs</TableCell>
              <TableCell className="batsmanTable hbt">Wickets</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bowlerData.map((bowler, index) => (
              <TableRow
                key={index}
                onClick={() => {
                  bowlerContinue(bowler);
                }}
              >
                <TableCell style={{ color: "#4791db", fontWeight: "600" }}>
                  {bowler.name}
                </TableCell>
                <TableCell className="batsmanTable">{bowler.runs}</TableCell>
                <TableCell className="batsmanTable">{bowler.overs}</TableCell>
                <TableCell className="batsmanTable">{bowler.wickets}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="btnModal">
          <Button variant="contained" onClick={addNewBowler}>
            Save
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default BowlerModal;
