import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import MainPage from "./MainPage";
function BatsmanName() {
  const [overInput, setOverInput] = useState("");
  const [startScoring, setStartScoring] = useState(false);
  const [teamName, setTeamName] = useState("");
  const [teamNameError, setTeamNameError] = useState(false);

  const [overError, setOverError] = useState(false);
  const [opponentTeamName, setOpponentTeamName] = useState("");

  const [opponentTeamNameError, setOpponentTeamNameError] = useState(false);
  const [firstBatsman, setFirstBatsman] = useState("");
  const [secondBatsman, setSecondBatsman] = useState("");
  const [firstBatsmanError, setFirstBatsmanError] = useState(false);
  const [secondBatsmanError, setSecondBatsmanError] = useState(false);
  const [bowler, setBowler] = useState("");
  const [bowlerError, setBowlerError] = useState(false);
  const [next, setNext] = useState(false);

  const handleButtonClick = () => {
    if (firstBatsman === "") {
      setFirstBatsmanError(true);
    } else {
      setFirstBatsmanError(false);
    }

    if (secondBatsman === "") {
      setSecondBatsmanError(true);
    } else {
      setSecondBatsmanError(false);
    }

    if (bowler === "") {
      setBowlerError(true);
    } else {
      setBowlerError(false);
    }
    if (teamName === "") {
      setTeamNameError(true);
    } else {
      setTeamNameError(false);
    }

    if (overInput === "" || parseFloat(overInput) <= 0) {
      setOverError(true);
    } else {
      setOverError(false);
    }
    if (opponentTeamName === "") {
      setOpponentTeamNameError(true);
    } else {
      setOpponentTeamNameError(false);
    }

    if (
      firstBatsman !== "" &&
      secondBatsman !== "" &&
      bowler !== "" &&
      teamName !== "" &&
      opponentTeamName !== "" &&
      overInput > 0
    ) {
      setNext(true);
    }
  };

  if (next) {
    return (
      <MainPage
        firstBatsman={firstBatsman}
        secondBatsman={secondBatsman}
        bowler={bowler}
        overs={overInput}
        teamName={teamName}
        opponentTeamName={opponentTeamName}
      />
    );
  }

  return (
    <div className="Batsmanname">
      <h2 style={{ marginBottom: "20px", color: "#4791db" }}>
        Start New Innings
      </h2>
      <Box
        component="form"
        className="form-container" // Apply a class for container styling
        noValidate
        autoComplete="off"
      >
        <div className="teamNameInp">
          <TextField
            required
            id="outlined-required"
            label="Batting Team Name"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            error={teamNameError}
            helperText={teamNameError ? "Team name is required" : ""}
            InputLabelProps={{
              style: { color: "white" }
            }}
            InputProps={{
              style: {
                color: "white",
                border: "1px solid white"
              }
            }}
            className="bName"
          />

          <TextField
            required
            id="outlined-required"
            label="Bowling Team Name"
            value={opponentTeamName}
            onChange={(e) => setOpponentTeamName(e.target.value)}
            error={opponentTeamNameError}
            helperText={
              opponentTeamNameError ? "Opponent team name is required" : ""
            }
            InputLabelProps={{
              style: { color: "white" }
            }}
            InputProps={{
              style: {
                color: "white",
                border: "1px solid white"
              }
            }}
            className="bName"
          />

          <TextField
            required
            id="outlined-required"
            label="Enter Over"
            type="number"
            value={overInput}
            onChange={(e) => setOverInput(e.target.value)}
            inputProps={{
              inputMode: "numeric",
              pattern: "[0-9]*"
            }}
            error={overError}
            helperText={
              overError
                ? overInput === ""
                  ? "Over is required"
                  : "Invalid over value"
                : ""
            }
            InputLabelProps={{
              style: { color: "white" }
            }}
            InputProps={{
              style: {
                color: "white",
                border: "1px solid white"
              }
            }}
            className="bName"
          />

          <TextField
            required
            id="outlined-required"
            label="1st batsman Name"
            value={firstBatsman}
            onChange={(e) => setFirstBatsman(e.target.value)}
            error={firstBatsmanError}
            helperText={firstBatsmanError ? "1st batsman name is required" : ""}
            InputLabelProps={{
              style: { color: "white" }
            }}
            InputProps={{
              style: {
                color: "white",
                border: "1px solid white"
              }
            }}
            className="bName"
          />

          <TextField
            required
            id="outlined-required"
            label="2nd batsman Name"
            value={secondBatsman}
            onChange={(e) => setSecondBatsman(e.target.value)}
            error={secondBatsmanError}
            helperText={
              secondBatsmanError ? "2nd batsman name is required" : ""
            }
            InputLabelProps={{
              style: { color: "white" }
            }}
            InputProps={{
              style: {
                color: "white",
                border: "1px solid white"
              }
            }}
            className="bName"
          />

          <TextField
            required
            id="outlined-required"
            label="Bowler Name"
            value={bowler}
            onChange={(e) => setBowler(e.target.value)}
            error={bowlerError}
            helperText={bowlerError ? "Bowler name is required" : ""}
            InputLabelProps={{
              style: { color: "white" }
            }}
            InputProps={{
              style: {
                color: "white",
                border: "1px solid white"
              }
            }}
            className="bName"
          />

          <div className="btnModal">
            <Button
              variant="contained"
              onClick={handleButtonClick}
              className="next-button" // Apply a class for button styling
            >
              Next
            </Button>
          </div>
        </div>
      </Box>
    </div>
  );
}

export default BatsmanName;
