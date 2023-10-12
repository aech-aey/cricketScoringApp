import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import { Button } from "@mui/material";

function ScoringCard(props) {
  return (
    <div className="scoringcard">
      <h1 style={{ color: "#307ecc", margin: "20px 0px" }}>Score Card</h1>

      <div className="scoreInings">
        <h1 style={{ color: "#307ecc", fontSize: "20px" }}>
          Team {props.secondInnings ? props.opponentTeamName : props.teamName}
        </h1>
        <h2 className="stats" style={{ fontSize: "16px" }}>
          {props.runs}-{props.totalWickets} ({props.totalOvers}.
          {props.totalBalls} / {props.overs})
        </h2>
      </div>
      <h2> Batting</h2>
      <TableContainer>
        <Table
          style={{
            backgroundColor: "black",
            margin: "20px 0px"
          }}
        >
          <TableHead
            sx={{
              backgroundColor: "#307ecc"
            }}
          >
            <TableRow>
              <TableCell className="batsmanTable hbt">Name</TableCell>
              <TableCell className="batsmanTable hbt">Runs</TableCell>
              <TableCell className="batsmanTable hbt">Balls</TableCell>
              <TableCell className="batsmanTable hbt">4s</TableCell>
              <TableCell className="batsmanTable hbt">6s</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.savedValues.map((savedValue, index) => (
              <TableRow key={index}>
                <TableCell className="batsmanTable">
                  {savedValue.savedName}
                </TableCell>
                <TableCell className="batsmanTable">
                  {savedValue.savedRuns}
                </TableCell>
                <TableCell className="batsmanTable">
                  {savedValue.savedBalls}
                </TableCell>
                <TableCell className="batsmanTable">
                  {savedValue.savedFour}
                </TableCell>
                <TableCell className="batsmanTable">
                  {savedValue.savedSix}
                </TableCell>
              </TableRow>
            ))}

            <TableRow>
              <TableCell className="batsmanTable">
                {props.playerFirstData[0].name}*
              </TableCell>
              <TableCell className="batsmanTable">
                {props.playerFirstData[0].runs}
              </TableCell>
              <TableCell className="batsmanTable">
                {props.playerFirstData[0].balls}
              </TableCell>
              <TableCell className="batsmanTable">
                {props.playerFirstData[0].four}
              </TableCell>
              <TableCell className="batsmanTable">
                {props.playerFirstData[0].six}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="batsmanTable">
                {props.playerFirstData[1].name}*
              </TableCell>
              <TableCell className="batsmanTable">
                {props.playerFirstData[1].runs}
              </TableCell>
              <TableCell className="batsmanTable">
                {props.playerFirstData[1].balls}
              </TableCell>
              <TableCell className="batsmanTable">
                {props.playerFirstData[1].four}
              </TableCell>
              <TableCell className="batsmanTable">
                {props.playerFirstData[1].six}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <h2> Bowling</h2>
      <TableContainer>
        <Table
          style={{
            backgroundColor: "black",
            margin: "20px 0px"
          }}
        >
          <TableHead
            sx={{
              backgroundColor: "#307ecc"
            }}
          >
            <TableRow>
              <TableCell className="batsmanTable hbt">Name</TableCell>
              <TableCell className="batsmanTable hbt">Overs</TableCell>
              <TableCell className="batsmanTable hbt">Runs</TableCell>
              <TableCell className="batsmanTable hbt">Wickets</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.bowlerData.map((bowler, index) => (
              <TableRow key={index}>
                <TableCell className="batsmanTable">{bowler.name}</TableCell>
                <TableCell className="batsmanTable">
                  {bowler.overs}.{bowler.balls}
                </TableCell>
                <TableCell className="batsmanTable">{bowler.runs}</TableCell>
                <TableCell className="batsmanTable">{bowler.wickets}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {props.secondInnings ? (
        <div>{props.winner()}</div>
      ) : (
        <p style={{ fontSize: "20px" }}>
          Required <span style={{ color: "#" }}>{props.runs}</span> in{" "}
          {props.overs * 6} balls
        </p>
      )}
      {props.secondInnings ? (
        <Button
          variant="contained"
          onClick={props.handleSeeAllStats}
          style={{ margin: "10px 0px" }}
        >
          See All Stats
        </Button>
      ) : (
        <Button
          variant="contained"
          onClick={props.handleSecondInnings}
          style={{ margin: "20px 0px" }}
        >
          Start Second Innings
        </Button>
      )}
    </div>
  );
}

export default ScoringCard;
