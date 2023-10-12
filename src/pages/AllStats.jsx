import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import { Button } from "@mui/material";

function AllStats(props) {
  const [showFirstInning, setShowFirstInning] = useState(true);

  const handleShowFirstInning = () => {
    setShowFirstInning(true);
  };

  const handleShowSecondInning = () => {
    setShowFirstInning(false);
  };

  return (
    <div className="scoringcard">
      <h1 style={{ color: "#307ecc", margin: "20px 0px", fontWeight: "800" }}>
        Score Card
      </h1>

      <div>{props.winner()}</div>

      <div className="showStatsInnings">
        <Button
          variant="contained"
          color="primary"
          onClick={handleShowFirstInning}
          style={{ margin: "10px" }}
        >
          First Inning Stats
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleShowSecondInning}
          style={{ margin: "10px" }}
        >
          Second Inning Stats
        </Button>
      </div>

      {showFirstInning && (
        <>
          <h2 style={{ color: "#307ecc", margin: "10px 0px" }}>First Inning</h2>
          <div className="scoreInings">
            <h1 style={{ color: "#307ecc", fontSize: "20px" }}>
              Team {props.teamName}
            </h1>
            <h2 className="stats" style={{ fontSize: "16px" }}>
              {props.firstInningData.firstInningRuns}-
              {props.firstInningData.firstInningWickets} (
              {props.firstInningData.firstInningOvers}.
              {props.firstInningData.firstInningBalls} / {props.overs})
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
                  <TableCell className="batsmanTable">Name</TableCell>
                  <TableCell className="batsmanTable">Runs</TableCell>
                  <TableCell className="batsmanTable">Balls</TableCell>
                  <TableCell className="batsmanTable">4s</TableCell>
                  <TableCell className="batsmanTable">6s</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.firstInningPlayerData.map((batsman, index) => (
                  <TableRow key={index}>
                    <TableCell className="batsmanTable">
                      {batsman.name}
                    </TableCell>
                    <TableCell className="batsmanTable">
                      {batsman.runs}
                    </TableCell>
                    <TableCell className="batsmanTable">
                      {batsman.balls}
                    </TableCell>
                    <TableCell className="batsmanTable">
                      {batsman.four}
                    </TableCell>
                    <TableCell className="batsmanTable">
                      {batsman.six}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <h2> Bowling </h2>
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
                  <TableCell className="batsmanTable">Name</TableCell>
                  <TableCell className="batsmanTable">Overs</TableCell>
                  <TableCell className="batsmanTable">Runs</TableCell>
                  <TableCell className="batsmanTable">Wickets</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.firstInningBowlerData.map((bowler, index) => (
                  <TableRow key={index}>
                    <TableCell className="batsmanTable">
                      {bowler.name}
                    </TableCell>
                    <TableCell className="batsmanTable">
                      {bowler.overs}.{bowler.balls}
                    </TableCell>
                    <TableCell className="batsmanTable">
                      {bowler.runs}
                    </TableCell>

                    <TableCell className="batsmanTable">
                      {bowler.wickets}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}

      {!showFirstInning && (
        <>
          <h2 style={{ color: "#307ecc", margin: "10px 0px" }}>
            Second Inning
          </h2>
          <div className="scoreInings">
            <h1 style={{ color: "#307ecc", fontSize: "20px" }}>
              Team {props.opponentTeamName}
            </h1>
            <h2 className="stats" style={{ fontSize: "16px" }}>
              {props.totalRuns}-{props.totalWickets} ({props.totalOvers}.
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
                  <TableCell className="batsmanTable">Name</TableCell>
                  <TableCell className="batsmanTable">Runs</TableCell>
                  <TableCell className="batsmanTable">Balls</TableCell>
                  <TableCell className="batsmanTable">4s</TableCell>
                  <TableCell className="batsmanTable">6s</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.secondInningPlayerData.map((batsman, index) => (
                  <TableRow key={index}>
                    <TableCell className="batsmanTable">
                      {batsman.name}
                    </TableCell>
                    <TableCell className="batsmanTable">
                      {batsman.runs}
                    </TableCell>
                    <TableCell className="batsmanTable">
                      {batsman.balls}
                    </TableCell>
                    <TableCell className="batsmanTable">
                      {batsman.four}
                    </TableCell>
                    <TableCell className="batsmanTable">
                      {batsman.six}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <h2> Bowling </h2>
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
                  <TableCell className="batsmanTable">Name</TableCell>
                  <TableCell className="batsmanTable">Overs</TableCell>
                  <TableCell className="batsmanTable">Runs</TableCell>
                  <TableCell className="batsmanTable">Wickets</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.secondInningBowlerData.map((bowler, index) => (
                  <TableRow key={index}>
                    <TableCell className="batsmanTable">
                      {bowler.name}
                    </TableCell>
                    <TableCell className="batsmanTable">
                      {bowler.overs}.{bowler.balls}
                    </TableCell>
                    <TableCell className="batsmanTable">
                      {bowler.runs}
                    </TableCell>

                    <TableCell className="batsmanTable">
                      {bowler.wickets}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
      {/* <Button variant="contained" onClick={props.handleStartNewMatch}>
        Start New Match
      </Button> */}
    </div>
  );
}

export default AllStats;
