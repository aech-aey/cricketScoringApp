import React from "react";
import { Button } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
const ScoreButtons = ({
  scorebtn,
  handleButtonClick,
  handleMenuClose,
  handleMenuItemClick,
  anchorEl
}) => {
  return (
    <>
      <div className="scoresbtn">
        {scorebtn.map((scorebtn, index) => (
          <Button
            key={index}
            variant="contained"
            onClick={(event) => {
              handleButtonClick(scorebtn.stats, event);
            }}
            style={{ margin: "0px 10px 10px 0px" }}
            className="scorebtn"
          >
            {scorebtn.stats}
          </Button>
        ))}
      </div>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        BackdropProps={{
          onClick: null
        }}
      >
        {scorebtn
          .filter(
            (score) =>
              score.stats !== "NB" &&
              score.stats !== "WD" &&
              score.stats !== "Undo" &&
              score.stats !== "W"
          )
          .map((score, index) => (
            <MenuItem
              key={index}
              onClick={() => handleMenuItemClick(score.stats)}
            >
              {score.stats}
            </MenuItem>
          ))}
      </Menu>
    </>
  );
};

export default ScoreButtons;
